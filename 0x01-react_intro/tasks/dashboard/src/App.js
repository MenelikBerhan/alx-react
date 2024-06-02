import logo from './logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <>
      <Header />
      <Body />
      <Footer isIndex={true} />
    </>
  );
}

export default App;

function Header() {
  return (
    <header className='App-header'>
      <img
        className='logo'
        src={logo}
        alt="Holberton logo"
        height="200px"
        width="200px" />
      <h1>School dashboard</h1>
    </header>
  );
}

function Body() {
  return (
    <div className='App-body'>
      <p className='form-heading'>Login to access the full dashboard</p>
      <form className='form'>
        <div className='form-entry'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="user_email"
            autoComplete='username'>
          </input>
        </div>
        <div className='form-entry'>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="user_password"
            autoComplete="current-password">
          </input>
        </div>
        <button className='form-buttom' type='submit'>OK</button>
      </form>
    </div>
  );
}

function Footer({ isIndex }) {
  return (
    <footer className='App-footer'>
      <p>Copyright {getFullYear()} - {getFooterCopy(isIndex)}</p>
    </footer>
  );
}
