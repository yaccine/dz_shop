import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/product";

export default async function handler(req, res) {
  await mongooseConnect();
  const ids = req.body.ids;
  res.setHeader("Cache-Control");
  res.status(200).json(await Product.find({ _id: ids }));
  // res.json(await Product.find({ _id: ids }));
}
