
class ContactDetail {
  static #allcontactDetail = []
  static contactDetailId = 0

  constructor(contactId, type, value) {
    this.contactId = contactId
    this.type = type
    this.value = value
    this.isActive = true
    this.contactDetailId = ContactDetail.contactDetailId++

  }

  static validatePhone(value) {
    
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
      // ContactDetail.#allcontactDetail.push(newContactDetail)
      return newContactDetail
    }
    catch (error) {
      console.log(error)
    }

  }

  // static getAllcontactDetail() {
  //   return ContactDetail.#allcontactDetail.filter(detail => detail.isActive)
  // }
  // static getContactDetailById(contactDetailId) {
  //   try {
  //     if (typeof contactDetailId != "number") {
  //       throw new Error("contactDetailId should be number")
  //     }
  //     let contactDetail = ContactDetail.#allcontactDetail.find(detail => detail.contactDetailId == contactDetailId && detail.isActive)
  //     if (contactDetail == undefined) {
  //       throw new Error("contactDetail not found")
  //     }
  //     return contactDetail
  //   }
  //   catch (error) {
  //     console.log(error)
  //   }
  // }

  updatePhoneNumber(value) {
    try {
      ContactDetail.validatePhone(value)
      this.value = value
    }
    catch (error) {
      console.log(error)
    }
  }

  updateEmail(value) {
    try {
      ContactDetail.validateEmail(value)
      this.value = value
    }
    catch (error) {
      console.log(error)
    }
  }

   updateContactDetail(parameter, value) {
    try {
      //validate contactdetailId
      if (typeof parameter != "string") {
        throw new Error("parameter should be string")
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

   deleteContactDetail() {
    this.isActive=false

    
  }
}

module.exports = ContactDetail;