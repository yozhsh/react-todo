import React from 'react';
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';

// PAGES
import Todo from "./pages/todoPage";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Todo/>
        </div>
    );
}

export default App;
