import { useState } from 'react';
import "./styles.css";
import TomatoBox from './TomatoBox';
import ButtonContainer from './ButtonContainer';

// 1 -> display the counter number w/ state
// 2 -> render the actual tomatoes 🍅
// 3 ->  refactor to create...
// < TomatoBox /> and <ButtonContainer />
// components... see file browser
// 4. Select day, Turn it bold (default "M")
// 5. Create a state for each day's tomatoes 🍅 
// 6. Increment / decrement should work based which day is selected 

export default function App() {

  const [tomatoes, setTomatoes] = useState("");
  const days = ["M", "T", "W", "Th", "F", "Sa", "Su"];
  const [selectedDay, setSelectedDay] = useState("");
  const [allTomatoes, setAllTomatoes] = useState({});

  function addTomato() {
    const newAllTomatoes = {...allTomatoes};
    const currentDayTomatoes = newAllTomatoes[selectedDay]
    if (currentDayTomatoes) {
      if (currentDayTomatoes.length < 28){
        newAllTomatoes[selectedDay] = currentDayTomatoes + '🍅';
      }
    } else {
      newAllTomatoes[selectedDay] = '🍅';  
    }
    setAllTomatoes(newAllTomatoes);
  }

  function removeTomato() {
    const newAllTomatoes = {...allTomatoes};
    const currentDayTomatoes = newAllTomatoes[selectedDay].slice(0, -2);
    
    newAllTomatoes[selectedDay] = currentDayTomatoes;
    setAllTomatoes(newAllTomatoes);
  }

  return (
    <div className="App">
      <div className="window">
        <h2>Tomato Counter</h2>
        {days.map((day, index) => (
          <div 
            onClick={() => setSelectedDay(day)}
            key={day} className="tomato-box">
            <h3
              style={selectedDay === day ? {color: '#06cfa4', fontSize: '24px'} : {}}
              >{day}</h3>
            <div 
              style={selectedDay === day ? {border: '2px solid #06cfa4'} : {}}
              className="tomato-day-box">
                <h1>
                  {allTomatoes[day]}
                </h1>
              {/* <TomatoBox tomatoes={tomatoes}/> */}
            </div>
          </div>
        ))}
        <div className="buttons-container">
          <div 
            onClick={removeTomato}
            className="button">
            -
          </div>
          <div 
            onClick={addTomato}
            // Short version without additional addTomato function !!!!!!!! 
            // onClick={() => setAllTomatoes({
            //   ...allTomatoes, 
            //   [selectedDay]: `${allTomatoes[selectedDay] ? allTomatoes[selectedDay] : '' }🍅`})}
            className="button">
            +
          </div>
        </div>
        {/* <ButtonContainer tomatoes={tomatoes} setTomatoes={setTomatoes}/> */}
      </div>
    </div>
  );
}