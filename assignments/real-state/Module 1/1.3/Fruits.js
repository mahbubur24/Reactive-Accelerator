/*
 * Title: React JS File
 * Description: A React JS Implementation of efficient DOM manipulation
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 07/01/2023
 *
 */

const domContainer = document.querySelector("#root");

const Fruits = () => {
  const [fruit, setFruit] = React.useState("");
  const [fruits, setFruits] = React.useState([
    "mango",
    "guava",
    "apple",
    "oragne",
  ]);

  return (
    <div className="container">
      <ul id="fruits">
        {fruits.sort().map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <br />
      <p>
        <input
          type="text"
          value={fruit}
          onChange={(e) => setFruit(e.target.value)}
        />
      </p>
      <button onClick={() => setFruits([...fruits, fruit])}>Add Item</button>
    </div>
  );
};

ReactDOM.render(<Fruits />, domContainer);

/** React j node a change hoy sei node theke porer jinis gulo change kore
 * eita dekha jabe rpaiting flash process er maddhome
 */
