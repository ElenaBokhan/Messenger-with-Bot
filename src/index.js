import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import './layout/style/main.css';

const mountPoint = document.getElementById('root');

ReactDom.render(<App />	, mountPoint);
