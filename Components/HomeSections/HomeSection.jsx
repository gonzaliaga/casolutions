import React from "react";
import HomeTitle from "@/components/HomeTitle/HomeTitle"

export default function HomeSection() {
  return (
    <>
      <div className={`${styles.main} relative w-full h-screen`}>

{/*         <div className="absolute -z-10 w-full h-full  ">
          <video autoPlay loop muted preload="auto" className="w-full h-full object-cover"
            src={require('')} type="video/mp4" />
        </div> */}
        <HomeTitle className="" />
      </div>
    </>

  )
}