import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalSlice";

function GoalItem({ goal }) {
  const dispatch = useDispatch();

  // Function to format the date to "MMM DD h:mmA" format
  const formatDateTime = (dateTimeString) => {
    const options = {
      month: "short", // Short month name (e.g., Jul)
      day: "numeric", // Numeric day (e.g., 26)
      hour: "numeric", // Numeric hour (e.g., 1)
      minute: "numeric", // Numeric minute (e.g., 18)
      hour12: true, // 12-hour format (e.g., 1:18pm)
    };
    return new Date(dateTimeString).toLocaleString("en-US", options);
  };

  return (
    <div className="goal">
      <div>{formatDateTime(goal.createdAt)}</div>
      <h2>{goal.text}</h2>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className="close">
        X
      </button>
    </div>
  );
}

export default GoalItem;
