import React from "react";
import svg from "./loading.svg";
function Loader() {
	return (
		<div className="d-flex justify-content-center align-items-center" style={{ height: 100 + "vh" }}>
			<div>
				<img src={svg} alt="" width={400} />
			</div>
			<div>
				<h4>loading...</h4>
			</div>
		</div>
	);
}

export default Loader;
