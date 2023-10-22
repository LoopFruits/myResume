
const Education = () => {

    const institutions = 
    [
        {
            school: "Cuny Queens College",
            degree: "Bachelors of Science",
            coursework: "Intro to Algorithmic Problem Solving",
            date:"Spring 2025"
        },
        {
            school: "Flatiron School",
            degree: "Full Stack Development",
            coursework: "",
            date: "June 2022"
        }

    ]


    return (
        <div>
            <h2>EDUCATION</h2>
            {institutions.map(inst => <Institution {...inst} key={inst.school} />)}
        </div>
    );
}

function Institution({ school, degree, coursework, date }) {
    return (
        <div>
            <h3>{school}</h3>
            <p>{degree}</p>
            <p>{coursework}</p>
            <p>{date}</p>
        </div>
    );
}

export default Education;