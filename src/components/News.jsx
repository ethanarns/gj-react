import React, { Component } from 'react';

class News extends Component {
    render() {
        return (
            <div class="col rCol" id="newsCol">
                <div class="list-group m-2">
                    <div class="list-group-item list-group-item-secondary ">
                        <h4 class="m-0">News</h4>
                    </div>
                    
                    <div class="list-group-item">
                        <div class="d-flex w-100 justify-content-between">
                            <h6 class="m-0">Next meeting January 23</h6>
                            <small>12-4-2018</small>
                        </div>
                        <p class="m-0 text-muted">
                            2pm at Nob Hill Capitola Wine Bar
                        </p>
                    </div>
                    
                    <div class="list-group-item">
                        <a href="http://cgja.blogspot.com/" class="text-center d-block" target="_blank" rel="noopener noreferrer">
                            <i class="fas fa-external-link-alt"></i> Link to Statewide CGJA News
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default News;