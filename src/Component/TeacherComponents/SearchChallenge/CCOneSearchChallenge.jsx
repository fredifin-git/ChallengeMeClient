import React, { Component } from 'react';
import '../../../css/Style.css';
import './styleSearchChallenge.css';
import localHost from '../../LittleComponents/LocalHost';
//import { FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2'


export default class CCOneSearchChallenge extends Component {
    constructor(props) {
        super(props);
        let local = true;
        this.apiUrl = 'http://localhost:' + { localHost }.localHost + '/api/Class';
        if (!local) {
            this.apiUrl = 'http://proj.ruppin.ac.il/igroup2/??????'; //להשלים!!
        }
    }

    

    chooseOption = () => {

    }
    render() {
        return (
            <div className="DivOneTagsSearch col-12" dir="rtl" >
                
                <span className="col-10 oneTagsSearchText" onClick={this.chooseOption}>{this.props.item}</span>
                <br/>
            </div>
        );
    };
}