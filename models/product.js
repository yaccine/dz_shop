import mongoose, { model, models, Schema } from "mongoose";

const ProductSchema = new Schema({
  title: { type: String, require: true },
  description: String,
  price: { type: Number, require: true },
  image: [
    {
      id: { type: String, require: true },
      links: [{ type: String, require: true }],
    },
  ],
  category: { type: mongoose.Types.ObjectId, ref: "Category", require: true },
  propreties: { type: Object },
});
export const Product = models.Product || model("Product", ProductSchema);
