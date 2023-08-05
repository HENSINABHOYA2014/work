import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';

function App() {
  const click = () => {
    const name = useRef(null);
    const [username, setUsername] = useState("");
    const [check, setCheck] = useState(false);
    const click = () => {
      let username = name.current.value;
      setUsername(username);
      setCheck(true);
    }
  }
  return (
    <>
      <center>
        <br></br>
        <table border={1} cellPadding={3}>
          <thead>
            <tr>
              <td>Name</td>
              <td><input type='text'></input></td>
            </tr>
            <tr>
              <td></td>
              <td><input type='button' value={'Submit'} onClick={click}></input></td>
            </tr>
          </thead>
        </table>
      </center>
    </>
  );
}

export default App;
