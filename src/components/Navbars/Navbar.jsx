function Navbar(){
    return(
        <header className="row main-container">
                <div className="page-header">
                    <div className="logo">
                        <a href="#">Logo.</a>
                    </div>
                    <input type="checkbox" id="click" />

                    <label htmlFor="click" className="mainicon">
                        <div className="menu">
                            <i className='bx bx-menu'></i>
                        </div>
                    </label>
                    <ul>
                        <li><a href="#"  className="active" style={{"--navAni":1}}>Home</a></li>
                        <li><a href="#" style={{"--navAni":2}}>About</a></li>
                        <li><a href="#" style={{"--navAni":3}}>Skills</a></li>
                        <li><a href="#" style={{"--navAni":4}}>Portfolio</a></li>
                        <li><a href="#" style={{"--navAni":5}}>Contact</a></li>
                    </ul>
                </div>
            </header>
    )
}

export default Navbar