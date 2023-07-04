import React from "react"
import  { useState } from 'react';
import "./HomeHeader.css"
import Carousel from 'react-bootstrap/Carousel';
import banner1 from "../../../assets/banner-01.jpg"
import banner2 from "../../../assets/banner-02.jpg"
import banner3 from "../../../assets/banner-03.jpg"
export default function HomeHeader(){
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  

        return (
          <>
          <Carousel fade>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={banner1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h2 className="carousel__h2">Take a Glimpse Into The Beautiful Country Of:</h2>
                <h1 className="carousel__h1">Switzerland</h1>
                <a className="carousel__btn">Go There</a>
                <div className="carousel__header">
                    <div>
                        <div className="carousel__header-container">
                            <div className="carousel__header-content d-flex justify-content-around">
                                <div>
                                  <div className="d-flex">
                                        <div className="mr-2">
                                        <i class="fa fa-solid fa-user"></i>
                                        </div>
                                        <div className="ml-1 ">
                                            <span className="">
                                                population
                                            </span>
                                            <h4>64.56M</h4>
                                        </div>
                                  </div>
                                </div>
                                <div >
                                  <div className="d-flex">
                                        <div className="mr-1">
                                           <i className="fa fa-globe"></i>
                                        </div>
                                        <div className="">
                                            <span className="">
                                                population
                                            </span>
                                            <h4>64.56M</h4>
                                        </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="d-flex">
                                        <div className="mr-1">
                                        <i className="fa fa-home"></i>
                                        </div>
                                        <div className="">
                                            <span className="">
                                                population
                                            </span>
                                            <h4>64.56M</h4>
                                        </div>
                                  </div>
                                </div>
                                <div>
                                    <div >
                                        <a href="">Explore More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={banner2}
                alt="Second slide"
              />
      
              <Carousel.Caption>
                <h2 className="carousel__h2">Take a Glimpse Into The Beautiful Country Of:</h2>
                <h1 className="carousel__h1">Caribbean</h1>
                <a className=" carousel__btn">Go There</a>
                <div className="carousel__header">
                    <div>
                        <div className="carousel__header-container">
                            <div className="carousel__header-content  d-flex justify-content-around">
                                <div>
                                  <div className="d-flex">
                                        <div className="">
                                        <i class="fa fa-solid fa-user"></i>
                                        </div>
                                        <div className="ml-1 ">
                                            <span className="">
                                                population
                                            </span>
                                            <h4>64.56M</h4>
                                        </div>
                                  </div>
                                </div>
                                <div >
                                  <div className="d-flex">
                                        <div className="mr-1">
                                           <i className="fa fa-globe"></i>
                                        </div>
                                        <div className="">
                                            <span className="">
                                                population
                                            </span>
                                            <h4>64.56M</h4>
                                        </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="d-flex">
                                        <div className="mr-1">
                                        <i className="fa fa-home"></i>
                                        </div>
                                        <div className="">
                                            <span className="">
                                                population
                                            </span>
                                            <h4>64.56M</h4>
                                        </div>
                                  </div>
                                </div>
                                <div>
                                    <div >
                                        <a href="">Explore More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                
                </div>
                
              </Carousel.Caption>
         
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={banner3}
                alt="Third slide"
              />
      
              <Carousel.Caption>
                <h2 className="carousel__h2">Take a Glimpse Into The Beautiful Country Of:</h2>
                <h1 className="carousel__h1">France</h1>
                <a className="carousel__btn">Go There</a>
                <div className="carousel__header">
                    <div>
                        <div className="carousel__header-container">
                            <div className="carousel__header-content d-flex justify-content-around">
                                <div>
                                  <div className="d-flex">
                                        <div className="mr-2">
                                        <i class="fa fa-solid fa-user"></i>
                                        </div>
                                        <div className="ml-1 ">
                                            <span className="">
                                                population
                                            </span>
                                            <h4>64.56M</h4>
                                        </div>
                                  </div>
                                </div>
                                <div >
                                  <div className="d-flex">
                                        <div className="mr-1">
                                           <i className="fa fa-globe"></i>
                                        </div>
                                        <div className="">
                                            <span className="">
                                                population
                                            </span>
                                            <h4>64.56M</h4>
                                        </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="d-flex">
                                        <div className="mr-1">
                                        <i className="fa fa-home"></i>
                                        </div>
                                        <div className="">
                                            <span className="">
                                                population
                                            </span>
                                            <h4>64.56M</h4>
                                        </div>
                                  </div>
                                </div>
                                <div>
                                    <div >
                                        <a href="">Explore More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
         
          </>
        );

}
