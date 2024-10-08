
class Contact {
  static contactId = 0
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.isActive = true;
    this.contactDetail = [];
    this.contactId = Contact.contactId++;
  }
  
  static createContact(firstName, lastName) {
    try {
      if (firstName == "" || lastName == "") {
        throw new Error("firstName and lastName should not be empty");
      }
      if (firstName == lastName) {
        throw new Error("firstName and lastName should not be same");
      }
      let contact = new Contact(firstName, lastName);
      // Contact.#allcontact.push(contact);
      return contact

    }
    catch (error) {
      console.log(error)
    }

  }

  // static getAllContact() {
  //   return Contact.#allcontact.filter(contact => contact.isActive)
  // }
  // static getContactById(contId) {
  //   try {
  //     //VALIDATION
  //     if (contId < 0) {
  //       throw new Error("id should not be negative")
  //     }
  //     if (typeof contId != "number") {
  //       throw new Error("id should be number")

  //     }
  //     // let contact = User.contact.find(contact => contact.contactId == contId && contact.isActive);
  //     if (contact == undefined) {
  //       throw new Error("contact not found");
  //     }
  //     return contact;
  //   }
  //   catch (error) {
  //     console.log(error)
  //   }
  // }

  // updateContactDetailByContactId(contDetailId)
  // {
  //   try {
  //     if (typeof contDetailId != "number") {
  //       throw new Error("contactId is not number")
  //     }
      
  //     if(contDetailId<0 || this.contactDetail.length<contDetailId)
  //     {
  //       throw new Error("contactId is not valid")
        
  //     }
  //     //by filter find object
  //     for(let i=0;i<this.contactDetail.length;i++)
  //     {
  //      let tempContactDetail=this.contactDetail[i]
  //      if(tempContactDetail.contactDetailId==contDetailId)
  //      {
  //       tempContactDetail.updateContactDetail()
  //      }
  //     }


      
  //   }
  //   catch(error)
  //   {
  //     console.log(error)
  //   }
  // }

  getContactDetailById(contactDetailId)
  {
    try {
      if (typeof contactDetailId != "number") {
        throw new Error("contactDetailId is not number")
      }
      if(contactDetailId<0 || this.contactDetail.length<contactDetailId)
      {
        throw new Error("contactDetailId is not valid")

      }
      //by filter find object
      for(let i=0;i<this.contactDetail.length;i++)
      {
       let tempContactDetail=this.contactDetail[i]
       if(tempContactDetail.contactDetailId==contactDetailId)
       {
        return tempContactDetail
       }
      }
      throw new Error("id does not exit")
    }
    catch(error)
    {
      console.log(error)
    }
  }

  getAllContactDetails()
  {
    return this.contactDetail
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
   updateContactById(parameter, value) {
    try {
      //VALIDATION
     
      if (typeof parameter != "string") {
        throw new Error("parameter should be string")
      }
      // let foundContact = Contact.getContactById(contId)
      // if (foundContact == undefined) {
      //   throw new Error("contact not found");
      // }
      //switch case
      switch (parameter) {
        case "firstName":
          this.updateFirstName(value)
          break;
        case "lastName":
          this.updateLastName(value)
          break;
        case "isActive":
          this.updateIsActive(value)
          break;
        default:
          throw new Error("parameter not found")

      }

    }
    catch (error) {
      console.log(error)
    }
  }
  deleteContactById() {
   this.isActive=false
  }
}

module.exports = Contact;