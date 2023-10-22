const Projects = () => {

    const projects =
        [
            {
                title:"ToDoDone",
                link: "",
                description:"Implemented Full Stack ToDo Application. With Read,Create, and Delete(CRUD) functionality.",
                details:  
                    [
                        "Utilized Rails for custom routes, controller, and model methods",
                        "Ensured security with Bcrypt for user information encryption.",
                        "Seamlessly integrated front-end and back-end services, connecting users with software solutions."
                    ]
            },
            {
                title:"Mental Health Without Borders",
                link: "",
                description:"An application aimed at connecting refugees with licensed professionals.",
                details:
                    [
                        "Developed a React frontend interface and a Sinatra backend API, with full CRUD capability.",
                        "Leveraged Active Record for efficient database interaction.",
                        "Worked with a cross-functional team for full-stack application development."
                    
                    ]
            },
            {
                title:"Pokie Tracker",
                link: "",
                description:"Single page application that Fetches and parses Pokemon information",
                details:
                    [ 
                        "Integrated PokiApi with RESTful API endpoints to render Pokémon data.",
                        "Built with Javascript, HTML and CSS"
                    ]
            },
        ]

        return (
            <div>
                <h2>TECHNICAL PROJECTS</h2>
                {projects.map(project => <Project {...project} key={project.title} />)}
            </div>
        );
    }
    
    const Project = ({ title, link, description, details }) => {
        return (
            <div>
                <a href={link}>{title}</a>
                <p>{description}</p>
                <ul>
                    {details.map(detail => <li key={detail}>{detail}</li>)}
                </ul>
            </div>
        );

}

export default Projects;