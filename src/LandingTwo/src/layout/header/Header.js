import React from 'react';

const Header = (props) => {
	return (
		<header className={['header', props.className ? props.className : null].join(' ')} id={props.id} style={props.style}>
			{props.children}
		</header>
	);
};
const HeaderWrap = (props) => {
	return <div className={['header-wrap', props.className ? props.className : null].join(' ')}>{props.children}</div>;
};
const HeaderMain = (props) => {
	return <div className={['header-main', props.className ? props.className : null].join(' ')}>{props.children}</div>;
};
const HeaderContent = (props) => {
	return <div className={['header-content', props.className ? props.className : null].join(' ')}>{props.children}</div>;
};

const HeaderBrand = (props) => {
	return <div className={['header-brand', props.className ? props.className : null].join(' ')}>{props.children}</div>;
};

export { Header, HeaderMain, HeaderContent, HeaderBrand, HeaderWrap };
