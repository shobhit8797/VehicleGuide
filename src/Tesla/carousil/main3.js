import style3 from '../carousil/style3.css'
import modely1 from '../Img/modely1.jpg'
import modely2 from '../Img/modely2.jpg'
import modely3 from '../Img/modely3.jpg'



function Carousil3() {
    return(
        <>
          <div id="carouselExampleFade" class="carousel slide active carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={modely1} className="img_1_y" alt="..."></img>
              </div>
              <div class="carousel-item">
                <img src={modely2} className="img_2_y" alt="..."></img>
              </div>
              <div class="carousel-item">
                <img src={modely3} class="img_2_y" alt="..."></img>
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
export default Carousil3