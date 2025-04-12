import { create } from "zustand";
import { api } from "../lib/axios";
import toast from "react-hot-toast";

export const useNoteStore = create((set, get) => ({
  isNoteLoading: false,
  notes: [],

  getNotes: async () => {
    set({ isLoading: true });
    try {
      const res = await api.get("/notes");
      set({ notes: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isLoading: false });
    }
  },
  createNote: async (data) => {
    const { notes } = get();
    try {
      const res = await api.post("/notes", data);
      set({ notes: [...notes, res.data] });
      toast.success("Note Created Successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
  updateNote: async (noteId, data) => {
    const { notes } = get();
    try {
      const res = await api.put(`/notes/${noteId}`, data);
      const updatedNotes = notes.map((note) =>
        note._id === noteId ? res.data : note
      );
      set({ notes: updatedNotes });
      toast.success("Note Updated Successfully");
      return true;
    } catch (error) {
      toast.error(error.response.data.message);
      return false;
    }
  },
  deleteNote: async (noteId) => {
    const { notes } = get();
    try {
      const res = await api.delete(`/notes/${noteId}`);
      set({ notes: notes.filter((note) => note._id !== noteId) });
      toast.success("Note Deleted Successfully");
      return true;
    } catch (error) {
      toast.error(error.response.data.message || "Failed to delete note");
      return false;
    }
  },
}));
