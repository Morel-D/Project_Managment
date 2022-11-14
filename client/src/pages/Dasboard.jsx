import { useEffect } from "react";
import ModalForm from "../components/modalForm";
import Reports from "../components/reports";
import { useRecordsContext } from "../hooks/useRecordsContext";
import { useAuthContext } from "../hooks/useAuthContext"


const Dasboard = () => {


    const { records, dispatch } = useRecordsContext();
    const { user } = useAuthContext();

    useEffect(() => {
   

        const fetchRecords = async () => {
            const resource = await fetch('/Records',
                {
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                });
            
            const json = await resource.json()

            if (resource.ok)
            {
                dispatch({ type: 'SET_RECORDS', payload: json})
            }
            
        }

        if (user)
        {
            fetchRecords()    
        }     
       
    }, [dispatch, user])



    return ( 
        <div className="p-5">
            <div className="row">
                <div className="col text-start"><h3>Report Scripts</h3></div>
                <div className="col text-end">
                    <ModalForm />
            </div>
            <div className="content py-1">
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
