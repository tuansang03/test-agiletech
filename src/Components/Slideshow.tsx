import { Col, Row } from "react-bootstrap";
import styles from "./Styleshow.module.css";
import { useState } from "react";
import { MouseEvent } from "react";
const data = [
  {
    id: 1,
    image: "./avatar1.png",
    name: "John Fang",
    email: "wordfaang.com",
    des: "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
  },

  {
    id: 2,
    image: "./avatar2.png",
    name: "Jane Doe",
    email: "janedoee.com",
    des: "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
  },

  {
    id: 3,
    image: "./avatar3.png",
    name: "Jim Ferry",
    email: "jimjimf.com",
    des: "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
  },
];

function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(data[0]);

  const handleChangeSlide = (e: MouseEvent<HTMLButtonElement>) => {
    const slide = data.find((a) => a.id === Number(e.currentTarget.value));
    if (slide) {
      setCurrentSlide(slide);
    }
  };

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      const dx = e.clientX - startX;
      setOffsetX(dx);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);

    const threshold = 50;
    if (offsetX > threshold) {
      const prevSlideIndex =
        data.findIndex((item) => item === currentSlide) - 1;
      if (prevSlideIndex >= 0) {
        setCurrentSlide(data[prevSlideIndex]);
      }
    } else if (offsetX < -threshold) {
      const nextSlideIndex =
        data.findIndex((item) => item === currentSlide) + 1;
      if (nextSlideIndex < data.length) {
        setCurrentSlide(data[nextSlideIndex]);
      }
    }
    setOffsetX(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setOffsetX(0);
    }
  };

  return (
    <>
      <div
        className={styles.slidesWrapper}
        style={{ transform: `translateX(${offsetX}px)` }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {data.map((item) => (
          <div
            key={item.id}
            className={`${styles.wrapper} ${
              item === currentSlide ? styles.show : styles.hide
            }`}
          >
            <Row className={styles.content}>
              <Col xs={3}>
                <img src={item.image}></img>
              </Col>
              <Col className={styles.contentRight}>
                <span className={styles.name}>{item.name}</span>
                <br></br>
                <span className={styles.email}>{item.email}</span>
                <p className={styles.description}>{item.des}</p>
              </Col>
            </Row>
          </div>
        ))}
      </div>
      <div className={styles.control}>
        {data.map((item) => (
          <button
            className={`${styles.button} ${
              item === currentSlide ? styles.butonshow : styles.buttonhide
            }`}
            value={item.id}
            onClick={handleChangeSlide}
          ></button>
        ))}
      </div>
    </>
  );
}
export default Slideshow;
