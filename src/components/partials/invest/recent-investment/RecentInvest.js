import React from "react";
import Icon from "../../../icon/Icon";
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import { DataTableHead, DataTableItem, DataTableRow } from "../../../table/DataTable";
import Button from "../../../button/Button";
import { Link } from "react-router-dom";

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
						<Link className="link" to={process.env.PUBLIC_URL + "/all-shorten-links"}>
							View All
						</Link>
					</div>
				</div>
			</div>
			<div className="nk-tb-list">
				<DataTableHead>
					<DataTableRow>
						<span>Real Link & title</span>{" "}
					</DataTableRow>
					<DataTableRow size="sm">
						<span>Shorten Link</span>
					</DataTableRow>
					<DataTableRow size="lg">
						<span>Date</span>
					</DataTableRow>
					<DataTableRow>
						<span>&nbsp;</span>
					</DataTableRow>
				</DataTableHead>
				{links.map((item) => {
					return (
						<DataTableItem key={item.id + "uuid"}>
							<DataTableRow>
								<div className="d-flex flex-column">
									<span className="tb-sub">{`${item.protocol}://${item.domain}/${item.backlink.slice(0, 60) + "..."}`}</span>
									<h6 className="my-1">{item.link_title ? item.link_title.slice(0, 60) + "..." : "No title"}</h6>
								</div>
							</DataTableRow>
							<DataTableRow size="sm">
								<div className="user-card">
									<div className="user-name d-flex align-items-center">
										<a className="tb-lead" href={`localhost:8000/${item.shorterLink}`} target="_blank" rel="noreferrer">
											{`localhost:8000/${item.shorterLink}`}
										</a>
										<Button onClick={() => navigator.clipboard.writeText(`localhost:8000/${item.shorterLink}`)}>copy</Button>
									</div>
								</div>
							</DataTableRow>
							<DataTableRow size="lg">
								<span className="tb-sub">{new Date(item.createdAt).toLocaleString()}</span>
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
