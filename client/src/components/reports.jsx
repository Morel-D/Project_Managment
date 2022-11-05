import React from "react";
import { AnimatePresence, motion } from "framer-motion";

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


const Reports = ({record}) => {

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
                                    <h3 className="text-primary ">{record.workTitle}</h3>
                                </div>
                                <div className="col text-end px-5">
                                    <i className="text-secondary">12 minutes ago</i>
                                </div>
                            </div>
    
                        <div className="details py-2">
                            <label><b>Start-Date <label className="mx-3" /> Finish-Date</b></label>
                                <p className="lead">{record.startDate}  --  {record.finishDate}</p>
                        </div>
    
                        <div className="row">
                            <div className="col">
                                <label><b>Comment</b></label><br/>
                                    <small><i>{record.comment}</i> </small>   
                            </div>
                            <div className="col text-end px-5 my-2">
                                    <a href="" className="btn"><i class="bi bi-trash text-danger"></i></a>
                                    <a href="" className="btn"><i class="bi bi-eye text-warning"></i></a>
                                    <button className="btn"><i class="bi bi-pencil text-primary"></i></button>
                            </div>    
                        </div>    
                </motion.div>

        </React.Fragment>
     );
}
 
export default Reports;