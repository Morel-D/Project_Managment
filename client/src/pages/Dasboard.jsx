import { useEffect } from "react";
import { useState } from "react";
import { json } from "react-router-dom";
import Reports from "../components/reports";


const Dasboard = () => {


    const [records, setRecords] = useState(null);

    useEffect(() => {

        fetch('/Records')
            .then(resource => {
                if (!resource.ok)
                {
                    throw Error('Something is wrong')
                }
                return resource.json()
            }).then(data => {
            setRecords(data)
        })
       
    }, ['/Records'])



    return ( 
        <div className="p-5">
            <div className="row">
                <div className="col text-start"><h3>Report Scripts</h3></div>
                <div className="col text-end">
                    <button className="btn btn-dark">Add Report</button>
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