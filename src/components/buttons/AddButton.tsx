import "./addButton.css";

const AddButton = ({ children }: { children: string }) => {
	return <button className="add-button">{children}</button>;
};

export default AddButton;
