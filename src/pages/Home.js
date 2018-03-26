// External Dependencies
import React, { Component } from 'react'
import { API_Key } from '../config';
import YTSearch from 'youtube-api-search';

// Internal Dependencies
import SearchBar from '../components/SearchBar/SearchBar';
import VideoDetail from '../components/VideoDetail/VideoDetail';
import VideoList from '../components/VideoList/VideoList';
import VideoPlayer from '../components/VideoPlayer/VideoPlayer';

// Component Definition
export default class componentName extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            search: null,
        };

        YTSearch({ key: API_Key, term: 'nba' }, videos => {
            this.setState({
                videos
            }); // same as this.setState({videos: videos})
        });

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({
            search: e.target.value
        })
        console.log(e.target.value);
    }
    render() {
        return (
            <div
                style={{
                    display: 'grid',
                    gridGap: '1em',
                    gridTemplateColumns: '2fr 1fr',
                    margin: '2em 3em 0 3em',
                }}>
                <SearchBar change={this.handleChange} onChange={this.handleChange} />
                <VideoPlayer />
                <VideoList videos={this.state.videos} />
            </div>
        )
    }
}
