import React from "react";
import { Icon } from "../../../components/Component";
import { toast } from "react-toastify";

const CloseButton = () => {
	return (
		<span className="btn-trigger toast-close-button" role="button">
			<Icon name="cross"></Icon>
		</span>
	);
};

const CustomToast = (props) => {
	return (
		<div className="toastr-text">
			<h5>{props.status}</h5>
			<p>{props.msg}</p>
		</div>
	);
};

export const execToast = (placement) => {
	toast.info(`This is a note for ${placement} toast`, {
		position: placement,
		autoClose: true,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: false,
		closeButton: <CloseButton />,
	});
};

export const successToast = (msg) => {
	toast.success(msg, {
		position: "top-center",
		autoClose: true,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: false,
		closeButton: <CloseButton />,
	});
};

export const warningToast = () => {
	toast.warning("This is a note for warning toast", {
		position: "bottom-right",
		autoClose: true,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: false,
		closeButton: <CloseButton />,
	});
};

export const infoToast = () => {
	toast.info("This is a note for info toast", {
		position: "bottom-right",
		autoClose: true,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: false,
		closeButton: <CloseButton />,
	});
};

export const errorToast = (msg, status) => {
	toast.error(<CustomToast msg={msg} status={status} />, {
		position: "top-center",
		autoClose: true,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: true,
		progress: false,
		closeButton: <CloseButton />,
	});
};

export const messageToast = (msg, status) => {
	toast.success(<CustomToast msg={msg} status={status} />, {
		position: "top-center",
		autoClose: true,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: false,
		closeButton: <CloseButton />,
	});
};

export const noIcon = () => {
	toast.success(<CustomToast />, {
		position: "bottom-right",
		autoClose: false,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: false,
		icon: false,
		closeButton: <CloseButton />,
		className: "mt-5 pt-5 mt-md-0  pt-md-0",
	});
};

export const darkVersion = () => {
	toast.dark("This note is for the dark version toast", {
		position: "bottom-right",
		autoClose: false,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: false,
		icon: false,
		closeButton: <CloseButton />,
	});
};
