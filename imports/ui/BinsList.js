import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../collections/Bins';

import Bin from './Bin';

class BinsList extends Component {
    renderBins() {
        return this.props.bins.map((bin) => {
            return <Bin key={bin._id} bin={bin} />;
        });
    }

    render() {
        return(
            <ul className="list-group">
                {this.renderBins()}
            </ul>
        );
    }
}

export default createContainer(() => {
    Meteor.subscribe('bins');
    Meteor.subscribe('sharedBins');

    return { bins: Bins.find({}).fetch() };
}, BinsList);