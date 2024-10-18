import BalanceStatus from "./Balance-status";
import ListDown from "./List-down/List-down";

export default function OutputWrapper({ expenseList, incomeList,editHandler, balance }) {
  const copyExpenseList = [...expenseList];
  const copyIncomeList = [...incomeList]; 

  return (
    <div className="lg:col-span-2">
      <BalanceStatus balance={balance}></BalanceStatus>
      <ListDown
        expenseList={copyExpenseList}
        incomeList={copyIncomeList}
        editHandler={editHandler}
      ></ListDown>
    </div>
  );
}
