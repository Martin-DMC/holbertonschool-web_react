// interface Teacher {
//   readonly firstName: string;
//   readonly lastName: string;
//   fullTimeEmployee: boolean;
//   yearsOfExperience?: number;  // propiedad opcional
//   location: string;

//   [key: string]: any;
// }

// const teacher3: Teacher = {
//   firstName: 'John',
//   fullTimeEmployee: false,
//   lastName: 'Doe',
//   location: 'London',
//   contract: false,
// };

// console.log(teacher3);

// interface Directors extends Teacher {
//   numberOfReports: number;
// }

// const director1: Directors = {
//   firstName: 'John',
//   lastName: 'Doe',
//   location: 'London',
//   fullTimeEmployee: true,
//   numberOfReports: 17,
// };
// console.log(director1);

// interface printTeacherFunction {
//   (firstName: string, lastName: string): string;
// }

// const printTeacher: printTeacherFunction = (firstName, lastName) => {
//   const filterLetter = firstName.charAt(0).toUpperCase();
//   return `${filterLetter}. ${lastName}`;
// }

// console.log(printTeacher("john", "Doe"));


interface StudentInstance {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentInstance {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

const student: StudentInstance = new StudentClass("John", "Doe");
console.log(student.displayName());
console.log(student.workOnHomework());
