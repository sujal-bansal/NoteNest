import React, { useEffect } from "react";
import { useNoteStore } from "../store/NoteStore";
import Note from "../components/Note";
import AddNote from "../components/AddNote";

function HomePage() {
  const { isNoteLoading, getNotes, notes } = useNoteStore();
  console.log(notes);

  useEffect(() => {
    getNotes();
  }, [getNotes]);

  return (
    <div className="space-y-6">
      <div className="bg-white shadow p-4 rounded">
        <AddNote />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {notes.map((note) => (
          <Note key={note._id} data={note} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
