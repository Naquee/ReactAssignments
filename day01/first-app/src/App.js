import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';

// import Answer1,{Answer2,Answer3} from './components/Answer1';
import Answer from './components/Answer';

// function App() {
//   return (
//     <div className="App">
//       <Hello></Hello>
//       <Answer name="Ritesh" place="India" />
//       <Answer name="Aman" place="Usa"/>
//       <Answer name="Pragati" place="Rassuia"/>
  
//     </div>
//   );
// }



function App() {

  let info=[

    { name:"Ritesh" ,place:"India"},
    { name:"Roshan" ,place:"Usa"},
    { name:"Rashid" ,place:"Australia"},
    { name:"Naki" ,place:"Karlonifonia"},
    { name:"Sohan" ,place:"Dubai"},
  
    

  ];
  return (
    <div className="App">
      <Hello></Hello>
      <h1>New: 1</h1>
      {info.map((user)=>(
        <div>

          {/* <h1>New: 1</h1> */}
          <Answer {...user}/>

        </div>
      ))}
    </div>

  );
}

export default App;
