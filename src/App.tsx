import { useEffect, useState } from "react";
import "./App.css";
import InputMessage from "./components/InputMessage";
import MessagesSendsList from "./components/MessagesSendsList";
import Discussion from "./types/Discussion";
import Message from "./types/Message";

function App() {
  const [discussion, setDiscussion] = useState<Discussion>({
    Messages: [],
  });
  const [dataSender, setDataSender] = useState<Message>();

  const [showDots, setShowDots] = useState<boolean>(true);
  const [showBotMsg, setShowBotMsg] = useState<boolean>(false);

  return (
    <>
      <MessagesSendsList
        discussion={discussion}
        showDots={showDots}
        setShowDots={setShowDots}
        showBotMsg={showBotMsg}
        setShowBotMsg={setShowBotMsg}
        dataSender={dataSender}
        setDataSender={setDataSender}
      />
      <InputMessage
        discussion={discussion}
        setDiscussion={setDiscussion}
        setShowDots={setShowDots}
      />
    </>
  );
}

export default App;
