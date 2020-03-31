import React from "react";
import './styleLittleComponen.css'
import { MdMail } from  "react-icons/md";
import { FaExclamationCircle } from 'react-icons/fa';

import Badge from '@material-ui/core/Badge';

const SearchBarHomeTeacher = (props) => {
  return (
 <div className="row col-12">
 <div className="col-3 massegesTeacherHomePage">
 <Badge badgeContent={props.countMessages} color="secondary"><MdMail size={40}/></Badge>
</div>

 <div className="form-group col-6 searchTeacherHomePage">
     <input type="text" className="form-control inputRounded" id="search" placeholder="חיפוש"></input>
 </div>
 <div className="col-3 alertsTeacherHomePage" >
 
 <Badge badgeContent={props.countAlerts} color="secondary"><FaExclamationCircle size={40}/></Badge>
 </div>
</div> 
);
}

export default SearchBarHomeTeacher;