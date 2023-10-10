

const SignIn = () => {
  return (
    <form>
      <div>
        <label>Email: </label>
        <input type='email' name='email' placeholder='jon@test.com'  /> 
      </div>
      <div>
        <label>Password: </label>
        <input type='password' name='password' value={password}  /> 
      </div>
    </form>
  )
}

export default SignIn;