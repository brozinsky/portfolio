import React from 'react'

const ProjectCard = ({ title, tags, type }) => {
    return (
        <>
            <div className="card">
                <div className="overlay">
                    <h3 className='card-title'>{title}</h3>
                    <div className="tag-wrapper">
                        {
                            tags.map((tag) =>
                                <div className="card-tag">
                                    {tag}
                                </div>
                            )}
                    </div>
                    <span className="card-type">{type}</span>
                </div>
            </div>
        </>
    )
}

export default ProjectCard
