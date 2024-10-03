import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faFacebook,faInstagram, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';

function Icons() {
  return (
    <div className="flex justify-items-start items-center gap-8 ml-10">
            
              <a href="https://www.facebook.com/samreen.saif/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="text-3xl text-red-800 transform transition-transform duration-1000 hover:rotate-180 "/>
              </a>
              
              <a href="https://github.com/samreensaif" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="text-3xl text-red-800 transform transition-transform duration-1000 hover:rotate-180" />
              </a>
              
              <a href="https://www.linkedin.com/in/samreen-saif-16141027a/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="text-3xl text-red-800 transform transition-transform duration-1000 hover:rotate-180" />
              </a>
              
              <a href="https://www.instagram.com/samreen_saif4/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="text-3xl text-red-800 transform transition-transform duration-1000 hover:rotate-180" />
              </a>

              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="text-3xl text-red-800 transform transition-transform duration-1000 hover:rotate-180" />
              </a>
              
            </div>
  )
}

export default Icons;