

const User = require('./user/user.js');


// Creating Admin and Staff
let admin1 = User.newAdmin("aneesh", "kumar");
let staff1 = admin1.newStaff("manish", "kumar");

// Staff1 creates two contacts
let contact1 = staff1.createContact("lakhan", "kumar");
let contact2 = staff1.createContact("bharat", "kumar");
// console.log(staff1)
// console.log(staff1.getAllContact())

// Updating the contact (updating contact1's first name to 'ram')
staff1.updateContactById(contact1.contactId, "firstName", "ram");
console.log(staff1.getAllContact())
staff1.deleteContactById(0)
console.log("after deleteing")
console.log(staff1.getAllContact())

staff1.createContactDetail(contact1.contactId, "phone", "9876543210");
staff1.createContactDetail(contact1.contactId, "email", "aneesh@gmail.com");

console.log("\n--- Final User Object with Full Contact Detail ---");
console.log(staff1)


