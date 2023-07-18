import { MotionDiv } from "./styled";

interface SectionProps {
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <MotionDiv
      initial={"init"}
      animate={"final"}
      exit={"exit"}
      variants={{
        init: {
          opacity: 0,
          y: 20,
        },
        final: {
          opacity: 1,
          y: 0,
        },
        exit: {
          opacity: 0,
          x: -0,
          y: 20,
        },
      }}
      transition={{
        duration: 0.5,
        delay: 0.3,
        type: "easeInOut",
      }}
      sx={{
        pt: "50px",
      }}
    >
      {children}
    </MotionDiv>
  );
};

export default Section;
