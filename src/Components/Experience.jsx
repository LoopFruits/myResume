const Experience = () => {
    const jobs = [
        {
            role: "Front End Developer",
            company: "Program Equity",
            duration: "10/2022 - 01/2023",
            tasks: [
                "Collaborated with a team to optimize website performance via code improvements, resulting in 10% increased efficiency",
                "Successfully pitched and clarified the business plan for our application, AnyPay.",
                "Investigated and resolved defects, improving overall system stability by debugging code."
             ] 
        },
        {
            role: "Fintech Hackathon",
            company:"hackathon",
            duration:"04/2022",
            tasks: 
                [
                    "Led a cross-functional team of five to develop an application that provides users with the comparison of ATM currency conversion fees, enabling them to identify the most cost-effective options.",
                    "Awarded Second Place among 12 participating teams.",
                    "Successfully pitched and clarified the business plan for our application, AnyPay.",
                ],
        },
        
    ];
    
    return (
        <div className="p-6 border-t border-gray-200">
            <h2 className="font-semi bold text-xl mb-4">Experience</h2>
            {jobs.map(job => <Job {...job} key={job.role} />)}
        </div>
    );
}

function Job({ role, company, duration, tasks }) {
    return (
        <div className="mb-4">
            <h3 className="text-lg font-medium">{role} at {company}</h3>
            <p className="text-gray-500">{duration}</p>
            <ul className="list-disc list-inside mt-2 text-md">
                {tasks.map(task => <li key={task}>{task}</li>)}
            </ul>
        </div>
    );
}

export default Experience;
