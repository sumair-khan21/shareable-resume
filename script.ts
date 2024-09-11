const form = document.getElementById('all-form') as HTMLFormElement | null;
const resumeDisplay = document.getElementById('display') as HTMLElement | null;

if (form && resumeDisplay) {
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const title = (document.getElementById('title') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const address = (document.getElementById('address') as HTMLTextAreaElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
        const skill = (document.getElementById('skill') as HTMLTextAreaElement).value;

        
        resumeDisplay.innerHTML = '';

        
        const header = `
        
       
            <header >
                <h1>${name}</h1>
                <p class="main">${title}</p>
                <p>Email: ${email}  |   Phone: ${phone}</p>
            </header>
        `;

        const addressSection = `
        
            <section class="address">
                <h2>Address</h2>
                <p>${address}</p>
            </section>
            <section class="address">
                <h2>Education</h2>
                <p>${education}</p>
            </section>
             <section class="address">
                <h2>Experience</h2>
                <p>${experience}</p>
            </section>
            <section class="address">
                <h2>Skill</h2>
                <p>${skill}</p>
            </section>
           
            
        `;

        
        resumeDisplay.innerHTML = header + addressSection;
        $("#download-pdf").show();
    });
} else {
    console.error('Form or resume display element not found');
}



