import AddButton from "../buttons/AddButton";
import "./editTaskForm.css";

interface IEditTaskForm {
	handleSubmitTaskForm: (e: React.FormEvent, id: string, task: string) => void;
	editTaskForm: { id: string; task: string };
	setEditTaskForm: ({ id, task }: { id: string; task: string }) => void;
}

const EditTaskForm = ({
	handleSubmitTaskForm, // enviar a nova task editada
	editTaskForm, // estado do formulário
	setEditTaskForm, // setter do editTaskForm
}: IEditTaskForm) => {
	return (
		<>
			<h3 style={{ marginBottom: "10rem" }}>Edit your task here</h3>
			<form
				onSubmit={(e) => handleSubmitTaskForm(e, editTaskForm.id, editTaskForm.task)}
				className="form"
				action=""
			>
				<input
					className="edit-task-input"
					type="text"
					value={editTaskForm.task}
					onChange={(e) => setEditTaskForm({ id: editTaskForm.id, task: e.target.value })}
				/>
				<AddButton>Confirm change</AddButton>
			</form>
		</>
	);
};

export default EditTaskForm;
