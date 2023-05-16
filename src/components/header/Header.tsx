import "./header.css";

interface IHeader {
	taskList: object[];
}

const Header = ({ taskList }: IHeader) => {
	return (
		<div className="header">
			<h1>My main focus today is</h1>
			<h3>Items:{taskList.length}</h3>
		</div>
	);
};

export default Header;
