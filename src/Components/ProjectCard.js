import React from 'react'
import './App.css';
import useUserContext from './Contexts/UserContext'
import { useNavigate } from 'react-router-dom';
function ProjectCard({name,gitLink,imageLink,cardNo,which}) {
    const {setUsedArr,setInd}=useUserContext()
    const navigate=useNavigate();
    function clickCard()
    {
        setUsedArr(which);
        setInd(cardNo);
        navigate('/details')
    }
    return (
        <>
            <div className="cards" onClick={clickCard}>
                <img src={imageLink} alt="projects-images" className="project-images"/>
                <div className="card-content font-bold">
                    <h3>{name}</h3>
                </div>
            </div>
        </>
    )
}

export default ProjectCard
