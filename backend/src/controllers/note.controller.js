import Note from "../models/note.model.js";
export const getNotes = async (req, res) => {
  try {
    const userId = req.user._id;
    const notes = await Note.find({ userId }).sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    console.log("Error in getNotes controller: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const createNote = async (req, res) => {
  try {
    const userId = req.user._id;
    const { title, content, tag } = req.body;

    if (!title || !content || !tag) {
      return res.status(400).json({ message: "Fill in all the details" });
    }

    const newNote = new Note({
      userId,
      title,
      content,
      tag,
    });
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    console.log("Error in createNote controller: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, tag } = req.body;
    const userId = req.user._id;
    const note = await Note.findById(id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    if (note.userId.toString() !== userId.toString()) {
      return res.status(403).json({ message: "Unauthorized" });
    }
    if (title) note.title = title;
    if (content) note.content = content;
    if (tag) note.tag = tag;
    const updatedNote = await note.save();
    res.status(200).json(updatedNote);
  } catch (error) {
    console.log("Error in updateNote controller: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;
    const note = await Note.findById(id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    if (note.userId.toString() !== userId.toString()) {
      return res.status(403).json({ message: "Unauthorized" });
    }
    await Note.findByIdAndDelete(id);
    res.status(200).json({ success: "true" });
  } catch (error) {
    console.log("Error in deleteNote controller: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const getSingleNote = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.findById(id);
    const userId = req.user._id;
    if (note.userId.toString() !== userId.toString())
      return res.status(403).json({ message: "Unauthorized" });
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json(note);
  } catch (error) {
    console.log("Error in getSingleNote controller: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
