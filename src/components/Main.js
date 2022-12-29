import '../styles/Global.scss'
import img1 from '../image/legal.jpg'
import img2 from '../image/legall.jpg'
import img3 from '../image/legalll.jpg'

export default function Main() {
    return (
        <div className="container">
            <div className="box">
                <div className="imgBx">
                    <img src={img1} alt='' />
                </div>
                <div className="content">
                    <div>
                        <h2>{`>_`}About Me</h2>
                        <p>Coding technology enthusiast since 1994, trying to become a FullStacker professional, I have knowledge in Cyber Security and Web Development.</p>
                    </div>
                </div>
            </div>
            <div className="box">
                <div className="imgBx">
                    <img src={img2} alt='' />
                </div>
                <div className="content">
                    <div>
                        <h2>{`>_`}Skill's</h2>
                        <p>This App was developed in ReactJs, Javascript, HTML/SCSS. Projects in Python and Cyber Security you can find on GitHub.</p>
                    </div>
                </div>
            </div>
            <div className="box">
                <div className="imgBx">
                    <img src={img3} alt='' />
                </div>
                <div className="content">
                    <div>
                        <h2>{`>_`}Contact</h2>
                        <p>You can get in touch using the icons below.<br/>💲 a coffee. ☕</p>
                    </div>
                </div>
            </div>
        </div>
    )
}