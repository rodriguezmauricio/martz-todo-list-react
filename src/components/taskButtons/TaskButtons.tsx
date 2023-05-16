import TaskIcon from "../taskIcon/TaskIcon";
import "./taskButtons.css";
import { Dispatch, SetStateAction } from "react";

interface ITaskButtons {
	filterName: string;
	onClick: () => void;
	id: number;
	activeButton: number;
	setActiveButton: Dispatch<SetStateAction<number>>;
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
