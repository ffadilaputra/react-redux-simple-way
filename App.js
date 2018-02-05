import React, { Component } from 'react'
import { connect } from 'react-redux'

import ContactList from './components/ContactList'
import ContactItem from './components/ContactItem'

import { addContact , removeContact } from './states/actions'

class App extends Component {

  constructor(props){
      super(props);
      
      this.state = {
        name : "",
        phone : ""
      }
  }

  render() {

    const { name , phone } = this.state
    const { contacts , addNewContact , removeExitingContax } = this.props

    return (
      
      <div className="App">
      { console.log(this.props) }
        <div>
          <input
            type="text"
            value={name}
            onChange={ event => this.setState({ name : event.target.value }) }
            placeholder="Name "
          />
          <br/>
          <input
            type="text"
            value={phone}
            onChange={ event => this.setState({ phone : event.target.value }) }
            placeholder="Phone "
          />
          <button
            type="button"
            onClick= { ()=> {
              if(!name || !phone){
                alert("Field Cannot be Empty")
              return
              }
              this.setState({ name:"",phone:"" })
              addNewContact({ name,phone})
            }}
          >
          Addd New
          </button>
        </div>

        <ContactList>
            { contacts.map(contact => {
                return(
                  <ContactItem
                      key = {contact.id}
                      name = { contact.name}
                      phone = { contact.phone}
                      onClickDelete = { ()=> removeExitingContax(contact.id)}
                  />
                )
            })}
        </ContactList>    
      </div>
    );
  }
}

const mapStateToProps = ({ contacts }) => ({
  contacts
})

const mapDispatchToProps = dispatch => ({
    addNewContact : contact => {
      dispatch(addContact(contact))
    },
    removeExitingContax : contactID => {
      dispatch(removeContact(contactID))
    }
  
  })



export default connect(mapStateToProps,mapDispatchToProps) (App)
