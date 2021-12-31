import babel from "rollup-plugin-babel";
import { uglify } from "rollup-plugin-uglify";
import info from "../package.json";
const needUglify = process.argv.includes("--uglify");
export default {
  input: "src/index.ts",
  output: [
    {
      file: "throttle.js",
      format: "umd",
      name: "throttle",
      banner: "/* @lllllxt/debounce version " + info.version + ", follow me on Github! @lllllxt */",
    },
  ],
  plugins: [
    babel({
      extensions: [".js", ".ts"],
    }),
    needUglify &&
      uglify({
        output: {
          comments: function (node, comment) {
            return comment.value.indexOf("@lllllxt") >= 0;
          },
        },
      }),
  ],
};
