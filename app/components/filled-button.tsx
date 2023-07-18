import * as React from "react";
import { Button } from "@mui/material";
import { BsArrowRight } from "react-icons/bs";

interface FilledButtonProps {
  text: string;
  onClick: React.MouseEventHandler;
  props?: any;
}

const FilledButton: React.FC<FilledButtonProps> = ({
  text,
  onClick,
  props,
}) => {
  return (
    <Button
      sx={{
        pl: "20px",
        pr: "20px",
        background: "linear-gradient(to right, #10D6EF , #2EAEBE)",
        color: "white",
        borderRadius: "30px",
        fontSize: "1.1em",
        gap: "10px",
        ...props,
      }}
      variant="contained"
      onClick={onClick}
    >
      {text} <BsArrowRight />
    </Button>
  );
};

export default FilledButton;
