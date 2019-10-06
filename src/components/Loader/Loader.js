import React from 'react'
import './Loader.scss'

const LoaderCircle = ({ number }) => {
      return (
        <div className={`circle flex circle-${number}`}></div>
      )
  }

const Loader = () => {
      let numCircles = 4;
      let loaderCircles = [];
      
      for (let n = 0; n < numCircles; n++) {
        loaderCircles.push(<LoaderCircle number={n+1} key={n} />);
      }
      
      return (
        <div className="loader-container flex" id="loader">
             <div className="flex loader">
                { loaderCircles }
            </div>
        </div>
       
      )
}

export default Loader;