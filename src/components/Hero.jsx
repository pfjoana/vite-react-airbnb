import heroImg from "../assets/photo-grid.png"

export default function Hero(){
  return (
    <div className="hero-section">
        <img src={heroImg} alt="illustrative images with people having different experiences, such as swimming, playing violin, cooking, dancing, singing" />

      <div className="hero-text">
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </div>

    </div>
  )
}
