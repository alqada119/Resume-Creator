import * as React from 'react'
import '../App.css'
import { Practical } from './Practical';
import { Experience } from './Experiences';

// Note to self: A FILE HAS ONE DEFAULT MAX

function Apps() {
    return (
        
      <div className="App">
        <header className="App-header">
          <h1>My Resume</h1>
        </header>
        <Experience/>
        <Practical/>
        <button id="submit">Save Resume</button>
      </div>
    );
  }


export default Apps