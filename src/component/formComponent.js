import "./formComponent.css"

const FormComponent = () => {
  return (
    
    <div className="form-container">
      <h1 className="title">CREATE ACCOUNT</h1>
      <hr></hr>
      <label className="firstname" htmlFor="firstName">First Name</label>
      <input  id="firstName" name="firstName" type="text" placeholder="First Name" required maxLength="25" />
      
      <label htmlFor="lastName">Last Name</label>
      <input id="lastName" name="lastName" type="text" placeholder="Last Name" required maxLength="25" />
      
      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" placeholder="Email" required />
      
      <label htmlFor="phoneNumber">Phone Number</label>
      <input id="phoneNumber" name="phoneNumber" type="number" placeholder="Phone Number" required />
      
      <label htmlFor="password">Password</label>
      <input id="password" name="password" type="password" placeholder="Password" required />
      
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input id="confirmPassword" name="confirmPassword" type="password" placeholder="Confirm Password" required />
      
      <button className="btn3" id="submitButton">REGISTER</button>
    </div>
  );
};

export default FormComponent;