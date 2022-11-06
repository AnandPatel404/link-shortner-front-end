import React, { useEffect, useState } from "react";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import {
	analyticAuData,
	TrafficChannelDoughnutData,
	TrafficChannelDoughnutData2,
	TrafficChannelDoughnutData3,
	TrafficChannelDoughnutData4,
	/* 	deviceStatusData,
	deviceStatusDataSet2,
	deviceStatusDataSet3,
	deviceStatusDataSet4, */
} from "./AnalyticsData";

export const ActiveUserBarChart = () => {
	return (
		<Bar
			data={analyticAuData}
			options={{
				legend: {
					display: false,
					labels: false,
				},
				maintainAspectRatio: false,
				tooltips: {
					enabled: true,
					callbacks: {
						title: function (tooltipItem, data) {
							return false; //data['labels'][tooltipItem[0]['index']];
						},
						label: function (tooltipItem, data) {
							return data.datasets[tooltipItem.datasetIndex]["data"][tooltipItem["index"]];
						},
					},
					backgroundColor: "#eff6ff",
					titleFontSize: 9,
					titleFontColor: "#6783b8",
					titleMarginBottom: 6,
					bodyFontColor: "#9eaecf",
					bodyFontSize: 9,
					bodySpacing: 4,
					yPadding: 6,
					xPadding: 6,
					footerMarginTop: 0,
					displayColors: false,
				},
				scales: {
					yAxes: [
						{
							display: true,
							ticks: {
								beginAtZero: false,
								fontSize: 12,
								fontColor: "#9eaecf",
								padding: 0,
								display: false,
								stepSize: 300,
							},
							gridLines: {
								color: "rgba(82, 100, 132, 0.2)",
								tickMarkLength: 0,
								zeroLineColor: "rgba(82, 100, 132, 0.2)",
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
		></Bar>
	);
};

export const WPCharts = ({ data, className }) => {
	return (
		<Line
			className={className}
			data={data}
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
					callbacks: {
						title: function (tooltipItem, data) {
							return false; //data['labels'][tooltipItem[0]['index']];
						},
						label: function (tooltipItem, data) {
							return data.datasets[tooltipItem.datasetIndex]["data"][tooltipItem["index"]];
						},
					},
					backgroundColor: "#eff6ff",
					titleFontSize: 9,
					titleFontColor: "#6783b8",
					titleMarginBottom: 6,
					bodyFontColor: "#9eaecf",
					bodyFontSize: 9,
					bodySpacing: 4,
					yPadding: 6,
					xPadding: 6,
					footerMarginTop: 0,
					displayColors: false,
				},
				scales: {
					yAxes: [
						{
							display: false,
							ticks: {
								beginAtZero: false,
								fontSize: 12,
								fontColor: "#9eaecf",
								padding: 0,
								stepSize: 300,
							},
							gridLines: {
								color: "rgba(82, 100, 132, 0.2)",
								tickMarkLength: 0,
								zeroLineColor: "rgba(82, 100, 132, 0.2)",
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
								zeroLineColor: "rgba(82, 100, 132,0.2)",
								offsetGridLines: true,
							},
						},
					],
				},
			}}
		></Line>
	);
};

export const TCDoughnut = ({ state, className }) => {
	const [data, setData] = useState(TrafficChannelDoughnutData);
	useEffect(() => {
		if (state === "7") {
			setData(TrafficChannelDoughnutData2);
		} else if (state === "15") {
			setData(TrafficChannelDoughnutData3);
		} else {
			setData(TrafficChannelDoughnutData4);
		}
	}, [state]);
	return (
		<Doughnut
			className={className}
			data={data}
			options={{
				legend: {
					display: false,
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
	);
};
