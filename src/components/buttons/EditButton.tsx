import { GoPencil } from "react-icons/go";
import "./editButton.css";

interface IEditButton {
	itemId: string;
	item: {
		id: string;
		task: string;
		completed: boolean;
	};
	handleEditButton: (id: string, newTask: string) => void;
}

const EditBtn = ({ itemId, handleEditButton, item }: IEditButton) => {
	return (
		<button onClick={() => handleEditButton(itemId, item.task)} className="btn edit-btn">
			<GoPencil size={15} />
		</button>
	);
};

export default EditBtn;
