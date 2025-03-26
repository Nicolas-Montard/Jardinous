import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router";
import CreateOffer from "./elements/CreateOffre";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/admin/create" element={<CreateOffer/>}/>
            </Routes>
        </React.StrictMode>
    </BrowserRouter>
);