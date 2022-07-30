import { useState } from "react";

export default function App() {
  console.log("App");
  const [count, setCount] = useState(0);
  
  const onClickCountUp = () => {
    setCount(count + 1);
  }
  
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちわ</h1>
      <p style={contentStyle}>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
      {/* <div>
        <input type="text" onChange={onChange} />
        <button onClick={onClickButton2}>ボタン</button>
      </div>
      <p>メッセージ：{msg}</p>
      <ul>
        {list.map((msg) => (
          <li>{msg}</li>
        ))}
      </ul> */}
    </>
  );
}
