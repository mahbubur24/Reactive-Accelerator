import { expenseCatagory, incomeCatagory } from "./Data/state-data";
import ItemShow from "./Item-show/Item-show";

export default function ListDown({ expenseList, incomeList, editHandler }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
      <ItemShow
        title="Income"
        categoryData={incomeCatagory}
        listData={incomeList}
        editHandler={editHandler}
      ></ItemShow>
      <ItemShow
        title={"Expense"}
        categoryData={expenseCatagory}
        listData={expenseList}
        editHandler={editHandler}
      ></ItemShow>
    </div>
  );
}
