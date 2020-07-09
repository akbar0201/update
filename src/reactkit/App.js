import React from 'react';
import ReactDOM from 'react-dom';
import '../sass/main.scss'



const App = () => {
  return (
    <div>
      <header className="header">
        <div className="head1">
          <img className="photo" src="Philips.jpg" alt="mPhoto" width="200px">
          </img>
        </div>

        <div className="head2">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Doctors</a></li>
            <li><a href="#">Department</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </header>


      <div className="back">
        <h1></h1>

      </div>
    </div>
  )
}

export default App

