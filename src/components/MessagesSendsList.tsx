import "./InputMessage.css";

import Discussion from "../types/Discussion";

type inputMessageProps = {
  discussion: Discussion;
};

const MessagesSendsList = (props: inputMessageProps) => {
  const { discussion } = props;

  return (
    <div className="liste-container">
      <ul>
        {discussion.Conversation.map((item, index) => {
          return (
            <li key={index} className="liste-container">
              <img src={item.User.Avatar} className="avatar-icon" />
              <span className="user-name">{item.User.Name}</span>
              <br />
              <span className="item-content">{item.Content}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default MessagesSendsList;
