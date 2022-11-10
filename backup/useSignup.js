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


        fetch('/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({userName, email, password})
        }).then(response => {
            if (!response.ok)
            {
                setLoading(false)
                setError(response.error)
            }
            return response.json()
        }).then(data => {

            // save data to local storage
            localStorage.setItem('user', JSON.stringify(data))

            // update the auth context
            dispatch({type: 'LOGIN', payload: data })
        })
    }

    return { signup, loading, error}
}