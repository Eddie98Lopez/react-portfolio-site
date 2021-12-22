import * as Yup from 'yup'

const schema = Yup.object().shape({
    first: Yup.string()
            .required('Must enter value in first name field.')
            .min(2,'First name must be at least 2 characters long.'),

    last: Yup.string()
            .required('Must enter value in last name field')
            .min(2,'Last name must be at least 2 characters long.'),

    email: Yup.string()
                .email('Must enter valid email')
                .required(),
    text: Yup.string()
            .required('Must fill out text box field.'),
        date: Yup.string()

})

export default schema