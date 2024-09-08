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
  const { discussion, setDiscussion, setShowDots } = props;
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [userMessage, setUserMessage] = useState<string>("");
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
    setUserMessage(data.Content);

    setSubmitted(true);
  };
  const getBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();

    if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
      return " Hi there! How can I assist you today?";
    }
    if (lowerInput.includes("how are you")) {
      return " I'm just a bot, but I'm doing great! How about you?";
    }
    if (lowerInput.includes("tell me about yourself")) {
      return " I'm a simple chatbot designed to have a conversation with you. What do you want to talk about?";
    }
    if (lowerInput.includes("your name")) {
      return " I don't have a specific name, but you can call me ChatBot.";
    }
    if (lowerInput.includes("joke")) {
      return " Why don’t scientists trust atoms? Because they make up everything!";
    }
    if (lowerInput.includes("bye")) {
      return " Goodbye! Have a great day!";
    }
    return ` Hmm, I'm not sure how to respond to "${input}" Can you ask me something else?`;
  };

  useEffect(() => {
    if (!submitted) return;

    const timer = setTimeout(() => {
      const botRespone = getBotResponse(userMessage);
      const botMessage: Message = {
        Content: botRespone,
        Sender: {
          Name: "Bot",
          Avatar: "/src/assets/icons/bot-icon.png",
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
