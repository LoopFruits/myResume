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
        <div>
            <h2>Technical Skills</h2>
            <ul>
                {skills.map(skill => <li key={skill}>{skill}</li>)}
            </ul>
        </div>
    );
}

export default TechSkills;
    