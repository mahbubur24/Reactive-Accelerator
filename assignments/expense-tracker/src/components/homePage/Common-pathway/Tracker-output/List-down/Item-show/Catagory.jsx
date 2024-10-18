export default function Catagory({ categoryList, onFilter }) {
  function checkBoxHandler(e) {
    const name = e.target.name;
    const value = e.target.id;
    onFilter(value);
   
  }

  return (
    <div className="py-1" role="none">
      {categoryList.map((item) => {
        return (
          <label
            key={item.id}
            className="inline-flex items-center px-4 py-2 text-sm text-gray-700"
          >
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 rounded-md text-gray-600"
              id={`"${item.id}"`}
              name={item.name}
              onChange={checkBoxHandler}
            />
            <span className="ml-2">{item.name}</span>
          </label>
        );
      })}
    </div>
  );
}
