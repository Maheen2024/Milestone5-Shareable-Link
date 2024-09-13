document.getElementById('resumeform')?.addEventListener('submit', function (event: Event) {
    event.preventDefault();

    // Get form elements with type annotations
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement | null;
    const nameElement = document.getElementById('name') as HTMLInputElement | null;
    const emailElement = document.getElementById('email') as HTMLInputElement | null;
    const phoneElement = document.getElementById('phone') as HTMLInputElement | null;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement | null;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement | null;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement | null;
    const usernameElement = document.getElementById('username') as HTMLInputElement | null;

    // Ensure all elements are available
    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && usernameElement) {
        const name: string = nameElement.value;
        const email: string = emailElement.value;
        const phone: string = phoneElement.value;
        const education: string = educationElement.value;
        const experience: string = experienceElement.value;
        const skills: string = skillsElement.value;
        const username: string = usernameElement.value;
        const uniquePath: string = `resumes/${username.replace(/\s+/g, '_')}_cv.html`;

        // Picture handling
        const profilePictureFile: File | undefined = profilePictureInput.files?.[0];
        const profilePictureURL: string = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';

        // Create resume output
        const resumeHTML: string = `
            <h2 class="resume-header">Professional Resume</h2>
<div class="resume-section">
    ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profile-picture">` : ''}
    <div class="personal-info">
        <p><strong>Name:</strong> <span class="resume-name">${name}</span></p>
        <p><strong>Email:</strong> <span class="resume-email">${email}</span></p>
        <p><strong>Phone Number:</strong> <span class="resume-phone">${phone}</span></p>
    </div>
</div>

<hr class="resume-divider" />

<div class="resume-section">
    <h3 class="section-header">Education</h3>
    <p class="resume-content">${education}</p>
</div>

<hr class="resume-divider" />

<div class="resume-section">
    <h3 class="section-header">Experience</h3>
    <p class="resume-content">${experience}</p>
</div>

<hr class="resume-divider" />

<div class="resume-section">
    <h3 class="section-header">Skills</h3>
    <p class="resume-content">${skills}</p>
</div>

        `;

        const resumeOutputElement = document.getElementById('resumeOutput') as HTMLElement | null;
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeHTML;
            resumeOutputElement.classList.remove('hidden');
        }

        // Show buttons
        (document.getElementById('edit-resume') as HTMLButtonElement | null)?.classList.remove('hidden');
        (document.getElementById('share-resume') as HTMLButtonElement | null)?.classList.remove('hidden');
        (document.getElementById('download-resume') as HTMLButtonElement | null)?.classList.remove('hidden');

        // Download PDF functionality
        document.getElementById('download-resume')?.addEventListener('click', () => {
            const opt = {
                margin: 0.2,
                filename: 'resume.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(resumeOutputElement).set(opt).save();
        });

        // Edit functionality
        document.getElementById('edit-resume')?.addEventListener('click', () => {
            resumeOutputElement?.classList.add('hidden');
            (document.getElementById('edit-resume') as HTMLButtonElement)?.classList.add('hidden');
            (document.getElementById('share-resume') as HTMLButtonElement)?.classList.add('hidden');
            (document.getElementById('download-resume') as HTMLButtonElement)?.classList.add('hidden');
        });

        // Shareable link functionality
        document.getElementById('share-resume')?.addEventListener('click', async () => {
            try {
                const shareableLink: string = `https://yourdomain.com/${uniquePath}`;
                await navigator.clipboard.writeText(shareableLink);
                alert('Shareable link copied to clipboard!');
            } catch (err) {
                console.error('Failed to copy link: ', err);
                alert('Failed to copy link to clipboard. Please try again.');
            }
        });
    } else {
        console.error('Form elements are missing');
    }
});
