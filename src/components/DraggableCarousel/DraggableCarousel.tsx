import React, { useRef } from "react";
import styles from "./DraggableCarousel.module.scss";
import { motion } from "framer-motion";
import useElementSize from "../../hooks/useElementSize";
import useWindowSize from "../../hooks/useWindowSize";

const DraggableCarousel = () => {
  const wrapperRef = useRef(null);
  const carouselRef = useRef(null);

  const { width: wrapperWidth } = useElementSize(wrapperRef);
  const { width: carouselWidth } = useElementSize(carouselRef);
  const { width: windowWidth } = useWindowSize();

  const dragConstrain = wrapperWidth - carouselWidth;

  return (
    <div
      ref={wrapperRef}
      className={`${styles.carouselWrapper} ${
        windowWidth <= 600 && styles.mobile
      }`}
    >
      <motion.div
        ref={carouselRef}
        drag={windowWidth <= 700 ? "x" : false}
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
    </div>
  );
};

export default DraggableCarousel;
