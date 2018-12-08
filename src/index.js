import React from 'react';
import ReactDOM from 'react-dom';
import News from './components/News';
import * as serviceWorker from './serviceWorker';
import $ from 'jquery';

// Renders "newsCol"
ReactDOM.render(<News />, document.getElementById('newsRoot'));
$('#newsCol').unwrap(); // Delete newsRoot and replace it

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();