import React from "react";
import HomeTitle from "@/components/HomeTitle/HomeTitle"

export default function HomeSection() {
  return (
    <>
      <div className={` relative w-full h-screen`}>
        <main>
          <div className="content content--fixed">
            <header className="codrops-header">
              <div className="codrops-links">
                <a className="codrops-icon codrops-icon--prev" href="https://tympanus.net/Development/AnimatedFrameSlideshow/" title="Previous Demo">
                  <svg className="icon icon--arrow">
                    <use xlinkHref="#icon-arrow" />
                  </svg>
                </a>
                <a className="codrops-icon codrops-icon--drop" href="https://tympanus.net/codrops/?p=33168" title="Back to the article">
                  <svg className="icon icon--drop">
                    <use xlinkHref="#icon-drop" />
                  </svg>
                </a>
              </div>
              <h1 className="codrops-header__title">Decorative WebGL Backgrounds</h1>
            </header>
            <a className="github" href="https://github.com/Mamboleoo/DecorativeBackgrounds/" title="Find this project on GitHub">
              <svg className="icon icon--github">
                <use xlinkHref="#icon-github" />
              </svg>
            </a>
            <nav className="demos">
              <svg className="icon icon--keyboard">
                <use xlinkHref="#icon-keyboard" />
              </svg>
              <a className="demo demo--current" href="index.html"><span>Demo 1</span></a>
              <a className="demo" href="index2.html"><span>Demo 2</span></a>
              <a className="demo" href="index3.html"><span>Demo 3</span></a>
              <a className="demo" href="index4.html"><span>Demo 4</span></a>
              <a className="demo" href="index5.html"><span>Demo 5</span></a>
              <a className="demo" href="index6.html"><span>Demo 6</span></a>
            </nav>
            <a className="pater" href="http://go.thoughtleaders.io/TLDcodrops211117" onClick="recordOutboundLink(this, 'Outbound Links', 'TLDcodrops211117');return false;">
              <img className="pater__img" src="pater/TLD.png" alt="TLD" />
              <h3 className="pater__title">​Snag the hottest new domain name for designers</h3>
              <p className="pater__description">.design domains were just released and some of the best ones are still available. They normally cost $35 but Codrops readers <strong>get them now for FREE!</strong></p>
            </a>
          </div>
          <div className="content">
            <canvas className="scene scene--full" id="scene"></canvas>
            <script type="x-shader/x-vertex" id="wrapVertexShader">
              {/* Your shader code */}
            </script>
            <script type="x-shader/x-fragment" id="wrapFragmentShader">
              {/* Your shader code */}
            </script>
            <div className="content__inner">
              <h2 className="content__title">Information</h2>
              <h3 className="content__subtitle">Data Science</h3>
            </div>
          </div>
        </main>

        <HomeTitle className="" />
      </div>
    </>

  )
}