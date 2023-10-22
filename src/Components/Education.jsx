
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
        <div className="p-6 border-t border-gray-200">
            <h2 className="text-xl front-semibold md-4">Education</h2>
            {institutions.map(inst => <Institution {...inst} key={inst.school} />)}
        </div>
    );
}

function Institution({ school, degree, coursework, date }) {
    return (
        <div className="mb-4">
            <h3 className="">{school}</h3>
            <p className="mt-1">{degree}</p>
            {coursework && <p className="text-gray-600 mt-1">{coursework}</p>}
            <p className="text-gray-500">{date}</p>
        </div>
    );
}

export default Education;