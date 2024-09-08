import { SubmitHandler, useForm } from "react-hook-form";
import SenIcon from "../assets/icons/send-icon.png";
import Discussion from "../types/Discussion";
import Message from "../types/Message";
import { useEffect, useState } from "react";
import userIcon from "../assets/icons/user-icon.png";

type inputMessageProps = {
  discussion: Discussion;
  setDiscussion: React.Dispatch<React.SetStateAction<Discussion>>;
};
const InputMessage = (props: inputMessageProps) => {
  const { register, handleSubmit, reset } = useForm<Message>();
  const { discussion, setDiscussion } = props;
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [userMessage, setUserMessage] = useState<string>("");
  //  const [isBotTyping, setIsBotTyping] = useState<boolean>(false);

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
    reset({ Content: "" });
    setUserMessage(data.Content);

    setSubmitted(true);
  };
  const getBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();

    if (lowerInput.includes("what is reactjs")) {
      return "ReactJS is a JavaScript library for building user interfaces, particularly for single-page applications where you need a fast, interactive user experience.";
    }
    if (lowerInput.includes("what are components")) {
      return "Components are the building blocks of a React application. They are reusable pieces of code that represent part of the user interface. Components can be functional or class-based.";
    }
    if (lowerInput.includes("what is jsx")) {
      return "JSX stands for JavaScript XML. It is a syntax extension for JavaScript that looks similar to HTML and is used with React to describe what the UI should look like.";
    }
    if (lowerInput.includes("difference between state and props")) {
      return "State is a local data storage that is specific to a component and can be changed within the component. Props are inputs to a component passed from its parent and are read-only.";
    }
    if (lowerInput.includes("reactjs")) {
      return "ReactJS is a JavaScript library for building user interfaces, particularly for single-page applications where you need a fast, interactive user experience.";
    }
    if (lowerInput.includes("components")) {
      return "Components are the building blocks of a React application. They are reusable pieces of code that represent part of the user interface. Components can be functional or class-based.";
    }
    if (lowerInput.includes("jsx")) {
      return "JSX stands for JavaScript XML. It is a syntax extension for JavaScript that looks similar to HTML and is used with React to describe what the UI should look like.";
    }
    if (lowerInput.includes("react hook")) {
      return "React hooks are functions that let you use state and other React features without writing a class. Examples include useState, useEffect, and useContext.";
    }
    if (lowerInput.includes("state")) {
      return "State is a local data storage that is specific to a component and can be changed within the component.";
    }
    if (lowerInput.includes("props")) {
      return "Props are inputs to a component passed from its parent and are read-only.";
    }

    if (lowerInput.includes("useeffect")) {
      return "The useEffect hook allows you to perform side effects in functional components. It runs after the component renders and can be used for tasks like fetching data, directly interacting with the DOM, and setting up subscriptions.";
    }
    if (lowerInput.includes("redux")) {
      return "Redux is a state management library for JavaScript applications. It is often used with React to manage and centralize application state, making it easier to manage state changes and debug applications.";
    }
    if (lowerInput.includes("pass data between components")) {
      return "You can pass data between components in React using props. Parent components pass data to child components through props, which are read-only.";
    }
    if (lowerInput.includes("controlled components")) {
      return "Controlled components are form elements in React that have their value controlled by the state of the component. The state is updated via event handlers, making the form elements controlled.";
    }
    if (lowerInput.includes("virtual dom")) {
      return "The virtual DOM is a lightweight copy of the actual DOM. React uses it to optimize rendering by updating only the parts of the DOM that have changed, improving performance.";
    }
    if (lowerInput.includes("keys in react lists")) {
      return "Keys are used to uniquely identify elements in a list. They help React identify which items have changed, are added, or are removed, which improves performance when rendering lists.";
    }
    if (lowerInput.includes("how to handle events in react")) {
      return "Events in React are handled using event handlers that are passed as props to elements. They are named using camelCase syntax, e.g., onClick for a click event, and are handled using functions.";
    }

    return `Hmm, I'm not sure how to respond to "${input}". Can you ask me something else?`;
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
      setSubmitted(false);
      reset({ Content: "" });
    }, 1500);

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
