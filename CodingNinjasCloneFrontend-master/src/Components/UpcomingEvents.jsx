import React, { useRef } from "react";
import event1 from "../images/Upcoming/1.jpg";
import event2 from "../images/Upcoming/2.jpg";
import event3 from "../images/Upcoming/3.jpg";
import event4 from "../images/Upcoming/4.jpg";
import event6 from "../images/Upcoming/6.jpg";
import event7 from "../images/Upcoming/7.jpg";
import { CgChevronDoubleRightR } from "react-icons/cg";
import { CgChevronDoubleLeftR } from "react-icons/cg";
import Event from "./Event";

const UpcomingEvents = () => {
  const slidesContainer = useRef();
  const slide = useRef();

  const handleNext = () => {
    const slideWidth = slide.current.clientWidth;
    slidesContainer.current.scrollLeft += slideWidth / 3;
  };
  const handlePrev = () => {
    const slideWidth = slide.current.clientWidth;
    slidesContainer.current.scrollLeft -= slideWidth*2;
  };
  return (
    <div className="upcoming-events">
      <section className="slider-wrapper">
        <button
          className="slide-arrow"
          id="slide-arrow-prev"
          onClick={handlePrev}
        >
          <CgChevronDoubleLeftR size={30} color="black" />
        </button>
        <ul className="slides-container" ref={slidesContainer}>
        <li className="slide" ref={slide}>
            <Event
              img={event4}
              title="PAT || KPIT || Shri Ram Group Jabalpur"
              time="07:00 PM, 8 Jun 2023"
            />
            <Event
              img={event6}
              title="BitBlitz || IEEE WIE MUJ"
              time="03:00 PM, 12 Jun 2023"
            />
            <Event
              img={event7}
              title="Scholarship Test 13th to 14th June 2023"
              time="05:00 PM, 13 Jun 2023"
            />
          </li>
          <li className="slide" ref={slide}>
            <Event
              img={event1}
              title="CodeKaze June'23 - India's Biggest Hiring Challenge"
              time="06:00 PM, 10 Jun 2023"
            />
            <Event
              img={event2}
              title="Codekaze'23 Round 1 Mock Test"
              time="12:30 PM, 25 May 2023"
            />
            <Event
              img={event3}
              title="Roadmap to DSA || IEEE MUJ"
              time="03:00 PM, 7 Jun 2023"
            />
          </li>
          <li className="slide" ref={slide}>
            <Event
              img={event4}
              title="PAT || KPIT || Shri Ram Group Jabalpur"
              time="07:00 PM, 8 Jun 2023"
            />
            <Event
              img={event6}
              title="BitBlitz || IEEE WIE MUJ"
              time="03:00 PM, 12 Jun 2023"
            />
            <Event
              img={event7}
              title="Scholarship Test 13th to 14th June 2023"
              time="05:00 PM, 13 Jun 2023"
            />
          </li>
        </ul>
        <button
          className="slide-arrow"
          id="slide-arrow-next"
          onClick={handleNext}
        >
          <CgChevronDoubleRightR size={30} color="black" />
        </button>
      </section>
    </div>
  );
};

export default UpcomingEvents;
