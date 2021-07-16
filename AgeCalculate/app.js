const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const dob = document.querySelector('#dob');
const button = document.querySelector('#button')
const outputfName = document.getElementById('firstName');
const outputlName = document.getElementById('lastName');
const age = document.getElementById('age')
const display3 = document.getElementById('display');

button.addEventListener('click', function () {
    let firstName = fname.value;
    let lastName = lname.value;
    let Dob = dob.value
    function Calculate(firstName, lastName, dob) {
        this.fname = firstName;
        this.lname = lastName;
        this.dateOfBirth = new Date(dob);


    }
    Calculate.prototype.calculateAge = function () {
        const differ = Date.now() - this.dateOfBirth.getTime();
        const ageDate = new Date(differ);
        return ageDate.getFullYear() - 1970;
    }
    Calculate.prototype.fullName = function () {
        return `${this.fname} ${this.lname}`
    }
    const nadeem = new Calculate(firstName, lastName, Dob)
    outputfName.textContent = nadeem.fullName();
    age.textContent = nadeem.calculateAge();
})
