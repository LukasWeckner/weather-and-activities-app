import { Form } from "./components/Form/index.js";
import useLocalStorageState from "use-local-storage-state";
import { useState, useEffect } from "react";
import { uid } from "uid";
import { List } from "./components/List";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState(true);
  const [emoji, setEmoji] = useState();
  useEffect(() => {
    async function startFetching() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const data = await response.json();
      setWeather(data.isGoodWeather);
      setEmoji(data.condition);
    }
    startFetching();
  }, [activities]);

  if (!activities) {
    return null;
  }

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === weather
  );
  console.log(filteredActivities);

  function handleAddActivity(activityObject) {
    setActivities([{ ...activityObject, id: uid() }, ...activities]);
    return activities;
  }

  return (
    <>
      <List
        emoji={emoji}
        weatherState={weather}
        activities={filteredActivities}
      />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
