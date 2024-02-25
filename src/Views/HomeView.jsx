import { Navbar } from '../components/index'
import imgen from '../assets/image/img_3.png' 
function HomeView(){
    return(
        <>
            <Navbar />
            <div className="row main-container">
            <div className="main">
                <div className="images">
                    <img src={imgen} alt="" className="img-w" />
                </div>
                <div className="detail">
                    <h3>Hi, I&#39;m</h3>
                    <h1><span>John</span> Doe</h1>   
                    <div className="social">
                        <a href="https://www.linkedin.com/in/vikash-web-dev/" 
                        style={{"--socialAni":1}}><i className='bx bxl-linkedin'></i>
                        </a>
                        <a href="https://t.me/web_devs_i" style={{"--socialAni":2}}>
                            <i className='bx bxl-telegram'></i>
                        </a>
                        <a href="https://github.com/bikashdev01" style={{"--socialAni":3}}>
                            <i className='bx bxl-github'></i>
                        </a>
                        <a href="https://www.youtube.com/@Web_Devs__" style={{"--socialAni":4}}>
                            <i className='bx bxl-youtube'></i>
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}



export default HomeView