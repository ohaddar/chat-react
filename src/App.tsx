import { useEffect, useState } from "react";
import "./App.css";
import InputMessage from "./components/InputMessage";
import MessagesSendsList from "./components/MessagesSendsList";
import Discussion from "./types/Discussion";

function App() {
  const [discussion, setDiscussion] = useState<Discussion>({
    Conversation: [],
  });

  useEffect(() => {
    console.log(discussion);
  }, [discussion]);

  return (
    <>
      <MessagesSendsList discussion={discussion} />
      <InputMessage discussion={discussion} setDiscussion={setDiscussion} />
    </>
  );
}

export default App;
