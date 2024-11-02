// import data from 'data.js'
function App() {
    const cards = data.map(item => {
        return (
            <Card
                img = {item.coverImg}
                rating = {item.stats.rating} 
                reviewCount = {item.stats.reviewCount} 
                country = {item.location}
                title = {item.title}
                price = {item.price}
            />
        )
    })
    return (
        <div>
            <Nav />
            {/* <Hero /> */}
            {cards}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))