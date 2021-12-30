import { ChildAsFC } from "./Child";

export default function Parent() {
  return (
    <ChildAsFC color="red" handleClick={() => console.log("clicked")}>
      hjgfjhsgdh
    </ChildAsFC>
  );
}
