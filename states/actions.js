let currentID = 0

export let addContact = (contact) => {
    const { name , phone } = contact
    currentID +=1

    return {
        type : "ADD_CONTACT",
        id   : currentID,
        name,
        phone
    };

}

export let removeContact = (id) => {
    return {
        type : "REMOVE_CONTACT",
        id
    };
}



