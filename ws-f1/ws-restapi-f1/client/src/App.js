import "./App.css";
import ContactList from "./Components/ContactList";
import { Route, Routes } from "react-router-dom";
import Add from "./Components/Add";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/allcontacts" element={<ContactList />} />
                <Route path="/add" element={<Add />} />
            </Routes>
        </div>
    );
}

export default App;
