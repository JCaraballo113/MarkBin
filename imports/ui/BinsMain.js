import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../collections/Bins';

import BinsEditor from './BinsEditor';
import BinsViewer from './BinsViewer';
import ReactSpinner from 'react-spinjs';

class BinsMain extends Component {
    render() {
        if(!this.props.bin) {
            return (
                <ReactSpinner color="#99CFE0" />
            );
        }

        return(
            <div>
                <BinsEditor bin={this.props.bin} />
                <BinsViewer bin={this.props.bin} />
            </div>
        );
    }
}

export default createContainer((props) => {
    const {binId} = props.params;
    Meteor.subscribe('bins');

    return {
        bin: Bins.findOne(binId)
    }
}, BinsMain);