import react from 'react'
import img8 from './img/img8.jpg'
import logo from './img/img7.jpg'
import '../css/home.css'

function Home() {
    return(
        <>
            <div className='home_img'><img src={img8}></img></div>
            <div className='custom_nav'></div>
            <div className='left'></div>
        </>
    )
}
export default Home