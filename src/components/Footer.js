import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const arrowIcon = <FontAwesomeIcon className="arrow-top"
    icon={faChevronUp} />
const githubIcon = <FontAwesomeIcon className="footer-social-icon"
    icon={faGithub} />
const linkedinIcon = <FontAwesomeIcon className="footer-social-icon"
    icon={faLinkedin} />

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-triangle"></div>
                <div className="button-center">
                    <button className="button-top">
                        {arrowIcon}
                    </button>
                </div>
                <div className="footer-social">
                    <a className="footer-social-link" href="https://github.com/brozinsky">{githubIcon}</a>
                    <a className="footer-social-link" href="">{linkedinIcon}</a>
                </div>
                <small
                    className="copy">Created by &nbsp;
                <a className="copy-link"
                        href="https://github.com/brozinsky">
                        brozinsky</a> &copy; 2020</small>
            </footer>
        </>
    )
}

export default Footer
