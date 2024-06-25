import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

function ImageSlide() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])
    return(
        <div className="row position-relative pt-5 mt-5">
          <div className="embla-containers">
            <div className="embla" ref={emblaRef}>
              <div className="embla__container">
                <div className="embla__slide">
                  <h3 className="embla-title">Explode Land Rover</h3>
                  <h4 className="embla-subtitle">Defender 90</h4>
                  <h6 className="embla-details">
                    Lorem, ipsum dolor sit amet consectetur adipisicing 
                    elit. Asperiores quas quae corporis qui ducimus 
                    praesentium, dolor temporibus vel autem voluptatibus, 
                    modi, consequuntur id velit assumenda quibusdam iure 
                    alias amet voluptas.
                  </h6>
                  <img className="embla-img" src="/src/assets/image/slide/project_1.webp" alt="" />
                </div>
                <div className="embla__slide">
                  <h3 className="embla-title">Explode Land Rover</h3>
                  <h4 className="embla-subtitle">Defender 90</h4>
                  <h6 className="embla-details">
                    Lorem, ipsum dolor sit amet consectetur adipisicing 
                    elit. Asperiores quas quae corporis qui ducimus 
                    praesentium, dolor temporibus vel autem voluptatibus, 
                    modi, consequuntur id velit assumenda quibusdam iure 
                    alias amet voluptas.
                  </h6>
                  <img className="embla-img" src="/src/assets/image/slide/project_2.webp" alt="" />
                </div>
                <div className="embla__slide">
                  <h3 className="embla-title">Explode Land Rover</h3>
                  <h4 className="embla-subtitle">Defender 90</h4>
                  <h6 className="embla-details">
                    Lorem, ipsum dolor sit amet consectetur adipisicing 
                    elit. Asperiores quas quae corporis qui ducimus 
                    praesentium, dolor temporibus vel autem voluptatibus, 
                    modi, consequuntur id velit assumenda quibusdam iure 
                    alias amet voluptas.
                  </h6>
                  <img className="embla-img" src="/src/assets/image/slide/project_1.webp" alt="" />
                </div>
                <div className="embla__slide">
                  <h3 className="embla-title">Explode Land Rover</h3>
                  <h4 className="embla-subtitle">Defender 90</h4>
                  <h6 className="embla-details">
                    Lorem, ipsum dolor sit amet consectetur adipisicing 
                    elit. Asperiores quas quae corporis qui ducimus 
                    praesentium, dolor temporibus vel autem voluptatibus, 
                    modi, consequuntur id velit assumenda quibusdam iure 
                    alias amet voluptas.
                  </h6>
                  <img className="embla-img" src="/src/assets/image/slide/project_2.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
          
  </div>
    )
}
export default ImageSlide