import { Button, Heading, TextInput } from "../../components";
import Keyboard from "../../assets/icons/keyboard.svg?react";

const Container = ({ ...rest }) => (
  <div
    className="border border-border-weak p-6 rounded-xl flex flex-col gap-4 items-start"
    {...rest}
  />
);

const Badge = ({ ...rest }) => (
  <div
    className="flex flex-col gap-4 items-start px-2 py-0.5 rounded-full font-medium text-small text-gray-800/70 border border-border-weak/50  bg-gray-50/50 "
    {...rest}
  />
);

export const StickerSheet = () => {
  return (
    <>
    <Heading>Component sticker sheet</Heading>
      <div className="grid grid-flow-col gap-6 items-start">
        <Container>
          <Badge>Heading</Badge>
          {[1, 2, 3, 4, 5, 6].map((level) => (
            <Heading key={level} level={level}>{`Heading ${level}`}</Heading>
          ))}
        </Container>
        <Container>
          <Badge>TextInput</Badge>
          <TextInput placeholder="Placeholder" />
          <TextInput defaultValue="Text value" />
          <TextInput defaultValue="Mysecretpassword!" type="password" />
          <TextInput defaultValue="Disabled state" disabled />
        </Container>
        <Container>
          <Badge>Button</Badge>
          <Button label="Primary button" onClick={() => console.log("clicked")} />
          <Button kind="secondary" label="Secondary button" onClick={() => console.log("clicked")} />
          <Button kind="tertiary" label="Tertiary button" onClick={() => console.log("clicked")} />
          <Button label="Keyboard" icon={<Keyboard />} onClick={() => console.log("clicked")} />
          <Button kind="secondary" icon={<Keyboard />} onClick={() => console.log("clicked")} />
          <Button kind="tertiary" icon={<Keyboard />} onClick={() => console.log("clicked")} />
        </Container>
      </div>
      </>
  )
}
