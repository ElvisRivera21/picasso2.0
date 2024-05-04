

import React, { useState } from 'react';
import './index.css';

function App() {
  //Initialize state for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();//prevent default form submission behavior
    console.log('Submitted Name:', name);
    console.log('Submitted Email:', email);
    console.log('Submitted Message:', message);
  }

  return (
    <div>
      <div className="title">
        <h1>Welcome to Picasso 2.0</h1>
      </div>

      <div className="rainbow">
        <div className="red"><p>red</p></div>
        <div className="orange"><p>orange</p></div>
        <div className="yellow"><p>yellow</p></div>
        <div className="green"><p>green</p></div>
        <div className="blue"><p>blue</p></div>
        <div className="indigo"><p>indigo</p></div>
        <div className="violet"><p>violet</p></div>
      </div>

      <div className="picasso"></div>

      {/* User Form */}
      <div className="userForm">
       <form onSubmit={handleSubmit}>
        <h2>Interested in this Art?</h2>
        <ul>
          <li>
            <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
          </li>
          <li>
            <label htmlFor="mail">E-mail:</label>
             <input
                type="email"
                id="mail"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
              /> 
          </li>
          <li>
            <label htmlFor="msg">Message:</label>
              <textarea
                id="msg"
                name="user_message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
          </li>
          <li className="button">
            <button type="submit">Send me a message</button>
          </li>
        </ul>
      </form>
    </div>
    </div>
  );
  
}

export default App;