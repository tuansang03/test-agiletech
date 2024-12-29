import { Col, Row } from "react-bootstrap";
import Button from "./Button";
import styles from "./Headerline.module.css";

function HeaderLine() {
  return (
    <Row className={`${styles["header-line"]}`}>
      <Col>
        <h1 className={styles.title}>Save your data storage here.</h1>
        <p className={styles.description}>
          Data Warehouse is a data storage area that has been tested for
          security, so you can store your data here safely but not be afraid of
          being stolen by others.
        </p>
        <Button label="Learn more" />
      </Col>
      <Col>
        <img className={styles.image} src="./hero.png" alt="" />
      </Col>
    </Row>
  );
}

export default HeaderLine;
