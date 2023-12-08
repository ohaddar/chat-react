import { SubmitHandler, useForm } from "react-hook-form";
import SenIcon from "../assets/icons/send-icon.png";
import "./InputMessage.css";
import Discussion from "../types/Discussion";
import Message from "../types/Message";

type inputMessageProps = {
  discussion: Discussion;
  setDiscussion: React.Dispatch<React.SetStateAction<Discussion>>;
};
const InputMessage = (props: inputMessageProps) => {
  const { register, handleSubmit, reset } = useForm<Message>();
  const { discussion, setDiscussion } = props;

  const onSendMessage: SubmitHandler<Message> = (data) => {
    data.User = {
      Id: 3,
      Name: "UserName",
      Avatar: "/src/assets/icons/user-icon.png",
    };
    discussion.Conversation.push(data);

    const disc: Discussion = {
      Conversation: discussion.Conversation,
    };
    setDiscussion(disc);
    reset({ Content: "" });
  };

  return (
    <form onSubmit={handleSubmit(onSendMessage)}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          placeholder="type your message here .."
          {...register("Content")}
        ></input>

        <button type="submit" className="button">
          <img src={SenIcon} className="icon" />
        </button>
      </div>
    </form>
  );
};

export default InputMessage;
