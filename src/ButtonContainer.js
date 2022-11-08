export default function ButtonContainer({tomatoes, setTomatoes}){
    return(
      <div className="buttons-container">
        <div 
          className="button"
          onClick={() => {setTomatoes(tomatoes.slice(0, -2))}}
          >-</div>
        <div 
          className="button"
          onClick={() => {setTomatoes(tomatoes + '🍅')}} 
          >+</div>
      </div>
    );
}