import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Todo from './pages/Todo';
import UserInfo from './pages/UserInfo';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/todo" element={<Todo/>} />
                <Route path="/user-info" element={<UserInfo/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
