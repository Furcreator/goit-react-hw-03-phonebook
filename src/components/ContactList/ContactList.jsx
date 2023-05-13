import { List, Item } from "./ContactList.styled";
import { Button } from "components/Phonebook/Phonebook.styled";
import PropTypes from 'prop-types';
const ContactList = ({ contacts, deleteContact }) => {
    return (
        <List>
            {contacts.map(item => {
                return (
                    <Item key={item.id}>
                        <p>{item.name}: </p> <p>{item.number}</p>
                        <Button type="button" onClick={() => deleteContact(item.id)}>
                            Delete
                        </Button>
                    </Item>
                );
            })}
        </List>
    );
};
export default ContactList


ContactList.propTypes = {
    deleteContact: PropTypes.func.isRequired,
    contacts: PropTypes.array.isRequired,
  };