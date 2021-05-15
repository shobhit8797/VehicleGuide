import style5 from '../carousil/style6.css'
import model31 from '../Img/model31.jpg'
import model32 from '../Img/model32.jpg'
import model33 from '../Img/model33.jpg'
import model34 from '../Img/model34.jpg'
import model35 from '../Img/model35.jpg'



function Carousil5() {
    return(
        <>
          <div id="carouselExampleFade" class="carousel slide active carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={model31} className="img_1_3" alt="..."></img>
              </div>
              <div class="carousel-item">
                <img src={model32} className="img_2_3" alt="..."></img>
              </div>
              <div class="carousel-item">
                <img src={model33} className="img_2_3" alt="..."></img>
              </div>
              <div class="carousel-item">
                <img src={model34} className="img_2_3" alt="..."></img>
              </div>
              <div class="carousel-item">
                <img src={model35} className="img_2_3" alt="..."></img>
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
export default Carousil5