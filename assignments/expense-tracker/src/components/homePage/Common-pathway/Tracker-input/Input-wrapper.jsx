import { useState } from "react";
import Expense from "./Expense/Expense.jsx";
import Income from "./Income/Income.jsx";

export default function InputWrapper({sendData}) {
  const [toggle, setToggle] = useState(true);
  const [showBg, setShowBg] = useState(
    "bg-teal-600 hover:bg-teal-500 text-white"
  );

  function showInputHandler() {
    let newtoggle = toggle == true ? false : true;

    setToggle(newtoggle);
    setShowBg(showBg);
  }

  function setFormData(formData, flag) {
     
    sendData(formData,flag)
  }

  return (
    <div className="p-6 py-8 bg-[#F9FAFB] border rounded-md">
      <h2 className="text-3xl font-semibold leading-7 text-gray-800 text-center">
        Expense Tracker
      </h2>

      {toggle && (
        <Expense
          clickHandle={showInputHandler}
          style={showBg}
          saveData={setFormData}
        ></Expense>
      )}
      {!toggle && (
        <Income
          clickHandle={showInputHandler}
          style={showBg}
          saveData={setFormData}
        ></Income>
      )}
    </div>
  );
}
