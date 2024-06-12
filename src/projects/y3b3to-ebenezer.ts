import { makeProject } from "@motion-canvas/core";
import intro from "../scenes/intro?scene";
import lyrics from "../scenes/lyrics?scene";
import audio from "../../audio/y3b3 tu ebenezer.mp3";
import credits from "../scenes/credits?scene";

export default makeProject({
  scenes: [intro, lyrics, credits],
  audio,
  variables: {
    title: "YƐbƐto Ebenezer",
    hymnNumber: "Ayeyie Nnwom: 37",
    lyrics: [
      {
        header: "Pre-Chorus",
        content: `(Yɛbɛto) Ebenezer,
Nyame n'adom ara kwa
Kae deɛ Onyame ayɛ ama wo
Na fa naase ma no
(Yɛbɛto) Ebenezer,
Nyame n'adom ara kwa
Kae deɛ Onyame ayɛ ama wo
Na fa naase ma no
`,
      },
      {
        header: "Chorus",
        content: `Ebe-ne-zer
Nyame n'adom ara kwa
Kae deɛ Onyame ayɛ ama wo
`,
      },
    ],
  },
});
