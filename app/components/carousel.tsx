import * as React from "react";
import { Box, Stack, Typography } from "@mui/material";
import style from "../styles/Carousel.module.css";
import useMousePos from "../lib/carousel-scroll-action";
import Image from "next/image";

interface CarouselProps {
  children: React.ReactNode;
}

interface CarouselChildProps {
  color: string;
  text: string;
  image: string;
}

export const CarouselChild: React.FC<CarouselChildProps> = ({
  image,
  text,
  color,
}) => {
  return (
    <div>
      <img src={image} alt={text} className={style.carousel_child} />
    </div>
  );
};

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const { onMouseUp, onMouseDown, onMouseMove } = useMousePos();
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const ele_scroll = document.getElementsByClassName(
      `${style.carousel_base}`
    )[0] as HTMLDivElement;
    if (typeof window !== "undefined" && ref.current) {
      ref.current.addEventListener("mousedown", (e) => {
        console.log(e);
        onMouseDown(e, { base_ele: ele_scroll });
      });

      ref.current.addEventListener("mousemove", (e) =>
        onMouseMove(e, { base_ele: ele_scroll })
      );

      ref.current.addEventListener("mouseup", () =>
        onMouseUp({ base_ele: ele_scroll })
      );
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener("mouseup", (e) => {
          console.log(e);
          onMouseUp({ base_ele: ele_scroll });
        });
        ref.current.removeEventListener("mousemove", (e) =>
          onMouseMove(e, { base_ele: ele_scroll })
        );
        ref.current.removeEventListener("mousedown", (e) =>
          onMouseDown(e, { base_ele: ele_scroll })
        );
      }
    };
  }, []);

  return (
    <Box
      ref={ref}
      data-mouse-pos={"0"}
      data-last-mouse-pos={"0"}
      className={style.carousel_base}
    >
      {children}
    </Box>
  );
};

export default Carousel;
