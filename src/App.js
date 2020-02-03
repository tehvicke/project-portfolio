import React from 'react';
import './App.css';

function App() {
  return (
    <div className="portfolio-app">
      <img src ="viktor.png" alt="Portrait of Viktor" className="portrait"/>
        <h1>Viktor Dahl</h1>
      <div className="info-box">
        <h3>Software Engineer | Mgmt Consultant | Freelancer | Dreamer | Geek | M.Sc. </h3>
        <div className="links">
          <a href="https://github.com/tehvicke" target="_blank">
            <img src="/icons/GitHub-Mark-Light-64px.png" alt="Github logo"/>
            <p>Github</p>
          </a>
          <a href="https://www.linkedin.com/in/viktordahl/" target="_blank">
            <img src="/icons/LinkedIn.png" alt="Linkedin logo"/>
            <p>LinkedIn</p>
          </a>
          <a href="https://www.facebook.com/tehvicke" target="_blank">
            <img src="/icons/facebook-3-64.png" alt="Facebook logo"/>
            <p>Facebook</p>
          </a>
          <a href="https://medium.com/@tehvicke" target="_blank">
            <img src="/icons/medium.png" alt="Medium logo"/>
            <p>Medium</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
