import AddButton from "../buttons/AddButton";
import "./listForm.css";

interface ListForm {
	task: string;
	setTask: (e: string) => void;
	handleAddTask: (e: React.FormEvent) => void;
}

const ListForm = ({ task, setTask, handleAddTask }: ListForm) => {
	return (
		<form onSubmit={handleAddTask} className="form">
			<input
				className="add-input"
				type="text"
				placeholder="Add task..."
				value={task}
				onChange={(t) => setTask(t.target.value)}
			/>

			<AddButton>Add Task</AddButton>
		</form>
	);
};

export default ListForm;
