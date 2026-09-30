import React, { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1598449426314-8b02525e8733?q=80&w=1026",
        alt: "타코"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1676300185292-e23bb3db50fa?q=80&w=1170",
        alt: "스테이크"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1594998893017-36147cbcae05?q=80&w=1486",
        alt: "샐러드볼"
    }
]

slides.map((img) => {
    console.log(img)
})

function HeroSlider() {
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            //초기변수 slideIndex = 0이 저장
            //setSlideIndex라는 함수를 실행하면 매개변수명 currentIndex에 0이 전달되서 실행
            setSlideIndex((currentIndex) => (currentIndex + 1) % slides.length)
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const prevSlider = () => setSlideIndex((currentIndex) => (currentIndex - 1 + slides.length) % slides.length)

    const nextSlider = () => setSlideIndex((currentIndex) => (currentIndex + 1) % slides.length)

    return (
        <div className='hero-slide'>
            <img src={slides[slideIndex].image} alt={slides[slideIndex].alt} />

            <button className='slide-btn prev' onClick={prevSlider} aria-label='이전 이미지'><ChevronLeft size={32} color="rgba(0,0,0,0.8)" /></button>
            <button className='slide-btn next' onClick={nextSlider} aria-label='다음 이미지'><ChevronRight size={32} color="rgba(0,0,0,0.8)" /></button>

            <div className="slide-dots">
                {
                    slides.map((slide, index) => (
                        <button key={index} className={index === slideIndex ? 'on' : ''} onClick={() => setSlideIndex(index)} aria-label={`${index + 1}번 이미지`}></button>
                    ))
                }
            </div>
        </div>
    )
}

export default HeroSlider