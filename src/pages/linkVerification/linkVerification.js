import React, { useState, useEffect, useCallback } from "react";
import Content from "../../layout/content/Content";
import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockBetween } from "../../components/Component";
import userFunctionalityLink from "../../zustand/fuctionalityLinks/functionaLityLink";
function LinkVerification({ match }) {
	const { verifyLinkReDirectPage } = userFunctionalityLink((state) => ({
		verifyLinkReDirectPage: state.verifyLinkReDirectPage,
	}));

	const [item, setItem] = useState({});

	const getData = useCallback(async () => {
		const id = match.params.id;
		const orderId = match.params.orderId;
		const data = await verifyLinkReDirectPage({ id, orderId });
		setItem(data.data);
	}, [match.params.id, match.params.orderId, verifyLinkReDirectPage]);

	useEffect(() => {
		getData();
	}, [getData]);

	return (
		<React.Fragment>
			{item !== null && item !== undefined ? (
				<React.Fragment>
					<Content page="component">
						<BlockHead size="lg" wide="sm">
							<BlockBetween>
								<BlockHeadContent>
									<BlockTitle tag="h2" className="fw-normal">
										{item.pageLinkTitle}
									</BlockTitle>
								</BlockHeadContent>
							</BlockBetween>
						</BlockHead>

						<Block size="lg">
							<iframe src={item.pageLink} frameborder="0" title={item.pageLinkTitle} width="100%" height="1000"></iframe>
						</Block>
					</Content>
				</React.Fragment>
			) : (
				""
			)}
		</React.Fragment>
	);
}

export default LinkVerification;
