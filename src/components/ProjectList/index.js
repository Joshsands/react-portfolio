import { useState } from 'react';
import Modal from "../Modal";
import { formatTitle } from '../../utils/helpers';

const ProjectList = () => {

    const [projects] = useState([
        {
            name: 'find-my-boards',
        },
        {
            name: 'life-finder',
        },
        {
            name: 'note-taker',
        },
        {
            name: 'pizza-hunt',
        },
        {
            name: 'tech-blog',
        },
        {
            name: 'weather-dash',
        }
    ])

    const [currentProject, setCurrentProject] = useState();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = (image) => {
        setCurrentProject(image)
        setIsModalOpen(!isModalOpen)
    }

    return (
        <div id='projects' className='row'>
            {isModalOpen && <Modal currentProject={currentProject} onClose={toggleModal} />}
            {projects.map((image, index) => (
                <div className='col-4 project'>
                    <h2>{formatTitle(image.name)}</h2>
                    <img
                        
                        src={require(`../../assets/images/${image.name}.png`).default}
                        alt={image.name}
                        onClick={() => toggleModal(image)}
                        key={index}
                    />
                </div>
            ))}
        </div>
    )
}

export default ProjectList;