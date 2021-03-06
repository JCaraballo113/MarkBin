import React, { Component } from 'react';
import { markdown } from 'markdown';

class BinsViewer extends Component {
    render() {
        const rawHTML = markdown.toHTML(this.props.bin.content);
        return(
            <div className="col-xs-5">
                <h5>Output</h5>
                <div className="bin-viewer" dangerouslySetInnerHTML={{ __html: rawHTML }}></div>
            </div>
        );
    }
}

export default BinsViewer;