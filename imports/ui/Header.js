import React, { Component } from 'react';
import Accounts from './Accounts';
import { Link, browserHistory } from 'react-router';

class Header extends Component {
    onBinClick(event) {
        event.preventDefault();

        Meteor.call('Bins.insert', (error, createdBinId) => {
            browserHistory.push(`/bins/${createdBinId}`);
        });
    }

    render() {
        return(
            <nav className="nav navbar-default">
                <div className="navbar-header">
                    <Link to="/" className="navbar-brand">MarkBin</Link>
                </div>
                <ul className="nav navbar-nav">
                    <li>
                        <Accounts />
                    </li>
                    <li>
                        <a href="#" onClick={this.onBinClick.bind(this)}>Create Bin</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Header;
