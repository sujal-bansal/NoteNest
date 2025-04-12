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
    <div>
      <div>
        <label>Username :</label>
        <p>{user?.user?.username}</p>
      </div>
      <div>
        <label>Email :</label>
        <p>{user?.user?.email}</p>
      </div>
      <div>
        <label>Bio :</label>
        <p>{user?.user?.Bio}</p>
      </div>
      <div>
        <label>createdAt :</label>
        <p>{user?.user?.createdAt}</p>
      </div>
    </div>
  );
}

export default ProfilePage;
