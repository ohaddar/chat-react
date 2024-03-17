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
