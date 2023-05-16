import { GoTrashcan } from "react-icons/go";
import "./removeBtn.css";

interface RemoveButton {
	itemId: string;
	handleRemove: (arg: string) => void;
}

const RemoveBtn = ({ itemId, handleRemove }: RemoveButton) => {
	return (
		<button onClick={() => handleRemove(itemId)} className="btn remove-btn">
			<GoTrashcan size={15} />
		</button>
	);
};

export default RemoveBtn;
