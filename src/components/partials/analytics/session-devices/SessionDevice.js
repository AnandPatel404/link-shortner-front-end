import React, { useCallback, useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import { Doughnut } from "react-chartjs-2";
import { Icon } from "../../../Component";
import userLinkAnalysis from "../../../../zustand/linkAnaliysis/linkAnaliysis";

const SessionDevice = ({ id }) => {
	const [loading, setLoading] = useState(true);
	const [item, setItem] = useState([0, 0]);
	const { linkTrafficAnalysis } = userLinkAnalysis((state) => ({
		linkTrafficAnalysis: state.linkTrafficAnalysis,
	}));

	const getData = useCallback(async () => {
		const data = await linkTrafficAnalysis(id, setLoading);
		console.log(data.data);
		setItem([data.data[0].Percentage, data.data[1].Percentage]);
	}, [id, linkTrafficAnalysis]);

	useEffect(() => {
		getData();
	}, [getData]);

	const data = {
		labels: ["Mobile", "Desktop"],
		dataUnit: "People",
		legend: false,
		datasets: [
			{
				borderColor: "#fff",
				backgroundColor: ["#f1c40f", "#b8acff"],
				data: [item[0], item[1]],
			},
		],
	};
	return (
		<React.Fragment>
			<div className="card-title-group">
				<div className="card-title card-title-sm">
					<h6 className="title">Allover Clicks</h6>
				</div>
			</div>
			{loading ? (
				<Spinner />
			) : (
				<div className="device-status my-auto">
					<div className="device-status-ck">
						<Doughnut
							data={data}
							options={{
								legend: {
									display: true,
								},
								rotation: -1.5,
								cutoutPercentage: 70,
								maintainAspectRatio: false,
								tooltips: {
									enabled: true,
									backgroundColor: "#fff",
									borderColor: "#eff6ff",
									borderWidth: 2,
									titleFontSize: 13,
									titleFontColor: "#6783b8",
									titleMarginBottom: 6,
									bodyFontColor: "#9eaecf",
									bodyFontSize: 12,
									bodySpacing: 4,
									yPadding: 10,
									xPadding: 10,
									footerMarginTop: 0,
									displayColors: false,
								},
							}}
						></Doughnut>
					</div>
					<div className="device-status-group">
						<div className="device-status-data">
							<Icon style={{ color: "#baaeff" }} name="mobile"></Icon>
							<div className="title">Mobile</div>
							<div className="amount"> {item[0]}%</div>
						</div>
						<div className="device-status-data">
							<Icon style={{ color: "#798bff" }} name="monitor"></Icon>
							<div className="title">Desktop</div>
							<div className="amount"> {item[1]}%</div>
						</div>
					</div>
				</div>
			)}
		</React.Fragment>
	);
};
export default SessionDevice;
