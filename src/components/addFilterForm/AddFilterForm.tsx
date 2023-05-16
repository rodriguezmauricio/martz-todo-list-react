import { useState } from "react";

interface TaskFilter {
	color: string;
	filterName: string;
}

interface AddFilterFormProps {
	fecharModal: () => void;
	taskFilters: TaskFilter[];
	setTaskFilters: React.Dispatch<React.SetStateAction<TaskFilter[]>>;
}

const AddFilterForm: React.FC<AddFilterFormProps> = ({
	fecharModal,
	taskFilters,
	setTaskFilters,
}) => {
	const [taskFilterName, setTaskFilterName] = useState<TaskFilter>({ color: "", filterName: "" });

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (taskFilterName.filterName) {
			setTaskFilters([...taskFilters, taskFilterName]);
		}
	};
	return (
		<>
			<button onClick={fecharModal}>CLOSE</button>
			<form onSubmit={handleSubmit} className="add-filter-modal">
				<input
					type="text"
					placeholder="Filter name..."
					value={taskFilterName.filterName}
					onChange={(e) =>
						setTaskFilterName({
							color: "green",
							filterName: e.target.value,
						})
					}
				/>
				<button>Add Filter</button>
			</form>
		</>
	);
};

export default AddFilterForm;
