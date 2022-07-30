import { useState } from "react";

export default function App() {
  const [msg, setMsg] = useState("");
  const [list, setList] = useState(["aaa", "bbb", "ccc"]);
  const onClickButton = () => alert("aaa");
  const onClickButton2 = () => {
    list.push(msg);
    alert(`メッセージ：${msg}`);
  };
  const onChange = (event) => setMsg(event.target.value);
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちわ</h1>
      <p style={contentStyle}>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
      <div>
        <input type="text" onChange={onChange} />
        <button onClick={onClickButton2}>ボタン</button>
      </div>
      <p>メッセージ：{msg}</p>
      <ul>
        {list.map((msg) => (
          <li>{msg}</li>
        ))}
      </ul>
    </>
  );
}
