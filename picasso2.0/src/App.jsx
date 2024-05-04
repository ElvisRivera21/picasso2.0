
import './App.css'
import './index.css';

function App() {
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
      <form action="interestedUser" method="post">
        <h2>Interested in this Art?</h2>
        <ul>
          <li>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name"/>
          </li>
          <li>
            <label htmlFor="mail">E-mail:</label>
            <input type="email" id="mail" />
          </li>
          <li>
            <label htmlFor="msg">Message:</label>
            <textarea id="msg" name="user_message" />
          </li>
          <li className="button">
            <button type="submit">Send me a message</button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default App;