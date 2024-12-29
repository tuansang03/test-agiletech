import styles from "./FeaturesItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

type FeaturesItemProps = {
  image: string;
  title: string;
  des: string;
  background: string;
};

function FeaturesItem({ image, title, des, background }: FeaturesItemProps) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.featuresLeft}>
          <img className={styles.image} src={image}></img>
        </div>
        <div className={styles.featuresLeft}>
          <div className={styles.conttent}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{des}</p>
            <a className={styles.link} href="#">
              Learn more
              <FontAwesomeIcon
                className={styles.arrowright}
                icon={faArrowRight}
              />
            </a>
          </div>
        </div>
      </div>
      <img className={styles.background} src={background} />
    </div>
  );
}

export default FeaturesItem;
