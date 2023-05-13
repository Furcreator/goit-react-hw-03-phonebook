import { Container } from "./App.styled";
import PhoneBook from "components/Phonebook/Phonebook";
import { Component } from "react";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import PropTypes from 'prop-types';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };


  addContact = newContact => {
    if (this.checkNameRepeat(newContact.name)) {
      alert(`${newContact.name} is already in contacts!`);
    } else {
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, newContact],
        };
      });
    }
  }


  deleteContact = index => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(element => element.id !== index),
      };
    });
  };

  checkNameRepeat = name => {
    let arrNameToLowerCase = this.state.contacts.map(item => item.name.toLowerCase());
    return arrNameToLowerCase.includes(name.toLowerCase());
  }
  handleChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  layOutFilteredContact = () => {
    return this.state.contacts.filter(item =>
      item.name
        .toLocaleLowerCase()
        .includes(this.state.filter.toLocaleLowerCase().trim())
    );
  };

  componentDidMount(){
    console.log("РЕНДЕР");
    const contacts = JSON.parse(localStorage.getItem(`contacts`))
    if(contacts){
      this.setState({contacts: contacts});
    }
   

  }
  componentDidUpdate(prevProps, prevState) {
    if(this.state.contacts !==  prevState.contacts) {
      console.log(`обновился`);
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  render() {
    return (
      <Container>
      <h2>PhoneBook</h2>
        <PhoneBook addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter handleChangeFilter={this.handleChangeFilter} value={this.state.filter}/>
        <ContactList contacts={this.layOutFilteredContact()} deleteContact={this.deleteContact} />
      </Container>
    );
  }
};


App.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.array,
  layOutFilteredContact: PropTypes.func,
  handleChangeFilter: PropTypes.func,
  checkNameRepeat: PropTypes.bool,
  deleteContact: PropTypes.func,
  addContact: PropTypes.func,
}