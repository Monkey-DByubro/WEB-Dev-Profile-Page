//requests the file
fetch("./Data-Handling/course.json")
//convert response to json
.then(res => res.json())
//use the data
.then(data => {
    const main = document.querySelector("main");
    data.courses.forEach(course => {
        //courseCard
        const courseCard = document.createElement("div");
        courseCard.classList.add("courseCard")
        //titleCard
        const titleCard = document.createElement("div");
        titleCard.classList.add("titleCard");
        //titleText
        const titleText = document.createElement("div");
        titleText.classList.add("titleText");
        //courseCode
        const courseCode = document.createElement("h4");
        courseCode.textContent = course.courseCode;
        courseCode.classList.add("CourseCode");
        //courseTitle
        const courseTitle = document.createElement("h4");
        courseTitle.textContent = course.courseTitle;
        courseTitle.classList.add("CourseTitle");
        //status
        const courseStatus = document.createElement("img");
        if (course.courseStatus === "Competent")
        {
            courseStatus.classList.add("Competent");
            courseStatus.src = "./Images/Competent.png";
        }
        else if (course.courseStatus === "Incomplete")
        {
            courseStatus.classList.add("Incomplete");
            courseStatus.src = "./Images/Incomplete.png";
        }
        //courseProvider
        const courseProvider = document.createElement("h4");
        courseProvider.textContent = course.courseProvider;
        courseProvider.classList.add("CourseProvider")
        //dateOfCompletion
        const dateOfCompletion = document.createElement("h4");
        dateOfCompletion.textContent = course.dateOfCompletion;
        dateOfCompletion.classList.add("DateOfCompletion");

        
        
        courseCard.appendChild(titleCard);
        titleText.appendChild(courseCode);
        titleText.appendChild(courseTitle);
        titleCard.appendChild(titleText);
        titleCard.appendChild(courseStatus);
        courseCard.appendChild(courseProvider);
        courseCard.appendChild(dateOfCompletion);
        //units loop
        course.units.forEach(units => {
            //unitCard
            const unitCard = document.createElement("div");
            unitCard.classList.add("unitCard");
            //unitCode
            const unitCode = document.createElement("h5");
            unitCode.textContent = units.unitCode;
            unitCode.classList.add("unitCode");
            //unitTitle
            const unitTitle = document.createElement("h5");
            unitTitle.textContent = units.unitTitle;
            unitTitle.classList.add("unitTitle");
            //unitStatus
            const unitStatus = document.createElement("img");
            if (units.unitStatus === "Competent")
            {
                unitStatus.classList.add("Competent");
                unitStatus.src = "./Images/Competent.png"
            }
            else if (units.unitStatus === "Incomplete")
            {
                unitStatus.classList.add("Incomplete");
                unitStatus.src = "./Images/Incomplete.png";
            }

            unitCard.appendChild(unitCode);
            unitCard.appendChild(unitTitle);
            unitCard.appendChild(unitStatus);

            courseCard.appendChild(unitCard)
        })

        main.appendChild(courseCard);
    });
    
});