import React from "react";
import loader from "./1481.gif";
function Loader() {
	return (
		<div className="d-flex justify-content-center align-items-center" style={{ height: 100 + "vh" }}>
			<img src={loader} alt="" />
		</div>
	);
}

export default Loader;
