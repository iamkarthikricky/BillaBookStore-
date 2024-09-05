import { useRef,useState } from "react";

import { Tooltip} from 'react-tooltip';
import { AiOutlineEye,AiOutlineHeart } from "react-icons/ai";
import {FaAngleRight, FaAngleLeft} from "react-icons/fa";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './slider.css'
import ModalComponent from "../Modal/modal";
import { SlidePara, SliderHeading } from "./sliderStyling";
import BookStoreContext from "../../Context/BookStoreContext";



const SlickSlider=props=>{
  const {booksList,heading}=props


  const [showComponent, setShowComponent] = useState(false);
  const [bookDetails,setBookDetails] = useState([]);

  const handleButtonClick = bookDetails => {
      setShowComponent(!showComponent);
      setBookDetails(bookDetails)
  };

  const sliderRef = useRef();


  const nextSlide = () => {
  sliderRef.current.slickNext();
  };

  const prevSlide = () => {
  sliderRef.current.slickPrev();
  };


  const ExternalButtons = ({ nextSlide, prevSlide }) => {
      return (
          <div>
          <button className="slick-btn" onClick={prevSlide}><FaAngleLeft /></button>
          <button className="slick-btn" onClick={nextSlide}><FaAngleRight /></button>
          </div>
      );
  }

  const settings = {
      speed: 200,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive:[
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
          },
          {
          breakpoint: 1332,
          settings: {
              slidesToShow: 4,
              slidesToScroll: 1
          }
          }

          
      ]
  };

  return (
      
      <BookStoreContext.Consumer>
        {value=>{
            const {isDark} = value
            return( <div>
      <div className="trending-books-container mt-4">
      <div className="d-flex flex-row justify-content-between align-items-center">
          <SliderHeading $isDark={isDark}>{heading}</SliderHeading>
          <ExternalButtons nextSlide={nextSlide} prevSlide={prevSlide} />
      </div>
      <Slider  ref={sliderRef} {...settings}>
          {booksList.map(e=>(
                  <div className="trending-book-slide" key={e.id}>
                      <div className="overlay-container">
                      
                      <a href="#" data-toggle="modal" data-target="#exampleModal" data-tooltip-id="quickView" data-tooltip-content="Quick View" data-tooltip-place="left"><button className="overlay-btn" onClick={()=>handleButtonClick(e)}><AiOutlineEye /></button>
                          <Tooltip id="quickView" className="tooltip"/>
                      </a>
                      <a href="#" data-tooltip-id="favourite" data-tooltip-content="Favourite" data-tooltip-place="left"><button className="overlay-btn"><AiOutlineHeart /></button>
                          <Tooltip id="favourite" className="tooltip"/>
                      </a>
                      </div>
                      <div className="book-container">
                        <div className="stock-container">  {e.saleInfo.saleability === 'FOR_SALE' ? <p className="in-stock mt-0">In Stock</p> : <p className="out-of-stock mt-0">Out of Stock</p>}</div>
                          <img src={e.volumeInfo.imageLinks.smallThumbnail} alt={e.volumeInfo.title} />
                          <SlidePara $isDark={isDark}>{e.volumeInfo.title}</SlidePara>
            
                      </div>
                      <div>
                      </div>
              </div>
          ))}
      </Slider>
      </div>
          {showComponent && <ModalComponent handleButtonClick={handleButtonClick} bookDetails={bookDetails}/>}
        </div>
        )}}
        </BookStoreContext.Consumer>
  )


}


export default SlickSlider