import React, { useContext } from 'react';
import './App.styl';
import { MyContext } from './ContextProvider';
import Logo from './logo.svg';
import cloneDeep from 'lodash/cloneDeep';
function App() {
  const { data, setData } = useContext(MyContext);
  const _generateData = () => {
    const data = [];
    for (let i = 0; i < 10000; i++) {
      data.push(Math.floor(Math.random() * 1000));
    }
    return data;
  };
  return (
    <>
      {/* <Logo className="App-logo" /> */}
      <div className="header">Hello React!</div>
      <button
        onClick={() => {
          setData(_generateData());
        }}>
        Click
      </button>
      <button
        onClick={() => {
          setData(data.concat(Math.floor(Math.random() * 1000)));
        }}>
        Add
      </button>
      <table>
        {data.map((item, index) => {
          return (
            <tr>
              <td>{item}</td>
              <td>
                <button
                  onClick={() => {
                    const newData = cloneDeep(data);
                    newData.splice(index, 1);
                    setData(newData);
                  }}>
                  Remove
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default App;
