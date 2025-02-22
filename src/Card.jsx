import narutologo from "./assets/narutologo.png"

function Card() {

    return(<>
    <div className="card">
     <img className="card-image" src={narutologo} alt="logo"></img>
     <h1 className="card-heading"> Welcome to Naruto Uzumaki's World!" </h1>
     <p className="card-texting">I'm not gonna run away, I never go back on my word! That's my nindo, my ninja way!  </p>
    </div></>)

}

export default Card;