import { defineConfig } from "vite";
import motionCanvas from "@motion-canvas/vite-plugin";
import ffmpeg from "@motion-canvas/ffmpeg";

export default defineConfig({
  server: { open: true },
  plugins: [
    motionCanvas({
      project: [
        "./src/projects/y3b3to-ebenezer.ts",
        "./src/projects/3da-yehowa-ne.ts",
      ],
    }),
    ffmpeg(),
  ],
});
