import { useState } from "react";
export default function InputExpense({ sendData }) {
  const [formData, setformData] = useState({
    category: "",
    amount: "",
    date: "",
  });
  function inputItemHandler(e) {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    sendData(formData);
  }
  return (
    <>
      
    </>
  );
}
