import star from "../../public/images/star.png"

export default function Card(props) {
  return (
      <div className="card">
          <img src={`../public/images/${props.img}`}/>

          <div >
              <img src={star} />
              <span>{props.rating}</span>
              <span>({props.reviewCount}) • </span>
              <span>{props.location}</span>
          </div>

          <p>{props.title}</p>
          <p><span>From ${props.price}</span> / person</p>
      </div>
  )
}
