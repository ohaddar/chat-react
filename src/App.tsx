import { useState } from "react";
import "./App.css";
import InputMessage from "./components/InputMessage";
import MessagesSendsList from "./components/MessagesSendsList";
import Discussion from "./types/Discussion";
function App() {
  const [discussion, setDiscussion] = useState<Discussion>({
    Messages: [],
  });
  const [showDots, setShowDots] = useState<boolean>(true);

  return (
    <>
      <MessagesSendsList discussion={discussion} showDots={showDots} />
      <InputMessage
        discussion={discussion}
        setDiscussion={setDiscussion}
        setShowDots={setShowDots}
      />
    </>
  );
}

export default App;
