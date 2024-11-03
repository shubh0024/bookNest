import Book from "../model/book.model.js";

export const getBook = async(req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book);
  } catch (err) {
    console.log("Error:",err)
    res.status(500).json({ message: "Book not found", error: err });
  }
};
