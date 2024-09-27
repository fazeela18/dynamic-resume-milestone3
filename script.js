document.getElementById('generateButton').addEventListener('click', function () {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var profilePicture = document.getElementById('profilePicture').files[0];
    var resumeOutput = "<h2>".concat(name, "</h2>");
    resumeOutput += "<p>Email: ".concat(email, "</p>");
    resumeOutput += "<p>Phone: ".concat(phone, "</p>");
    resumeOutput += "<h3>Education</h3><p>".concat(education, "</p>");
    resumeOutput += "<h3>Experience</h3><p>".concat(experience, "</p>");
    resumeOutput += "<h3>Skills</h3><p>".concat(skills, "</p>");
    if (profilePicture) {
        var reader = new FileReader();
        reader.onload = function (e) {
            resumeOutput = "<img src=\"".concat(e.target.result, "\" alt=\"Profile Picture\" style=\"width:100px;height:100px;\"><br>") + resumeOutput;
            displayResume(resumeOutput);
        };
        reader.readAsDataURL(profilePicture);
    }
    else {
        displayResume(resumeOutput);
    }
});
function displayResume(resume) {
    var resumeOutputDiv = document.getElementById('resumeOutput');
    resumeOutputDiv.innerHTML = resume;
    resumeOutputDiv.style.display = 'block';
}
