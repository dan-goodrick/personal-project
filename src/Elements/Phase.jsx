import { Grid, Typography } from "@mui/material";
import { useDrop } from "react-dnd";

const Phase = ({ children, className, title }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: "Our first type",
    drop: () => ({ name: title }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const getBackgroundColor = () => {
    if (isOver) {
      if (canDrop) {
        return "rgb(188,251,255)";
      } else if (!canDrop) {
        return "rgb(255,188,188)";
      }
    } else {
      return "";
    }
  };

  return (
    <Grid
      ref={drop}
      align={"center"}
      direction="column"
      className={className}
      justifyContent="flex-start" 
      style={{ backgroundColor: getBackgroundColor() }}
    >
      <Typography variant="h5">{title}</Typography>
      {children}
    </Grid>
  );
};

export default Phase