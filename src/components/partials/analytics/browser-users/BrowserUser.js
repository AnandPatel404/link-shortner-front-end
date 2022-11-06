import React, { useEffect, useState, useCallback } from "react";
import Icon from "../../../icon/Icon";
import Progress from "../../../progress/Progress";
import { Spinner } from "reactstrap";
import userLinkAnalysis from "../../../../zustand/linkAnaliysis/linkAnaliysis";
import { DataTableRow, DataTableHead, DataTableItem } from "../../../table/DataTable";

const BrowserUser = ({ id }) => {
	const { linkBrowserAnalysis } = userLinkAnalysis((state) => ({
		linkBrowserAnalysis: state.linkBrowserAnalysis,
	}));
	const [loading, setLoading] = useState(true);
	const [item, setItem] = useState([]);
	const getdata = useCallback(async () => {
		const data = await linkBrowserAnalysis(id, setLoading);
		setItem(data.data);
	}, [id, linkBrowserAnalysis]);
	useEffect(() => {
		getdata();
	}, [getdata]);
	return (
		<React.Fragment>
			{loading ? (
				<Spinner />
			) : (
				<React.Fragment>
					{" "}
					<div className="card-inner mb-n2">
						<div className="card-title-group">
							<div className="card-title card-title-sm">
								<h6 className="title">Browser Used by Users</h6>
							</div>
							{/* <UncontrolledDropdown className="drodown">
								<DropdownToggle className="dropdown-toggle dropdown-indicator btn btn-sm btn-outline-light btn-white">
									{browser} Days
								</DropdownToggle>
								<DropdownMenu right className="dropdown-menu-xs">
									<ul className="link-list-opt no-bdr">
										<li className={browser === "7" ? "active" : ""}>
											<DropdownItem
												href="#dropdownitem"
												onClick={(e) => {
													e.preventDefault();
													setBrowser("7");
												}}
											>
												<span>7 Days</span>
											</DropdownItem>
										</li>
										<li className={browser === "15" ? "active" : ""}>
											<DropdownItem
												href="#dropdownitem"
												onClick={(e) => {
													e.preventDefault();
													setBrowser("15");
												}}
											>
												<span>15 Days</span>
											</DropdownItem>
										</li>
										<li className={browser === "30" ? "active" : ""}>
											<DropdownItem
												href="#dropdownitem"
												onClick={(e) => {
													e.preventDefault();
													setBrowser("30");
												}}
											>
												<span>30 Days</span>
											</DropdownItem>
										</li>
									</ul>
								</DropdownMenu>
							</UncontrolledDropdown> */}
						</div>
					</div>
					<div className="nk-tb-list is-loose">
						<DataTableHead>
							<DataTableRow>
								<span>Browser</span>
							</DataTableRow>
							<DataTableRow>
								<span>% Users</span>
							</DataTableRow>
						</DataTableHead>
						{item.length > 0
							? item.map((item) => {
									return (
										<DataTableItem key={item.id}>
											<DataTableRow>
												<div className="icon-text">
													<Icon name={`b-${item.name.toLowerCase()}`} />
													<span className="tb-lead">{item.name}</span>
												</div>
											</DataTableRow>
											<DataTableRow>
												<Progress value={item.Percentage} size="md" className="progress-alt bg-transparent" />
											</DataTableRow>
										</DataTableItem>
									);
							  })
							: ""}
					</div>
				</React.Fragment>
			)}
		</React.Fragment>
	);
};
export default BrowserUser;
