import React,{useState} from 'react'
import Header from './components/Header/Header'
import "./App.css"


function App() {
   // state variable for store input value start------
  const [input, setInput] = useState("");
  // state variable for store input value End------

  // state variable for store Reverse value start------
  const [rev, setRev] = useState("");
  // state variable for store Reverse value End------

  // state variable for store sum value start------
  const [sum, setSum] = useState("");
  // state variable for store sum value End------

  //Function for reverse a string start------
  function reverse(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
      newString = newString + str[i];
    }
    return setRev(newString);
  }
  //Function for reverse a string end------

  //Function for sum a string start------
  function sum_of_string(stri) {
    var string_sum = 0;
    for (var i = 0; i < stri.length; i++) {
      var char_code = stri[i].charCodeAt(0) - "a".charCodeAt(0) + 1;
      string_sum += char_code;
    }
    return setSum(string_sum);
  }
  //Function for sum a string end------

  return (
    <div className="main_container">
      <div className="header_file">
        <Header />
      </div>
      <div className="sub_container">
        {/* input field start here */}
        <div className="sub_container_1">
          <div className="item_1">
            <h4>Type word to see it reversesed & Sum</h4>
          </div>
          <div className="item_2">
            <input
              type="text"
              placeholder="Type here"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div className="item_3">
            <button className="button_1" onClick={() => reverse(input)}>
              Find Reverse
            </button>
            <button className="button_2" onClick={() => sum_of_string(input)}>
              Find Sum
            </button>
          </div>
          {/* output field start here */}
          <div className="sub_container_2">
            <div className="input_field">
              <h4 className="reverse">
                Reverse: <span>{rev}</span>
              </h4>

              <h4 className="sum">
                Sum : <span>{sum}</span>
              </h4>
            </div>
          </div>
          {/* output field end here */}
        </div>
        {/* input field end here */}
      </div>
    </div>
  );
  
}

export default App
