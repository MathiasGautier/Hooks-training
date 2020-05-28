import React, { useState } from "react";


function Home() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState(undefined);

  let upCountHandler = (e) => {
    setCount(count + 1);
  };
  let downCountHandler = (e) => {
    setCount(count + -1);
  };
  let handleText = (e) => {
    setText(e.target.value);
  };

  let handleLorem = (e) => {
    setText("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
  };
  let handleClear=(e)=>{
      setText("")
  }


  let textObj = (str) => {
    let keys = []; //-----------------------------initiate array for final result
    let char = str.split(" "); //------------------split the string into an array
    let count = {}; //-----------------------------create an object to store our key/value pairs
    for (let i = 0; i < char.length; i++) {
      if (!count[char[i]]) {
        //---------V-------------------------------if the word is new
        count[char[i]] = 1; //---------------------add it to the list of words
        keys.push([char[i]]); //------------------ add it to the list of keys for the array
      } else {
        // V----------------------------------------it the word appear again
        count[char[i]] += 1; //---------------------increment its count
      }
    }
    let res = [];
    let key;
    for (let i = 0; i < keys.length; i++) {
      key = keys[i];
     
      
      res.push(key + " appears " + count[key] + " times");
    }

    if (key===""){return false}
    else{return res};
  };


  let textToShow;
  if (text !== undefined) {
    textToShow = textObj(text);
  } else {
    textToShow = false;
  }

 

  return (
    <>
      <div>
        <h1>Counter</h1>
        <button onClick={downCountHandler}>Decrease</button>
        <button onClick={upCountHandler}>Increase</button>
        <p>{count}</p>
      </div>
      <div>
        <h1>Type something</h1>
        <div>
          <p>Want to try some Lorem ?</p>
          <button onClick={handleLorem}>Click here</button>
          <button onClick={handleClear}>Clear the text</button>
        </div>
        <div>
          <textarea className="textCount" type="text" onChange={handleText} value={text}>
         
          </textarea>
         
          {textToShow !== false &&
            textToShow.map((i, index) => {
              return <p key={index}>{i}</p>;
            })}
        </div>
      </div>
    </>
  );
}

export default Home;
