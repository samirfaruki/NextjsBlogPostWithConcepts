// const data = require('../../../blogdata/howToLearn.json');

// module.exports = (req, res) => {

//   const jsonData = JSON.stringify(data);
//   res.setHeader('Content-Type', 'application/json');
//   res.status(200).send(jsonData);
// };

import * as fs from "fs";

module.exports = (req, res) => {
  console.log(req.query);
  console.log(req.query.slug);
  fs.readFile(`blogdata/howToLearn.json`, "utf-8", (err, result) => {
    if (err) throw err;
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(result);
  });
};
