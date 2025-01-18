import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const [taskList, setTaskList] = useState([]);

  const randomIdGnerator = (length = 6) => {
    const str =
      "qwertyuioplkjhgfdsazxxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM1234567890";

    let id = "";

    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);

      id += str[randomIndex];
    }
    return id;
  };

  const addToLIst = (task) => {
    const obj = {
      ...task,
      id: randomIdGnerator(),
      type: "entry",
    };

    setTaskList([...taskList, obj]);
  };
  const handleOnDelete = (id) => {
    if (window.confirm("Do you want to delete this ?")) {
      const filteredList = taskList.filter((item) => item.id !== id);
      setTaskList(filteredList);
    }
  };
  const switchTask = (id, type) => {
    const newList = taskList.map((item) => {
      if (item.id === id) {
        item.type = type;
      }

      return item;
    });

    setTaskList(newList);
  };

  return (
    <div className="wrapper pt-5">
      <div className="container">
        <h1 className="text-center yuji-mai-regular">Time Divider App</h1>

        {/* <!-- form --> */}
        <Form addToLIst={addToLIst} />

        {/* <!-- Tables --> */}
        <Table
          taskList={taskList}
          handleOnDelete={handleOnDelete}
          switchTask={switchTask}
        />
        <div className="alert alert-success text-center">
          The total hours allocated is <span id="ttl">0</span> hours
        </div>
      </div>
    </div>
  );
}

export default App;
