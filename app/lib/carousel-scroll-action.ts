import style from "../styles/Carousel.module.css";

const useMousePos = () => {
  //Record mouse down pos
  const onMouseDown = (e: MouseEvent, { base_ele }) => {
    base_ele.setAttribute("data-mouse-down-pos", e.clientX.toString());
  };

  //Animate on mouse move
  const onMouseMove = (e: MouseEvent, { base_ele }) => {
    if (base_ele.getAttribute("data-mouse-down-pos") === "0") return;

    const mouseDelta =
        parseFloat(base_ele.getAttribute("data-mouse-down-pos")) - e.clientX,
      maxDelta = window.innerHeight;

    const rawPercentage = (mouseDelta / maxDelta) * -100,
      unConstrainedPercentage =
        rawPercentage +
        parseFloat(base_ele.getAttribute("data-last-mouse-pos"));

    const percentage = Math.max(Math.min(0, unConstrainedPercentage), -100);

    base_ele.setAttribute("curr", percentage.toString());

    base_ele.animate(
      {
        transform: `translate(calc(${percentage + 30}%), 10%)`,
      },
      {
        duration: 1200,
        fill: "forwards",
      }
    );
    for (const child of base_ele.querySelectorAll(`.${style.carousel_child}`)) {
      child.animate(
        {
          objectPosition: `${percentage + 100}% center`,
        },
        {
          duration: 1200,
          fill: "forwards",
        }
      );
    }
  };

  //Set values on mouse up
  const onMouseUp = ({ base_ele }) => {
    base_ele.setAttribute("data-mouse-down-pos", "0");
    base_ele.setAttribute(
      "data-last-mouse-pos",
      base_ele.getAttribute("curr")!
    );
  };

  return { onMouseUp, onMouseDown, onMouseMove };
};

export default useMousePos;
