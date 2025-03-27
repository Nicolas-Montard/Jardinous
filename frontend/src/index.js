import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router";
import CreateOffer from "./elements/CreateOffre";
import CreateCategory from "./elements/CreateCategory";
import FormDelete from "./components/FormDelete";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/admin/create" element={<CreateOffer/>}/>
                <Route path="/admin/create-category" element={<CreateCategory/>}/>
                <Route path="/admin/delete:offerId" element={<FormDelete/>}/>
            </Routes>
        </React.StrictMode>
    </BrowserRouter>
);