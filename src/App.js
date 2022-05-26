import './App.css';
import {useState} from "react"

function App() {


  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);

  function handleChangeOne(){
    setCheckedOne(!checkedOne);
  };

  function handleChangeTwo(){
    setCheckedTwo(!checkedTwo);
  };

  return (
    <div>
    <h1>Do you like cats? {checkedOne ? "Yes" : "No"}</h1>

      <br></br>
      Yes
      <input
        type="checkbox"
        label="Value 1"
        value={checkedOne}
        onChange={handleChangeOne}
      />
      <br></br>
      <h1>Do you like dogs? {checkedTwo ? "Yes" : "No"}</h1>
      <br></br>
      Yes
      <input
        type="checkbox"
        label="Value 2"
        value={checkedTwo}
        onChange={handleChangeTwo}
      />
    </div>
  );




//   const [likesCats, setLikesCats] = useState(false)
//   const [likesDogs, setLikesDogs] = useState(false)

//   function handleChange(e){
//     if (e.target.type === "checkbox"){
//       setLikesCats(e.target.name : e.target.checked)
//       setLikesDogs(e.target.name)
//     }
//     setLikesCats(e.target.name : e.target.checked)
//     setLikesDogs(e.target.name)
//  }



//   return (
//     <div className="App">
//       <h1>Do you like cats? {likesCats ? "Yes" : "No"}</h1>
//       Yes
//       <input
//         type="checkbox"
//         name='likesCats'
//         onChange={handleChange}
//       >
//       </input>
    
    
//     <br></br>

//     <h1>Do you like dogs? {likesDogs ? "Yes" : "No"}</h1>
//       Yes
//       <input
//         type="checkbox"
//         name="likesDogs"
//         onChange={handleChange}
//       >
//       </input>
 
    
//     </div>
//   );
}

export default App;
