
class Contact {
  static #allcontact = []
  static contactId = 0
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.isActive = true;
    this.contactDetail = [];
    this.contactId = Contact.contactId++;
  }
  //operation perform on contact by staff
  static createContact(firstName, lastName) {
    try {
      //only staff can create contact


      if (firstName == "" || lastName == "") {
        throw new Error("firstName and lastName should not be empty");
      }
      if (firstName == lastName) {
        throw new Error("firstName and lastName should not be same");
      }
      let contact = new Contact(firstName, lastName);
      Contact.#allcontact.push(contact);
      return contact

    }
    catch (error) {
      console.log(error)
    }

  }

  static getAllContact() {
    return Contact.#allcontact.filter(contact => contact.isActive)
  }
  static getContactById(contId) {
    try {
      //VALIDATION
      if (contId < 0) {
        throw new Error("id should not be negative")
      }
      if (typeof contId != "number") {
        throw new Error("id should be number")

      }
      let contact = Contact.#allcontact.find(contact => contact.contactId == contId && contact.isActive);
      if (contact == undefined) {
        throw new Error("contact not found");
      }
      return contact;
    }
    catch (error) {
      console.log(error)
    }
  }
  updateFirstName(value) {
    try {
      if (typeof value != "string") {
        throw new Error("firstName is not string")
      }
      this.firstName = value


    }
    catch (error) {
      console.log(error)
    }

  }
  updateLastName(value) {
    try {
      if (typeof value != "string") {
        throw new Error("lastName is not string")
      }
      this.lastName = value


    }
    catch (error) {
      console.log(error)
    }
  }
  updateIsActive(value) {
    try {
      if (typeof value != "boolean") {
        throw new Error("isActive is not boolean")
      }
      this.isActive = value


    }
    catch (error) {
      console.log(error)
    }
  }
  static updateContactById(contId, parameter, value) {
    try {
      //VALIDATION
      if (contId < 0) {
        throw new Error("id should not be negative")
      }
      if (typeof contId != "number") {
        throw new Error("id should be number")

      }
      if (typeof parameter != "string") {
        throw new Error("parameter should be string")
      }
      let foundContact = Contact.getContactById(contId)
      if (foundContact == undefined) {
        throw new Error("contact not found");
      }
      //switch case
      switch (parameter) {
        case "firstName":
          foundContact.updateFirstName(value)
          break;
        case "lastName":
          foundContact.updateLastName(value)
          break;
        case "isActive":
          foundContact.updateIsActive(value)
          break;
        default:
          throw new Error("parameter not found")

      }

    }
    catch (error) {
      console.log(error)
    }
  }
  static deleteContactById(contId) {
    try {
      //VALIDATION
      if (contId == "") {
        throw new Error("contactId should not be empty");
      }
      if (contId < 0) {
        throw new Error("id should not be negative")
      }
      if (typeof contId != "number") {
        throw new Error("id should be number")

      }
      let foundContact = Contact.getContactById(contId)
      if (foundContact == undefined) {
        throw new Error("contact not found");
      }
      foundContact.updateIsActive(false)
      console.log("the userid", contId, "deleted successfully")
    }
    catch (error) {
      console.log(error)
    }
  }
}

module.exports = Contact;