import { useState } from "react"
import { useAuthContext } from "./useAuthContext"




export const useSignup = () =>
{
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const { dispatch } = useAuthContext()


    const signup = async (userName, email, password) => {
        setLoading(true)
        setError(null)


        const response = await fetch('/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({userName, email, password})
        })

        const data = await response.json();

        if (!response.ok)
        {
            setLoading(false)
            setError(data.error)
        }
        
        if (response.ok)
        {
            // save data to local storage
            localStorage.setItem('user', JSON.stringify(data))

            // update the auth context
            dispatch({type: 'LOGIN', payload: data })
        }
    }

    return { signup, loading, error}
}