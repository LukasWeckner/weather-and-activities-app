import "./List.css";

export function List({ activities, weatherState, emoji }) {
  return (
    <>
      <h2 className="list-header">
        {weatherState
          ? `the weather is awesome   ${emoji}`
          : `bad weather, stay inside   ${emoji}`}
      </h2>
      <ul className="list">
        {activities.map((activity) => (
          <li className="list-item" key={activity.id}>
            {" "}
            {activity.name}{" "}
          </li>
        ))}
      </ul>
    </>
  );
}
