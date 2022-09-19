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
			<h5>{props.msg}</h5>
			{/* <p>Your profile has been successfully updated.</p> */}
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

export const successToast = () => {
	toast.success("This is a note for success toast", {
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

export const errorToast = () => {
	toast.error("This is a note for error toast", {
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

export const messageToast = (msg) => {
	toast.success(<CustomToast msg={msg} />, {
		position: "top-right",
		autoClose: false,
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
