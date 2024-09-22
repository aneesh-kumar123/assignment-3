// Create a Contact App with following entities as per the UML given in the example:
// User , Contacts and Contact Details
// User will have two roles: Admin or Staff
// Following are the features for Admin:
// CRUD on users
// Following are the features for Staff:
// CRUD on Contact and Contact Details

// If an entity is deleted, the app sets the isActive flag to false
// If isActive flag of user is false; he/she cannot perform CRUD on any entities
class ContactDetail {
  static #allcontactDetail = []
  static contactDetailId = 0

  //paramter in contructor is 
  constructor(contactId, type, value) {
    this.contactId = contactId
    this.type = type
    this.value = value
    this.isActive = true
    this.contactDetailId = ContactDetail.contactDetailId++

  }

  static validatePhone(value) {
    //validate phone number
    try {
      if (typeof value != "string") {
        throw new Error("Invalid phone number string")
      }
      if (value.length != 10) {
        throw new Error("Invalid phone number length")
      }
      return true


    }
    catch (error) {
      throw error
    }
  }
  static validateEmail(value) {
    try {
      if (typeof value != "string") {
        throw new Error("Invalid email")
      }
      if (!value.includes("@") && !value.includes(".")) {
        throw new Error("Invalid email")
      }
      return true


    }
    catch (error) {
      throw error
    }

  }

  static createContactDetail(contactId, type, value) {
    try {
      //validate contactid
      //validate type like phone or email
      //validate value if phone then function to validate number,if type email then validate email
      if (typeof contactId != "number") {
        throw new Error("contactId should be number")
      }
      if (typeof type != "string") {
        throw new Error("type should be string")
      }
      if (type != "phone" && type != "email") {
        throw new Error("Invalid type")
      }
      if (type === "phone") {
        ContactDetail.validatePhone(value)
      }
      if (type === "email") {
        ContactDetail.validateEmail(value)
      }

      let newContactDetail = new ContactDetail(contactId, type, value)
      if (newContactDetail == undefined) {
        throw new Error("Invalid contact detail")
      }
      ContactDetail.#allcontactDetail.push(newContactDetail)
      return newContactDetail
    }
    catch (error) {
      console.log(error)
    }

  }

  static getAllcontactDetail() {
    return ContactDetail.#allcontactDetail.filter(detail => detail.isActive)
  }
  static getContactDetailById(contactDetailId) {
    try {
      if (typeof contactDetailId != "number") {
        throw new Error("contactDetailId should be number")
      }
      let contactDetail = ContactDetail.#allcontactDetail.find(detail => detail.contactDetailId == contactDetailId && detail.isActive)
      if (contactDetail == undefined) {
        throw new Error("contactDetail not found")
      }
      return contactDetail
    }
    catch (error) {
      console.log(error)
    }
  }

  updatePhoneNumber(value) {
    try {
      this.validatePhoneNumber(value)
      this.value = value
    }
    catch (error) {
      console.log(error)
    }
  }

  updateEmail(value) {
    try {
      this.validateEmail(value)
      this.value = value
    }
    catch (error) {
      console.log(error)
    }
  }

  static updateContactDetail(contactDetailId, parameter, value) {
    try {
      //validate contactdetailId
      if (typeof contactDetailId != "number") {
        throw new Error("contactDetailId should be number")
      }
      if (contactDetailId < 0) {
        throw new Error("id should not be negative")
      }
      if (typeof parameter != "string") {
        throw new Error("parameter should be string")
      }
      let foundContactDetail = ContactDetail.getContactDetailById(contactDetailId)
      if (foundContactDetail == undefined) {
        throw new Error("contact not found");
      }
      //switch
      switch (parameter) {
        case "phone":
          foundContactDetail.updatePhoneNumber(value)
          break;
        case "email":
          foundContactDetail.updateEmail(value)
          break;
        default:
          throw new Error("parameter not found")
      }
    }
    catch (error) {
      console.log(error)
    }

  }

  static deleteContactDetail(contactDetailId) {
    try {
      //validate contactdetailId
      if (typeof contactDetailId != "number") {
        throw new Error("contactDetailId should be number")
      }
      if (contactDetailId < 0) {
        throw new Error("id should not be negative")
      }
      let foundContactDetail = ContactDetail.getContactDetailById(contactDetailId)
      if (foundContactDetail == undefined) {
        throw new Error("contact not found");
      }
      foundContactDetail.isActive = false;
    }
    catch (error) {
      console.log(error)
    }
  }
}

module.exports = ContactDetail;