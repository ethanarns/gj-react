import React, { Component } from 'react';
import NewsItem from './NewsItem';

class News extends Component {
    render() {
        return (
            <div class="list-group m-2">
                <div class="list-group-item list-group-item-secondary ">
                    <h4 class="m-0">News</h4>
                </div>
                <NewsItem
                    maintext="Next meeting January 23"
                    date="12-4-2018"
                    subtext="2pm at Nob Hill Capitola Wine Bar">
                </NewsItem>
                <div class="list-group-item">
                    <a href="http://cgja.blogspot.com/" class="text-center d-block" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-external-link-alt"></i> Link to Statewide CGJA News
                    </a>
                </div>
            </div>
        )
    }
}

export default News;