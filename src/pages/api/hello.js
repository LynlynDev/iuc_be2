// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import db from "../../../Api_Rest/database"
import mongose from "../../../Api_Rest/database";
import connectDatabase from "../../../Api_Rest/database";

export default function handler(req,res) {
  // db()
  connectDatabase();
  // mongoose();
  // mongoose.connect();
  res.status(200).json({ name: "John Doe" });
}
