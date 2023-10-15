import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

// import ChatFeed from "./components/ChatFeed";
// import LoginForm from "./components/LoginForm";
import "./App.css";

const projectID = "e9203466-d23d-40d0-a240-ee9c68994632";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() =>
        new Audio(
          "https://www.setasringtones.com/category/flute-ringtones/2754/Krishna_Flute_Ringtone"
        ).play()
      }
    />
  );
};

export default App;
