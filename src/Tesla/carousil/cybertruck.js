import cybertruck from '../carousil/cybertruck.css'
import ct2 from '../Img/ct2.jpg'
import ct3 from '../Img/ct3.png'



function Cybertruck() {
    return(
        <>
          <div id="carouselExampleFade" class="carousel slide active carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={ct2} className="ct_1" alt="..."></img>
              </div>
              <div class="carousel-item">
                <img src={ct3} className="ct_1" alt="..."></img>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            </button>
          </div>
        </>
    )
}
export default Cybertruck