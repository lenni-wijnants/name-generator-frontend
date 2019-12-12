export class Candidate {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  skills: string;
  image: string;

  constructor(firstname: string, lastname: string, email: string, phone: string, skills: string, image: string) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.email = email;
    this.phoneNumber = phone;
    this.skills = skills;
    this.image = image;
  }
}
