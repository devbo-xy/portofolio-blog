import React, { Component } from "react";
import YoutubeComp from "../../component/YoutubeComp/YoutubeComp";

class Home extends Component {
    render() {
        return (
            <div>
                <p className="yt">Youtube Component</p>
                <hr />
                <YoutubeComp
                    desc="1000x ditonton, 5 hari yang lalu"
                    title="Tutorial ReactJS Bagian 1" />
                <YoutubeComp
                    desc="3000x ditonton, 2 hari yang lalu"
                    title="Tutorial ReactJS Bagian 2" />
                <YoutubeComp
                    desc="4000x ditonton, 1 hari yang lalu"
                    title="Tutorial ReactJS Bagian 3" />
                <YoutubeComp
                    desc="2000x ditonton, 4 hari yang lalu"
                    title="Tutorial ReactJS Bagian 4" />
                <YoutubeComp/>
            </div>
        )
    }
}

export default Home;
