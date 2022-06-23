import React from "react";
import { Carousel } from "react-bootstrap";
import me from "./img/me.jpeg";
import me2 from "./img/me2.jpeg";
import me3 from "./img/me3.jpeg";
import styles from './Page.module.scss'

export default function Slider() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className={styles.img} src={me} />
        </Carousel.Item>
        <Carousel.Item>
        <img className={styles.img} src={me2} />
        </Carousel.Item>
        <Carousel.Item>
        <img className={styles.img} src={me3} />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
