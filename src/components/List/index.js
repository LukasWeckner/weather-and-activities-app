import "./List.css";

export function List({ activities }) {
  return (
    <ul className="list">
      {activities.map((activity) => (
        <li className="listItem" key={activity.id}>
          {" "}
          {activity.name}{" "}
        </li>
      ))}
    </ul>
  );
}
