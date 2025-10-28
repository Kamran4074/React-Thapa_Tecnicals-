import seriesData from "../api/seriesData.json"
import { SeriesCards } from "./SeriesCards";

const NetflixSeries=()=>{
  return(
    <ul className="grid grid-cols-3 gap-4 p-4">
      {seriesData.map((curr)=>(<SeriesCards key={curr.id} data={curr} /> ))}
    </ul>
  ) 
}
export default NetflixSeries;