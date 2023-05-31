import { CiCalendar } from "react-icons/ci";

const DateBox = () => {
  let date = new Date();
  let d = date.toString().slice(0, 15);

  return (
    <div className="date">
      <CiCalendar size={20} className="item2" />
      <h3 style={{ textAlign: "center" }}>
        Today's date:
        <br></br>
        {d}
      </h3>
    </div>
  );
};

export default DateBox;
