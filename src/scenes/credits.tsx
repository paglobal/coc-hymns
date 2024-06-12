import { Layout, Txt, makeScene2D } from "@motion-canvas/2d";
import { fadeTransition, waitFor } from "@motion-canvas/core";

export default makeScene2D(function* (view) {
  view.add(
    <Layout
      size={"90%"}
      justifyContent={"center"}
      alignItems={"center"}
      direction={"column"}
      gap={60}
      layout
    >
      <Txt fontWeight={700} fontSize={80} fill={"#EAC316"} fontFamily={"serif"}>
        MADE FOR THE LORD'S CHURCH
      </Txt>
      <Txt fontSize={64} fill={"#EAC316"} fontFamily={"serif"}>
        BY
      </Txt>
      <Txt fontSize={64} fill={"#EAC316"} fontFamily={"poppins"}>
        PAUL AMOAH
      </Txt>
    </Layout>,
  );

  yield* fadeTransition();
  yield* waitFor(3);
});
