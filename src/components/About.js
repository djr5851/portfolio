import './About.css'

const About = () => {
    return (
        <section id="about">
            <div className="about--grid">
                <div className="about--content">
                    <img src="images/profilepic.jpg" alt="profile" className="profile"/>
                </div>
                <div className="about--content">
                    <h2>About Me</h2>
                    <p>I’m a software engineer with a focus on frontend development and recent graduate from Rochester Institute of Technology. 
                    Ever since I was a child, I’ve been fascinated by computers and interactive software. 
                    I spent countless hours as a kid installing and creating mods for some of my favorite games. 
                    It has always been a dream of mine to make a career out of this lifelong passion.</p>
                </div>
                <div className="about--content">
                    <h2>Contact Details</h2>
                    <p>Daniel Robinson</p>
                    <p>(315) 415-3744</p>
                    <p>danrobinson0106@gmail.com</p>
                    <a href="https://www.linkedin.com/in/daniel-robinson-03758814a/">LinkedIn</a>
                    <a href="https://github.com/djr5851?tab=repositories">Github</a>
                </div>
                <div className="about--content">
                    <button onClick={() => window.open('/Daniel Robinson Resume.pdf', '_blank')}>Open Resume</button>
                </div>
            </div>

        </section>
    )
}

export default About