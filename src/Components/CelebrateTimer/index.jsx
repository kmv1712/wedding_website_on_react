import React from 'react'
import './CelebrateTimer.css';
import TimerComponent from '../Timer';
import ImageHeart from '../ImageHeart';

const CelebrateTimer = ({ title, subtitle, dark, id }) => {
    return (
<section class="wedding-date">
            <div class="container spacer-double-lg">
               <div class="row justify-content-lg-between align-items-center">
                  <div class="col-md-6 mb-5 mb-md-0">
                     <div class="pr-md-4">
                        <h1 class="font-secondary display-4">Дата свадьбы</h1>
                        <p class="lead font-weight-300 text-dark-gray opacity-8">Суббота 27 июня 2020</p>
                        <h1 class="font-secondary display-4">До свадьбы осталось</h1>                
                        <TimerComponent />                    
                     </div>
                  </div>

                  <div class="col-md-6">
                     <div class="svg-mask-container">
                        <ImageHeart />           
                     </div>
                  </div>
               </div>
            </div>
            <div class="curved-decoration">
            <g>
               <path d="M2560,0c0,0-219.6543,165.951-730.788,124.0771c-383.3156-31.4028-827.2138-96.9514-1244.7139-96.9514
                  c-212.5106,0-439,3.5-584.4982,1.5844l0,139.9126h2560V0z"></path>
            </g>

            </div>
         </section>

);
};

export default CelebrateTimer;