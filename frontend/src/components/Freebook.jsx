import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import list from '../../public/list.json';
import {useState,useEffect} from 'react';
import Card from './Card';
import axios from 'axios';

function Freebook() {
 
  // const listData= list.filter((data)=>  data.category === 'Free');
  //  console.log(listData)

   var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const [book,setData] = useState([]);

  useEffect(()=>{
    const getBook = async () =>{
  try{
    const resData = await axios.get('http://localhost:3000/book');
    // console.log(resData.data);
    const data =  resData.data.filter((data)=> data.category === 'Free');

    setData(data); //setting the data 
    }catch(error){
      console.error('Error fetching data', error);
    }
  }

  getBook();
  },[]);
  

  return (
    <>

     <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div>
      <h1 className='font-bold  text-3xl text-green-500 mt-10'>

        Free courses list
        </h1>
        <p>
          These are courses that are available for free. You can learn them whenever and wherever you want.
        </p>
        </div>
     
      <div>
      <Slider {...settings}>
        {book.map((item)=>(
          <Card item={item}
                key={item.id}
             
           
           />
        )
        )}
         
      </Slider>
    </div>
    </div>
    </>
   
  )
}

export default Freebook
