import { GoPlus } from "react-icons/go";
import "./addFilterButton.css";

interface IAddFilter {
	abrirModal: () => void;
}

const AddFilter = ({ abrirModal }: IAddFilter) => {
	return (
		<button
			className="add-filter-button"
			onClick={() => {
				abrirModal();
			}}
		>
			<GoPlus />
			<h4>AddFilter</h4>
		</button>
	);
};

export default AddFilter;
