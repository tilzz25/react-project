import logo from './logo.svg';
import './App.css';
import FormComponent from './component/formComponent';
import LogInComponent from './component/LogInComponent';

function App() {
  const handleForm = (e) => {
    const BtnName = e.target.id
    console.log(BtnName)
  }
  return (
    <div >
      <button id="loginbutton" onClick={handleForm}>LOGIN</button>
      <button id="registerButton" onClick={handleForm}>REGISTER</button>
      <FormComponent/>
      <LogInComponent/>
    </div>
  );
}

export default App;
