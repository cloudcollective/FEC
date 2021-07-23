import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import productData from '../../exampleProductData.js';

ReactDOM.render(<App data={productData} />, document.getElementById('root'));
