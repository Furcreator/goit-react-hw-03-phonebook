import { Formik } from "formik";
import { Component } from "react";
import { nanoid } from "nanoid";
import * as Yup from 'yup';
import { Forms, Label, Input, Button, ErrorMess } from "./Phonebook.styled";
import PropTypes from 'prop-types';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;



const schema = Yup.object().shape({
    name: Yup.string().required(),
    number: Yup.string()
    .required()
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(10, "too short")
    .max(10, "too long"),
})

class PhoneBook extends Component {
    state = {
        name: '',
        number: '',
    }
    handleSubmit = (values, { resetForm }) => {
        const newContact = {
            id: nanoid(4),
            ...values
        }
    this.props.addContact(newContact);
        resetForm();
    };
    render() {
        return (
            <Formik initialValues={this.state} onSubmit={this.handleSubmit} validationSchema={schema}>
                <Forms autoComplete="off">
                    <Label htmlFor="name">
                        Name
                        <Input type='text' name='name' placeholder='Your name' />
                        <ErrorMess component="div" name='name'/>
                    </Label>
                    <Label htmlFor="number">
                        Number
                        <Input type='tel' name='number' placeholder='Your number'/>
                        <ErrorMess component="div" name='number'/>
                    </Label>
                    <Button type="submit">Add contact</Button>
                </Forms>
            </Formik>
        )
    }

}

export default PhoneBook

PhoneBook.propTypes = {
    name: PropTypes.string,
    number: PropTypes.number,
    handleSubmit: PropTypes.func,
    addContact: PropTypes.func,
}