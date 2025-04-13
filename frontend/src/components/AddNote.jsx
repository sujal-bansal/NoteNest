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
    <div className="max-w-md mx-auto my-6 p-6 bg-white shadow-md rounded">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Content
          </label>
          <input
            type="text"
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Tag */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Tag</label>
          <input
            type="text"
            value={formData.tag}
            onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddNote;
