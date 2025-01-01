export default function Entry(props) {
    return (
        <section className="section">
            <img src={props.img.src} alt={props.img.alt} className="section-img" />
            <div className="section-div-out">
                <div className="section-div-in">
                    <img src={"https://media.istockphoto.com/id/1493681761/vector/orange-colored-map-location-pin.jpg?s=612x612&w=0&k=20&c=pzksh7tO6k6mXns2YUUuDxA6cVFfE1mQPoNHqSHPbfI="} alt="Location icon" className="location-icon" />
                    <span>{props.country}</span>
                    <a href={props.googleMapsLink}>View on Google Maps</a>
                </div>                  
                <h1><strong>{props.title}</strong></h1>      
                <h4>{props.dates}</h4>
                <p>{props.text}</p>
            </div>
        </section>
    )
}