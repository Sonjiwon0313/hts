import { ChangeEvent, KeyboardEvent, useState } from "react";
import "./App.css";
import Button from "./Button";
import Title from "./Title";
import Text from "./Text";
import Adult from "./Adult";
import Photo from "./Photo";
import Counter from "./Counter";
import Adder from "./Adder";
import WelcomeName from "./WelcomeName";
import ConditionalText from "./ConditionalText";
import HiddenName from "./HiddenName";
import Test from "./pages/Test";

const App = () => {
  const [latestName, setLatestName] = useState("");
  const updateLatestName = (name: string) => {
    setLatestName(name);
  };

  return (
    <>
      <Button name="hello" callback={updateLatestName} />
      <Button name="world" callback={updateLatestName} />
      <Button name="nextop" callback={updateLatestName} />
      <article>{latestName} is clicked!</article>
      <Test />
    </>
  );
  const preventKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    console.log(event.key);
    if (event.key === "h") {
      event.preventDefault();
      event.stopPropagation();
    }
  };
  return (
    <>
      <input type="text" onKeyDown={preventKeyDown} />
      <Counter defaultCount={0} />
      <Adder />
      <WelcomeName />
      <ConditionalText />
      <HiddenName />
    </>
  );
};

export default App;
