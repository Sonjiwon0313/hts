import { useState, ChangeEvent } from "react";

const HiddenName = () => {
  const [text, setText] = useState<string>("");

  const updateText = (event: ChangeEvent<HTMLInputElement>) => {
    const t = event.currentTarget.value;
    const i = t.length;
    if (i > 2) {
      const a = t.substring(0, 1);
      const b = t.substring(i - 1, i);
      const c = "*".repeat(i - 2);
      setText(a + c + b);
    }
  };

  return (
    <>
      <article>{text}</article>
      <input type="text" onChange={updateText} />
    </>
  );
};

export default HiddenName;
