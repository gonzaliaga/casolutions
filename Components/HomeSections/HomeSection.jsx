import React from "react";
import '@/Components/css/demo1.css'
import '@/Components/css/base.css'
import '@/Components/img/dot.png'
import '@/Components/img/dotTexture.png'


export default function HomeSection() {
  return (
    <>

      <main>
        <div className="content content--fixed">
          <header className="codrops-header">
            <div className="codrops-links">
            </div>
          </header>
        </div>
        <div className="content">
          <canvas className="scene scene--full" id="scene"></canvas>
          <div className="content__inner">
            <h2 className="content__title">7dev</h2>
            <h3 className="content__subtitle">Desarrollo Aplicaciones Web</h3>
          </div>
        </div>
      </main>



    </>

  )
}