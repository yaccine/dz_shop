import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/category";

export default async function handler(req, res) {
  await mongooseConnect();
  const ids = req.body.ids;
  res.setHeader("Cache-Control");
  res.status(200).json(await Category.find({ _id: ids }));
  // res.json(await Category.find({ _id: ids }));
}
