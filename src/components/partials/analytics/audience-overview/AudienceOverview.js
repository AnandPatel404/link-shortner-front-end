import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Icon } from "../../../Component";

const AudienceOverview = ({ data }) => {
	const [auOverview, setAuOverview] = useState("month-1");
	const analyticOvDataSet2 = {
		labels: ["Tue Oct 18 2022", "Mon Oct 17 2022", "Sun Oct 16 2022", "Sat Oct 15 2022", "Fri Oct 14 2022", "Thu Oct 13 2022", "Wed Oct 12 2022"],
		dataUnit: "People",
		datasets: [
			{
				label: "Current Month",
				color: "#798bff",
				borderWidth: 2,
				lineTension: 0,
				dash: 0,
				borderColor: "#f4bd0e",
				backgroundColor: "#fef8e4",
				borderCapStyle: "square",
				pointBorderColor: "transparent",
				pointBackgroundColor: "transparent",
				pointHoverBackgroundColor: "#fff",
				pointHoverBorderColor: "#9d72ff",
				pointBorderWidth: 2,
				pointHoverRadius: 4,
				pointHoverBorderWidth: 2,
				pointRadius: 4,
				pointHitRadius: 4,
				data,
			},
		],
	};
	return (
		<React.Fragment>
			<div className="card-title-group pb-3 g-2">
				<div className="card-title card-title-sm">
					<h6 className="title">Audience Overview</h6>
					<p>How have your users, sessions, bounce rate metrics trended.</p>
				</div>
				<div className="card-tools shrink-0 d-none d-sm-block">
					<ul className="nav nav-switch-s2 nav-tabs bg-white">
						<li className="nav-item">
							<a
								href="#navitem"
								className={auOverview === "day-7" ? "nav-link active" : "nav-link"}
								onClick={(e) => {
									e.preventDefault();
									setAuOverview("day-7");
								}}
							>
								Last 7 days
							</a>
						</li>
						<li className="nav-item">
							<a
								href="#navitem"
								className={auOverview === "month-1" ? "nav-link active" : "nav-link"}
								onClick={(e) => {
									e.preventDefault();
									setAuOverview("month-1");
								}}
							>
								1 M
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="analytic-ov">
				<div className="analytic-data-group analytic-ov-group g-3">
					<div className="analytic-data analytic-ov-data">
						<div className="title">Users</div>
						<div className="amount">{auOverview === "month-1" ? "2.57" : "1.21"}K</div>
						<div className="change up">
							<Icon name="arrow-long-up"></Icon> {auOverview === "month-1" ? "12.31" : "5.21"}%
						</div>
					</div>
					<div className="analytic-data analytic-ov-data">
						<div className="title">Users</div>
						<div className="amount">{auOverview === "month-1" ? "28.25" : "10.25"}%</div>
						<div className="change down">
							<Icon name="arrow-long-down"></Icon> {auOverview === "month-1" ? "12.57" : "18.21"}%
						</div>
					</div>
					<div className="analytic-data analytic-ov-data">
						<div className="title">Users</div>
						<div className="amount">{auOverview === "month-1" ? "7m 28" : "2m 36"}s</div>
						<div className="change down">
							<Icon name="arrow-long-down"></Icon> {auOverview === "month-1" ? "0.35" : "1.21"}%
						</div>
					</div>
				</div>
				<div className="analytic-ov-ck">
					<Line
						className="analytics-line-large"
						data={analyticOvDataSet2}
						options={{
							legend: {
								display: false,
								labels: {
									boxWidth: 12,
									padding: 20,
									fontColor: "#6783b8",
								},
							},
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
							scales: {
								yAxes: [
									{
										display: true,
										ticks: {
											beginAtZero: true,
											fontSize: 12,
											fontColor: "#9eaecf",
											padding: 8,
											stepSize: 1000,
										},
										gridLines: {
											color: "rgba(82, 100, 132, 0.2)",
											tickMarkLength: 0,
											zeroLineColor: "rgba(82, 100, 132,0.2)",
										},
									},
								],
								xAxes: [
									{
										display: false,
										ticks: {
											fontSize: 12,
											fontColor: "#9eaecf",
											source: "auto",
											padding: 0,
										},
										gridLines: {
											color: "transparent",
											tickMarkLength: 0,
											zeroLineColor: "transparent",
											offsetGridLines: true,
										},
									},
								],
							},
						}}
					></Line>
				</div>
				<div className="chart-label-group ml-5">
					<div className="chart-label">01 Jan, 2020</div>
					<div className="chart-label d-none d-sm-block">{auOverview === "month-1" ? "15" : "4"} Jan, 2020</div>
					<div className="chart-label"> {auOverview === "month-1" ? "30" : "7"} Jan, 2020</div>
				</div>
			</div>
		</React.Fragment>
	);
};
export default AudienceOverview;
