import React, { useRef } from "react";
import styles from "./DraggableCarousel.module.scss";
import { motion } from "framer-motion";
import useElementSize from "../../hooks/useElementSize";

const DraggableCarousel = () => {
  const carouselRef = useRef(null);

  const { width: carouselWidth } = useElementSize(carouselRef);
  const dragConstrain = 1428 - carouselWidth;

  return (
    <motion.div
      ref={carouselRef}
      drag="x"
      dragConstraints={{ left: dragConstrain, right: 0 }}
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

export default DraggableCarousel;
