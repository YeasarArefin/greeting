import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


let hour = new Date().getHours();

var massege = '';

if (hour >= 0 && hour <= 12) {

	massege = <span style={{ color: '#0d6aff' }}>Good morning</span>;

} else if (hour > 12 && hour <= 19) {

	massege = <span style={{ color: '#ff5200' }}>Good After Noon</span>;

} else if (hour > 19 && hour <= 24) {

	massege = <span style={{ color: '#2b2b2b' }}>Good Night</span>;

}


ReactDOM.render(

	<>

		<div className="massege">

			<h1 style={{ color: 'white' }}>Hello Sir, {massege}</h1>

		</div>

	</>,


	document.getElementById('root')
);
