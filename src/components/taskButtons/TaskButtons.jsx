import TaskIcon from "../taskIcon/TaskIcon";
import "./taskButtons.css";

const TaskButtons = ({ filterName, onClick, id, activeButton, setActiveButton }) => {
	return (
		<button
			onClick={() => {
				onClick();
				setActiveButton(id);
			}}
			className="task-buttons"
			style={{ fontWeight: activeButton === id ? "bold" : "" }}
		>
			<TaskIcon />
			{`${filterName}`}
		</button>
	);
};

export default TaskButtons;
