import React, { useRef } from "react";
import styles from "./DraggableCarouselVerTwo.module.scss";
import { motion } from "framer-motion";

type OffsetVel = {
  offset: {
    x: number;
    y: number;
  };
  velocity: {
    x: number;
    y: number;
  };
};

const DraggableCarouselVerTwo = () => {
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    console.log(Math.abs(offset) * velocity);
    return Math.abs(offset) * velocity;
  };

  const checkSwipe = (e: any, { offset, velocity }: OffsetVel) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      paginate(1);
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1);
    }
  };

  const carouselRef = useRef(null);

  const paginate = (page: number) => {
    console.log("Paginate", page);
  };

  return (
    <motion.div
      ref={carouselRef}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(e, { offset, velocity }) =>
        checkSwipe(e, { offset, velocity })
      }
      className={styles.carousel}
    >
      <div className={styles.rectangle}></div>
      <div className={styles.rectangle}></div>
      <div className={styles.rectangle}></div>
      <div className={styles.rectangle}></div>
      <div className={styles.rectangle}></div>
      <div className={styles.rectangle}></div>
      <div className={styles.rectangle}></div>
      <div className={styles.rectangle}></div>
      <div className={styles.rectangle}></div>
      <div className={styles.rectangle}></div>
    </motion.div>
  );
};

export default DraggableCarouselVerTwo;
