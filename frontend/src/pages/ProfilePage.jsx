import React, { useEffect } from "react";
import { useAuthStore } from "../store/AuthStore";

function ProfilePage() {
  const { user, profile, authUser } = useAuthStore();
  console.log(authUser);
  useEffect(() => {
    console.log("User state updated:", user);
  }, [user]);

  useEffect(() => {
    console.log("Auth user updated:", authUser);
  }, [authUser]);
  useEffect(() => {
    profile(authUser.user._id);
  }, [profile]);
  console.log(user);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Profile Info
        </h2>

        <div>
          <label className="block text-sm font-medium text-gray-600">
            Username:
          </label>
          <p className="text-gray-800 font-medium">{user?.user?.username}</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">
            Email:
          </label>
          <p className="text-gray-800 font-medium">{user?.user?.email}</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">
            Bio:
          </label>
          <p className="text-gray-800 font-medium">
            {user?.user?.Bio || "No bio available"}
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">
            Created At:
          </label>
          <p className="text-gray-800 font-medium">{user?.user?.createdAt}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
