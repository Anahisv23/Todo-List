import { useState } from "react";

const RandomActivityGenerator = () => {
  const [activity, setActivity] = useState("");

  const fetchActivity = async () => {
    try {
      const res = await fetch(`http://www.boredapi.com/api/activity/`)
      const data = await res.json();
      return data;
    } catch (error) {
      console.log("Could not get activity");
    }
  };

  const handleClick = async () => {
    console.log("in handle click")
    const randomActivity = await fetchActivity();
    setActivity(randomActivity.activity);
  };

  return (
    <div className="random-activity">
      <h3 className="center-text" style={{ color: "white" }}>
        Finished with all your tasks?<br></br>Click below for some<br></br>fun
        activities 🚲
      </h3>
      <h4 className="center-text" style={{ color: "#034001" }}>{activity}</h4>
      <button className="centered-button" onClick={handleClick}>
        Generate Random Activity
      </button>
    </div>
  );
};

export default RandomActivityGenerator;
