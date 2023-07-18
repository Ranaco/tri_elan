import * as React from "react";
import { Box, Stack, Typography } from "@mui/material";
import style from "../styles/Carousel.module.css";

interface CarouselProps {
  children: React.ReactNode;
}

interface CarouselChildProps {
  text: string;
  color: string;
}

export const CarouselChild: React.FC<CarouselChildProps> = ({
  text,
  color,
}) => {
  return <Box className={style.carousel_child}>Hello there</Box>;
};

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const baseRef = React.useRef<HTMLDivElement>(null);

  return (
    <Box className={style.carousel_base} ref={baseRef}>
      {children}
    </Box>
  );
};

export default Carousel;
