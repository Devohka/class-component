import Counter from "./Component/Counter/Counter";
import './App.css';




function App() {
  const array = [1, 2, 3];
  return (
    <>
    <Counter data={array}/>
    </>
  );
}

export default App;
