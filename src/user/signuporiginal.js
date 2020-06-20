import React from 'react'
import Layout from '../core/layout'
import {API} from '../config'

const Signup = () => 

(<Layout title='Sign up Page' description='Please register'>
{API}
<div>
<form action="/action_page.php">
<div class="container">
<h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <hr></hr>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required />

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required />

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />
    <hr />
    
    <button type="submit" class="registerbtn">Register</button>

  </div>
  
  <div class="container signin">
    <p>Already have an account? <a href="/signin">Sign in</a>.</p>
  </div>
</form>

    </div>
</Layout>
)

export default Signin
