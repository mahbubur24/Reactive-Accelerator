import { useState } from "react";

export default function Expense({ clickHandle, style, saveData }) {
  const defaultExpense = {
    id: crypto.randomUUID(),
    category: "",
    amount: "",
    date: "",
  };
  const [formData, setFormData] = useState(defaultExpense);

  function inputChangeHandler(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  const flag = "Expense";
  function sendData() {
    saveData(formData, flag);
  }

  return (
    <>
      <div className="flex divide-x divide-slate-400/20 overflow-hidden rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10 mt-6">
        <div
          className={`"cursor-pointer ${style} text-center flex-1 px-4 py-2   active"`}
        >
          Expense
        </div>
        <div
          onClick={clickHandle}
          className="cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900"
        >
          Income
        </div>
      </div>{" "}
      <div className="mt-3">
        <label
          for="category"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Category
        </label>
        <div className="mt-2">
          <select
            id="category"
            name="category"
            autocomplete="category-name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
            onChange={inputChangeHandler}
          >
            <option>Education</option>
            <option>Food</option>
            <option>Health</option>
            <option>Bill</option>
            <option>Insurance</option>
            <option>Tax</option>
            <option>Transport</option>
            <option>Telephone</option>
          </select>
        </div>
      </div>
      <div className="mt-3">
        <label
          for="amount"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Amount
        </label>
        <div className="mt-2">
          <input
            type="number"
            name="amount"
            id="amount"
            autocomplete="off"
            placeholder="12931"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
            onChange={inputChangeHandler}
          />
        </div>
      </div>
      <div className="mt-3">
        <label
          for="date"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Date
        </label>
        <div className="mt-2">
          <input
            type="date"
            name="date"
            id="date"
            autocomplete="off"
            placeholder="12931"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
            onChange={inputChangeHandler}
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-6 rounded-md bg-teal-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 w-full"
        onClick={sendData}
      >
        Save
      </button>
    </>
  );
}
