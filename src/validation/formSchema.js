import * as yup from 'yup'

export default yup.object().shape({
    first_name: yup.string()
        .required('A first name is required'),
    last_name: yup.string()
        .required('A last name is required.'),
    email: yup.string()
        .email('Please double check your email address')
        .required('Email address is required.'),
    password: yup.string()
        .required('Password is required'),
    terms: yup.boolean()
        .oneOf([true], 'Must Accept Terms and Conditions. It\'s cool, it doesn\'t actually exist'),
})
