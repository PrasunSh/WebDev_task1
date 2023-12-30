import WalkingMan from "./WalkingMan";
import Header from "./Header";
import Listarea from "./ListArea";
import NavBar from "./NavBar";
import AddTask from "./AddTask";

function App() {
  return (
    <div className="App">
      <div className="headnav">
        <Header />
        <NavBar />
      </div>
      <hr></hr>
      <div className="content">
        {/* <Listarea />
        <WalkingMan /> */}
        <AddTask />
      </div>
    </div>
  );
}

export default App;
