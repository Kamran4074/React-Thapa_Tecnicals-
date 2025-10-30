export const EventHandling=()=>{
    const handleButtonClick=()=>{
        alert("Button Clicked!")
    }
    // Event Handler Function
    return(
        <>
        {/* //function is passed directly without parenthesis */}
        <button onClick={handleButtonClick}>Click me</button> 
        <br />
        {/* fat arrow function is used in passing arguments */}
        <button onClick={()=>handleButtonClick()}>Click me 2</button> 
        <br />
        <button onClick={()=>alert("Hey I am inline arrow function")}>Inline Function</button>
        </>
      )
    }