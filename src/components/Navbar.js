import './Navbar.css'

const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="navbar--links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#resume">Resume</a>
                <a href="#portfolio">Portfolio</a>
            </div>
        </nav>
    )
}

export default Navbar