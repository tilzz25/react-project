import logo from './logo.svg';
import './App.css';
import FormComponent from './component/formComponent';
import LogInComponent from './component/LogInComponent';

function App() {
  return (
    <div >
      <button id="loginbutton">LOGIN</button>
      <button id="registerButton">REGISTER</button>
      <FormComponent/>
      <LogInComponent/>
    </div>
  );
}

export default App;
