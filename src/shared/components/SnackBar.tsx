import MuiAlert from "@material-ui/lab/Alert";
import React, { ComponentType, createRef, forwardRef, useState } from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import Slide, { SlideProps } from "@material-ui/core/Slide";

type TransitionProps = Omit<SlideProps, "direction">;

function TransitionUp(props: TransitionProps) {
  return <Slide {...props} direction="up" />;
}

const Alert = forwardRef((props: any, ref) => (
  <MuiAlert {...props} ref={ref}>
    {props.children}
  </MuiAlert>
));

export default function SnackBar() {
  const [open, setOpen] = useState(false);
  const [transition, setTransition] = useState<
    ComponentType<TransitionProps> | undefined
  >(undefined);

  const handleClick = (Transition: ComponentType<TransitionProps>) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const ref = createRef();

  return (
    <div>
      <Button
        color="primary"
        variant="contained"
        onClick={handleClick(TransitionUp)}
      >
        Add to cart
      </Button>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={10000}
        TransitionComponent={transition}
        key={transition ? transition.name : ""}
        onClose={handleClose}
      >
        <Alert severity="success" ref={ref}>
          Product added to cart
        </Alert>
      </Snackbar>
    </div>
  );
}
