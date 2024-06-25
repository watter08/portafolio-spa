import PropTypes from 'prop-types';
import  { useCallback } from 'react'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

const EmblaCarousel = ({ slides, options, currentLenguaje }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi, onNavButtonClick)

  return (
    <section className="embla" dir="rtl">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide ,index) => (
            <div className="embla__slide" key={index}>
              {/* <div className="embla__slide__number">{index + 1}</div> */}
              <h3 className="embla__slide__title">{slide?.Title[currentLenguaje]}</h3>
              <h4 className="embla__slide__subtitle">{slide?.SubTitle[currentLenguaje]}</h4>
              <h6 className="embla__slide__details">{slide?.Details[currentLenguaje]}</h6>
              <img className="embla__slide__img" src={slide?.Image} alt="" />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  )
}


// <div className="embla__slide" key={`slide_${index}`}>
//             <h3 className="embla-title">{slide?.Title[currentLenguaje]}</h3>
//             <h4 className="embla-subtitle">{slide?.SubTitle[currentLenguaje]}</h4>
//             <h6 className="embla-details">{slide?.Details[currentLenguaje]}</h6>
//             <img className="embla-img" src={slide?.Image[currentLenguaje]} alt="" />
//           </div>


EmblaCarousel.propTypes = {
    slides: PropTypes.arrayOf(PropTypes.shape({
        Title: PropTypes.shape({
            Title: PropTypes.string,
            TitleEng: PropTypes.string
        }),
        SubTitle: PropTypes.shape({
            Title: PropTypes.string,
            TitleEng: PropTypes.string
        }),
        Details: PropTypes.shape({
            Title: PropTypes.string,
            TitleEng: PropTypes.string
        }),
        Image: PropTypes.string
    })),
    options: PropTypes.shape({
        axis: PropTypes.string,
        dragFree: PropTypes.bool,
        direction: PropTypes.string,
        loop: PropTypes.bool,
    }),
    currentLenguaje: PropTypes.string
  };
  
  EmblaCarousel.defaultProps = {
    slides: [],
    options: {},
    currentLenguaje: 'Title',
  };

export default EmblaCarousel