import React, { Component } from "react";
import "./WeddingEvents.css";
import Zags from "../../assets/img/zags1.jpg";
import Rodnik from "../../assets/img/rodnik11.jpg";
import Walk from "../../assets/img/walk.jpg";

const WeddingEvents = () => {
  return (
    <section id="wedding" class="spacer-one-top-lg">
      <div class="container spacer-one-bottom-lg">
        <div class="row justify-content-center">
          <div class="col">
            <div class=" text-center mb-5 pb-5">
              <h1 class="display-4 mb-0">Свадебные события</h1>
              <p class="w-md-40 mb-0 mx-auto text-dark-gray opacity-8 "></p>
            </div>
          </div>
        </div>

        <div class="card-deck">
          <div class="card card-cascade narrower">
            <div class="view view-cascade overlay">
              <img
                class="card-img-top"
                src={ Zags }
                alt="ЗАГС"
              ></img>
            </div>

            <div class="card-body card-body-cascade">
              <h5 class="pink-text pb-2 pt-1">
                <i class="fas fa-utensils"></i>Торжественная часть
              </h5>
              <h4 class="font-weight-bold card-title">14:30 - 15:10</h4>
              <p class="card-text">
                Сакко и Ванцетти 105/1
                <br />
                Екатеринбург
                <br />
              </p>
            </div>
          </div>

          <div class="card card-cascade narrower">
            <div class="view view-cascade overlay">
              <img
                class="card-img-top"
                src={ Walk }
                alt="Прогулка"
              ></img>
            </div>
            <div class="card-body card-body-cascade">
              <h5 class="pink-text pb-2 pt-1">
                <i class="fas fa-utensils"></i> Прогулка
              </h5>
              <h4 class="font-weight-bold card-title">
                15:30 - 17:30
              </h4>
              <p class="card-text">
              <br />
              <br />
              </p>
            </div>
          </div>

          <div class="card card-cascade narrower">
            <div class="view view-cascade overlay">
              <img
                class="card-img-top"
                src={ Rodnik }
                alt="Серебряный родник"
              ></img>
            </div>

            <div class="card-body card-body-cascade">
              <h5 class="pink-text pb-2 pt-1">
                <i class="fas fa-utensils"></i> Вечеринка
              </h5>
              <h4 class="font-weight-bold card-title">17:30 - 00:00</h4>
              <p class="card-text">
                Серебряный родник
                <br />
                Вилла №2
                <br />
                Арамиль
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="curved-decoration ">
        <svg
          width="100%"
          height="100%"
          class="bg-secondary-svg"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 2560 168.6227"
          enable-background="new 0 0 2560 168.6227"
          space="preserve"
        >
          <g></g>
          <g>
            <path
              d="M0,0c0,0,219.6543,165.951,730.788,124.0771c383.3156-31.4028,827.2139-96.9514,1244.7139-96.9514
      c212.5106,0,438.9999,3.5,584.4982,1.5844v139.9126H0V0z"
            ></path>
          </g>
        </svg>
      </div>
    </section>
  );
};

export default WeddingEvents;
