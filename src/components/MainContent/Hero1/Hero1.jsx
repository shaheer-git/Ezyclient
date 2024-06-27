import React, { useEffect } from 'react'
import scooter from '../../../assets/pngwing.png'
import './Hero1.css'
function Hero1() {
  Notific.Loading.Dots("Please wait...");
  useEffect(() => {
    const timer = setTimeout(() => {
      Notific.Loading.Remove();
      document.getElementById('form').scrollIntoView({ behavior: 'smooth' });
    }, 2000);

    return () => {
      clearTimeout(timer)
    };
  }, []);
  return (
    <div className='relative h-[90vh]'>
      <div className='h-3/5 flex pt-8' style={{ backgroundColor: '#FFFBF4' }}>
        <div className='flex items-center justify-between pl-[6px] md:w-screen w-full'>
          <div className='ezyText w-2/5'>
            <svg width="135" height="170" viewBox="0 0 362 177" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M91.664 177H3.344V44.136L25.616 22.376H0.272001V0.103989H91.664V22.376H28.688V85.352L47.376 66.408H91.664V88.424H28.688V154.728H91.664V177ZM219.706 177H118.586V121.704L194.362 46.184V22.376H118.586V0.103989H219.706V54.888L143.674 131.176V154.728H219.706V177ZM362 88.424L339.728 110.696H319.248V177H293.904V110.696H273.424L251.408 88.424V0.103989H276.752V88.424H336.656V0.103989H362V88.424Z" fill="#74A1CE" />
            </svg>
          </div>
          <div className="h-8 text-container w-3/5 md:pl-[15px]">
            <div className="p-2 text-slide">
              <svg width="190" height="150" viewBox="0 0 511 178" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M112.792 23.376H25.752V67.408H84.376L106.136 89.424V155.728L84.376 178H22.424L0.408001 155.728V138.064L25.752 113.744V155.728H80.792V89.424H22.424L0.408001 67.408V23.376L22.424 1.10399H90.52L112.792 23.376ZM273.73 177.744H224.834L181.826 23.632H160.066L175.938 38.736V177.744H150.594V0.847992H199.746L242.242 155.472H264.258L248.386 139.344V0.847992H273.73V177.744ZM349.688 178H324.344V1.10399H349.688V178ZM510.936 89.424L488.664 111.696H425.688V178H400.344V45.136L422.616 23.376H397.272V1.10399H488.664L510.936 23.376V89.424ZM485.592 89.424V23.376H425.688V108.624L444.376 89.424H485.592Z" fill="#74A1CE" />
              </svg>
            </div>
            <div className="p-2 text-slide">
              <svg width="190" height="150" viewBox="0 0 558 177" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M107.792 154.728L85.52 177H22.288L0.272001 154.728V22.376L22.288 0.103989H85.52L107.792 22.376V40.808L82.448 66.408V22.376H25.616V154.728H82.448V136.04L107.792 110.696V154.728ZM254.394 177H229.306V110.696H169.146V177H143.802V22.376L166.074 0.103989H254.394V177ZM245.178 22.376H169.146V107.624L188.346 88.424H229.306V38.248L245.178 22.376ZM409.542 22.376H322.502V66.408H381.126L402.886 88.424V154.728L381.126 177H319.174L297.158 154.728V137.064L322.502 112.744V154.728H377.542V88.424H319.174L297.158 66.408V22.376L319.174 0.103989H387.27L409.542 22.376ZM557.936 177H532.592V88.424H472.688V177H447.344V0.103989H472.688V85.352L491.376 66.408H532.592V0.103989H557.936V177Z" fill="#74A1CE" />
              </svg>
            </div>
            <div className="p-2 text-slide">
              <svg width="190" height="150" viewBox="0 0 531 177" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M91.664 177H3.344V44.136L25.616 22.376H0.272001V0.103989H91.664V22.376H28.688V85.352L47.376 66.408H91.664V88.424H28.688V154.728H91.664V177ZM234.042 154.728L211.77 177H148.538L126.522 154.728V22.376L148.538 0.103989H211.77L234.042 22.376V40.808L208.698 66.408V22.376H151.866V154.728H208.698V136.04L234.042 110.696V154.728ZM379.364 154.728L357.092 177H290.788L268.772 154.728V22.376L290.788 0.103989H357.092L379.364 22.376V154.728ZM354.02 154.728V22.376H294.116V154.728H354.02ZM530.792 22.376H443.752V66.408H502.376L524.136 88.424V154.728L502.376 177H440.424L418.408 154.728V137.064L443.752 112.744V154.728H498.792V88.424H440.424L418.408 66.408V22.376L440.424 0.103989H508.52L530.792 22.376Z" fill="#74A1CE" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className='h-2/5 flex items-start justify-center' style={{ backgroundColor: '#BFDBF7' }}>
        <img src={scooter} alt="2 wheeler scrap bangalore" className='absolute top-1/3 sm:w-1/2 w-max' />
      </div>
    </div>
  )
}

export default Hero1