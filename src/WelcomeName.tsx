import { useState, ChangeEvent } from "react";

const WelcomeName = () => {
  const [name, setName] = useState("");

  const updateName = (event: ChangeEvent<HTMLInputElement>) => {
    const newName = event.currentTarget.value;
    setName(newName);
  };

  return (
    <section>
      <section>
        <input type="text" onChange={updateName} />
      </section>
      <article>반갑습니다 {name}님</article>
    </section>
  );
};

export default WelcomeName;
