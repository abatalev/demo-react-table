import '../assets/styles/App.css';
import AppRoutes from "./AppRoutes";
import Navbar from "./shared/Navbar";

function App() {
  return (
    <div className="container-navigation">
        <Navbar/>
        <div className="App">
          <header className="App-header">
            <AppRoutes/>
          </header>
        </div>
    </div>
  );
}

export default App;