import { useState } from "react";

import Discussion from "../types/Discussion";
import Message from "../types/Message";
type inputMessageProps = {
  discussion: Discussion;
  showDots: boolean;
  setShowDots: React.Dispatch<React.SetStateAction<boolean>>;
  showBotMsg: boolean;
  setShowBotMsg: React.Dispatch<React.SetStateAction<boolean>>;
  dataSender: Message | undefined;
  setDataSender: React.Dispatch<React.SetStateAction<Message | undefined>>;
};

const MessagesSendsList = (props: inputMessageProps) => {
  const {
    discussion,
    showDots,
    setShowDots,
    showBotMsg,
    setShowBotMsg,
    dataSender,
    setDataSender,
  } = props;
  const [randomMessageToMap, setRandomMessageToMap] = useState<string[]>([""]);
  const getRandomMessage = (): string => {
    const text: string[] = [
      "Hello! How are you?",
      "Just checking in. Anything new?",
      "Hope you're having a great day!",
      "Remember to take breaks and stay hydrated!",
      "You're doing amazing! Keep it up!",
    ];

    const randomIndex = Math.floor(Math.random() * text.length);
    return text[randomIndex];
  };
  const randomMessage = getRandomMessage();

  return (
    <div className="liste-container">
      <div className="sub-of-list-container">
        {discussion.Messages.length > 0 &&
          discussion.Messages.map((item, index) => {
            return (
              <div>
                <div key={"kk" + index} className="content-interaction">
                  {" "}
                  <div key={index} className="liste-sub-container">
                    <img src={item.Sender.Avatar} className="avatar-icon" />
                    <span className="user-name">{item.Sender.Name}</span>
                    <br />
                    <span className="item-content">{item.Content}</span>
                  </div>
                </div>
                {showDots && <div className="dots-animation">...</div>}
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default MessagesSendsList;
//{showBotMsg && (
//<div key={"kkl" + index} className="bot-msg ">
//{getRandomMessage()}
//</div>
//)}
