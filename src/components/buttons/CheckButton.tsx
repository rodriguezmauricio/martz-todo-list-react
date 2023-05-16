import { GoCheck } from "react-icons/go";
import "./checkButton.css";

interface IRemoveButton {
	handleChecked: (id: string) => void;
	item: {
		id: string;
	};
}

const CheckButton = ({ handleChecked, item }: IRemoveButton) => {
	return (
		<button onClick={() => handleChecked(item.id)} className="btn check-btn">
			<GoCheck size={15} />
		</button>
	);
};

export default CheckButton;
