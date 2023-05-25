import { Form } from "./components/Form/index.js";
import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";
import { uid } from "uid";
import { List } from "./components/List";

export const isGoodWeather = false;

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  );
  console.log(filteredActivities);

  function handleAddActivity(activityObject) {
    setActivities([{ ...activityObject, id: uid() }, ...activities]);
    return activities;
  }

  return (
    <>
      <List activities={filteredActivities} />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
