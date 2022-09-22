import React from "react";
import Icon from "../../../icon/Icon";
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import { DataTableHead, DataTableItem, DataTableRow } from "../../../table/DataTable";

const RecentInvest = ({ links }) => {
	return (
		<React.Fragment>
			{" "}
			<div className="card-inner border-bottom">
				<div className="card-title-group">
					<div className="card-title">
						<h6 className="title">Recent Shorten Link</h6>
					</div>
					<div className="card-tools">
						<a
							href="#all"
							onClick={(ev) => {
								ev.preventDefault();
							}}
							className="link"
						>
							View All
						</a>
					</div>
				</div>
			</div>
			<div className="nk-tb-list">
				<DataTableHead>
					<DataTableRow>
						<span>Real Link</span>{" "}
					</DataTableRow>
					<DataTableRow size="sm">
						<span>Shorten Link</span>
					</DataTableRow>
					<DataTableRow size="lg">
						<span>Date</span>
					</DataTableRow>
					{/* <DataTableRow>
						<span>Amount</span>
					</DataTableRow> */}
					<DataTableRow>
						<span>&nbsp;</span>
					</DataTableRow>
				</DataTableHead>
				{links.map((item) => {
					return (
						<DataTableItem key={item.id}>
							<DataTableRow>
								<div className="align-center">
									<span className="tb-sub">
										{/* {item.protocol} <span className="d-none d-md-inline">- {`${item.domain}`}</span> */}
										{`${item.protocol}://${item.domain}/${item.backlink}/`}
									</span>
								</div>
							</DataTableRow>
							<DataTableRow size="sm">
								<div className="user-card">
									<div className="user-name">
										<a className="tb-lead" href={`localhost:8000/${item.shorterLink}`} target="_blank" rel="noreferrer">
											{`localhost:8000/${item.shorterLink}`}
										</a>
									</div>
								</div>
							</DataTableRow>
							<DataTableRow size="lg">
								<span className="tb-sub">{new Date(item.createdAt).toLocaleTimeString()}</span>
							</DataTableRow>

							<DataTableRow className="nk-tb-col-action">
								<UncontrolledDropdown>
									<DropdownToggle tag="a" className="text-soft dropdown-toggle btn btn-sm btn-icon btn-trigger">
										<Icon name="chevron-right"></Icon>
									</DropdownToggle>
									<DropdownMenu right className="dropdown-menu-xs">
										<ul className="link-list-plain">
											<li>
												<DropdownItem
													tag="a"
													href="#dropdownitem"
													onClick={(ev) => {
														ev.preventDefault();
													}}
												>
													View
												</DropdownItem>
											</li>
											<li>
												<DropdownItem
													tag="a"
													href="#dropdownitem"
													onClick={(ev) => {
														ev.preventDefault();
													}}
												>
													Delete Link
												</DropdownItem>
											</li>
										</ul>
									</DropdownMenu>
								</UncontrolledDropdown>
							</DataTableRow>
						</DataTableItem>
					);
				})}
			</div>
		</React.Fragment>
	);
};

export default RecentInvest;
