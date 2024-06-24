import { Navbar, ImageSlide } from '../components/index'
function HomeView(){
    return(
        <div className='content container-fluid position-relative p-0 m-0'>
            <Navbar className="position-absolute" />
            <ImageSlide />
        </div>
    )
}



export default HomeView