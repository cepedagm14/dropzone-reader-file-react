import React, { useState } from 'react'

const ReadWrite = () => {
    const [myValue, setMyValue] = useState("");

    const createFile = () => {
      const blob = new Blob([myValue], { type: "text/plain;charset=utf-8 " });
      saveAs(blob, "mi-archivo.txt");
    };
  
    const handleInput = (e) => {
      setMyValue(e.target.value);
    };
  
    const readFile = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const fileReader = new FileReader();
      fileReader.readAsText(file);
      fileReader.onload = () => {
        console.log(fileReader.result);
        setMyValue(fileReader.result);
      };
      fileReader.onerror = () => {
        console.log(fileReader.error);
      };
    };
  
  return (
    <div className="App">
    <h1>Read and write files </h1>
    <textarea
      cols="30"
      row="30"
      placeholder="ingrese lo que desea grabar"
      value={myValue}
      onChange={handleInput}
    ></textarea>
    <br />
    <br />
    <input type="file" multiple={false} onChange={readFile} />

    <br />
    <br />

    <button onClick={createFile}>Guardar archivo</button>
  </div>
  )
}

export default ReadWrite