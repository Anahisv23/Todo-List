import { useState } from "react"

const RandomToDoGenerator = () => {
    const [activity, setActivity] = useState("")

    const fetchActivity = async () => {
        try {
            const res = await fetch(`http://www.boredapi.com/api/activity/`)
            const data = await res.json()
            return data
        } catch (error) {
            console.log("Could not get activity")
        }
    }

    const handleClick = async () => {
        const randomActivity = await fetchActivity()
        setActivity(randomActivity.activity)
    }

    return (
        <div className="random-activity">
            <h3 style={{ textAlign: "center", color: "white" }}>Finished with all your tasks?<br></br>Click below for some<br></br>activities 🚲</h3>
            <h4 style={{ textAlign: "center", color: "#034001" }}>{activity}</h4>
            <button className="centered-button" onClick={handleClick}> Generate Random Activity</button>
        </div>
    )
}

export default RandomToDoGenerator

