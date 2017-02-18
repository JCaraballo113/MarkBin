import React from 'react';
import { Link } from 'react-router';

const Bin = (props) => {
    const { bin } = props;

    const RemoveBin = function(bin) {
        Meteor.call('Bins.remove', bin);
    }
    
    return(
        <li className="list-group-item" key={bin._id}>
            <Link to={`bins/${bin._id}`}>Bin {bin._id} </Link>
            <span className="pull-right">
                <button className="btn btn-danger" onClick={() => { RemoveBin(bin)}}>Remove Bin</button>
            </span>
        </li>
    );
}

export default Bin;