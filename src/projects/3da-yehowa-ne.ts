import { makeProject } from "@motion-canvas/core";
import intro from "../scenes/intro?scene";
import lyrics from "../scenes/lyrics?scene";
import audio from "../../audio/3da yehowa.wav";
import credits from "../scenes/credits?scene";

export default makeProject({
  scenes: [intro, lyrics, credits],
  audio,
  variables: {
    title: "ƐDA YƐHOWA NE ",
    hymnNumber: "Ayeyie Nnwom: 8",
    lyrics: [
      {
        header: "Pre-Chorus",
        content: `Ɛda Yehowa ne ne mma no,
Bɛtwa Ɛpo no.
Ahurisie bɛba Israel,
O Israel ani bɛgye`,
      },
      {
        header: "Chorus",
        content: `(Na mese halleluya)
Da no na Israel ani bɛgye,
Da no na Israel ani bɛgye
Ahurisie bɛba Israel,
O Israel ani bɛgye.
`,
      },
    ],
  },
});
