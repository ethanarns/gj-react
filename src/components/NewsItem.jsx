import React, { Component } from 'react';

class NewsItem extends Component {
    render() {
        return (
            <div class="list-group-item">
                <div class="d-flex w-100 justify-content-between">
                    <h6 class="m-0">{this.props.maintext}</h6>
                    <small>{this.props.date}</small>
                </div>
                <p class="m-0 text-muted">
                    {this.props.subtext}
                </p>
            </div>
        )
    }
}

export default NewsItem;