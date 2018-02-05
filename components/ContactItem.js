import React from 'react'

const ContactItem = ({ name,phone,onClickDelete }) => (
    <div>
        <p>{ name }</p>
        <p>{ phone }</p>
        <button 
        type="button"
        onClick={ onClickDelete }
        >
        Delete
        </button>    
    </div>
)

export default ContactItem