import React, { useState, useEffect, useCallback } from "react";
import Head from "../../../layout/head/Head";
import Content from "../../../layout/content/Content";
import {
	Block,
	BlockHead,
	BlockBetween,
	BlockHeadContent,
	BlockTitle,
	Icon,
	PaginationComponent,
	DataTable,
	DataTableBody,
	DataTableHead,
	DataTableRow,
	DataTableItem,
} from "../../../components/Component";
import Loader from "../../Loader/Loader";
import userLinkClient from "../../../zustand/clientDetails/client";

export const ClientDetails = ({ match, history }) => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const [totalItems, setTotalItems] = useState(0);
	const [itemPerPage] = useState(30);
	const [currentPage, setCurrentPage] = useState(1);
	const { getLinkClient } = userLinkClient((state) => ({
		getLinkClient: state.getLinkClient,
	}));

	const getClientData = useCallback(async () => {
		const id = match.params.id;
		const page = match.params.page;
		const d = await getLinkClient(id, itemPerPage, page, setLoading);
		setData(d.results);
		setTotalItems(d.results.totalResults);
	}, [match.params.id, match.params.page, getLinkClient, itemPerPage]);

	useEffect(() => {
		getClientData();
	}, [getClientData]);

	// Change Page
	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
		history.push(`${process.env.PUBLIC_URL}/client-details/${match.params.id}/${pageNumber}`);
	};

	const currentItems = data;
	return (
		<React.Fragment>
			<Head title="Client Details"></Head>
			{loading ? (
				<div className="d-flex justify-content-center align-items-center" style={{ height: 100 + "vh" }}>
					<Loader />
				</div>
			) : (
				<Content>
					<BlockHead size="sm">
						<BlockBetween>
							<BlockHeadContent>
								<BlockTitle page>Client list</BlockTitle>
							</BlockHeadContent>
						</BlockBetween>
					</BlockHead>
					<Block>
						<DataTable className="card-stretch">
							<DataTableBody>
								<DataTableHead>
									<DataTableRow sm>
										<span className="font-weight-bold">IP</span>
									</DataTableRow>
									<DataTableRow sm>
										<span className="font-weight-bold">BROWSER & VERSION</span>
									</DataTableRow>
									<DataTableRow sm>
										<span className="font-weight-bold">OS & VERSION</span>
									</DataTableRow>
									<DataTableRow sm>
										<span className="d-none d-md-inline-block font-weight-bold">DEVICE</span>
									</DataTableRow>
									<DataTableRow sm>
										<span className="d-none d-md-inline-block font-weight-bold">Country</span>
									</DataTableRow>
									<DataTableRow sm>
										<span className="d-none d-md-inline-block font-weight-bold">Region</span>
									</DataTableRow>
									<DataTableRow sm>
										<span className="d-none d-md-inline-block font-weight-bold">City</span>
									</DataTableRow>
									<DataTableRow sm>
										<span className="d-none d-md-inline-block font-weight-bold">CLICKED AT</span>
									</DataTableRow>
								</DataTableHead>
								{currentItems &&
									currentItems.map((item, index) => {
										return (
											<DataTableItem key={item.id}>
												<DataTableRow sm>
													<span className="font-weight-bold">{item.client_ip}</span>
												</DataTableRow>
												<DataTableRow sm>
													<span className="d-flex font-weight-bold">{item.client_browser}</span>
												</DataTableRow>
												<DataTableRow sm>
													<span className="d-flex font-weight-bold">{item.client_os}</span>
												</DataTableRow>
												<DataTableRow sm>
													<span className="d-none d-md-inline-block font-weight-bold">{item.client_device}</span>
												</DataTableRow>
												<DataTableRow sm>
													<span className="tb-sub d-none d-md-inline-block font-weight-bold">{item.client_country}</span>
												</DataTableRow>
												<DataTableRow sm>
													<span className="tb-sub d-none d-md-inline-block font-weight-bold">{item.client_region}</span>
												</DataTableRow>
												<DataTableRow sm>
													<span className="tb-sub d-none d-md-inline-block font-weight-bold">{item.client_city}</span>
												</DataTableRow>
												<DataTableRow sm>
													<span className="tb-sub d-none d-md-inline-block font-weight-bold">
														{new Date(item.createdAt).toLocaleString()}
													</span>
												</DataTableRow>
											</DataTableItem>
										);
									})}
							</DataTableBody>
							<div className="card-inner">
								{currentItems?.length > 0 ? (
									<PaginationComponent
										itemPerPage={itemPerPage}
										totalItems={totalItems}
										paginate={paginate}
										currentPage={currentPage}
									/>
								) : (
									<div className="text-center d-flex flex-column">
										<span className="text-silent">No Data found</span>
										<div style={{ fontSize: 4 + "rem" }}>
											<Icon name="inbox"></Icon>
										</div>
									</div>
								)}
							</div>
						</DataTable>
					</Block>
				</Content>
			)}
		</React.Fragment>
	);
};

export default ClientDetails;
