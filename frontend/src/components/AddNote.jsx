import React, { useState } from "react";
import { useNoteStore } from "../store/NoteStore";

function AddNote() {
  const initialFormData = { title: "", content: "", tag: "" };
  const { createNote } = useNoteStore();
  const [formData, setFormData] = useState(initialFormData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await createNote(formData);
    setFormData(initialFormData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title :</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => {
              setFormData({ ...formData, title: e.target.value });
            }}
          />
        </div>
        <div>
          <label>Content :</label>
          <input
            type="text"
            value={formData.content}
            onChange={(e) => {
              setFormData({ ...formData, content: e.target.value });
            }}
          />
        </div>
        <div>
          <label>Tag :</label>
          <input
            type="text"
            value={formData.tag}
            onChange={(e) => {
              setFormData({ ...formData, tag: e.target.value });
            }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddNote;
