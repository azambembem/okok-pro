import { useReducer } from "react";

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "plus":
      return { count: state.count + 1 };
    case "minus":
      if (state.count > 1) return { count: state.count - 1 };
      else return { count: 0 };

    case "add":
      return {
        count: state.count,
        data: [
          ...state.data,
          {
            id: new Date().getTime(),
            name: action.payload.name,
            surname: action.payload.surname,
          },
        ],
      };
    case "deleteTodo":
      return {
        data: state.data.filter((value) => value.id !== action.payload.id),
      };
    case "all delete":
      return {
        data: [],
      };

    default:
      return state;
  }
};
// reducer func ishalganda bizga albata
//returnga malumot qaytish kerak!!

const App = () => {
  // key  -> changer                   func -> initialValue
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    data: [{ id: 0, name: "Jamshidbek", surname: "Hayitbayev" }],
  });

  return (
    <div>
      {/* <button onClick={() => dispatch({ type: "plus" })}>+</button>
      {state.count}
      <button onClick={() => dispatch({ type: "minus" })}>-</button> */}
      {state?.data?.map((value, index) => (
        <div key={value.id}>
          {value.name} -{">"} {value.surname}
          <button
            onClick={() =>
              dispatch({
                type: "deleteTodo",
                payload: { id: value.id },
              })
            }
          >
            Delete
          </button>
          <button onClick={() => {}}>Edit</button>
        </div>
      ))}

      <button
        onClick={() =>
          dispatch({
            type: "add",
            payload: { name: "Muhammad", surname: "Hamrayev" },
          })
        }
      >
        Add User
      </button>
      {state.data.length > 1 ? (
        <button onClick={() => dispatch({ type: "all delete" })}>
          all delete
        </button>
      ) : (
        ""
      )}
    </div>
  );
};
// payload -> biror malumot jonatmoqchi bolsak biz payload ichiga olishimiz kekar
// dispatch () -> reducer -> action
export default App;

// import React, { useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };
//   const decrement = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div>
//       <button onClick={decrement}>-</button>
//       <button onClick={increment}>+</button>
//     </div>
//   );
// };

// export default App;


import { useReducer, usereducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "delete":
      return {
        ...state,
        data: state.data.filter((value) => value.id !== action.payload.id)
      };
    case "CHANGE_ADD_VALUE":
      return {
        ...state,
        addValueCollector: {
          ...state.addValueCollector,
          [action.payload.name]: action.payload.inputValue
        }
      };
    case "ADD_NEW_USER":
      return {
        ...state,
        data: [...state.data, { id: new Date().getTime(), ...action.payload }],
        addValueCollector: {
          name: "",
          surname: ""
        }
      };
    case "EDIT_USER":
      return { ...state, isSelected: true };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    data: [
      { id: 0, name: "Husan", surname: "Bo'tayev" },
      { id: 1, name: "Azambek", surname: "Rahmatov" }
    ],
    addValueCollector: {
      name: "",
      surname: ""
    },
    isSelected: false,
    selectedData: {}
  });

  return (
    <div>
      {state.data.map((value) => (
        <div>
          {state.isSelected ? <input /> : value.name} -{">"}{" "}
          {state.isSelected ? <input /> : value.surname}
          <button onClick={() => dispatch({ type: "EDIT_USER" })}>Edit</button>
          <button
            onClick={() =>
              dispatch({
                type: "delete",
                payload: {
                  id: value.id
                }
              })
            }
          >
            Delete
          </button>
        </div>
      ))}
      <input
        value={state.addValueCollector.name}
        onChange={(e) =>
          dispatch({
            type: "CHANGE_ADD_VALUE",
            payload: {
              inputValue: e.target.value,
              name: "name"
            }
          })
        }
        placeholder="New name..."
      />
      <input
        value={state.addValueCollector.surname}
        onChange={(e) =>
          dispatch({
            type: "CHANGE_ADD_VALUE",
            payload: {
              inputValue: e.target.value,
              name: "surname"
            }
          })
        }
        placeholder="New surname..."
      />
      <button
        onClick={() =>
          dispatch({
            type: "ADD_NEW_USER",
            payload: {
              name: state.addValueCollector.name,
              surname: state.addValueCollector.surname
            }
          })
        }
      >
        Add
      </button>
    </div>
  );
}
export default App;
