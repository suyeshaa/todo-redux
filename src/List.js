import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, delItem } from "./redux/to-do/todoAction";
import { v4 } from "uuid";
import { logout } from "./redux/auth/authAction";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import "./List.css";

const List = () => {
  const userArr = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const [txt, setTxt] = useState("");
  const logoutHandler = () => {
    dispatch(logout());
  };
  // const obj = {
  //   txt: txt,
  //   id:v4(),
  // }

  const clickHandler = () => {
    if (txt.length) {
      dispatch(addItem({ txt: txt, id: v4() }));
      setTxt("");
    } else {
      alert(" Todo item cannot have 0 characters");
    }
  };

  return (
    <>
      <div className="list">
        <h3>Todo List</h3>
        <input
          type="text"
          onChange={(e) => setTxt(e.target.value)}
          placeholder="What do you need to do today?"
          value={txt}
        />
        <button onClick={clickHandler}>Add</button>

        {userArr.map((el) => (
          <div key={el.id} className="itm">
            <div className="left">
              <FiberManualRecordIcon />
              <p>{el.txt}</p>
            </div>
            <button onClick={() => dispatch(delItem(el.id))} className="delbtn">
              X
            </button>
          </div>
        ))}
      </div>
      <button onClick={logoutHandler} className="logoutbtn">
        LOGOUT
      </button>
    </>
  );
};

export default List;
