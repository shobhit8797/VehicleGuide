import style2 from '../carousil/style2.css'
import modelx1 from '../Img/modelx1.jpg'
import modelx2 from '../Img/modelx2.jpg'
import modelx3 from '../Img/modelx3.jpg'
import modelx5 from '../Img/modelx5.jpg'


function Carousil2() {
    return(
        <>
          <div id="carouselExampleFade" class="carousel slide active carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={modelx1} className="img_1_x" alt="..."></img>
              </div>
              <div class="carousel-item">
                <img src={modelx2} className="img_2_x" alt="..."></img>
              </div>
              <div class="carousel-item">
                <img src={modelx3} className="img_2_x" alt="..."></img>
              </div>
              <div class="carousel-item">
                <img src={modelx5} className="img_2_x" alt="..."></img>
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
export default Carousil2