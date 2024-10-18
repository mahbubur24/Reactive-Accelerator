import DeleteIcon from "../ui/Delete-icon";
import EditIcon from "../ui/Edit-icon";

export default function ItemList({ listData, filteredData }) {
  function filterByCategory(listData) {
    if (filteredData === "") return listData;
    return listData.filter((item) => {
      return item.category === filteredData;
    });
  }
  return (
    <>
      {filterByCategory(listData).map((item) => {
        return (
          <div
            key={item.id}
            className="flex justify-between items-center py-2 relative group cursor-pointer"
          >
            <div>
              <h3 className="text-base font-medium leading-7 text-gray-600">
                {item.category}
              </h3>
              <p className="text-xs text-gray-600">{item.date}</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-base font-semibold text-gray-600 transition-all group-hover:-translate-x-14">
                {item.amount} /-
              </p>

              <div className="translate-x-5 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 absolute right-0 top-1/2 -translate-y-1/2 transition-all">
                <button
                  className="hover:text-teal-600"
                  role="button"
                  title="Edit Button"
                  onClick={() => {
                    editHandler(item);
                  }}
                >
                  <EditIcon></EditIcon>
                </button>

                <button
                  className="hover:text-red-600"
                  role="button"
                  title="Delete"
                >
                  <DeleteIcon></DeleteIcon>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
