import NetflixSeries from "./components/NetflixSeries" //default expor
import "./components/Netflix.css"

export const App=()=>{
 return (
    <section className="Container">
        <h1 className="card-heading">List of best Netflix Series</h1>
        <NetflixSeries/>
    </section>
 )
}
 