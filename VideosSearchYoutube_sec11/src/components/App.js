import React from 'react'
import Youtube from '../apis/Youtube.js';
import './SearchBar.js'
import SearchBar from './SearchBar.js'
import VideoDetail from './VideoDetail.js';
import VideoList from './VideoList.js';


class App extends React.Component {
    state = {videos : [] , selectedVideo:null };

    componentDidMount(){
        this.onTermSubmit('one punch man');
    }
    
    onTermSubmit =  async (term) => {
        // console.log(term);
        const response = await Youtube.get('/search',{
            params : {
                q:term,
            }
        });

        this.setState({
            videos:response.data.items,
            selectedVideo:response.data.items[0]
        });
    };

    onVideoSelect = (video) => {
        //console.log('Select video from app',video)
        this.setState({selectedVideo : video});
    };

    render(){
        return (
            <div className = "ui container">
                <SearchBar onFormSubmit = {this.onTermSubmit}/>
                <div className = "ui grid">
                    <div className = "ui row">
                        <div className = "eleven wide column">
                            <VideoDetail video = {this.state.selectedVideo}/>
                        </div>

                        <div className = "five wide column">
                            <VideoList 
                            onVideoSelect = {this.onVideoSelect} 
                            videos = {this.state.videos}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;