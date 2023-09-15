import "./App.css";

import { Button, Heading } from "./components";

const Container = ({ ...rest }) => (
  <div
    className="border-solid border border-border-weak p-6 rounded-xl flex flex-col gap-4 items-start"
    {...rest}
  />
);

const Badge = ({ ...rest }) => (
  <div
    className="bg-border-weak/30 font-bold border-solid border border-border-weak/50 px-3 py-1 rounded-md flex flex-col gap-4 items-start"
    {...rest}
  />
);

function App() {
  return (
    <div className="p-12 flex flex-col items-start gap-4">
      <Heading>Component sticker sheet</Heading>
      <Container>
        <Badge>Heading</Badge>
        {[1, 2, 3, 4, 5, 6].map((level) => (
          <Heading level={level}>{`Heading ${level}`}</Heading>
        ))}
      </Container>
      <Container>
        <Badge>Button</Badge>

        <Button label="Click me" onClick={() => console.log("clicked")} />
      </Container>
    </div>
  );
}

export default App;
