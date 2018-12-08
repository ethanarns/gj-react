import React, { Component } from 'react';

class NewsItem extends Component {
    render() {
        return (
            <div class="list-group-item">
            <div class="d-flex w-100 justify-content-between">
                <h6 class="m-0">Next meeting January 23</h6>
                <small>12-4-2018</small>
            </div>
            <p class="m-0 text-muted">
                2pm at Nob Hill Capitola Wine Bar
            </p>
            </div>
        )
    }
}

export default NewsItem;