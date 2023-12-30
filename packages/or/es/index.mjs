import * as o from "./src/index.mjs";
import { Icon as i } from "./src/icon/index.mjs";
import { Button as x } from "./src/button/index.mjs";
const r = {
  install: (t) => {
    for (let e in o)
      t.use(o[e]);
  }
};
export {
  x as Button,
  i as Icon,
  r as default
};
