import React from "react";
import './YoutubeComp.css';

const YoutubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thum">
                <iframe width="210" height="120" src="https://www.youtube.com/embed/CZKcmzNs5Jw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YoutubeComp.defaultProps = {
    title: "Title Here",
    desc: "xx ditonton, x hari yang lalu"
}

export default YoutubeComp;