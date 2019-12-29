import babel from "rollup-plugin-babel";
import copy from "rollup-plugin-copy-glob";
import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";

import babelOptions from "./babel.config.esm.js";

const dest = "dist";
const filename =
  process.env.NODE_ENV === "dev"
    ? `${dest}/pageload.js`
    : `lib/pageload.min.js`;

export default [
  {
    input: ["src/index.js"],
    output: {
      file: filename,
      format: "esm"
    },
    plugins: [
      babel(babelOptions),
      json(),
      process.env.NODE_ENV === "pro" ? terser() : undefined,
      copy(
        [
          { files: "src/index.{html,css}", dest },
          { files: "src/*.{md,mp3}", dest }
        ],
        {
          verbose: true,
          watch: process.env.NODE_ENV === "dev"
        }
      )
    ]
  }
];
