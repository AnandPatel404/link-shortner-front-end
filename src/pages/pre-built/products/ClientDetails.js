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
import userLinkClient from "../../../zustand/clientDetails/client";

export const ClientDetails = ({ match }) => {
	const [data, setData] = useState([]);
	const [link, setLink] = useState({});
	const [itemPerPage] = useState(7);
	const [currentPage, setCurrentPage] = useState(1);
	const { getLinkClient } = userLinkClient((state) => ({
		getLinkClient: state.getLinkClient,
	}));

	const getClientData = useCallback(async () => {
		const id = match.params.id;
		const data = await getLinkClient(id);
		console.log(data.data.data.linkId);
		setData(data.data.data.clientId);
		setLink(data.data.data.linkId);
	}, [getLinkClient, match.params.id]);

	useEffect(() => {
		getClientData();
	}, [getClientData]);

	const currentItems = data;

	// Change Page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<React.Fragment>
			<Head title="Project List"></Head>
			<Content>
				<BlockHead size="sm">
					<BlockBetween>
						<BlockHeadContent>
							<BlockTitle page>Client list of</BlockTitle>
							<BlockTitle page>
								<strong className="text-primary small">{link.link_title}</strong>
							</BlockTitle>
						</BlockHeadContent>
					</BlockBetween>
				</BlockHead>
				<Block>
					<DataTable className="card-stretch">
						<DataTableBody>
							<DataTableHead>
								<DataTableRow className="nk-tb-col-check">no</DataTableRow>
								<DataTableRow sm>
									<span>IP</span>
								</DataTableRow>
								<DataTableRow>
									<span className="d-none d-md-inline-block">BROWSER & VERSION</span>
								</DataTableRow>
								<DataTableRow>
									<span className="d-none d-md-inline-block">OS & VERSION</span>
								</DataTableRow>
								<DataTableRow>
									<span className="d-none d-md-inline-block">DEVICE</span>
								</DataTableRow>
								<DataTableRow>
									<span className="d-none d-md-inline-block">CLICKED AT</span>
								</DataTableRow>
							</DataTableHead>
							{currentItems.length > 0
								? currentItems.map((item, index) => {
										return (
											<DataTableItem key={item.id}>
												<DataTableRow className="nk-tb-col-check">
													<span>{index + 1}</span>
												</DataTableRow>
												<DataTableRow sm>
													<span>
														<Icon name="linux-server" className="h5"></Icon>
														{item.client_ip}
													</span>
												</DataTableRow>
												<DataTableRow>
													<span className="d-flex">
														<Icon name={`b-${item.client_browser?.split(" ")[0].toLowerCase()}`} className="h5"></Icon>
														{item.client_browser}
													</span>
												</DataTableRow>
												<DataTableRow>
													<span className="d-flex">
														<Icon name={`${item.client_os?.split(" ")[0].toLowerCase()}`} className="h5"></Icon>
														{item.client_os}
													</span>
												</DataTableRow>
												<DataTableRow>
													<span>{item.client_device}</span>
												</DataTableRow>
												<DataTableRow>
													<span className="tb-sub d-none d-md-inline-block">
														{new Date(item.createdAt).toLocaleString()}
													</span>
												</DataTableRow>
											</DataTableItem>
										);
								  })
								: null}
						</DataTableBody>
						<div className="card-inner">
							{data.length > 0 ? (
								<PaginationComponent
									itemPerPage={itemPerPage}
									totalItems={data.length}
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
		</React.Fragment>
	);
};

export default ClientDetails;
