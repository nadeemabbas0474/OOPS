const names = document.querySelector('.names');
const ages = document.querySelector('.ages');
const btn = document.querySelector('.btn');
const namee = document.querySelector('.name')
const age = document.querySelector('.ages');
btn.addEventListener('click' , function(){
    function Calculater(name, dob){
        this.name = name;
        this.dateOfBirth= new Date(dob);
        this.calculateAge = function() {
                  const difference  = Date.now() - this.dateOfBirth.getTime()
                  const ageDate = new Date(difference)
                  return ageDate.getUTCFullYear() - 1970
              }
      }
      let inputnames = names.value
      let inputages= ages.value;
      const nadeem = new Calculater(inputnames, inputages)
      namee.textContent =inputnames;
      age.textContent = nadeem.calculateAge();
})