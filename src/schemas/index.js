import * as Yup from 'yup';

export const SignUpSchema = Yup.object({
    name: Yup.string().min(3).max(20).required("please enter your name"),
    email: Yup.string().email().required("please enter your email"),
    number: Yup.number().required("Please enter your number"),
    password: Yup.string().min(8).max(30).required("please enter your password"),
})


