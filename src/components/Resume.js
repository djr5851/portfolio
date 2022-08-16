import './Resume.css'

const Resume = ({ work }) => {
    const workElements = work.map((job, i) => (
        <div key={`work${i}`}>
            <h2 className="resume--title">{job.company}</h2>
                <p className="resume--subtitle">{job.title}
                    <span className="resume--date"><span>•</span>{job.dates}</span>
                </p>
                <p className="resume--description">{job.description}</p>
        </div>
    ));

    return (
        <section id="resume">
            <div className="resume--section">
                <div className="resume--left">
                    <h3><span>Education</span></h3>
                </div>
                <div className="resume--right">
                    <h2 className="resume--title">Rochester Insitute of Technology</h2>
                    <p className="resume--subtitle">B.S. Game Design and Development
                        <span className="resume--date"><span>•</span>May 2021</span>
                    </p>
                    <p className="resume--description">GPA: 3.84</p>
                </div>
            </div>
            <hr />
            <div className="resume--section">
                <div className="resume--left">
                    <h3><span>Work</span></h3>
                </div>
                <div className="resume--right">
                    {workElements}
                </div>
            </div>
            <hr />
        </section>
    )
}

export default Resume