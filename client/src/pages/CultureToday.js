import { useEffect, React } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//custom hooks
import { useCounter } from "../utils/GameContext";
//components
import NextButton from "../components/NextButton";
import BackButton from "../components/BackButton"; 
//images
import animalGuide from "../assets/images/coyote.svg";

//this is the loading page
const CultureToday = () => {

  const { countCultureToday, setCultureToday } = useCounter();
  useEffect(() => {
    setCultureToday();
  });

  return (
    //CultureToday
    <>
      <Container fluid className="culture-today site-content">
        <Row>
          <Col
            xs= {{ span: 8, offset: 3 }}
            sm= {{ span: 8, offset: 3 }}
            md= {{ span: 8, offset: 3}}
            lg={{ span: 7, offset: 4 }}
            xl={{ span: 7, offset: 4}}
            xxl={{ span: 6, offset: 5}}
            className="text-center speech-bubble mt-xs-3 mt-sm-1 mt-md-0 mt-lg-5"
          >
            <h1 className="d-inline-block mx-auto pt-md-4">
              <span className=" display-5 display-md-4">
                A Vibrant Living Culture
              </span>
            </h1>
            <p className="h3 p-sm-3 p-4 text-300 ">
              Now we'll learn about how your <span className="text-400">Native American community members</span> are keeping their ancient traditions alive today.
            </p>
            <div className="w-100 d-block">
               <NextButton />
            </div>
          </Col>
  
            <img
              className="main-guide-img"
              src={animalGuide}
              alt="cute blue coyote"
            />
            <svg className="pot-img-ct"  viewBox="0 0 151 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_242_281)">
                <path d="M55.7777 104.459C14.5338 93.9885 9.32004 76.1808 10.0179 64.2987C49.2233 40.8387 127.679 0.70059 127.857 27.8277C147.635 59.3933 119.739 81.9419 112.501 89.1817C119.151 96.3003 112.363 113.999 86.3978 118.904C60.4324 123.809 52.8926 110.805 55.7777 104.459Z" fill="#C24744" stroke="#2E234A"/>
                <path d="M17.8367 71.1028C15.7896 69.7051 5.10513 63.116 7.51565 53.9745C8.8197 49.0292 20.6983 27.4533 55.8744 17.9793C92.8698 8.01533 143.411 4.4266 120.909 40.2797C90.9064 68.9642 36.7039 77.5763 17.8367 71.1028Z" fill="#CA9938" stroke="#2E234A"/>
                <path d="M120.555 22.9038C121.337 25.4648 120.677 28.4013 118.678 31.5651C116.679 34.7272 113.376 38.0577 109 41.3548C100.25 47.9463 87.2976 54.337 72.2169 58.9441C57.1361 63.5511 42.8239 65.4895 31.8842 64.9129C26.4122 64.6245 21.8121 63.7083 18.3877 62.2028C14.9614 60.6965 12.7731 58.6302 11.9907 56.0692C11.2084 53.5082 11.8684 50.5717 13.868 47.4079C15.8664 44.2458 19.1692 40.9153 23.5459 37.6182C32.2958 31.0267 45.2478 24.636 60.3286 20.029C75.4094 15.4219 89.7216 13.4835 100.661 14.0601C106.133 14.3485 110.733 15.2647 114.158 16.7702C117.584 18.2765 119.772 20.3428 120.555 22.9038Z" fill="#6C3837" stroke="#2E234A"/>
                <path d="M87.7311 118.685C66.5285 123.699 52.5388 114.659 55.3536 104.434C82.7177 108.341 103.674 96.2089 111.817 89.2267C121.174 98.1224 108.934 113.67 87.7311 118.685Z" fill="#CA9938" stroke="#2E234A"/>
                </g>
                <defs>
                <filter id="filter0_d_242_281" x="2.66309" y="10.692" width="136.657" height="117.918" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_242_281"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_242_281" result="shape"/>
                </filter>
                </defs>
            </svg>

        </Row>
        <Row>
          <Col xs={6} className="justify-content-center text-center">
            <BackButton />
          </Col>
          <Col xs={6} className="justify-content-center text-center">
            <NextButton />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CultureToday;
