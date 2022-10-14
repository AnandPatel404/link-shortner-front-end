import React from "react";
import { Badge } from "reactstrap";
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
						<span>Real Link</span>{" "}
					</DataTableRow>
					<DataTableRow size="sm">
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
							<DataTableRow size="sm">
								<div className="user-card">
									<div className="user-name d-flex align-items-center">
										<spam className="tb-lead">{`localhost:8000/${item.shorterLink}`}</spam>
										<Button
											onClick={() => navigator.clipboard.writeText(`localhost:8000/${item.shorterLink}`)}
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
