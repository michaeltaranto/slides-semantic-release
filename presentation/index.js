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
        <Slide notes="Leveraged semantic-release and other OSS to create a CD workflow around our npm modules">
          <Text textColor="orange" size={1} fit caps bold>
            Continuous package delivery
          </Text>
          <Text margin=".3em 0 .5em" textColor="blue" size={3} italic>
            with
          </Text>
          <Heading size={1} fit lineHeight={1} textColor="white">
            semantic-release
          </Heading>
          <Heading margin="1em 0 -1.3em">
            🚀 📦
          </Heading>
        </Slide>

        <Slide bgColor="blue" notes="Goal across SEEK... break down the monolith">
          <Heading size={3} textColor="dark">Modularise and continuously deliver</Heading>
        </Slide>

        <Slide notes="...for reasons that we wont go into">
          <Heading>Migrate to Github & NPM</Heading>
          <Text textColor="blue" style={{ fontSize: ".5em" }}>(stuck with TeamCity)</Text>
        </Slide>

        <Slide notes="...TC forgiveable given...">
          <Heading>Better <S type="bold" textColor="orange">alignment with OSS</S> workflow</Heading>
        </Slide>

        <Slide notes="our workflow OSS-like" bgColor="dark">
          <Text textAlign="left" textColor="white">— Create feature branch</Text>
          <Appear><Text textAlign="left" textColor="white">— Commit changes</Text></Appear>
          <Appear><Text textAlign="left" textColor="white">— Push branch</Text></Appear>
          <Appear><Text textAlign="left" textColor="white">— Create a PR</Text></Appear>
          <Appear><Text textAlign="left" textColor="white">— Approve</Text></Appear>
          <Appear><Text textAlign="left" textColor="white">— Merge</Text></Appear>
        </Slide>

        <Slide notes="That merge is a...">
          <Image src={images.squash.replace("/", "")} />
        </Slide>

        <Slide notes="Results in clean history, single atomic commits, easy reverts"
          transition={["fade"]}
          bgImage={images.commitlog.replace("/", "")}
          bgSize="80%"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgColor="#fff"
        />

        <Slide notes="it has worked for us">
          <Heading textColor="white">Continuously<br />deliver<br /><S type="bold" textColor="orange" bold>apps & apis</S></Heading>
        </Slide>

        <Slide notes="...where is CD?">
          <Heading textColor="white">What about our smaller <S type="bold" textColor="orange" bold>libraries</S>?</Heading>
        </Slide>

        <Slide bgColor="blue" notes="afterall...">
          <Image src={images.npm.replace("/", "")} margin="0px auto 40px" />
          <Text caps textColor="dark">is production too</Text>
        </Slide>

        <Slide notes="Its growing, Our architecture is driving ever increasing use of npm">
          <Heading size={2} fit textColor="blue">npmjs.com/org/seek</Heading>
          <br/>
          <Text textColor="white">59 scoped packages, 67 users</Text>
          <br />
          <Appear><Text textColor="orange" style={{ marginBottom: "-2em" }}>Publishing is becoming more critical</Text></Appear>
        </Slide>

        <Slide notes="When publishing...">
          <Heading textColor="white">How do you decide <S type="bold" textColor="orange" bold>what version</S>?</Heading>
        </Slide>

        <Slide notes="once you have decided...">
          <Heading textColor="white">How do <S type="bold" textColor="orange" bold>you</S> version?</Heading>
        </Slide>

        <Slide notes="Who here manually change package.json?">
          <CodePane
            lang="json"
            textSize="1em"
            source={`
  {
    "name": "my-package",
    "version": "1.14.2",
    ...
  }
            `}
          />
        </Slide>

        <Slide notes="Use the built in npm command? seen enough of both to know">
          <Code textColor="white">npm version minor</Code>
        </Slide>

        <Slide notes="...which we documented">
          <Text textColor="blue">Best practice would suggest</Text>
          <br/>
          <Code textColor="white">npm version &lt;type&gt;</Code>
          <br/>
          <br/>
          <Text textColor="orange" style={{ fontSize: "1em" }}>Without automation mistakes can still be made</Text>
        </Slide>

        <Slide notes="After the feature merged, PR the version bump">
          <Text textAlign="left" textColor="white">— Create version bump branch</Text>
          <Appear><Text textAlign="left" textColor="white">— npm version &lt;type&gt;</Text></Appear>
          <Appear>
            <div>
              <Text textAlign="left" textColor="orange">— Commit changes</Text>
              <Text textAlign="left" textColor="orange">— Push branch</Text>
              <Text textAlign="left" textColor="orange">— Create a PR</Text>
              <Text textAlign="left" textColor="orange">— Approve</Text>
              <Text textAlign="left" textColor="orange">— Merge</Text>
            </div>
          </Appear>
          <Appear><Text textAlign="left" textColor="white">— Pull</Text></Appear>
          <Appear><Text textAlign="left" textColor="white">— Install</Text></Appear>
          <Appear><Text textAlign="left" textColor="white">— Build</Text></Appear>
          <Appear><Text textAlign="left" textColor="white">— Publish</Text></Appear>
        </Slide>

        <Slide bgColor="orange" notes="Forget to build? push after version? push tags? new user without permissions?" >
          <Heading size={3} textColor="dark">What could possibly go wrong?</Heading>
        </Slide>

        <Slide notes="Collaboration and working with growing teams are the norm">
          <Heading fit textColor="white"><S type="bold" textColor="orange">Solved problem</S> in OSS-land</Heading>
          <br />
          <Heading textColor="dark">🙌</Heading>
        </Slide>

        <Slide bgColor="blue">
          <Heading fit textColor="dark">semantic-release</Heading>
          <br />
          <Heading textColor="dark">🚀 📦</Heading>
        </Slide>

        <Slide>
          <Text fit textColor="white">Leverages commit conventions to bring continuous delivery to npm</Text>
          <br/>
          <Code style={{ fontSize: "1.1em" }} textColor="orange">npm install semantic-release --save-dev</Code>
        </Slide>

        <Slide notes="firstly">
          <Heading size={4} textColor="white">Remove your version from source control</Heading>
          <br />
          <CodePane
            lang="json"
            textSize=".6em"
            source={`
  {
    "version": "0.0.0-development"
  }
            `}
          />
          <br />
          <Text textColor="blue" style={{ fontSize: ".6em" }} italic>`version` only lives in npm and your git tags</Text>
        </Slide>

        <Slide notes="PRs focus on the features">
          <Heading fit>Github = source code</Heading>
          <Heading fit>NPM = versions</Heading>
        </Slide>

        <Slide notes="Immediately reduced friction by removing our version bump PRs">
          <Heading>Leaves PRs to focus on <S type="bold" textColor="orange">features</S></Heading>
        </Slide>

        <Slide notes="">
          <Heading size={4} textColor="white">Setup the npm script</Heading>
          <br />
          <CodePane
            lang="json"
            textSize=".6em"
            className="valueFix"
            source={`
  {
    "scripts": {
      "semantic-release": "semantic-release pre &&
                           npm publish &&
                           semantic-release post"
    }
  }
            `}
          />
        </Slide>

        <Slide>
          <Heading size={4} textColor="blue">How it works:</Heading>
          <Appear><Text textColor="white">— Get last commit published to npm</Text></Appear>
          <Appear><Text textColor="white">— Walk commits from there to HEAD</Text></Appear>
          <Appear><Text textColor="white">— Determines versions for next release</Text></Appear>
          <Appear><Text textColor="white">— Publishes to npm</Text></Appear>
          <Appear><Text textColor="white">— Push tags to Github</Text></Appear>
          <Appear><Text textColor="white">— Publishes changelog to Github</Text></Appear>
        </Slide>

        <Slide notes="Critical part is the convention">
          <Heading size={3} textColor="white">Uses the <S type="bold" textColor="orange">AngularJS</S> convention by default</Heading>
        </Slide>

        <Slide notes="types = version, scopes = changelog">
          <Text textAlign="left" textColor="white">
            type(scope?): subject<br />
          </Text>
          <br />
          <Text textAlign="left" textColor="white">
            body<br />
          </Text>
          <br />
          <Text textAlign="left" textColor="white">
            footer<br />
          </Text>
        </Slide>

        <Slide bgColor="blue" notes="determine the version">
          <Text textColor="dark">
            feat<br />
            fix<br />
            docs<br />
            style<br />
            refactor<br />
            perf<br />
            test<br />
            build<br />
            ci<br />
            chore<br />
            revert<br />
          </Text>
        </Slide>

        <Slide transition={[() => {}]} bgColor="blue" notes="highlight which cut versions">
          <Text textColor="dark">
            <S type="bold" textColor="white" style={{ fontWeight: "normal" }}>feat</S><br />
            <S type="bold" textColor="white" style={{ fontWeight: "normal" }}>fix</S><br />
            docs<br />
            style<br />
            refactor<br />
            <S type="bold" textColor="white" style={{ fontWeight: "normal" }}>perf</S><br />
            test<br />
            build<br />
            ci<br />
            chore<br />
            revert<br />
          </Text>
        </Slide>

        <Slide bgColor="dark">
          <BlockQuote>
            <Quote textColor="blue" style={{ fontSize: ".9em" }}>
              rant(twitter): I can’t stand this commit message style
            </Quote>
            <Cite>
              Dan Abramov
            </Cite>
          </BlockQuote>
        </Slide>

        <Slide bgColor="dark">
          <BlockQuote>
            <Quote textColor="blue" style={{ fontSize: "1.3em" }}>
              if that's what it takes to automate my release then it's fine.
            </Quote>
            <Cite>
              Kent C. Dodds
            </Cite>
          </BlockQuote>
        </Slide>

        <Slide>
          <Text textColor="white">Everything is <S type="bold" textColor="orange">customizable</S></Text>
          <br/>
          <br/>
          <Code textColor="blue">@semantic-release/commit-analyzer</Code>
        </Slide>

        <Slide>
          <CodePane
            lang="json"
            textSize=".6em"
            source={`
  {
    "release": {
      "analyzeCommits": {
        "preset": "angular",
        "releaseRules": [
          {"type": "docs", "scope":"README", "release": "patch"},
          {"type": "refactor", "release": "patch"},
          {"type": "style", "release": "patch"}
        ],
        "parserOpts": {
          "noteKeywords": ["BREAKING CHANGE"]
        }
      }
    }
  }
          `} />
        </Slide>

        <Slide notes="...as they drive the release process, we bought into needing the convention to drive this thing so...">
          <Heading>Commit messages just got <S type="bold" textColor="orange">really important</S></Heading>
        </Slide>

        <Slide notes="makes sense to validate them...">
          <Text fit textColor="white">Validate conformance of commit messages</Text>
          <br />
          <br />
          <Code style={{ fontSize: "1.1em" }} textColor="orange">npm install @commitlint/cli --save-dev</Code>
        </Slide>

        <Slide notes="can validate exists, whitelist, style etc">
          <Image src={images.commitlint.replace("/", "")} />
        </Slide>

        <Slide notes="Like all linters its configurable">
          <Text textColor="white">Lint it <S type="bold" textColor="orange">your</S> way</Text>
          <br />
          <br />
          <Code textColor="blue">@commitlint/config-&lt;convention&gt;</Code>
        </Slide>

        <Slide bgColor="blue" notes="The next step was how can we...">
          <Heading size={3} textColor="dark">Fitting into the <S type="bold" textColor="white">developer experience</S></Heading>
        </Slide>

        <Slide notes="No 2 devs commit the same way">
          <Heading size={3} textColor="white">Make doing the right thing <S type="bold" textColor="orange">default</S></Heading>
        </Slide>

        <Slide notes="">
          <Heading size={3} textColor="white">Use <S type="bold" textColor="orange">git hooks</S> to integrate with developer workflow</Heading>
        </Slide>

        <Slide notes="">
          <Text fit textColor="white">Git hooks for npm scripts</Text>
          <br />
          <br />
          <Code style={{ fontSize: "1.1em" }} textColor="orange">npm install husky --save-dev</Code>
        </Slide>

        <Slide notes="Any git hook, prepush, precommit, etc">
          <CodePane
            lang="json"
            textSize=".8em"
            source={`
  "scripts": {
    "commitmsg": "commitlint -e"
  }
            `}
          />
        </Slide>

        <Slide bgColor="orange" notes="one flaw is...">
          <Heading textColor="white">Still relies on <S type="bold" textColor="dark">memorising</S> the format</Heading>
        </Slide>

        <Slide>
          <Text fit textColor="white">Wizard for your commit messages</Text>
          <br />
          <br />
          <Code style={{ fontSize: "1.1em" }} textColor="orange">npm install commitizen --save-dev</Code>
        </Slide>

        <Slide
          transition={["fade"]}
          bgImage={images.commitizen.replace("/", "")}
          bgSize="70%"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgColor="#fdf7e3"
        />

        <Slide notes="...making the developer think about...">
          <Heading textColor="white">
            Consider impact on<br/><Code textColor="blue" textSize="1em" style={{ lineHeight: "1.4em" }}>version</Code><br/>earlier
          </Heading>
        </Slide>

        <Slide bgColor="blue" notes="...at a more atomic level">
          <Heading textColor="white">
            Is this commit a <S type="bold" textColor="dark">breaking change</S>?
          </Heading>
        </Slide>

        <Slide>
          <CodePane
            lang="json"
            textSize=".8em"
            source={`
  "scripts": {
    "commit": "git-cz"
  }
            `}
          />
          <br/>
          <Code textColor="white">npm run commit</Code>
        </Slide>

        <Slide transition={[() => {}]} notes="or go it alone and ">
          <Heading size={3} textColor="white">Go it alone,<br/><S type="bold" textColor="orange">rely on linting</S></Heading>
          <br/>
          <Code textColor="blue">git commit -m "fix"</Code>
        </Slide>

        <Slide>
          <Text textColor="white">Commit message cookbook 👨‍🍳&nbsp;&nbsp;:</Text>
          <br/>
          <CodePane
            lang="json"
            textSize=".8em"
            source={`
  "devDependencies": {
    "@commitlint/cli": "5.2.5",
    "@commitlint/config-angular": "5.1.1",
    "commitizen": "2.9.6",
    "cz-conventional-changelog": "2.1.0",
    "husky": "0.14.3",
    "semantic-release": "8.2.0"
  }
            `}
          />
        </Slide>

        <Slide>
          <Text textColor="white">Commit message cookbook 👨‍🍳&nbsp;:</Text>
          <br/>
          <CodePane
            lang="json"
            textSize=".8em"
            textAlign="left"
            className="valueFix"
            source={`
  "scripts": {
    "prepush": "npm run lint",
    "commit": "git-cz",
    "commitmsg": "commitlint -e",
    "prepublishOnly": "npm run build",
    "semantic-release": "semantic-release pre &&
                         npm publish &&
                         semantic-release post"
  }
            `}
          />
        </Slide>

        <Slide bgColor="blue" notes="wanted to talk more about CI">
          <Heading textColor="dark">Publish from CI</Heading>
        </Slide>

        <Slide notes="...and removes the fear of publishing">
          <Heading>Empowers teams to <S type="bold" textColor="orange">focus on features</S></Heading>
        </Slide>

        <Slide notes="">
          <Text textColor="white">Easy <S type="bold" textColor="orange">bootstrap</S> for CI authentication</Text>
          <br />
          <br />
          <Code textColor="blue">semantic-release-cli</Code>
        </Slide>

        <Slide
          transition={["fade"]}
          bgImage={images.semanticreleasecli.replace("/", "")}
          bgSize="70%"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgColor="#000"
        />

        <Slide notes="...after successful build of master">
          <Heading>CI Setup:</Heading>
          <br/>
          <Text textColor="blue">
            — GH_TOKEN (read/write access)<br/>
            — NPM_TOKEN (publish access)<br/>
            — Run <Code textColor="orange">npm run semantic-release</Code>
          </Text>
        </Slide>

        <Slide bgColor="blue" notes="shift our focus">
          <Heading textColor="dark">The &ldquo;gotchas&rdquo;&hellip;</Heading>
        </Slide>

        <Slide bgColor="orange">
          <Heading textColor="dark">TravisCI defaults</Heading>
        </Slide>

        <Slide notes="Runs as 'after_success'">
          <Heading textColor="blue">ENOCHANGE</Heading>
          <Text textColor="white">(returns exit code 1)</Text>
          <Appear><Text textColor="orange"><br/>No longer in upcoming v9</Text></Appear>
        </Slide>

        <Slide notes="Verifies presence of tokens (and TravisCI)">
          <Text textColor="white">Default <S type="bold" textColor="orange">pre-release verification</S> setup for TravisCI</Text>
          <br/>
          <CodePane
            lang="json"
            textSize=".7em"
            source={`
  "release": {
    "verifyConditions": "semantic-release/src/lib/plugin-noop"
  }
            `}
          />
        </Slide>

        <Slide>
          <Heading>Beware the Github UI when <S type="bold" textColor="orange">merging</S></Heading>
        </Slide>

        <Slide
          notes="Original commit, then undergoes review..."
          transition={["fade"]}
          bgImage={images.merging.replace("/", "")}
          bgSize="70%"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgColor="#fff"
        />

        <Slide>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Heading size={2} style={{ flexGrow: "0" }}>☢️&nbsp;&nbsp;</Heading>
            <div style={{ flexGrow: "0", paddingTop: ".5em" }}><Image src={images.squash.replace("/", "")} /></div>
            <Heading size={2} style={{ flexGrow: "0" }}>&nbsp;&nbsp;☢️</Heading>
          </div>
        </Slide>

        <Slide notes="if we get it wrong and publish major...">
          <Heading size={3} textColor="white">Suits libraries with <S type="bold" textColor="orange">fewer consumers</S>?</Heading>
          <Text textColor="blue">(marketing versions, eg. React)</Text>
        </Slide>

        <Slide transition={[() => {}]} notes="Deliberate friction in this case">
          <Heading size={3} textColor="white">Suits libraries with <S type="bold" textColor="orange">fewer consumers</S>?</Heading>
          <Text textColor="blue">Manual release management?</Text>
        </Slide>

        <Slide notes="But for us, unified">
          <Heading><S type="bold" textColor="orange">Unified workflow</S> across apps, api & <S type="underline" bold>libraries</S></Heading>
        </Slide>

        <Slide bgColor="blue">
          <Image src={images.me.replace("/", "")} style={{ maxWidth: "10em", borderRadius: "50%", border: "5px solid #292F36" }} />
          <br/>
          <Text textColor="dark">
            @michaeltaranto
          </Text>
          <Text textColor="dark">
            github.com/michaeltaranto
          </Text>
          <br/>
          <br/>
          <Heading style={{ marginBottom: "-1.2em" }}>🎄</Heading>
        </Slide>
      </Deck>
    );
  }
}
