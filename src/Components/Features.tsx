import { Col, Container, Row } from "react-bootstrap";
import FeaturesItem from "./FeaturesItem";
import styles from "./Features.module.css";

function Features() {
  return (
    <Container className={styles.container}>
      <Row className="text-center">
        <Col>
          <h1 className={styles.title}>Features</h1>
          <p className={styles.description}>
            Some of the features and advantages that we provide for those of you
            who store data in this Data Warehouse.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={12} lg={6}>
          <FeaturesItem
            image="./image01.png"
            title="Search Data"
            des="Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time."
            background="./background01.png"
          />
        </Col>
        <Col md={12} lg={6}>
          <FeaturesItem
            image="./image02.png"
            title="24 Hours Access"
            des="Access is given 24 hours a full morning to night and
                 meet again in the morning, giving you comfort when
                 you need data when urgent."
            background="./background02.png"
          />
        </Col>
      </Row>
      <Row>
        <Col md={12} lg={6}>
          <FeaturesItem
            image="./image03.png"
            title="Print Out"
            des="Print out service gives you convenience if someday
                  you need print data, just edit it all and just print it."
            background="./background03.png"
          />
        </Col>
        <Col md={12} lg={6}>
          <FeaturesItem
            image="./image04.png"
            title="Security Code"
            des="Data Security is one of our best facilities. Allows for your files
                to be safer. The file can be secured with a code or password that 
                you created, so only you can open the file."
            background="./background04.png"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Features;
