import React, { Component } from 'react';

class NewsItem extends Component {
    render() {
        return (
            <div className="list-group-item">
                <div className="d-flex w-100 justify-content-between">
                    <h6 className="m-0">{this.props.maintext}</h6>
                    <small>{this.props.date}</small>
                </div>
                <p className="m-0 text-muted">
                    {this.props.subtext}
                </p>
            </div>
        )
    }
}

export default NewsItem;