import { IBooks } from "./interface";
import Books from "./model";
import BookModel from "./model"; 
// Create database query For Follwing Code 

// Example For Database Query 
async function getBooksByGenre(genre: string): Promise<IBooks[]> {
  const books = await Books.find({ genre });
  return books;
}
export default getBooksByGenre;