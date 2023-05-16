import TaskIcon from "../taskIcon/TaskIcon";
import "./taskButtons.css";

interface ITaskButtons {
	filterName: string;
	onClick: () => void;
	id: string;
	activeButton: string;
	setActiveButton: (id: string) => void;
}

const TaskButtons = ({ filterName, onClick, id, activeButton, setActiveButton }: ITaskButtons) => {
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
