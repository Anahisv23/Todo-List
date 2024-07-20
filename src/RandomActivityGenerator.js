import { useState } from "react";

const wellbeingActivities = [
  "Meditation",
  "Yoga",
  "Journaling",
  "Reading a book",
  "Taking a walk",
  "Listening to music",
  "Taking a bath",
  "Practicing deep breathing",
  "Drinking herbal tea",
  "Cooking a healthy meal",
  "Gardening",
  "Spending time with pets",
  "Exercising",
  "Drawing or painting",
  "Doing a puzzle",
  "Calling a friend",
  "Practicing gratitude",
  "Decluttering your space",
  "Writing a letter",
  "Watching a favorite movie",
  "Trying a new hobby",
  "Going for a bike ride",
  "Spending time in nature",
  "Practicing mindfulness",
  "Doing a digital detox",
  "Taking a nap",
  "Enjoying aromatherapy",
  "Playing a musical instrument",
  "Volunteering",
  "Stargazing",
  "Doing a skincare routine",
  "Listening to a podcast",
  "Attending a yoga class",
  "Practicing Tai Chi",
  "Taking a dance class",
  "Going for a swim",
  "Creating a vision board",
  "Practicing affirmations",
  "Enjoying a cup of coffee or tea",
  "Taking a scenic drive",
  "Visiting a museum or art gallery",
  "Exploring a new place",
  "Writing poetry",
  "Playing board games",
  "Doing a craft project",
  "Watching the sunrise or sunset",
  "Listening to nature sounds",
  "Attending a workshop or seminar",
  "Reading inspirational quotes",
  "Practicing positive self-talk",
  "Setting personal goals",
  "Going on a picnic",
  "Taking care of indoor plants",
  "Creating a playlist of favorite songs",
  "Practicing Reiki",
  "Doing a home spa day",
  "Taking a digital photography session",
  "Exploring creative writing",
  "Learning a new language",
  "Practicing calligraphy",
  "Doing a crossword puzzle",
  "Baking",
  "Having a no-screen time",
  "Going to a farmer’s market",
  "Trying a new recipe",
  "Attending a live concert",
  "Going to the theater",
  "Exploring a nature trail",
  "Joining a book club",
  "Practicing Pilates",
  "Doing a random act of kindness",
  "Spending time with family",
  "Watching a documentary",
  "Practicing self-compassion",
  "Trying aromatherapy diffusers",
  "Listening to binaural beats",
  "Writing a gratitude list",
  "Going for a run",
  "Attending a mindfulness retreat",
  "Taking a day off work",
  "Doing breathwork exercises",
  "Joining a fitness class",
  "Doing a yoga nidra session",
  "Exploring art therapy",
  "Going bird watching",
  "Attending a spiritual gathering",
  "Learning about essential oils",
  "Doing a sound bath",
  "Creating a scrapbook",
  "Exploring new cultures",
  "Taking a pottery class",
  "Joining a meditation group",
  "Practicing self-massage",
  "Attending a painting class",
  "Going on a retreat",
  "Exploring acupuncture",
  "Joining a support group",
  "Taking a wellness workshop",
];

const RandomActivityGenerator = () => {
  const [activity, setActivity] = useState("");

  const handleClick = () => {
    let randomNumber = Math.floor(
      Math.random() * wellbeingActivities.length - 1
    );

    setActivity(wellbeingActivities[randomNumber]);
  };

  return (
    <div className="random-activity">
      <h4 className="center-text" style={{ color: "white" }}>
        Finished with all your tasks?<br></br>Click below for some<br></br>
        relaxing activities 🚲
      </h4>
      <h4 className="center-text" style={{ color: "#034001" }}>
        {activity}
      </h4>
      <button className="centered-button" onClick={handleClick}>
        Generate Random Activity
      </button>
    </div>
  );
};

export default RandomActivityGenerator;
