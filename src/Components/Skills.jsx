const TechSkills = () => {
    
    const skills = 
    [
        "Ruby on Rails", 
        "Javascript", 
        "React", 
        "PostgreSQL", 
        "HTML", 
        "CSS", 
        "Github", 
        "C++",
        "Postman",
        "npm"
        
    ]

    return (
        <div className="p-6">
            <h2 className="text-xl front-semibold mb-4">Technical Skills</h2>
            <ul className="flex space-x-4 flex-wrap ">
                {skills.map(skill => <li key={skill}>{skill}</li>)}
            </ul>
        </div>
    );
}

export default TechSkills;
    