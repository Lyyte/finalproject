import React from 'react'
import Layout from '../core/layout'
import './signup.css';

const Signin = () => 

(<Layout title='Sign up Page' description='Please register.'>
<div>
<form action="/action_page.php">
<div class="container">
<h1>Create Account</h1>
    <p>Please fill in this form to create an account.</p>
    <hr></hr>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required />
    <br></br>
    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required />
    <br></br>
    <label for="psw-repeat"><b>Confirm Password</b></label>
    <input type="password" placeholder="Confirm Password" name="psw-repeat" id="psw-repeat" required />
    <hr />
    
    <button type="submit" class="btn registerbtn">Register</button>

  </div>
  
  <div class="container signin">
    <p>Already have an account? <a href="/signin" id="sign-in-link">Sign in.</a></p>
  </div>
</form>

    </div>
</Layout>
)

export default Signin
