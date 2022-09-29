import React from "react";
// import { SessionDoughnut } from "../../charts/analytics/AnalyticsCharts";
// import { DropdownToggle, DropdownMenu, UncontrolledDropdown, DropdownItem } from "reactstrap";
import { Doughnut } from "react-chartjs-2";
import { Icon } from "../../../Component";
import DashBoard from "../../../../zustand/DashBoard/userDashBoard";

const SessionDevice = () => {
	const { chart } = DashBoard((state) => ({
		chart: state.chart,
	}));
	const data = {
		labels: ["Desktop", "Mobile"],
		dataUnit: "People",
		legend: false,
		datasets: [
			{
				borderColor: "#fff",
				backgroundColor: ["#f1c40f", "#b8acff"],
				data: [chart.android, chart.desktop],
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
						<Icon style={{ color: "#798bff" }} name="monitor"></Icon>
						<div className="title">Desktop</div>
						<div className="amount"> {chart.desktop}%</div>
						{/* <div className="change up text-danger">
							<Icon name="arrow-long-up"></Icon>
							{sessionDevice === "7" ? "2.5" : sessionDevice === "15" ? "4.5" : "10.5"}%
						</div> */}
					</div>
					<div className="device-status-data">
						<Icon style={{ color: "#baaeff" }} name="mobile"></Icon>
						<div className="title">Mobile</div>
						<div className="amount"> {chart.android}%</div>
						{/* <div className="change up text-danger">
							<Icon name="arrow-long-up"></Icon>
							{sessionDevice === "7" ? "12.5" : sessionDevice === "15" ? "114.5" : "110.5"}%
						</div> */}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};
export default SessionDevice;
