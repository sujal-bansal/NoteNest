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
    <div>
      <div>
        <AddNote />
      </div>

      <div>
        {notes.map((note) => (
          <Note key={note._id} data={note} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
