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
    var resumeHTML = "    \n   <h2><b> Editable Resume</b></h2>\n   <h3>Personal Information</h3>\n   <p><b>Name:</b> <span conteteditable= \"true\"> ".concat(nameElement, "  </span></p>\n   <p><b>Email:</b> <span conteteditable= \"true\">  ").concat(emailElement, "</p>\n   <p><b>Phone Number : </b> <span conteteditable= \"true\"> ").concat(phoneElement, "</p>\n\n  <h3>Education</h3>\n  <p <span conteteditable= \"true\">>").concat(educationElement, "</p>\n\n\n  <h3>Experience</h3>\n  <p <span conteteditable= \"true\">> ").concat(experienceElement, "</p>\n\n\n  <h3>Skills</h3>\n  <p <span conteteditable= \"true\">> ").concat(skillsElement, "</p>\n");
    //display the generated resume ///
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
