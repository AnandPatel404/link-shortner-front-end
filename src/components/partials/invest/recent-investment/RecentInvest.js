import React from "react";
import { Badge } from "reactstrap";
import { DataTableHead, DataTableItem, DataTableRow } from "../../../table/DataTable";
import Button from "../../../button/Button";
import { Link } from "react-router-dom";

const RecentInvest = ({ links }) => {
	console.log(links);
	return (
		<React.Fragment>
			{" "}
			<div className="card-inner border-bottom">
				<div className="card-title-group">
					<div className="card-title">
						<h6 className="title">Recent Shorten Link</h6>
					</div>
					<div className="card-tools">
						<Link className="link" to={process.env.PUBLIC_URL + "/all-links"}>
							View All
						</Link>
					</div>
				</div>
			</div>
			<div className="nk-tb-list">
				<DataTableHead>
					<DataTableRow>
						<span>Real Link</span>{" "}
					</DataTableRow>
					<DataTableRow>
						<span>Shorten Link</span>
					</DataTableRow>
					<DataTableRow size="sm">
						<span>Link status</span>
					</DataTableRow>
					<DataTableRow size="lg">
						<span>Date</span>
					</DataTableRow>
				</DataTableHead>
				{links.map((item) => {
					return (
						<DataTableItem key={item.id}>
							<DataTableRow>
								<Link to={`${process.env.PUBLIC_URL}/link/${item.id}`}>
									<div style={{ cursor: "pointer" }}>
										<h6 className="my-1">{`${item.protocol}://${item.domain}/${item.backlink?.slice(0, 20) + "..."}`}</h6>
									</div>
								</Link>
							</DataTableRow>
							<DataTableRow>
								<div className="user-card">
									<div className="user-name d-flex flex-column flex-md-row align-items-center">
										<spam className="tb-lead">{`${item.coustomDomain?.domain ? item.coustomDomain?.domain : "shortedurl.link"}/${
											item.shorterLink
										}`}</spam>
										<Button
											onClick={() =>
												navigator.clipboard.writeText(
													`${item.coustomDomain?.domain ? item.coustomDomain?.domain : "shortedurl.link"}/${
														item.shorterLink
													}`
												)
											}
											className="btn-dim mx-2 btn-primary px-3 py-1"
										>
											copy
										</Button>
									</div>
								</div>
							</DataTableRow>
							<DataTableRow size="sm">
								<Badge size="sm" color={item.link_status === "Enable" ? "outline-success" : "outline-danger"} className="badge-dim">
									{item.link_status}
								</Badge>
							</DataTableRow>
							<DataTableRow size="lg">
								<span className="tb-sub">{new Date(item.createdAt).toLocaleString()}</span>
							</DataTableRow>
						</DataTableItem>
					);
				})}
			</div>
		</React.Fragment>
	);
};

export default RecentInvest;
