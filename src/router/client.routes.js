import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

const RoutesApp = (routes) => (
    <Router>
        {
            routes
        }
    </Router>

);

export default RoutesApp;
