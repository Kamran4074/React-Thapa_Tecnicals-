import NetflixSeries from "./components/NetflixSeries" //default expor
import "./components/Netflix.module.css" //css module import

export const App=()=>{
 return (
    <section className="Container">
        <h1 className="card-heading">List of best Netflix Series</h1>
        <NetflixSeries/>
    </section>
 )
}
 