import React from 'react';

function Vehicle(props) {
  const category = ["Year", "Model", "Price", "Buy"];
  return (
    <table>
      <tr id="categories">
        <td>{category[0]}</td>
        <td>{category[1]}</td>
        <td>{category[2]}</td>
        <td>{category[3]}</td>
      </tr>
      <tr id="stats">
        <td>{props.values[0]}</td>
        <td>{props.values[1]}</td>
        <td>{props.values[2]}</td>
        <td><button>Buy Now</button></td>    
      </tr>
    </table>
  )
}

function Introduction() {
  return (
    <div id="introduction">
      <h1>Welcome to React Transportation</h1>
      <p>The best place to buy vehicles online</p>
      <h2>Choose Options</h2>
      <p>New Only<input type="checkbox"></input></p>
      <p>Select Type <span>
          <select name="cars">
            <option>All</option>
            <option>Cars</option>
            <option>Trucks</option>
            <option>Convertibles</option>        
          </select>
        </span>
      </p>      
    </div>
  )
}

function Vehicles(props) {
  return (
    <div id="vehicles">
      <div id="cars">
        <h1>Cars</h1> 
          <Vehicle values={["2013", "A", "$32000"]}/>
          <Vehicle values={["2011", "B", "$4400"]}/>
          <Vehicle values={["2016", "B", "$15500"]}/>
      </div>
      
      <div id="trucks">
        <h1>Trucks</h1> 
        <Vehicle values={["2014", "D", "$18000"]}/>
        <Vehicle values={["2013", "E", "$5200"]}/>
      </div>
      
      <div id="convertibles">
        <h1>Convertibles</h1> 
        <Vehicle values={["2009", "F", "$2000"]}/>
        <Vehicle values={["2010", "G", "6000"]}/>
        <Vehicle values={["2012", "H", "$12500"]}/>
        <Vehicle values={["2017", "M", "$50000"]}/>
      </div>
    </div>
  )
}

function App(){
  return (
    <div>
      <Introduction/>
      <Vehicles/>
    </div>
  )
}

export default App;
