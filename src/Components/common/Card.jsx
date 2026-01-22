import { useNavigate } from "react-router";
import "./card.css"
const Card = ({data}) => {
    const navigate = useNavigate();
    const {id,title,genre,rating,releaseYear,image} = data;
  return (
    <>
        <div className="CardWrapper">
            <img className="imagecard" src={image} alt="this movies image" />
            <div className="cd">
            <h1 className="headCard">Movies Title : {title}</h1>
            <p className="paracard">Release : {releaseYear}</p>
            <button className="btn" onClick={()=>{navigate(`/movies/${id}`)}}>Movies Detaile</button>
            </div>
        </div>
    </>
  )
}

export default Card
