import fs from "fs";
const readFile = (path) => {
  return new Promise((res, rej) => {
    fs.readFile(path, "utf-8", (err, data) => {
      if (err) return rej(console.log(err));
      res(data);
    });
  });
};
const writeFile = (path,data) => {
 return  new Promise((res, rej) => {
    fs.writeFile(path, data, (err) => {
      if (err) return rej(console.log(err));
      res("success");
    });
  });
};
const appendFile = (path,data) => {
 return new Promise((res, rej) => {
    fs.appendFile(path, data, (err) => {
      if (err) return rej(console.log(err));
      res("success");
    });
  });
};
export {readFile,writeFile,appendFile}

