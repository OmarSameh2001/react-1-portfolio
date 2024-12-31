import './Hero.css'
function Hero() {
    function handleContact() {
        window.scrollTo({top: window.innerHeight * 2, behavior: 'smooth'});
    }
    return (
        <div className="hero">
            <div className="hero_header">
                <h1>Omar Sameh</h1>
                <h3>Software Developer</h3>
                <button type="button" onClick={handleContact} className="btn btn-outline-light">Contact Me</button>
            </div>
            <img src={require("../../assets/omar-bg.png")} className="hero_image" alt="Omar Sameh" />
        </div>
    )
}

export default Hero