import * as yup from "yup";

export const bookViewingSchema = yup.object().shape({
	name: yup
		.string()
		.min(3, "Your name must have atleast 3 characters")
		.required("Please enter name of your full name"),
	number: yup
		.string()
		.min(25, "Project description must have atleast 25 characters")
		.required("Please enter a valid phone number"),
	email: yup.string().required("Please enter duration"),
    time: yup.string().required
});