import * as fs from "fs";

export default async function handler(req, res) {
  try {
    const result = await fs.promises.readdir("blogdata", "utf-8");
    const allBlogs = [];
    for (let index = 0; index < result.length; index++) {
      const filename = result[index];
      const filePath = `blogdata/${filename}`; // assuming files are in the blogdata directory
      const fileContent = await fs.promises.readFile(filePath, "utf-8");
      const blogObject = {
        filename: filename,
        content: fileContent,
      };
      allBlogs.push(blogObject);
    }
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(allBlogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to read directory" });
  }
}
