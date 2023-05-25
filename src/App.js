import { Form } from "./components/Form/index.js";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import { List } from "./components/List";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  function handleAddActivity(activityObject) {
    setActivities([{ ...activityObject, id: uid() }, ...activities]);
    return activities;
  }
  console.log(activities);
  return (
    <>
      <List activities={activities} />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
