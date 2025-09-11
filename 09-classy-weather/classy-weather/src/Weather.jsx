import React from "react";
import { Day } from "./Day.jsx";

export class Weather extends React.Component {
  render() {
    const {
      temperature_2m_max: max,
      temperature_2m_min: min,
      time: dates,
      weathercode: codes,
    } = this.props.weather;

    const location = this.props.location;

    return (
      <div>
        <h2>Weather for {location}</h2>
        <ul className="weather">
          {dates.map((date, index) => (
            <Day
              date={date}
              key={date}
              max={max.at(index)}
              min={min.at(index)}
              code={codes.at(index)}
              isToday={index === 0}
            />
          ))}
        </ul>
      </div>
    );
  }
}
