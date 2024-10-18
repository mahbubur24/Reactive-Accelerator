import { useState } from "react";
import InputWrapper from "./Tracker-input/Input-wrapper";
import OutputWrapper from "./Tracker-output/Output-wrapper";

export default function CommonPathWay() {
  const defaultItem = {
    id: 1,
    category: "",
    amount: "",
    date: "",
  };
  let defaultbalance = {
    remain: 0,
    totalIncome: 0,
    totalExpence: 0,
  };
  const [expenseList, setExpenseList] = useState([]);
  const [incomeList, setIncomeList] = useState([]);
  const [balance, setBalance] = useState({ defaultbalance });
  
  // add item to list array
  function addItemtoList(newItem, flag) {
    if (flag === "income") {
      setIncomeList([...incomeList, newItem]);
    } else {
      setExpenseList([...expenseList, newItem]);
    }
  }
  // edit handler
  function editHandler(item) {

  }
  // balance status
  function balanceStatus() {
    let sum = 0;
    let remain = 0;
    let sumOfIncome = 0;
    let sumOfExpense = 0;
    incomeList.forEach((item) => {
      sum = sum + Number(item.amount);
    });
    sumOfIncome = sum;
    sum = 0;
    expenseList.forEach((item) => {
      sum = sum + Number(item.amount);
    });
    sumOfExpense = sum;
    remain = sumOfIncome - sumOfExpense;
    return [remain, sumOfIncome, sumOfExpense];
  }
  return (
    <main className="relative mx-auto mt-10 w-full max-w-7xl">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <InputWrapper sendData={addItemtoList}></InputWrapper>
        <OutputWrapper
          incomeList={incomeList}
          expenseList={expenseList}
          editHandler={editHandler}
          balance={balanceStatus}
        ></OutputWrapper>
      </section>
    </main>
  );
}
