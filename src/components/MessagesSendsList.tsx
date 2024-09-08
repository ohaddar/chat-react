import Discussion from "../types/Discussion";
type inputMessageProps = {
  discussion: Discussion;
  showDots: boolean;
};

const MessagesSendsList = (props: inputMessageProps) => {
  const { discussion, showDots } = props;

  return (
    <div className="liste-container">
      <div className="sub-of-list-container">
        {discussion.Messages.length > 0 &&
          discussion.Messages.map((item, index) => {
            const isLastMessageFromUser =
              index === discussion.Messages.length - 1 &&
              item.Sender.Name === "User";
            const isBotMessage = item.Sender.Name === "Bot";

            return (
              <div
                key={"message-" + index}
                className={`content-interaction ${
                  item.Sender.Name === "User" ? "user-message" : "bot-message"
                }`}
              >
                <div className="liste-sub-container">
                  <img
                    src={item.Sender.Avatar}
                    className="avatar-icon"
                    alt="avatar"
                  />
                  <span className="user-name">{item.Sender.Name}</span>
                  <br />
                  <span className="item-content">{item.Content}</span>
                </div>

                {isLastMessageFromUser && showDots && isBotMessage && (
                  <div className="content-interaction bot-message">
                    <div className="">
                      <img
                        src="/src/assets/icons/bot-icon.png"
                        className="avatar-icon"
                        alt="bot avatar"
                      />
                      <span className="user-name">Bot</span>
                      <br />
                      <div className="dots-animation">...</div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MessagesSendsList;
