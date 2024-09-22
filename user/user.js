// Create a Contact App with following entities as per the UML given in the example:
// User , Contacts and Contact Details
// User will have two roles: Admin or Staff
// Following are the features for Admin:
// CRUD on users
// Following are the features for Staff:
// CRUD on Contact and Contact Details
const Contact = require('../contact/contact.js');
const ContactDetail = require('../contactDetail/contactDetail.js');

// If an entity is deleted, the app sets the isActive flag to false
// If isActive flag of user is false; he/she cannot perform CRUD on any entities
class User {

  //create constructor with parameter userid,firstName,lastNmae,isAdmin,isActive,contact
  static #allusers = []
  static userId = 0
  constructor(firstName, lastNmae, isAdmin) {
    this.firstName = firstName;
    this.lastName = lastNmae;
    this.isAdmin = isAdmin;
    this.isActive = true;
    this.contact = [];
    this.userId = User.userId++;
  }

  static newAdmin(firstName, lastName) {
    //now perform try catch 
    try {
      //now validate firstname and lastname
      if (typeof firstName != "string") {
        throw new Error("firstname should be string")
      }
      if (typeof lastName != "string") {
        throw new Error("lastname should be string")
      }
      if (firstName == lastName) {
        throw new Error("firstname and lastname should not be same")
      }
      //now create new user
      let newAdmin = new User(firstName, lastName, true)
      //now add to allusers
      User.#allusers.push(newAdmin)
      return newAdmin
    }
    catch (error) {
      console.log(error)

    }
  }

  newStaff(firstName, lastName) {
    try {
      //check this is admin or not only admin can create newstaff
      if (this.isAdmin == false) {
        throw new Error("only admin can create new staff")
      }
      //now validate firstname and lastname
      if (typeof firstName != "string") {
        throw new Error("firstname should be string")
      }
      if (typeof lastName != "string") {
        throw new Error("lastname should be string")
      }

      if (firstName == lastName) {
        throw new Error("firstname and lastname should not be same")
      }
      //now create new user
      let newStaff = new User(firstName, lastName, false)
      //now add to allusers
      User.#allusers.push(newStaff)

      return newStaff
    }
    catch (error) {
      console.log(error)
    }
  }

  // check isadmin
  static isAdmin(user) {
    return user.isAdmin && user.isActive
  }
  // check isstaff
  static isStaff(user) {
    return user.isAdmin == false && user.isActive
  }

  //get all user considering only active user come
  static getAllUser() {
    return User.#allusers.filter(user => user.isActive)
  }

