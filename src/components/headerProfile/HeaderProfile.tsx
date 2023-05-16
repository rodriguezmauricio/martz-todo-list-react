import "./headerProfile.css";

const HeaderProfile = () => {
	return (
		<div className="hp-container">
			<img className="hp-image" src="https://picsum.photos/id/237/300/300" alt="" />

			<div className="hp-welcome-text">
				<h3>Remember nike</h3>
				<h2>Just do it!</h2>
			</div>
		</div>
	);
};

export default HeaderProfile;
