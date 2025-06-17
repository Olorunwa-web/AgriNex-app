import * as yup from "yup"



export const signinSchema = yup.object ({
    email: yup.string().required('Email is required').email("invalid email format"),
    password: yup.string().required('Password is required').min(8, "min lenght of password should be at least 8 charcters"),
})
.required()



export const signupSchema = yup
.object({
    email: yup.string().required('Email is required').email("invalid email format"),
    Name: yup.string().required("Name is required"),
    password: yup.string().required('Password is required').min(8, "min lenght of password should be at least 8 characters"),
    confirmPassword: yup.string().required('Confirm password is required').oneOf([yup.ref("password"), null], "Passwords must match"),
})
.required()