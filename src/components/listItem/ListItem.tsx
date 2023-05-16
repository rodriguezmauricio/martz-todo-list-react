import "./listItem.css";
import RemoveBtn from "../buttons/RemoveBtn";
import CheckButton from "../buttons/CheckButton";
import EditButton from "../buttons/EditButton";

interface IListItem {
	item: {
		id: string;
		task: string;
		completed: boolean;
	};
	classname: string;
	handleEditButton: (id: string, task: string) => void;
	handleChecked: (id: string) => void;
	handleRemove: (id: string) => void;
	// editTaskForm: { id: string; task: string };
	// setEditTaskForm: Dispatch<SetStateAction<{ id: string; task: string }>>;
	// handleSubmitTaskForm: (e: React.FormEvent, id: string, alteredTask: string) => void;
	// handleEditTaskForm: () => void;
}

const ListItem: React.FC<IListItem> = ({
	item,
	classname,
	handleEditButton,
	handleChecked,
	handleRemove,
}: // editTaskForm,
// setEditTaskForm,
// handleSubmitTaskForm,
// handleEditTaskForm,
IListItem) => {
	return (
		<div className="list-container">
			<div className={classname}>{`${item.task}`}</div>
			<CheckButton
				handleChecked={handleChecked}
				item={item}
				// //pra editar o formulário
				// editTaskForm={editTaskForm}
				// setEditTaskForm={setEditTaskForm}
				// handleSubmitTaskForm={handleSubmitTaskForm}
				// handleEditTaskForm={handleEditTaskForm}
			/>
			<EditButton itemId={item.id} handleEditButton={handleEditButton} item={item} />
			<RemoveBtn itemId={item.id} handleRemove={handleRemove} />
		</div>
	);
};

export default ListItem;
