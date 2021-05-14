import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

interface Props {
  children: any;
}

const ContainterComp = (props: Props) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <div style={{ paddingTop: "5em" }}>{props.children}</div>
      </Container>
    </React.Fragment>
  );
};

export default ContainterComp;
