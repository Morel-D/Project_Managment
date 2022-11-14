import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRecordsContext } from "../hooks/useRecordsContext";
import { useAuthContext } from "../hooks/useAuthContext";


// date-fns
import {formatDistanceToNow} from 'date-fns';

const animation = {
    hidden: {
        x : "-100vw"
    },

    visible: {
        x: 0,
        transition: {
            delay: 0.5,
            type: 'spring',
            stiffness: 55 
        }
    }
}


const Reports = ({ record }) => {

    
    const { user } = useAuthContext()
    const { dispatch } = useRecordsContext()
    const handleDelete = () => 
    {
        fetch('/Records/'+record._id, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${user.token}` }
        }).then(data => {
            data.json()

            if (data.ok)
            {
                dispatch({type: 'DELETE_RECORDS', payload: data})
            }
        })
        window.location.reload(true);
        }



    return ( 
        <React.Fragment>
             
            <motion.div
                variants={animation}
                initial="hidden"
                animate ="visible"
                
                        className="card col-7 p-3 my-2">
                            <div className="row">
                                <div className="col">
                                    <small className="text-secondary">Done by {record.userName}</small>
                                </div>
                                <div className="col text-end px-5">
                                    <i className="text-secondary">{formatDistanceToNow(new Date(record.createdAt), {addSuffix: true})}</i>
                                </div>
                            </div>
                                  <h5 className="text-primary my-2  ">{record.workTitle}</h5>
    
                        <div className="details ">
                            <label><b>Start-Date <label className="mx-3" /> Finish-Date</b></label>
                                <p className="">{record.startDate}  --  {record.finishDate}</p>
                        </div>
    
                        <div className="row">
                            <div className="col">
                                <label><b>Comment</b></label><br/>
                        <small><i>{record.comment}</i></small>   
                            </div>
                            <div className="col text-end px-5 my-2">
                                    <button type="submit" className="btn" onClick={handleDelete}><i class="bi bi-trash text-danger"></i></button>
                            </div>    
                        </div>    
                </motion.div>

        </React.Fragment>
     );
}
 
export default Reports;