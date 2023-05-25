import { Form } from "./components/Form/index.js";
import { useState } from "react"

function App() {
  const [activities, setActivities] = useState([])
  function handleAddActivity() {

  }
  return <Form onAddActivity={handleAddActivity}/>;
}

export default App;
