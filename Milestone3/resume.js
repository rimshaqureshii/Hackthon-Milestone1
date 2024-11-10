var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameElement = document.getElementById('name').value;
    var emailElement = document.getElementById('email').value;
    var phoneElement = document.getElementById('phone').value;
    var educationElement = document.getElementById('education').value;
    var experienceElement = document.getElementById('experience').value;
    var skillsElement = document.getElementById('skills').value;
    //create resume ouTput
    var resumeHTML = "    \n   <h2><b>Resume</b></h2>\n   <h3>Personal Information</h3>\n   <p><b>Name:</b> ".concat(nameElement, "  </p>\n   <p><b>Email:</b>  ").concat(emailElement, "</p>\n   <p><b>Phone Number : </b> ").concat(phoneElement, "</p>\n\n  <h3>Education</h3>\n  <p>").concat(educationElement, "</p>\n\n\n  <h3>Experience</h3>\n  <p> ").concat(experienceElement, "</p>\n\n\n  <h3>Skills</h3>\n  <p> ").concat(skillsElement, "</p>\n");
    //display the generated resume ///
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
