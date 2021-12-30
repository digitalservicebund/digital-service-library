import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import svg from "rollup-plugin-svg";
import { terser } from "rollup-plugin-terser";

const packageJson = require("./package.json");
const isProduction = process.env.NODE_ENV === "production";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      svg(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        config: {
          path: "./postcss.config.js",
        },
        extensions: [".css"],
        extract: true,
        minimize: isProduction,
        // modules: true,
        inject: {
          insertAt: "top",
        },
      }),
      isProduction && terser(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
  {
    input: "tailwind.config.js",
    output: [{ file: "dist/tailwind.config.js" }],
  },
  {
    input: "version.js",
    output: [{ file: "dist/version.js" }],
  },
];
