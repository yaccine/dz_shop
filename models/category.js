import mongoose, { model, models, Schema } from "mongoose";

const CategorySchema = new Schema({
  name: { type: String, required: true },
  parentCategory: {
    type: String,
    required: false,
  },
});
export const Category = models.Category || model("Category", CategorySchema);
