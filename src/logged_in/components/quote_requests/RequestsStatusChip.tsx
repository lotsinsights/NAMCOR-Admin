import Chip from "@material-ui/core/Chip";
import { useState, useEffect } from "react";

interface Props {
  status: string;
}
/**
 * Set background color of the Chip
 * @param status is the current status of cart element
 * @param states which states are available for the status
 * @returns hex color as a string of the status
 */

const states = ["Approved", "Pending", "Rejected"];
const RequestsStatusChipColor = (props: Props) => {
  const { status } = props;
  const [color, setColor] = useState("#ccc");

  useEffect(() => {
    if (status === states[0]) {
      setColor("#219653");
    }
    if (status === states[1]) {
      setColor("#FFBA0E");
    }
    if (status === states[2]) {
      setColor("#ef0025");
    }
    if (status === states[3]) {
      setColor("#219653");
    }
    return () => {};
  }, [status]);

  return (
    <Chip
      label={status}
      style={{
        backgroundColor: color,
        color: "white",
      }}
    />
  );
};

export default RequestsStatusChipColor;
