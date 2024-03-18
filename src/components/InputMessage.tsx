import { SubmitHandler, useForm } from "react-hook-form";
import SenIcon from "../assets/icons/send-icon.png";
import Discussion from "../types/Discussion";
import Message from "../types/Message";
import { useEffect, useState } from "react";
import userIcon from "../assets/icons/user-icon.png";

type inputMessageProps = {
  discussion: Discussion;
  setDiscussion: React.Dispatch<React.SetStateAction<Discussion>>;
  setShowDots: React.Dispatch<React.SetStateAction<boolean>>;
};
const InputMessage = (props: inputMessageProps) => {
  const { register, handleSubmit, reset } = useForm<Message>();
  const {
    discussion,
    setDiscussion,

    setShowDots,
  } = props;
  const [submitted, setSubmitted] = useState<boolean>(false);

  const onSendMessage: SubmitHandler<Message> = (data) => {
    const UserMessage: Message = {
      Content: data.Content,
      Sender: {
        Name: "User",
        Avatar: userIcon,
      },
    };

    discussion.Messages.push(UserMessage);
    const disc: Discussion = {
      Messages: discussion.Messages,
    };
    setDiscussion(disc);
    setShowDots(true);
    reset({ Content: "" });
    console.log(UserMessage);

    setSubmitted(true);
  };
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

  useEffect(() => {
    if (!submitted) return;

    const timer = setTimeout(() => {
      const randomMessage = getRandomMessage();
      const botMessage: Message = {
        Content: randomMessage,
        Sender: {
          Name: "Bot",
          Avatar: "/src/assets/icons/user-icon.png",
        },
      };
      {
        discussion.Messages.push(botMessage);
        const disc: Discussion = {
          Messages: discussion.Messages,
        };
        setDiscussion(disc);
      }
      setShowDots(false);
      console.log(botMessage);
      setSubmitted(false);
      reset({ Content: "" });
    }, 3000);

    return () => clearTimeout(timer);

    setSubmitted(false);
  }, [submitted]);

  return (
    <form onSubmit={handleSubmit(onSendMessage)}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          placeholder="type your message here .."
          {...register("Content", { required: true })}
        ></input>

        <button type="submit" className="button">
          <img src={SenIcon} className="icon" />
        </button>
      </div>
    </form>
  );
};

export default InputMessage;
