 const  form= document.getElementById('resume-form') as HTMLFormElement;
 const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;


 form.addEventListener('submit' , (event: Event )=> {
    event.preventDefault();
 

    const nameElement = (document.getElementById('name') as HTMLInputElement).value;
    const emailElement = (document.getElementById('email') as HTMLInputElement).value;
    const phoneElement = (document.getElementById('phone') as HTMLInputElement).value;
    const educationElement = (document.getElementById('education') as HTMLInputElement).value;
    const experienceElement = (document.getElementById('experience') as HTMLInputElement).value;
    const skillsElement = (document.getElementById('skills') as HTMLInputElement).value;
    

    

   //create resume ouTput
const resumeHTML =`    
   <h2><b>Resume</b></h2>
   <h3>Personal Information</h3>
   <p><b>Name:</b> ${nameElement}  </p>
   <p><b>Email:</b>  ${emailElement}</p>
   <p><b>Phone Number : </b> ${phoneElement}</p>

  <h3>Education</h3>
  <p>${educationElement}</p>


  <h3>Experience</h3>
  <p> ${experienceElement}</p>


  <h3>Skills</h3>
  <p> ${skillsElement}</p>
`;
  //display the generated resume ///
  if (resumeDisplayElement) {
       resumeDisplayElement.innerHTML = resumeHTML;
  }else {
   console.error('The resume display element is missing.');
  }


  });
      
