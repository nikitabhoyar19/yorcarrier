import React from 'react'
import "./Register.css";

const Register = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
  
    const handleSubmit = (event) => {
      console.log(`
        Email: ${email}
        Password: ${password}
      `);
  
      event.preventDefault();
    };
  
    return (
        <>
    
        {/* indeed logo */}
        <div className="form-wrapper register_form">
          <form onSubmit={handleSubmit}>
            {/* email */}

            <div className="email">
              <label htmlFor="email">Email Address</label>
              <input
                placeholder="Email"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                // onChange={this.handleChange}
              />
            </div>

            {/* Password */}
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                placeholder="Password"
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                required
                // onChange={this.handleChange}
              />
            </div>

            {/* firstname */}
            <div className="firstName">
              <label htmlFor="firstname">First Name</label>
              <input
                placeholder="name"
                type="text"
                name="firstname"
                noValidate
                // onChange={this.handleChange}
              />
            </div>

                {/* firstname */}
                <div className="lastName">
              <label htmlFor="lastname">Last Name</label>
              <input
                placeholder="name"
                type="text"
                name="lastname"
                noValidate
                // onChange={this.handleChange}
              />
            </div>

            {/* price label */}
            <label>Rs. 1349/-    <small>Registration Fee</small></label>      

            {/* submit button */}
            <div className="register_createAccount">
              <button type="submit">Register Now</button>

            </div>

            {/* create an acccount line */}
            
              <small>Registration ends in <strong>10h: 02m: 43s</strong></small>
        
          </form>

        </div>
    
   
        </>
    )
}

export default Register
