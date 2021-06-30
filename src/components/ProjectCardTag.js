import React from 'react'
import Tooltip from '@material-ui/core/Tooltip';

const ProjectCardTag = ({ tag }) => {
    return (
        <Tooltip title={tag.tooltip} placement="right" arrow>
            <div className=
                {tag.name + '-tag card-tag'} >
                <span
                    className={tag.name === 'api' ? 'small' : ''}>
                    {tag.icon} </span>
            </div>
        </Tooltip>
    )
}

export default ProjectCardTag