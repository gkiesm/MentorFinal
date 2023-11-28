function recommend() {
    
    let searchTerm = document.querySelector('.form-control-lg').value.toLowerCase();
    let searchTermsArray = searchTerm.split(' ');

    function mentor (name, title, email) {
        this.name = name;
        this.title = title;
        this.email = email;
    }
    let mentors = [ 
    new mentor("John Doe", "Product Director", "john.doe@gov.sg"),
    new mentor("Jane Smith", "Senior Product Manager", "jane.smith@gov.sg"),
    new mentor("Jack Stone", "Data Scientist", "jack.stone@gov.sg"),
    new mentor("Harry Daly", "Software Engineer", "harry.daly@gov.sg"),
    new mentor("Joe Berg", "Cybersecurity Engineer", "joe.berg@gov.sg"),
    new mentor("Mia Wong", "Tech Policy Director", "mia.wong@gov.sg"),
    ];

    let filteredMentors = mentors.filter(mentor =>
        searchTermsArray.some(termPart =>
            Object.values(mentor)
                .some(value =>
                    typeof value === "string" && value.toLowerCase().includes(termPart))
        )
    );

    let resultsContainer = document.querySelector('.results'); 

    resultsContainer.innerHTML = " ";
 
            
    if (filteredMentors.length > 0) {
        // If mentors are found, display them

        let headerElement = document.createElement("h2");
        headerElement.textContent = (`Mentor results for "${searchTerm}"`);
        resultsContainer.appendChild(headerElement);

       
        filteredMentors.forEach(mentor => {
            let mentorInfo = document.createElement("p");
            mentorInfo.textContent = `
                Name: ${mentor.name}
                Title: ${mentor.title}
                Email: ${mentor.email}
            `;
            resultsContainer.appendChild(mentorInfo);
                
            resultsContainer.appendChild(document.createElement("hr"));
            });

    } else {
        // If no mentors are found
        let resultsElement = document.createElement("h2");
        resultsElement.textContent = "No mentors found.";
        resultsContainer.appendChild(resultsElement);
    }

}