  //getuserbyId
  static getUserById(userId) {
    try {
      if (typeof userId != "number") {
        throw new Error("userid is not number")
      }
      if (userId < 0) {
        throw new Error("userid should be positive")
      }
      let user = User.#allusers.find(user => user.userId == userId)
      if (!user) {
        throw new Error("user not found")
      }
      return user


    }
    catch (error) {
      console.log(error)
    }
  }
  updateFirstName(value) {
    try {
      if (typeof value != "string") {
        throw new Error("firstname is not string")
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
        throw new Error("lastname is not string")
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

  //now updateuser
  static updateUserById(userId, parameter, value) {
    try {
      //validate userid and parameter
      if (typeof userId != "number") {
        throw new Error("userid is not number")
      }
      if (userId < 0) {
        throw new Error("userid should be positive")
      }
      if (typeof parameter != "string") {
        throw new Error("parameter is not string")
      }

      let foundOfUser = User.getUserById(userId)
      if (foundOfUser == null) {
        throw new Error("user not found")
      }
      //swtch case
      switch (parameter) {
        case "firstName":
          foundOfUser.updateFirstName(value)
          break;
        case "lastName":
          foundOfUser.updateLastName(value)
          break;
        case "isActive":
          foundOfUser.updateIsActive(value)
          break;
        default:
          throw new Error("parameter is not valid")

      }

    }
    catch (error) {
      console.log(error)
    }
  }

  //now delete user by admin only
  static deleteUserById(userId) {
    try {
      //validate userid
      if (typeof userId != "number") {
        throw new Error("userid is not number")
      }
      if (userId < 0) {
        throw new Error("userid should be positive")
      }
      let foundOfUser = User.getUserById(userId)
      //just inactive the user
      foundOfUser.updateIsActive(false)
      console.log("the userid", userId, "deleted successfully")

    }
    catch (error) {
      console.log(error)
    }

  }
  //staff operation on contact and contactDetail

  getAllContact() {
    try {
      if (this.isAdmin == true) {
        throw new Error("only staff can fetch all detail")

      }
      return Contact.getAllContact()
    }
    catch (error) {
      console.log(error)
    }
  }

  getContactById(contId) {
    try {
      if (this.isAdmin == true) {
        throw new Error("only staff can fetch detail  by id")

      }
      return Contact.getContactById(contId)
    }
    catch (error) {
      console.log(error)
    }
  }
  createContact(firstName, lastName) {
    try {
      //only staff can create contact
      if (this.isAdmin == true) {
        throw new Error("only staff can create contact")

      }
      if (typeof firstName != "string" || typeof lastName != "string") {
        throw new Error("firstName or lastName is not string")
      }
      let newContact = Contact.createContact(firstName, lastName)
      this.contact.push(newContact)
      console.log("contact created successfully")
      return newContact

    }
    catch (error) {
      console.log(error)
    }

  }

  updateContactById(contId, parameter, value) {
    try {
      if (this.isAdmin == true) {
        throw new Error("only staff can update contact")

      }
      Contact.updateContactById(contId, parameter, value)

    }
    catch (error) {
      console.log(error)
    }
  }

  deleteContactById(contId) {
    try {
      if (this.isAdmin == true) {
        throw new Error("only staff can delete contact")

      }
      Contact.deleteContactById(contId)

    }
    catch (error) {
      console.log(error)
    }
  }

  //now staff operation on contactDetail

  getAllContactDetail() {
    try {
      if (this.isAdmin == true) {
        throw new Error("only staff can get all contactDetail")

      }
      return ContactDetail.getAllcontactDetail()

    }
    catch (error) {
      console.log(error)
    }
  }

  getAllContactDetailById(contactDetailId) {
    try {
      if (this.isAdmin == true) {
        throw new Error("only staff can get all contactDetail")

      }
      return ContactDetail.getContactDetailById(contactDetailId)
    }
    catch (error) {
      console.log(error)
    }
  }
  createContactDetail(contId, type, value) {
    try {
      if (this.isAdmin == true) {
        throw new Error("only staff can create contactDetail")
      }
      let contact = Contact.getContactById(contId)
      if (!contact) {
        throw new Error("Contact not found for this contact detail.");
      }
      let newContactDetail = ContactDetail.createContactDetail(contId, type, value)
      if (!newContactDetail) {
        throw new Error("contact detail not created")
      }
      if (!contact.contactDetail) {
        contact.contactDetail = [];
    }
       contact.contactDetail.push(newContactDetail)
      return newContactDetail
    }
    catch (error) {
      console.log(error)
    }

  }

  updateContactDetail(contactDetailId, type, value) {
    try {
      if (this.isAdmin == true) {
        throw new Error("only staff can update contactDetail")
      }
      let contactDetail = ContactDetail.getContactDetailById(contactDetailId)
      if (!contactDetail) {
        throw new Error("Contact detail not found.");
      }
      let updatedContactDetail = ContactDetail.updateContactDetail(contactDetailId, type, value)
      if (!updatedContactDetail) {
        throw new Error("contact detail not updated")
      }
      return updatedContactDetail

    }
    catch (error) {
      console.log(error)
    }
  }
  deleteContactDetail(contactDetailId) {
    try {
      if (this.isAdmin == true) {
        throw new Error("only staff can delete contactDetail")
      }
      ContactDetail.getContactDetailById(contactDetailId)
    }
    catch (error) {
      console.log(error)
    }

  }
}

module.exports = User;