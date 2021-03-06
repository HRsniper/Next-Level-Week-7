import styles from "./App.module.scss";
import { LoginBox } from "./components/LoginBox";
import { MessageList } from "./components/MessageList";
import { SendMessageForm } from "./components/SendMessageForm";
import { useAuth } from "./hooks/useAuth";

function App() {
  const { user } = useAuth();

  return (
    <div className="App">
      <main className={`${styles.contentWrapper} ${Boolean(user) ? styles.contentSigned : ""}`}>
        <MessageList />
        {Boolean(user) ? <SendMessageForm /> : <LoginBox />}
      </main>
    </div>
  );
}

export { App };
