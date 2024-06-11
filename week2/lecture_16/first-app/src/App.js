
import './App.css';

function App() {
  const Name="Gaurav Mittal";
  return (
    <>
    <div>
      <h1 style={
        {
          color:"red",
          textAlign:"center",
        }
      }>Hello My name is Gaurav Mittal</h1>
      <h1>Hello My name is {Name}</h1>

    </div>
    
    <div>
      <h1>This side {Name}</h1>
      </div>
      </>
  );
}

export default App;
