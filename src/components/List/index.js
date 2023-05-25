import "./List.css";
import { isGoodWeather } from "../../App.js";

export function List({ activities }) {
  return (
    <>
      <h2>
        {isGoodWeather ? "the weather is awesome" : "bad weather, stay inside"}
      </h2>
      <ul className="list">
        {activities.map((activity) => (
          <li className="listItem" key={activity.id}>
            {" "}
            {activity.name}{" "}
          </li>
        ))}
      </ul>
    </>
  );
}
