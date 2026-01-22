import { useNavigate, useParams } from "react-router";
import { MoviesData } from "../utils/constant/MoviesData";
import "./MoviesDet.css";

const MoviesDetailes = () => {
  const { id } = useParams();
  console.log(id);
  const singleData = MoviesData.find((item) => {
    return item.id == id;
  });
  const { image, title, description } = singleData;
  return (
    <>
      <div className="continer">
        <div className="CardWrap">
          <div className="CardImg">
            <div
              className="img"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </div>
          <div className="detaile">
            <h1 className="cardtitle">{title}</h1>
            <p className="cardPara">{description}</p>
            <button className="btncard">Download</button>
          </div>
        </div>
      </div>
    </>
    
  );
};

export default MoviesDetailes;
