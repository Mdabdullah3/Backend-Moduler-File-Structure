import { IBooks } from './user.interface';
import mongoose, { Schema, model, Model } from "mongoose";

// Create Schema and Model  For Follwing Code 

// Example For Schema 
const bookSchema = new Schema<IBooks>({
  title: { type: String, required: true },
  author: { type: [String], required: true },
  genre: { type: String, required: true },
  publicationYear: { type: Number, required: true },
  publisher: {
    name: { type: String, required: true },
    location: { type: String, required: true },
  },
  reviews: [
    {
      user: { type: String, required: true },
      comment: { type: String, required: true },
    },
  ],
  rating: { type: Number, required: true },
  price: { type: Number, required: true },
});


// Example For Model 
const Books: Model<IBooks> = model<IBooks>("Books", bookSchema);
export default Books;