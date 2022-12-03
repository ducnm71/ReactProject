import "@progress/kendo-theme-default/dist/all.css";
import "./timetable.css";

import RoomScheduler from "./schedule";

function Timetable() {
  return (
    <div className="timetable">
      <RoomScheduler />
    </div>
  );
}

export default Timetable;
