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


export const contactSchema = yup
.object({
    email: yup.string().required('email is required').email("invalid email format"),
    name: yup.string().required("name is required"),
    mobileNumber: yup.string().required("mobile number is required").max(11, "max lenght of phone number should be at least 10"),
    description: yup.string().required("message is required"),
})
.required()




export const fundSchema = yup
.object({
    fullname: yup.string().required("name is required"),
    email: yup.string().required('email is required').email("invalid email format"),
    fundingpurpose: yup.string().required("pick an option").oneOf(["Business Expansion", "Equipment Purchase", "Research & Development", "Working Capital", "Technology Adoption", "Others" ], "You must select an option!"),
    description: yup.string().required("description is required"),
})
.required()