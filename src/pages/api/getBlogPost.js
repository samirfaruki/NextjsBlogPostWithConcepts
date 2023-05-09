import * as fs from "fs";

// import Slug from "../blogpost/[slug]";

export default function handler(req, res) {
  console.log(req.query);
  fs.readFile(`blogdata/${req.query.slug}.json`, "utf-8", (err, result) => {
    console.log(req.query.slug);

    if (err) {
      res.status(500).send("blog not found ");
    }
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(result);
  });
}
