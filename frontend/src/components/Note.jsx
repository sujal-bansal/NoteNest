import React, { useState } from "react";
import { useNoteStore } from "../store/NoteStore";
import UpdateNote from "./UpdateNote";

function Note({ data }) {
  const { deleteNote } = useNoteStore();
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      setIsDeleting(true);
      await deleteNote(data._id);
      setIsDeleting(false);
    }
  };
  if (isEditing) {
    return (
      <div className="bg-white shadow p-4 rounded">
        <UpdateNote data={data} onCancel={() => setIsEditing(false)} />
      </div>
    );
  }

  return (
    <div className="bg-white shadow-md rounded p-4 space-y-2">
      <div className="text-gray-400 text-xs">Note ID: {data._id}</div>

      <div>
        <p className="text-lg font-semibold">Title: {data.title}</p>
      </div>

      <div>
        <p className="text-gray-700">Content: {data.content}</p>
      </div>

      <div>
        <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded">
          #{data.tag}
        </span>
      </div>

      <div className="text-xs text-gray-400">Created at: {data.createdAt}</div>

      <div className="flex justify-end gap-2 mt-3">
        <button
          onClick={() => setIsEditing(true)}
          className="text-sm bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          disabled={isDeleting}
          className={`text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 ${
            isDeleting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isDeleting ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  );
}

export default Note;
