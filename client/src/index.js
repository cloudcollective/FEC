import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import productData from '../../exampleProductData';

ReactDOM.render(<App data={productData} />, document.getElementById('root'));
