import React from "react";
import Timer from "./Timer";

function App() {
  return (
    <div>
      <Timer timeFromNow="11 05 2020, 6:00 am" timeFormat="MM DD YYYY" />
    </div>
  );
}
export default App;
