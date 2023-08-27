import { AdviceBlock } from "components/AdviceBlock/AdviceBlock";
import { defaultAdvice } from "mock";
import { useState } from "react";
import { Advice } from "types";

const BASE_URL = "https://api.adviceslip.com/advice";

function App() {
  const [advise, setAdvice] = useState(defaultAdvice);

  const fetchAdvice = async () => {
    const res = await fetch(BASE_URL);
    const adviceMessage = (await res.json()) as Advice;
    setAdvice(adviceMessage);
  };

  return (
    <>
      <AdviceBlock {...advise} fetchAdvice={fetchAdvice} />
    </>
  );
}

export default App;
