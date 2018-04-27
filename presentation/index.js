// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  Image,
  Quote,
  Slide,
  Text,
  Link,
  Code,
  S
} from "spectacle";

import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const images = {
  squash: require("../assets/squash.png"),
  npm: require("../assets/npm.png"),
  commitlog: require("../assets/commitlog.png"),
  commitizen: require("../assets/commitizen.png"),
  commitlint: require("../assets/commitlint.svg"),
  semanticreleasecli: require("../assets/semantic-release-cli.png"),
  me: require("../assets/me.png"),
  publishing: require("../assets/publishing.png"),
  mergedpr: require("../assets/mergedpr.png"),
  merging: require("../assets/merging.png")
};

preloader(images);

const theme = createTheme({
  primary: "#0F4C5C", //teal
  teal: "#0F4C5C", //teal
  orange: "#E76F51", //orange
  blue: "#4ECDC4", //bright blue
  dark: "#292F36", //dark
  white: "#eee" //white
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={500} theme={theme}>
        <Slide notes="Technology, design, workflow, community">
          <Heading textColor="blue" size={1} caps bold>
            Front end development
          </Heading>
          <br/>
          <Heading size={2} lineHeight={1} textColor="white">
            @SEEK
          </Heading>
          <Heading margin="0.6em 0 -1.3em">
            🚀 📦
          </Heading>
        </Slide>

        <Slide bgColor="blue" notes="How to deliver cohesive experiences?">
          <Heading size={4} textColor="dark" lineHeight={1.3}>
            Challenge:
          </Heading>
          <br/>
          <Heading size={3} textColor="white">
            &ldquo;Vertical products,<br/>horizontal experiences&rdquo;
          </Heading>
        </Slide>

        <Slide bgColor="dark">
          <Text textAlign="left" textColor="white">— Designed</Text>
          <Appear><Text textAlign="left" textColor="white">— Responsive</Text></Appear>
          <Appear><Text textAlign="left" textColor="white">— Accesible</Text></Appear>
          <Appear><Text textAlign="left" textColor="white">— Progressively Enhanced</Text></Appear>
          <Appear><Text textAlign="left" textColor="white">— Sketch files</Text></Appear>
        </Slide>

        <Slide bgColor="blue" notes="(click through to demo)">
          <Heading textColor="dark" lineHeight={1.3}>
            Design system
          </Heading>
          <Text>
            <Link target="style-guide" textColor="white" href="https://seek-oss.github.io/seek-style-guide">
              seek-oss.github.io/seek-style-guide
            </Link>
          </Text>
        </Slide>

        <Slide bgColor="dark" notes="shifting thinking">
          <Heading textColor="blue" size={3} lineHeight={1.3}>
            Component-based
          </Heading>
          <Text textColor="white">
            How can a component take care of it's own dependencies?
          </Text>
        </Slide>

        <Slide>
          <Code style={{ fontSize: "1.5em" }} textColor="white">
            import styles from './myComponent.less';
          </Code>
        </Slide>

        <Slide bgColor="blue">
          <Heading textColor="dark" lineHeight={1.3}>
            Tooling
          </Heading>
        </Slide>

        <Slide bgColor="dark">
          <Text textAlign="left" textColor="white">— Bundlers</Text>
          <Appear><Text textAlign="left" textColor="white">— Transpilation</Text></Appear>
          <Appear><Text textAlign="left" textColor="white">— Preprocessors</Text></Appear>
          <Appear><Text textAlign="left" textColor="white">— Development environment</Text></Appear>
          <Appear><Text textAlign="left" textColor="white">— Testing & Linting practices</Text></Appear>
          <Appear><Text textAlign="left" textColor="white">— Optimizations</Text></Appear>
          <Appear><Text textAlign="left" textColor="white">— Static site generation</Text></Appear>
        </Slide>

        <Slide bgColor="blue" notes="(click to repo, then init demo)">
          <Heading textColor="dark" lineHeight={1.3}>
            SKU
          </Heading>
          <Text>
            <Link target="sku" textColor="white" href="https://github.com/seek-oss/sku">
              github.com/seek-oss/sku
            </Link>
          </Text>
        </Slide>

        <Slide bgColor="dark">
          <Heading textColor="white" size={3} lineHeight={1.3}>
            Solve <S type="underline" bold textColor="blue">real</S> user problems faster
          </Heading>
        </Slide>

        <Slide bgColor="blue">
          <Heading textColor="dark" lineHeight={1.3}>
            Modules
          </Heading>
          <Text textColor="white">
            Going beyond the visuals
          </Text>
        </Slide>

        <Slide bgColor="dark">
          <Text textAlign="left" textColor="white">— HTTP client</Text>
          <Appear><Text textAlign="left" textColor="white">— Token resolution</Text></Appear>
          <Appear><Text textAlign="left" textColor="white">— Metrics</Text></Appear>
          <Appear><Text textAlign="left" textColor="white">— Logging</Text></Appear>
          <Appear><Text textAlign="left" textColor="white">— Business Logic</Text></Appear>
        </Slide>

        <Slide bgColor="dark" notes="more we do this">
          <Heading textColor="white" size={3} lineHeight={1.3}>
            <S type="underline" bold textColor="blue">Future proofing</S> our applications
          </Heading>
        </Slide>

        <Slide bgColor="blue">
          <Heading textColor="dark" lineHeight={1.3}>
            Distribution
          </Heading>
          <Text>
            <Link target="seek" textColor="white" href="https://npmjs.com/org/seek">
              npmjs.com/org/seek
            </Link>
          </Text>
        </Slide>

        <Slide bgColor="dark" notes="...raises some challenges for our standard CD">
          <Text textColor="white" size={3} lineHeight={1.3}>
            75 scoped packages, 91 users
          </Text>
        </Slide>

        <Slide bgColor="blue" notes="... but when it comes to publishing">
          <Heading textColor="dark" lineHeight={1.3}>
            Workflow
          </Heading>
          <Text textColor="white">
            Branch <S type="bold" textColor="dark">>></S> PR <S type="bold" textColor="dark">>></S> Merge <S type="bold" textColor="dark">>></S> Release
          </Text>
        </Slide>

        <Slide bgColor="dark">
          <Text textAlign="left" textColor="white">— Building</Text>
          <Appear><Text textAlign="left" textColor="white">— Versioning</Text></Appear>
          <Appear><Text textAlign="left" textColor="white">— Release notes</Text></Appear>
          <Appear><Text textAlign="left" textColor="white">— Communication</Text></Appear>
        </Slide>

        <Slide bgColor="blue">
          <Heading size={4} textColor="dark" lineHeight={1.3}>
            Challenge:
          </Heading>
          <br/>
          <Heading size={3} textColor="white">
            &ldquo;How can we reduce friction to contribution?&rdquo;
          </Heading>
        </Slide>

        <Slide bgColor="dark" notes="Looked to the open source world for inspiration<br/><br/><br/>demo">
          <Heading bold={false} textColor="blue" size="6" lineHeight={1.7}>
            Branch<br />
            <Link target="commits" textColor="white" href="https://github.com/seek-oss/seek-style-guide/commits/master">
              <S type="italic" textColor="orange">Commit</S>
            </Link><br />
            PR<br />
            <Link target="pullapprove" textColor="white" href="https://github.com/seek-oss/seek-style-guide/pull/477">
              <S type="italic" textColor="orange">Community approvals</S>
            </Link><br />
            Merge<br />
            <Link target="github" textColor="white" href="https://github.com/SEEK-Jobs/metrics-js/releases">
              <S type="italic" textColor="orange">Release notes</S>
            </Link><br />
            Publish<br />
            <Link target="renovate" textColor="white" href="https://github.com/SEEK-Jobs/chalice/pull/3400">
              <S type="italic" textColor="orange">Communicate</S>
            </Link>
          </Heading>
        </Slide>

        <Slide bgColor="blue">
          <Heading textColor="dark" lineHeight={1.3}>
            Community
          </Heading>
          <Text>
            <Link target="feed" textColor="white" href="https://seekchat.slack.com/messages/feed">
              seekchat.slack.com/messages/feed/
            </Link>
          </Text>
        </Slide>

        <Slide bgColor="blue">
          <Heading fit caps textColor="dark">
            Welcome & thank you!
          </Heading>
          <br/>
          <Heading textColor="white">
            #feed
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
