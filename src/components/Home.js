import './Home.css'

const Home = () => {
    return (
        <section id="home">
            <img src="images/home-bg.jpg" alt="bg" />
            <div className="home--title">
                <h1>Hi! My name is Daniel.</h1>
                <h3>Frontend Developer</h3>
                <button onClick={() => {window.location.href = "#about"}}>Learn More</button>
            </div>
        </section>
    )
}

export default Home