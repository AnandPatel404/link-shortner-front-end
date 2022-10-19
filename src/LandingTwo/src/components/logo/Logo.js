import React from 'react';

const Logo = (props) => {
	return (
		<a href={process.env.PUBLIC_URL + props.to} className='logo-link'>
			<img className='logo-light logo-img' src={props.light} alt='logo' width={150} />
			<img className='logo-dark logo-img' src={props.dark} alt='logo dark' width={150} />
		</a>
	);
};

const BrandLogo = ({ src, alt, ...props }) => {
	return (
		<div className={['brand-item', props.className ? props.className : null].join(' ')}>
			<img src={src} alt={alt} />
		</div>
	);
};

export { Logo, BrandLogo };
