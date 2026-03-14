//requests the file
fetch("./Data/course.json")
//convert response to json
.then(res => res.json())
//use the data
.then(data => {
    const main = document.querySelector("main");
    data.courses.forEach(course => {
        //courseCode
        const courseCode = document.createElement("h2");
        courseCode.textContent = course.courseCode;

        const courseTitle = document.createElement("h2");
        courseTitle.textContent = course.courseTitle;

        main.appendChild(courseCode)
        main.appendChild(courseTitle)
    });
    
});