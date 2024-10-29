function Header() {
    return (
        <div>
            <img src="Rohit Sharma.jpeg" alt="Rohit Sharma" className="img"></img>
            <div className="about">
                <h1>Rohit Sharma</h1>
                <h3 className="cricketer">Cricketer</h3>
                <h4>Right Hand Batsman</h4>
            </div>
            <div className="email-linkedin">
                <a href="mailto:your-email@example.com" class="icon-button email-button">
                <i class="fas fa-envelope"></i> Email Us
                </a>
                <a href="https://www.linkedin.com/in/your-profile" target="_blank" class="icon-button linkedin-button">
                <i class="fab fa-linkedin"></i> LinkedIn
                </a>
            </div>
        </div>
        
    )
}