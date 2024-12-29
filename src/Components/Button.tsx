import styles from "./Button.module.css";

type ButtonProps = {
  label: string;
  size?: "small" | "medium" | "large";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

function Button({
  label,
  size = "medium",
  type = "button",
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[size]}`}
      type={type}
      onClick={onClick}
    >
      <span className={styles.text}>{label}</span>
    </button>
  );
}

export default Button;
