import { motion } from "framer-motion";
import { useState } from "react";
import { useRecordsContext } from "../hooks/useRecordsContext";


const ModalForm = () => {

    const { dispatch } = useRecordsContext();
    const [userName, setUserName] = useState('');
    const [workTitle, setWorkTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [finishDate, setFinishDate] = useState('');
    const [comment, setComment] = useState('');
    const [error, setError] = useState(null);


    const handleSubmit = (e) => {

        e.preventDefault();

        const reports = { userName, workTitle, startDate, finishDate, comment };
        
        fetch('/Records', {
            method: 'POST',
            body: JSON.stringify(reports), 
            headers: { 'Content-Type': 'application/json' }
        }).then(data => {
            data.json()

            if (!data.ok)
            {
              setError(data.error)    
            }

            if (data.ok)
            {
                setUserName('')
                setWorkTitle('')
                setStartDate('')
                setFinishDate('')
                setComment('')  
                setError(null)
                console.log('New record added', data);
                dispatch({type: 'CREATE_RECORD', payload: data})
                
            }
        })
    }




    return ( 
        <div>
            {/* <!-- Button trigger modal --> */}
<button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add Records
</button>

{/* <!-- Modal --> */}
            <motion.div
                className="modal fade modal-lg" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Fill record details</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
     </div>
<form className="text-start" onSubmit={handleSubmit}>                
      <div className="modal-body">
                            
                                <div className="row">
                                    <div className="col">
                                       <div className="py-2 ">
                                           <label className="">Enter Your name
                                               <input type="text" onChange={(e) => {setUserName(e.target.value)}} value={userName} className="form-control" />
                                           </label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="py-2">
                                           <label htmlFor="">Enter Your project/ funstionaliy Name
                                               <input type="text" onChange={(e) => {setWorkTitle(e.target.value)}} value={workTitle} className="form-control" />
                                           </label>
                                        </div>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col">
                                    <div className="py-2">
                                          <label htmlFor="">Enter Your starting date 
                                              <input type="date" onChange={(e) => {setStartDate(e.target.value)}} value={startDate} className="form-control" />
                                          </label>    
                                      </div>
                                    </div>
                                    <div className="col">
                                        <div className="py-2">
                                            <label htmlFor="">Enter Your finishing date 
                                                <input type="date" onChange={(e) => {setFinishDate(e.target.value)}} value={finishDate} className="form-control" />
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                    <label className="py-2">Place in your comment (if any) </label>
                                        <textarea cols="" rows="5" onChange={(e) => {setComment(e.target.value)}} value={comment} className="form-control"></textarea>
                                        
                           
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save</button>
      </div>
</form>                            
    </div>
  </div>
</motion.div>
</div>
     );
}
 
export default ModalForm;