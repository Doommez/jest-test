import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  const [toggle, setToggle] = useState(false);

  const [value, setValue] = useState("");

  const onClick = () => {
    setToggle((prev) => !prev);
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    const timout = setTimeout(() => {
      setData("kkk");
    }, 100);

    return () => {
      clearTimeout(timout);
    };
  }, []);
  return (
    <div className="App">
      {toggle == true && <div data-testid={"toggle-elem"}>toggle</div>}
      <h1>Hello world</h1>
      <p>{data ? data : "loading..."}</p>
      <input
        value={value}
        onChange={onChange}
        type="text"
        placeholder="input"
      />
      <button data-testid={"toggle-btn"} onClick={onClick}>
        click me
      </button>
    </div>
  );
}

export default App;
