import React, { useState } from "react";
import { useNoteStore } from "../store/NoteStore";

function UpdateNote({ data, onCancel }) {
  const { updateNote } = useNoteStore();
  const [formData, setFormData] = useState(data);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.title || !formData.content || !formData.tag) {
      toast.error("Please fill all fields");
      setIsSubmitting(false);
      return;
    }

    const success = await updateNote(data._id, formData);
    setIsSubmitting(false);

    if (success) {
      onCancel();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </div>
        <div>
          <label>Content:</label>
          <input
            type="text"
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
          />
        </div>
        <div>
          <label>Tag:</label>
          <input
            type="text"
            value={formData.tag}
            onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
          />
        </div>
        <div>
          <button type="button" onClick={onCancel} disabled={isSubmitting}>
            Cancel
          </button>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateNote;
