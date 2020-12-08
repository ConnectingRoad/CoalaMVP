import React, {useState} from 'react';
import './ClassCard.css';

function ClassCard(props) {
    const[Title, setTitle] = useState("");
    const [Image, setImage] = useState("");

    const handleChange = e => {
        props.onChange({index: props.index, data: {title: Title, like: e.target.checked}});
    }

    return (
        <div className="class__card">
            <a href={props.url} target="_blank" rel="noreferrer"><img className="class__img" alt="class_img" src={Image}/></a>
            <div className="class__content">
                <a href={props.url} target="_blank" rel="noreferrer">{Title}</a>
                <div className="class__heart">
                    <input type="checkbox" id={"heart" + props.index} onChange={handleChange}/>
                    <label htmlFor={"heart" + props.index}></label>  
                </div>
            </div>
        </div>
    )
}

export default ClassCard
