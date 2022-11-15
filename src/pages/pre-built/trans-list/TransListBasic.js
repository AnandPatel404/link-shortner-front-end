import React, { useState, useEffect, useCallback } from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import { Card, Badge } from "reactstrap";
import {
	Block,
	BlockBetween,
	BlockHead,
	BlockHeadContent,
	BlockTitle,
	DataTableBody,
	DataTableHead,
	DataTableRow,
	DataTableItem,
} from "../../../components/Component";
import userActivity from "../../../zustand/DashBoard/userDashBoard";
const TransListBasic = () => {
	const [data, setData] = useState([]);

	const { getAllTransaction } = userActivity((state) => ({
		getAllTransaction: state.getAllTransaction,
	}));

	const getData = useCallback(async () => {
		const data = await getAllTransaction();
		setData(data.data.data);
	}, [getAllTransaction]);

	useEffect(() => {
		getData();
	}, [getData]);

	const currentItems = data;

	return (
		<React.Fragment>
			<Head title="Transaction Lists - Basic"></Head>
			<Content>
				<BlockHead size="sm">
					<BlockBetween>
						<BlockHeadContent>
							<BlockTitle page>Transaction History</BlockTitle>
						</BlockHeadContent>
					</BlockBetween>
				</BlockHead>

				<Block>
					<Card className="card-bordered">
						<div className="card-inner-group">
							<div className="card-inner p-0">
								<DataTableBody>
									<DataTableHead>
										<DataTableRow sm>
											<span>#</span>
										</DataTableRow>
										<DataTableRow>
											<span className="d-none d-md-inline-block">Plan Name</span>
										</DataTableRow>
										<DataTableRow>
											<span className="d-none d-md-inline-block">Amount</span>
										</DataTableRow>
										<DataTableRow>
											<span className="d-none d-md-inline-block">Paid At</span>
										</DataTableRow>
										<DataTableRow>
											<span className="d-none d-md-inline-block">status</span>
										</DataTableRow>
										<DataTableRow>
											<span className="d-none d-md-inline-block">Order Id</span>
										</DataTableRow>
										<DataTableRow>
											<span className="d-none d-md-inline-block">Transaction Id</span>
										</DataTableRow>
									</DataTableHead>
									{currentItems.length > 0
										? currentItems.map((item, index) => {
												return (
													<DataTableItem key={item.id}>
														<DataTableRow sm>{index + 1}</DataTableRow>
														<DataTableRow>{item.planId?.plan_name}</DataTableRow>
														<DataTableRow>${item.amount}</DataTableRow>
														<DataTableRow>
															<span className="tb-sub d-none d-md-inline-block">
																{new Date(item.createdAt).toLocaleString()}
															</span>
														</DataTableRow>
														<DataTableRow>
															<Badge
																size="sm"
																color={item.status === "Success" ? "outline-success" : "outline-danger"}
																className="badge-dim"
															>
																{item.status}
															</Badge>
														</DataTableRow>
														<DataTableRow>{item.orderId}</DataTableRow>
														<DataTableRow>{item.TransactionId}</DataTableRow>
													</DataTableItem>
												);
										  })
										: null}
								</DataTableBody>
							</div>
						</div>
					</Card>
				</Block>
			</Content>
		</React.Fragment>
	);
};

export default TransListBasic;
