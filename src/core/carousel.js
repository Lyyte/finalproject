import React from 'react'

const Carousel = () => (
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src=".../public/assets/carousel1.jpg" alt="First slide"></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://cdn.shopify.com/s/files/1/0279/8963/9261/files/trend_boards_2020_light-01.jpg?v=1584546220" alt="Second slide"></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://cdn.shopify.com/s/files/1/0279/8963/9261/files/trend_boards_2020_light-01.jpg?v=1584546220" alt="Third slide"></img>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    )

export default Carousel;
