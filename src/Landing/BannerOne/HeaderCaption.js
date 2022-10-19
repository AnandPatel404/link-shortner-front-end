import React from "react";

const HeaderCaption = (props) => {
	return <div className={["header-caption", props.className ? props.className : null].join(" ")}>{props.children}</div>;
};
const HeaderTitle = (props) => {
	return <h1 className={["header-title", props.className ? props.className : null].join(" ")}>{props.children}</h1>;
};
const HeaderText = (props) => {
	return <div className={["header-text", props.className ? props.className : null].join(" ")}>{props.children}</div>;
};

const HeaderBadge = (props) => {
	return <div className={["header-badge", props.className ? props.className : null].join(" ")}>{props.children}</div>;
};

const Header = (props) => {
	return (
		<header className={["header", props.className ? props.className : null].join(" ")} id={props.id} style={props.style}>
			{props.children}
		</header>
	);
};
const HeaderWrap = (props) => {
	return <div className={["header-wrap", props.className ? props.className : null].join(" ")}>{props.children}</div>;
};
const HeaderMain = (props) => {
	return <div className={["header-main", props.className ? props.className : null].join(" ")}>{props.children}</div>;
};
const HeaderContent = (props) => {
	return <div className={["header-content", props.className ? props.className : null].join(" ")}>{props.children}</div>;
};

const HeaderBrand = (props) => {
	return <div className={["header-brand", props.className ? props.className : null].join(" ")}>{props.children}</div>;
};

export { HeaderCaption, HeaderTitle, HeaderText, HeaderBadge, Header, HeaderMain, HeaderContent, HeaderBrand, HeaderWrap };
