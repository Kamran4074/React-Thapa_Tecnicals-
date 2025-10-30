import Styles from"./Netflix.module.css" //css module import;
export const SeriesCards=({data})=>{
    // Destructuring props.data and data is the object passed from parent component
    const{img_url,name,rating,description,cast,genre,watch_url}=data; 

    // Inline Styles for button
    const btn_styles={
        padding:"1.2rem 2.4rem",
        border:"none",
        borderRadius:"8px",
        backgroundColor:`${rating>=8.5?"#12b458":"#d0b64c"}`,
        color:"var(--btn-color)",
        fontWeight:"bold",
        cursor:"pointer"
    }

    // Conditional class for rating
    const ratingClass= rating>=8.5?Styles.super_hit : Styles.average;
    
    return(
    <li className={Styles.card}>
    <div>
        <img
        src={img_url} // instead of props.data.img_url we can use img_url directly after destructuring
        alt={name}
        height="40%" 
        width="40%" 
        />
    </div>
    <div className="flex flex-col gap-5 py-[3.2rem] px-[1.2rem]">
        <h2>Name : {name}</h2>
        <h3>Rating : <span className={`${Styles.rating} ${ratingClass}`}> 
            {/* here ratingClass is conditional class written as variable and Styles.rating is common class  */}
            {rating} 
            </span>
            </h3>
        <p className="text-3xl font-bold underline">Description : {description} </p>
        <p>Cast : {cast}</p>
        <p>Genre: {genre}</p>
        <a href={watch_url} target="_blank">
        <button 
            style={btn_styles}>Watch Now</button>
        </a>
    </div>
    </li>
    )
}