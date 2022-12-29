import '../styles/Global.scss'
import '../scripts/fetchAPI'

export default function Footer() {
    return (
        <>
            <footer className='footer-container'>
                <div className="footer-social-links">
                    <a href="https://github.com/eduardofontana" title="Github" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a>
                    <a href="https://twitter.com/duhduhfontana" title="Twitter" target="_blank" rel="noreferrer"><i className="fa fa-twitter" ></i></a>
                    <a href="https://instagram.com/duhduhfontana" title="Instagram" target="_blank" rel="noreferrer"><i className="fa fa-instagram" ></i></a>
                    <a href="https://www.linkedin.com/in/eduardo-fontana-490492258/" title="LinkedIn" target="_blank" rel="noreferrer"><i className="fa fa-linkedin" ></i></a>
                </div>
                <div className="footer-social-links">
                    <span>Made with a lot of &#9749; | by: Eduardo Fontana <br />&copy;2023 e.AI | All Rights Reserved</span>
                    <br />
                    <span id="ip"></span>
                </div>
            </footer>
        </>
    )
}