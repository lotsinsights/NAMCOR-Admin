import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

export default function Main() {
  let history = useHistory();

  const handleClick = () => {
    history.push("/admin");
  };
  return (
    <div>
      <h1>Logged out</h1>
      <Button color="primary" variant="contained" onClick={handleClick}>
        Log in
      </Button>
    </div>
  );
}
