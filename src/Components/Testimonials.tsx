import Slideshow from "./Slideshow";
import styles from "./Testimonials.module.css";

function Testimonials() {
  return (
    <div className={styles.wrapper}>
        <h2 className={styles.title}>Testimonials</h2>
        <Slideshow />
    </div>
  );
}

export default Testimonials;
