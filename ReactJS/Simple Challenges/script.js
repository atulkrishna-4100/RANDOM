function App() {
    return (
        <div className="contacts">
            <Contact
                img="Cat.jpeg"
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact
                img="Cat.jpeg"
                name="Mr. Pichku"
                phone="(212) 555-3214"
                email="mr.pichku@catnap.meow"
            />
            <Contact
                img="Cat.jpeg"
                name="Mr. Fichku"
                phone="(212) 555-6453"
                email="mr.fichku@catnap.meow"
            />
            <Contact
                img="Cat.jpeg"
                name="Mr. Dhichku"
                phone="(212) 555-8765"
                email="mr.dhichku@catnap.meow"
            />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))