import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
import styles from "./Signin.module.css";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { login } from "../services/authService";
import { useState, useEffect } from "react";

type SignInProps = {
  onClose: (token: string) => void;
};

function SignIn({ onClose }: SignInProps) {
  const [username, setUsername] = useState("");
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken") || ""
  );
  const [error, setError] = useState("");

  useEffect(() => {
    if (accessToken) {
      console.log("User is logged in");
    }
  }, [accessToken]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await login(username);
      if (data.accessToken) {
        setAccessToken(data.accessToken);
        localStorage.setItem("accessToken", data.accessToken);
        console.log("Login successful", data);
        onClose(data.accessToken);
      } else {
        setError("Login failed. Please try again.");
      }
    } catch (err: unknown) {
      console.error(err);
    }
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.sign} onSubmit={handleSubmit}>
        <div className={styles.form}>
          <h1 className={styles.signin}>Sign In</h1>
          <h6 className={styles.username}>Username</h6>
          <input
            className={styles.input}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Button type="submit" label="Sign In" size="small" />
      </form>
      <div className={styles.icon} onClick={() => onClose("")}>
        <FontAwesomeIcon icon={faClose} />
      </div>
    </div>
  );
}

export default SignIn;
