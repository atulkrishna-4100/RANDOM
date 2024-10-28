function MainContent() {
    return (
        <div>
            <h1>Welcome to my page!</h1>
            <ol>
                <li>It's a popular library.</li>
                <li>I'm more likely to get a job as a developer if I know React.</li>
            </ol>
        </div>
    );
}

function Footer() {
    return (
        <footer>
            <small>&copy; 2024 Atul development. All rights reserved.</small>
        </footer>
    );
}

function CustomPage() {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    );
}

ReactDOM.render(<CustomPage />, document.getElementById("root"));