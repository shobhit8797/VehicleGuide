import roadster from '../carousil/roadster.css'
import r1 from '../Img/r1.jpg'
import r2 from '../Img/r2.jpg'
import r3 from '../Img/r3.jpg'



function Roadster() {
    return(
        <>
          <div id="carouselExampleFade" class="carousel slide active carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={r1} className="r_1" alt="..."></img>
              </div>
              <div class="carousel-item">
                <img src={r2} className="r_1" alt="..."></img>
              </div>
              <div class="carousel-item">
                <img src={r3} className="r_1" alt="..."></img>
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
export default Roadster