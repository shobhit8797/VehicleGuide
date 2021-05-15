import tesla1 from '../Img/tesla1.jpg';
import tesla2 from '../Img/tesla2.jpg';
import tesla3 from '../Img/tesla3.jpg';
// import '../carousil/style.css';

function Carousil() {
  return (
    <>
      <div
        id="carouselExampleFade"
        class="carousel slide active carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={tesla1} class="img1" alt="..."></img>
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={tesla2} class="img2" alt="..."></img>
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={tesla3} class="img3" alt="..."></img>
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        ></button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        ></button>
      </div>
    </>
  );
}
export default Carousil;
