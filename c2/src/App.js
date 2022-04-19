 
 import React from "react";


import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";


function App() {
  const [val,valSet]=React.useState(0)
  const Ad=()=>{
   valSet(val+1)
  }
  return (
    <div className="App">
      <button className="togglebtn" onClick={()=>Ad()}>Button</button>
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
      {/* <AddStudent/> */}
      <div>{val%2==0 ? <ShowStudents/> : <AddStudent/>} </div>
    </div>
  );
}

export default App;
