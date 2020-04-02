import React, { Component } from 'react';
import OneChallenge from './OneChallenge';
import localHost from '../../LittleComponents/LocalHost';
import './styleStudentPage.css';
import '../../../css/Style.css';
import { FaCircle } from 'react-icons/fa';


class Challenges extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            StudentChallenges: []
        }
        let local = true;
        this.apiUrl = 'http://localhost:' + { localHost }.localHost + '/api/StudentChallenge';
        if (!local) {
            this.apiUrl = 'http://proj.ruppin.ac.il/igroup2/??????'; //להשלים!!
        }
    }

    componentDidMount = () => {
        fetch(this.apiUrl + '?studentID='+this.props.studentID
            , {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json; charset=UTF-8',
                })
            })
            .then(res => {
                console.log('res=', res);
                console.log('res.status', res.status);
                console.log('res.ok', res.ok);
                return res.json();
            })
            .then(
                (result) => {
                    console.log("Student Challenges= ", result);
                    this.setState({StudentChallenges: result});
                },
                (error) => {
                    console.log("err get=", error);
                });
    }

    AddChallenge = () => {
        // מעבר לעמוד שבו בוחרים אתגר או משהו כזה
    }

    render() { 
        return ( 
            <div>
                <div className="textTilteChallStusent" dir="rtl">{this.state.StudentChallenges.length} האתגרים של התלמיד: </div>
                <div className="row iconsCircle">
                <div className="col-4 oneIconCircle">  צריך עזרה 
               <FaCircle className="iconStatus3"></FaCircle>
               </div>
               <div className="col-4 oneIconCircle">  לא הצליח 
               <FaCircle className="iconStatus2"></FaCircle>
               </div>
               <div className="col-4 oneIconCircle">  הצליח 
               <FaCircle className="iconStatus1"></FaCircle>
               </div>
              
              
                
                </div>
                {this.state.StudentChallenges.map( (item,key) => 
                    <OneChallenge  index = {key+1} challenge = {item} goToEditChallenge = {this.props.goToEditChallenge} />
                    )}
                    <div className="col-12">
                <button className="btn btn-info btnYellow eddChallengeBTN" type="text" onClick={this.AddChallenge}>הוספת אתגר</button>
                </div></div>
         );
    }
}
 
export default Challenges;