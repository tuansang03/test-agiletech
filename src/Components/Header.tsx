import { useEffect, useState } from "react";
import Button from "./Button";
import styles from "./Header.module.css";
import HeaderLine from "./Headerline";
import { Container, Row, Col } from "react-bootstrap";
import SignIn from "./Signin";

function Header() {
  const [formLogin, setFormLogin] = useState(false);
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("accessToken")
  );

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleOpenFormLogin = () => {
    setFormLogin(true);
  };

  const handleCloseFormLogin = (token: string) => {
    setToken(token);
    localStorage.setItem("accessToken", token);
    setFormLogin(false);
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("accessToken");
  };

  return (
    <Container className={styles.contai}>
      <div className={styles.wrapper}>
        <Row className={styles.header}>
          <Col className={styles.col}>
            <img className={styles.logo} src="./logo.png" alt="Logo" />
          </Col>

          <Col className={styles.col}>
            {token && <Button label="Profile" />}
            {token && <Button label="Logout" onClick={handleLogout} />}
            {!token && <Button label="Sign In" onClick={handleOpenFormLogin} />}
          </Col>
        </Row>
      </div>
      <HeaderLine />
      {formLogin && <SignIn onClose={handleCloseFormLogin} />}
    </Container>
  );
}

export default Header;
