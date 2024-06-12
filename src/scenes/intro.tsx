import { Rect, Txt, Node, makeScene2D } from "@motion-canvas/2d";
import {
  createRef,
  fadeTransition,
  useScene,
  waitFor,
} from "@motion-canvas/core";

export default makeScene2D(function* (view) {
  const title = useScene().variables.get("title", "");
  const hymnNumber = useScene().variables.get("hymnNumber", "");
  const textContainer = createRef<Rect>();
  const titleText = createRef<Txt>();
  const hymnNumberText = createRef<Txt>();
  const rootNode = createRef<Node>();

  view.add(
    <Rect ref={rootNode} size={"100%"} fill={"#2572B6"}>
      <Rect
        ref={textContainer}
        size={"80%"}
        stroke={"white"}
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
        gap={60}
        layout
      >
        <Txt
          ref={titleText}
          fontWeight={700}
          fontSize={96}
          opacity={0}
          fill={"white"}
          fontFamily={"serif"}
        >
          {title().toUpperCase()}
        </Txt>
        <Txt
          ref={hymnNumberText}
          fontSize={80}
          opacity={0}
          fill={"white"}
          fontFamily={"poppins"}
        >
          {hymnNumber().toUpperCase()}
        </Txt>
      </Rect>
    </Rect>,
  );

  yield* fadeTransition();
  yield* textContainer().lineWidth(10, 0.5);
  yield* titleText().opacity(1, 0.5);
  yield* hymnNumberText().opacity(1, 0.5);
  yield* waitFor(1);
  yield* rootNode().opacity(0, 0.5);
});
