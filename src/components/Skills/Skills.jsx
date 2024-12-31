function Skills() {
    const skills = [
        {
            name: 'Html',
            value: 50
        },
        {
            name: 'Css',
            value: 30
        },
        {
            name: 'Javascript',
            value: 70
        },
        {
            name: 'React',
            value: 80
        },
        {
            name: 'Next',
            value: 70
        },
        {
            name: 'Python',
            value: 60
        },
        {
            name: 'Odoo',
            value: 50
        }
    ]
    return (
        <div className="skills d-flex flex-column align-items-center text-white bg-dark pt-5">
            <h1 className="skills_header">Skills</h1>
            <p className="skills_text w-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet laudantium minima nesciunt adipisci 
                quam ducimus maiores impedit? Dolorum doloremque, rerum placeat sapiente eveniet odio blanditiis in soluta est nemo velit.
            </p>
            <div className="skills_items d-flex gap-5 my-5">
                <div className="skills_focus">
                    <h3 style={{textDecoration: 'underline'}}>My Focus</h3>
                    <h4>Front End Development</h4>
                    <h4>Back End Development</h4>
                    <h4>Cross Platform Mobile Development</h4>
                </div>
                <div className="skills_chart">
                    {skills.map((skill, index) => (
                        <div className="skill d-flex flex-row gap-1 align-items-center justify-content-center" key={index}>
                            <h3 style={{minWidth: '150px'}}>{skill.name}</h3>
                            <div className="progress" style={{width: '300px', height: '40px'}} role="progressbar" aria-label="Danger example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-white" style={{width: `${skill.value}%`}}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills