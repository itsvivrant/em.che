import { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {

  function getWindowWidth() {
    const { innerWidth: width } = window;
    return {
      width
    };
  }

  function getWindowHeight() {
    const { innerHeight: height } = window;
    return {
      height
    };
  }

  const refContainer = useRef();

    const [style, setStyle] = useState(false)
    const [dimensionsWidth, setDimensionsWidth] = useState({
        width: 0,
    });
    const [dimensionsHeight, setDimensionsHeight] = useState({
        height: 0,
    });

    useEffect(() => {
        if (refContainer.current) {
            setDimensionsWidth({
                width: refContainer.current.offsetWidth,
            });
            setDimensionsHeight({
              height: refContainer.current.offsetHeight,
            });
        }
    }, []);

  const sw = getWindowWidth();
  const sh = getWindowHeight();
  console.log(dimensionsHeight)
  let randX = Math.floor(Math.random() * (sw-dimensionsWidth))
  let randY = Math.floor(Math.random() * (sh -dimensionsHeight))

  const handleClick = () => {
    setStyle(true)
    console.log(randX)
    console.log(randY)
  }





  return (
    <div className="App">
      <div className="question-container">
        <header className="App-header">
        <iframe src="https://giphy.com/embed/8hZ5lHJMtUE2iCVK8W" width="480" height="480" class="giphy-embed" allowFullScreen></iframe>
          <p className="question">Emily, Will You Be My Girlfriend ?</p>
        </header>
      </div>
      <div className="choices-container">
        <div className='choiceone'>
          <button
            className="bttn"
            id="yes-bttn">
            <svg class="yes-heart" viewBox="0 0 32 29.6"><path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2 c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
            </svg>
          </button>
          <p>Yes</p>
        </div>

        <div className="choicetwo">
          <button
            onClick={handleClick}
            style={{left: style ? randX : "",
                    right: style ? randY: ""}}
            className="bttn"
            id="no-bttn">
            <svg class="no-heart" viewBox="0 0 32 29.6"><path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2 c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
            </svg>
          </button>
          <p>No</p>
        </div>
      </div>
    </div>
  );
}

export default App;
