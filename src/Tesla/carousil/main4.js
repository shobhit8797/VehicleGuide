import style4 from '../carousil/style4.css'
import models1 from '../Img/models1.jpg'
import models2 from '../Img/models2.jpg'
import models3 from '../Img/models3.jpg'
import models4 from '../Img/models4.jpg'
import models5 from '../Img/models5.jpg'



function Carousil4() {
    return(
        <>
          <div id="carouselExampleFade" class="carousel slide active carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={models1} className="img_1_s" alt="..."></img>
              </div>
              <div class="carousel-item">
                <img src={models2} className="img_2_s" alt="..."></img>
              </div>
              <div class="carousel-item">
                <img src={models3} class="img_2_s" alt="..."></img>
              </div>
              <div class="carousel-item">
                <img src={models4} class="img_2_s" alt="..."></img>
              </div>
              <div class="carousel-item">
                <img src={models5} class="img_2_s" alt="..."></img>
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
export default Carousil4