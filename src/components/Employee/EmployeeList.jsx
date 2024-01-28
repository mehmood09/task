import React, { useState, useEffect } from "react";
import { Employee } from "./Employee";

function EmployeeList() {
    return (
      <>
        <React.Fragment>
         <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Employee />
            </div>
          </div>
        </div>
      </React.Fragment>
      
     </>
  );
}
export default EmployeeList;