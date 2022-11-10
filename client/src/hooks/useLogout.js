import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {

    const { dispatch } = useAuthContext()
    
    const logout = () => {
        // remove user item
        localStorage.removeItem('user')

        // dispatch logout actio
        dispatch({type: 'LOGOUT'})
    }


    return {logout};
}