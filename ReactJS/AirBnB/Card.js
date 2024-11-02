function Card(props) {
    return (
        <section className="card">
            <img src={props.img} className="img"/>
            <div className="card--stats">
                <img src="Star.jpg" className="star"/>
                <span>{props.rating}</span>
                <span className="gray">{props.reviewCount} &#x2022; </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><strong>From ${props.price}</strong> / person</p>
        </section>
    )
}