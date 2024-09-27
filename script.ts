document.getElementById('generateButton')!.addEventListener('click', () => {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const profilePicture = (document.getElementById('profilePicture') as HTMLInputElement).files![0];

    let resumeOutput = `<h2>${name}</h2>`;
    resumeOutput += `<p>Email: ${email}</p>`;
    resumeOutput += `<p>Phone: ${phone}</p>`;
    resumeOutput += `<h3>Education</h3><p>${education}</p>`;
    resumeOutput += `<h3>Experience</h3><p>${experience}</p>`;
    resumeOutput += `<h3>Skills</h3><p>${skills}</p>`;

    if (profilePicture) {
        const reader = new FileReader();
        reader.onload = (e) => {
            resumeOutput = `<img src="${e.target!.result}" alt="Profile Picture" style="width:100px;height:100px;"><br>` + resumeOutput;
            displayResume(resumeOutput);
        };
        reader.readAsDataURL(profilePicture);
    } else {
        displayResume(resumeOutput);
    }
});

function displayResume(resume: string) {
    const resumeOutputDiv = document.getElementById('resumeOutput')!;
    resumeOutputDiv.innerHTML = resume;
    resumeOutputDiv.style.display = 'block';
}
