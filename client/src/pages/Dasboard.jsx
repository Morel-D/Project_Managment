import { useEffect } from "react";
import ModalForm from "../components/modalForm";
import Reports from "../components/reports";
import { useRecordsContext } from "../hooks/useRecordsContext";
import { useAuthContext } from "../hooks/useAuthContext"


const Dasboard = () => {


    const { records, dispatch } = useRecordsContext();
    const { user } = useAuthContext();

    useEffect(() => {

        if (!user)
        {
            return
        }
            fetch('/Records',
            {
                headers: { 'Authorization': `Bearer ${user.token}` }
            }
        )
            .then(resource => {
                if (!resource.ok)
                {
                    throw Error('Something is wrong')
                }
                return resource.json()
            }).then(data => {
                dispatch({ type: 'SET_RECORDS', payload: data})
            })
            
           
       
    }, [dispatch, user])



    return ( 
        <div className="p-5">
            <div className="row">
                <div className="col text-start"><h3>Report Scripts</h3></div>
                <div className="col text-end">
                    <ModalForm />
            </div>
            <div className="content py-5">
              {records && records.map((record) => (
                      <Reports key={record._id} record ={record}  />
                  ))
              }
            </div>
            </div>
        </div>
     );
}
 
export default Dasboard;

// "proxy": "http://localhost:4000"