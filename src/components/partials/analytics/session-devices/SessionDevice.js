import React, { useEffect } from "react";
// import { SessionDoughnut } from "../../charts/analytics/AnalyticsCharts";
// import { DropdownToggle, DropdownMenu, UncontrolledDropdown, DropdownItem } from "reactstrap";
import { Doughnut } from "react-chartjs-2";
import { Icon } from "../../../Component";
import userDashBoard from "../../../../zustand/userDashBoard/userDashBoard";

const SessionDevice = () => {
	const { getUserChart, chart } = userDashBoard((state) => ({
		getUserChart: state.getUserChart,
		chart: state.chart,
	}));

	useEffect(() => {
		getUserChart();
	}, [getUserChart]);
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
				{/* <UncontrolledDropdown>
					<DropdownToggle className="dropdown-toggle dropdown-indicator btn btn-sm btn-outline-light btn-white">
						{sessionDevice} Days
					</DropdownToggle>
					<DropdownMenu right className=" dropdown-menu-xs">
						<ul className="link-list-opt no-bdr">
							<li className={sessionDevice === "7" ? "active" : ""}>
								<DropdownItem
									tag="a"
									href="#dropdownitem"
									onClick={(e) => {
										e.preventDefault();
										setSessionDevices("7");
									}}
								>
									<span>7 Days</span>
								</DropdownItem>
							</li>
							<li className={sessionDevice === "15" ? "active" : ""}>
								<DropdownItem
									tag="a"
									href="#dropdownitem"
									onClick={(e) => {
										e.preventDefault();
										setSessionDevices("15");
									}}
								>
									<span>15 Days</span>
								</DropdownItem>
							</li>
							<li className={sessionDevice === "30" ? "active" : ""}>
								<DropdownItem
									tag="a"
									href="#dropdownitem"
									onClick={(e) => {
										e.preventDefault();
										setSessionDevices("30");
									}}
								>
									<span>30 Days</span>
								</DropdownItem>
							</li>
						</ul>
					</DropdownMenu>
				</UncontrolledDropdown> */}
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
						<div className="amount"> {chart.android}%</div>
						{/* <div className="change up text-danger">
							<Icon name="arrow-long-up"></Icon>
							{sessionDevice === "7" ? "2.5" : sessionDevice === "15" ? "4.5" : "10.5"}%
						</div> */}
					</div>
					<div className="device-status-data">
						<Icon style={{ color: "#baaeff" }} name="mobile"></Icon>
						<div className="title">Mobile</div>
						<div className="amount"> {chart.desktop}%</div>
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
