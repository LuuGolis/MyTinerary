import React from 'react'
import { useState, useEffect } from 'react'


const cityImg = [
  {
    "url": 'https://images.unsplash.com/photo-1561488111-5d800fd56b8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80',
    "caption": 'Sidney, Australia'
  },
  {
    "url": 'https://images.unsplash.com/photo-1589999904249-152205243238?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    "caption": 'Buenos Aires, Argentina'
  },
  {
    'url': 'https://images.unsplash.com/photo-1619090125361-879aba634f8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    'caption': 'Venecia, Italy'
  }]
  const cityImg1 = [
  {
    'url': 'https://images.unsplash.com/photo-1437934474317-887ccf040d8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80',
    'caption': 'Istanbul, Turkey'
  },
  {
    'url': 'https://images.unsplash.com/photo-1598797246294-7620e33a632f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    'caption': 'Kuala Lumpur, Malaysia'
  },
  {
    'url': 'https://images.unsplash.com/photo-1517570123306-d58896657b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    'caption': 'Gardens by the Bay, Singapore'
  }]
  const cityImg2 = [
  {
    'url': 'https://images.unsplash.com/photo-1578172545513-6eeb2e414f17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    'caption': 'Copenhagen, Denmark'
  },
  {
    'url': 'https://images.unsplash.com/photo-1614967886214-edf31f16adb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    'caption': 'San Francisco Bay, California, USA'
  },
  {
    'url': 'https://images.unsplash.com/photo-1557927852-0a71924e72c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    'caption': 'Blue Lagoon, Portugal'
  }]
  const cityImg3 = [
  {
    'url': 'https://images.unsplash.com/photo-1621164344001-a7763b5f491a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    'caption': 'Dubai - United Arab Emirates'
  },
  {
    'url': 'https://images.unsplash.com/photo-1463678363432-c083f3640760?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    'caption': ' Vancouver, Canada'
  },
  {
    'url': 'https://images.unsplash.com/photo-1613499094469-d481efd630a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    'caption': 'Rio de Janeiro, Brasil'
  },

];


const Carousel = () => {

  const [count, setCount] = useState(0);


  const setBullet = (indice) => {
    setcount(indice)
  }

  useEffect(() => {
    let intervalID = setInterval(() => {
      next()
    }, 2000)

    return () => {
      clearInterval(intervalID)
    }

  }, [count])

  const prev = () => {
    if (count > 0) {
      setCount(count - 1)
    } else {
      setCount(cityImg.length - 1);
    }
  }

  const next = () => {
    if (count < cityImg.length - 1) {
      setCount(count + 1)
    } else {
      setCount(0);
    }

  }
 
 
  return (
    <div className='popular row d-flex justify-content-center m-4'>
      <h2 className='m-4 text-center '>Popular MyTineraries!</h2>
    <div className='carouselContainer d-flex inline-block   col-12 '>
      <div className="button position-relative col-1" onClick={prev}><img className="position-absolute top-50 start-50" src='public\prev1.png' alt=""/></div>

      <div className='img-container mx-5'>

        
          <div className='row d-inline-flex flex-wrap mx-5 justify-content-center'>
          <div className='imgSlide col-5'><img className="carouselImg img-fluid " src={cityImg[count].url} alt="" /><p className='imgCaption'>{cityImg[count].caption}</p></div>
          <div className='imgSlide col-5'><img className="carouselImg img-fluid" src={cityImg1[count].url} alt="" /><p className='imgCaption'>{cityImg1[count].caption}</p></div>
          </div>
          <div className='row d-inline-flex flex-wrap mx-5 justify-content-center'>
          <div className='imgSlide col-5'><img className="carouselImg img-fluid" src={cityImg2[count].url} alt="" /><p className='imgCaption'>{cityImg2[count].caption}</p></div>
         <div className='imgSlide col-5'> <img className="carouselImg img-fluid" src={cityImg3[count].url} alt="" /><p className='imgCaption'>{cityImg3[count].caption}</p></div>
        
</div>
      </div>
      <div className="button position-relative col-1" onClick={next}><img className="position-absolute top-50 start-25" src='public\next1.png' alt=""/></div>
      {
        cityImg.map((item, countMap) => {
          if (countMap === count) return 
          <div className='bullet'>
          <span key={countMap} className='cursor-pointer'>⚫</span>
          else return <span key={countMap} className='cursor-pointer' onClick={() => setBullet(countMap)}>⚪</span>
          </div>
        })
      }

    </div>
    </div>
  )
}

export default Carousel