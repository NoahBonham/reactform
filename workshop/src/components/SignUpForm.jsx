import { useState } from "react"


export default function SignUpForm() {

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [error, seterror] = useState(null)

    async function handlesubmit() {
        try {
           const response = await fetch(
            "https://fsa-jwt-practice.herokuapp.com/signup",
            {
                method: "POST",
                body: JSON.stringify ({username, password})
            }) 
            const result = await response.json()
            settoken(result.token) 
            console.log(result);
            
        } catch (error) {
            seterror(error.message)
        }
    }

    return (  
         <>
        <h2>Sign Up!</h2>
        <form onSubmit={handlesubmit}>
      
          <label>
              Username: <input 
              value={username}
              onChange={(e) => 
              setusername(e.target.value)}
              />
          </label>
            <br />
          <label>
              Password: <input 
              value={password}
              onChange={(e) => 
              setpassword(e.target.value)}
              />
          </label>
            <br />
          <button>Submit</button>

        </form>
        </>
    );
}