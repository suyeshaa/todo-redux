import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, delItem } from "./redux/to-do/todoAction";
import { v4 } from "uuid";

function App() {
  const userArr = useSelector((state) => state);
  const dispatch = useDispatch();

  const [txt, setTxt] = useState("");
  // const obj = {
  //   txt: txt,
  //   id:v4(),
  // }
  return (
    <div className="App">
      <input type="text" onChange={(e) => setTxt(e.target.value)} />
      <button onClick={() => dispatch(addItem({ txt: txt, id: v4() }))}>
        Add
      </button>
      <ul>
        {userArr.map((el) => (
          <div key={el.id}>
            <li>{el.txt}</li>
            <button onClick={() => dispatch(delItem(el.id))}>del</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
