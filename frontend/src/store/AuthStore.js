import { create } from "zustand";
import { api } from "../lib/axios.js";
import toast from "react-hot-toast";

export const useAuthStore = create((set, get) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,
  isLoading: false,
  user: null,

  checkAuth: async () => {
    try {
      const res = await api.get("/auth/check");
      set({ authUser: res.data });
    } catch (error) {
      toast.error("Error in checkAuth ");
      toast.error(error.response.data.message);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  login: async (data) => {
    set({ isLoggingIn: true });
    console.time("Request Time");
    try {
      const res = await api.post("/auth/login", data);
      set({ authUser: res.data });
      toast.success("Logged In Successfully");
      console.timeEnd("Request Time");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logout: async () => {
    try {
      const res = await api.post("/auth/logout");
      set({ authUser: null });
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },

  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await api.post("/auth/signup", data);
      set({ authUser: res.data });
      toast.success("Signed Up Successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isSigningUp: false });
    }
  },

  profile: async (userId) => {
    set({ isLoading: true });
    console.time("Request Time");
    try {
      const res = await api.get(`/auth/profile/${userId}`);
      set({ user: res.data });
      console.timeEnd("Request Time");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isLoading: false });
    }
  },
}));
