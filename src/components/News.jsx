import React, { Component } from 'react';
import NewsItem from './NewsItem';

class News extends Component {
    constructor(props) {
        const newsInput = [
            {
                "mainText": "Next meeting January 23",
                "date": "12-4-2018",
                "subText": "2pm at Nob Hill Capitola Wine Bar"
            },
            {
                "mainText": "Site updated",
                "date": "12-8-2018",
                "subText": ""
            }
        ];
        super(props);
        this.state = {
            "input": newsInput
        };
    }

    render() {
        return (
            <div className="list-group m-2">
                <div className="list-group-item list-group-item-secondary ">
                    <h4 className="m-0">News</h4>
                </div>
                {this.state.input.map((obj) => {
                    // Purpose of key is to check if anything has changed
                    return (
                        <NewsItem
                            maintext={obj.mainText}
                            date={obj.date}
                            subtext={obj.subText}
                            key={JSON.stringify(obj)}>
                        </NewsItem>
                    )
                })}
                <div className="list-group-item">
                    <a href="http://cgja.blogspot.com/" className="text-center d-block" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-external-link-alt"></i> Link to Statewide CGJA News
                    </a>
                </div>
            </div>
        )
    }
}

export default News;