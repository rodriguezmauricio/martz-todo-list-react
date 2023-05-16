import AddButton from "../buttons/AddButton";
import "./editTaskForm.css";

const EditTaskForm = ({
	handleSubmitTaskForm, // enviar a nova task editada
	editTaskForm, // estado do formulário
	setEditTaskForm, // setter do editTaskForm
}) => {
	const { id, task } = editTaskForm;
	return (
		<>
			<h3 style={{ marginBottom: "10rem" }}>Edit your task here</h3>
			<form onSubmit={(e) => handleSubmitTaskForm(e, id, task)} className="form" action="">
				<input
					className="edit-task-input"
					type="text"
					value={task}
					onChange={(e) => setEditTaskForm({ id, task: e.target.value })}
				/>
				<AddButton>Confirm change</AddButton>
			</form>
		</>
	);
};

export default EditTaskForm;
