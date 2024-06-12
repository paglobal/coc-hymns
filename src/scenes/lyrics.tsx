import { Node, Layout, Txt, makeScene2D } from "@motion-canvas/2d";
import {
  all,
  createRef,
  fadeTransition,
  useScene,
  waitUntil,
} from "@motion-canvas/core";

export default makeScene2D(function* (view) {
  const lyrics = useScene().variables.get("lyrics", [
    { header: "", content: "", fontSize: 80 },
  ]);
  const rootNode = createRef<Node>();
  const lyricHeader = createRef<Txt>();
  const lyricContent = createRef<Txt>();

  view.add(
    <Node ref={rootNode}>
      <Layout
        size={"90%"}
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
        gap={60}
        layout
      >
        <Txt
          fontWeight={700}
          fontSize={96}
          fill={"#EAC316"}
          fontFamily={"serif"}
          ref={lyricHeader}
        >
          {lyrics()[0].header.toUpperCase()}
        </Txt>
        <Txt
          fontSize={lyrics()[0].fontSize ?? 80}
          fill={"white"}
          fontFamily={"poppins"}
          ref={lyricContent}
          textAlign={"center"}
        >
          {lyrics()[0].content}
        </Txt>
      </Layout>
    </Node>,
  );

  yield* fadeTransition();
  yield* waitUntil("changeOver-1");
  for (let i = 1; i < lyrics().length; i++) {
    const lyric = lyrics()[i];
    yield* all(
      fadeTransition(),
      lyricHeader().children(lyric.header.toUpperCase(), 1),
      lyricContent().children(lyric.content, 1),
    );
    yield* waitUntil(`changeOver-${i + 1}`);
  }
  yield* rootNode().opacity(0, 1);
});
