import Card from "../Components/common/Card"
import { MoviesData } from "../utils/constant/MoviesData"
import "./Movies.css"

const Movies = () => {
  return (
    <>
        <h1 style={{textAlign:"center"}}>Movies</h1>
    <div className="Movies">
      {MoviesData.map((item,index)=>{
        return(
            <Card key={index} data={item} />
        )
      })}
    </div>
    </>
  )
}

export default Movies
