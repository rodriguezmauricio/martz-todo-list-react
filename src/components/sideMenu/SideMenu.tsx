import "./sideMenu.css";
import { GoChecklist } from "react-icons/go";
import { useState } from "react";

import HeaderProfile from "../headerProfile/HeaderProfile";
import TaskButtons from "../taskButtons/TaskButtons.jsx";

interface SideMenu {
	filter: string;
	setFilter: (arg: string) => void;
}

const SideMenu = ({ filter, setFilter }: SideMenu) => {
	const [activeButton, setActiveButton] = useState(1);

	return (
		<div className="side-container">
			<HeaderProfile />
			<div className="divider"></div>
			<div className="tasks-side-menu">
				<div className="tasks-icon">
					<GoChecklist size={30} color="rgb(0, 204, 211)" />{" "}
				</div>
				<div className="tasks-list-items">
					<h3>My Lists</h3>
					<TaskButtons
						id={1}
						activeButton={activeButton}
						setActiveButton={setActiveButton}
						filterName={"All Tasks"}
						onClick={() => setFilter("all")}
						filter={filter}
					/>
					<TaskButtons
						id={2}
						activeButton={activeButton}
						setActiveButton={setActiveButton}
						filterName={"Completed"}
						onClick={() => setFilter("completed")}
						filter={filter}
					/>
					<TaskButtons
						id={3}
						activeButton={activeButton}
						setActiveButton={setActiveButton}
						filterName={"To Do"}
						onClick={() => setFilter("incomplete")}
						filter={filter}
					/>
				</div>
			</div>
		</div>
	);
};

export default SideMenu;
