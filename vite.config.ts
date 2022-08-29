import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import pkg from "./package.json";
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: "src/main.tsx",
      output: {
        format: "esm",
        dir: "dist",
      },
      plugins: [
        federation({
          filename: "remoteEntry.js",
          exposes: {
            "./network-info": "./src/network-info/index.tsx",
          },
          shared: [
            {
              react: {
                requiredVersion: pkg.dependencies["react-dom"],
                singleton: true,
              },
              "react-dom": {
                requiredVersion: pkg.dependencies["react-dom"],
                singleton: true,
              },
            },
          ],
        }),
      ],
    },
  },
  plugins: [
    react(),
    // federation({
    //   name: "remote-api-components",
    //   mode:
    //   filename: "remoteEntry.js",
    //   exposes: {
    //     "./network-info": "./src/network-info/index.tsx",
    //   },
    //   shared: [
    //     {
    //       ...pckg.dependencies,
    //       react: {
    //         singleton: true,
    //         requiredVersion: pckg.dependencies["react"],
    //       },
    //       "react-dom": {
    //         singleton: true,
    //         requiredVersion: pckg.dependencies["react-dom"],
    //       },
    //     },
    //   ],
    // }),
  ],

  base: "/remote-apis-components/",
});
