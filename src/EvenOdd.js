import { useState, useRef } from "react";
import './index.css';

function EvenOdd() {
	const rNum = useRef();
  const [num, setNum] = useState("");
  const [msg, setMsg] = useState("");

  const hNum = (event) => { setNum(event.target.value); }

  const check = (event) => {
	if(num == "")
		{
			alert("You didn't entered Any Number");
			setMsg("");
			rNum.current.focus();
			return;
		}
    event.preventDefault();
    let n = parseInt(num);
    let r = n % 2 === 0 ? "Even" : "Odd";
    setMsg(num + " is an " + r + " Number.");
  }

  return (
    <div className="center-content">
      <h1>Even Odd App</h1>
      <form onSubmit={check}>
        <input type="number" placeholder="Enter Integer" onChange={hNum} ref={rNum} />
        <br />
        <input type="submit" value="Check" />
      </form>
      <h2>{msg}</h2>
      <div className="footer">
        Made by <a href="https://www.linkedin.com/in/vinesh-ryapak-73693a227/">Vinesh Ryapak</a>
      </div>
    </div>
  );
}

export default EvenOdd;
