export default function Contact({img, name, phone, email}) {
  return (
      <div className="contacts">
          <article className="contact-card">
                <img 
                  src={img}
                  className="cat-img"
                />
                <h3>{name}</h3>
                <div className="info-group">
                    <img 
                        src="https://static.vecteezy.com/system/resources/previews/003/720/476/non_2x/phone-icon-telephone-icon-symbol-for-app-and-messenger-vector.jpg" 
                        alt="phone icon" className="phone-img"
                    />
                  <p>{phone}</p>
                </div>
                <div className="info-group">
                    <img 
                        src="https://cdn-icons-png.flaticon.com/512/666/666162.png" 
                        alt="mail icon" className="mail-img"
                    />
                  <p>{email}</p>
                </div>
            </article>
      </div>
  );
}
