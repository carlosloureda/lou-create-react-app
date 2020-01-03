import getTemplate from "../templates/componentTemplate";
import createFile from "../utils/createFile";

const handle = (name = "App", path = "./src/component") => {
  createFile(getTemplate(`${name}`), `${path}/${name}.js`);
};

export default handle;
