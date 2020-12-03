import React from 'react';
import './ClassCard.css';

function ClassCard(props) {
    const { title, image } = props.ogResults.openGraph;

    return (
        <div className="class__card">
            <a href={props.url} target="_blank" rel="noreferrer"><img className="class__img" alt="class_img" src={image.url}/></a>
            <div className="class__content">
                <a href={props.url} target="_blank" rel="noreferrer">{title}</a>
                <div className="class__heart">
                    <input type="checkbox" id={"heart" + props.index}/>
                    <label htmlFor={"heart" + props.index}></label>  
                </div>
            </div>
        </div>
    )
}

export default ClassCard
