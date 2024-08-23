import { useState } from "react"

export default function Authenticate({token}) {
    const [sucessmessage, setsucessmessage] = useState(null)
    const [error, seterror] = useState(null)

    async function handleclick(e) {
        event.preventDefault()
        try {
            const response = await fetch(
                "https://fsa-jwt-practice.herokuapp.com/authenticate",
                {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            )

            const result = await response.json()
            console.log(result);
            setsucessmessage(result.message)

        } catch (error) {
            seterror(error.message)
        }
    }
    return (
    <div>

    <h2>Authenticate!</h2>

        {sucessmessage && <p>{sucessmessage}</p>}
        {error && <p>{error}</p>}

        <button onClick={handleclick}>Authenticate Token!</button>

    </div>

    )
}