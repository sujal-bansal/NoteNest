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

  return (
    <div>
      {isEditing ? (
        <UpdateNote data={data} onCancel={() => setIsEditing(false)} />
      ) : (
        <div>
          <div>NoteId: {data._id}</div>
          <div>
            <p>Title: {data.title}</p>
          </div>
          <div>
            <p>Content: {data.content}</p>
          </div>
          <div>
            <p>Tag: {data.tag}</p>
          </div>
          <div>
            <p>createdAt: {data.createdAt}</p>
          </div>
          <div>
            <button onClick={() => setIsEditing(true)}>Edit</button>
          </div>
          <div>
            <button onClick={handleDelete} disabled={isDeleting}>
              {isDeleting ? "Deleting..." : "Delete"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Note;
