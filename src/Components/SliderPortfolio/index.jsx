"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../../customCss/sliderStyle.css';

// import required modules
import { Parallax, Navigation, Pagination, EffectFade } from 'swiper/modules';
import Link from 'next/link';

export function SliderPortfolio() {

  return (
    <div className='relative flex-row-reverse w-full h-dvh'>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
          'direction': 'ltr'
        }}
        speed={600}
        parallax={true}
        spaceBetween={0}
        effect='fade'
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Parallax, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="relative w-full h-dvh">
            <section className="mobileBG w-full h-[50%] flex flex-col items-center">
              <Link href={"/login"} className="absolute top-4 left-4  text-[#FFFFFF] font-medium text-sm cursor-pointer leading-6 text-center py-[3px] px-2 rounded-[6px] hover:bg-[#E1E1E1] active:bg-[#5E6CD3] transition-all duration-300">رد شدن</Link>
              <div className="w-[140px] h-[190px] mt-6">
                <img src={"/images/svg/img-1.svg"} alt="" className="w-full h-full" />
              </div>
            </section>

            <section className="w-full h-[50%] flex flex-col justify-between items-center px-6 bg-white">
              <div className="flex flex-col justify-center items-center gap-y-2">
                <h1 data-swiper-parallax="-400" className="title text-[#000000] Medium text-base font-semibold leading-6 mt-14 mb-2">ثبت آسان فعالیت های تبلیغی</h1>
                <p data-swiper-parallax="-400" className="subtitle text-[#4F4F4F] font-light  text-sm leading-6 text-center">
                  فعالیت های تبلیغی خود را در قالب های متعدد می توانید اینجا ثبت نمایید و از مزایای آن بهره‌مند شوید
                </p>
              </div>
              {/*
               <button className="flex justify-center items-center w-[232px] h-[45px] mb-[61px]  rounded-[8px] py-[10px] px-[6px] bg-[#D7DAF4]
                     text-[#26328D] hover:bg-[#26328D1C] font-semibold text-base leading-6 cursor-pointer">بعدی
              </button>
               */}
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-dvh">
            <section className="mobileBG h-[50%] w-full flex flex-col items-center">
              <Link href={"/login"} className="absolute top-4 left-4  text-[#FFFFFF] font-medium text-sm cursor-pointer leading-6 text-center py-[3px] px-2 rounded-[6px] hover:bg-[#E1E1E1] active:bg-[#5E6CD3] transition-all duration-300">رد شدن</Link>
              <div className="w-[140px] h-[190px] mt-6">
                <img src={"/images/svg/img-2.svg"} alt="" className="w-full h-full" />
              </div>
            </section>

            <section className="w-full h-[50%] flex flex-col justify-between items-center px-6 bg-white">
              <div className="flex flex-col justify-center items-center gap-y-2">
                <h1 data-swiper-parallax="-400" className="title text-[#000000] Medium font-semibold text-base leading-6 mt-14 mb-2">رزومه و پروفایل اختصاصی تبلیغی</h1>
                <p data-swiper-parallax="-400" className="subtitle text-[#4F4F4F] font-light  text-sm leading-6 text-center">
                  شما می‌توانید رزومه و پروفایل تبلیغی خود را به صورت شخصی سازی شده آماده کنید و برای میزبانان و دوستانتان ارسال کنید
                </p>
              </div>
              {/*
              <button className="flex justify-center items-center w-[232px] h-[45px] mb-[61px]  rounded-[8px] py-[10px] px-[6px] bg-[#D7DAF4]
                     text-[#26328D] hover:bg-[#26328D1C] font-semibold text-base leading-6 cursor-pointer">بعدی
              </button>
              */}
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-dvh">
            <section className="mobileBG h-[50%] w-full flex flex-col items-center">
              <Link href={"/login"} className="absolute top-4 left-4  text-[#FFFFFF] font-medium text-sm cursor-pointer leading-6 text-center py-[3px] px-2 rounded-[6px] hover:bg-[#E1E1E1] active:bg-[#5E6CD3] transition-all duration-300">رد شدن</Link>
              <div className="w-[140px] h-[190px] mt-6">
                <img src={"/images/svg/img-3.svg"} alt="" className="w-full h-full" />
              </div>
            </section>

            <section className="w-full h-[50%] flex flex-col justify-between items-center px-6 bg-white">
              <div className="flex flex-col justify-center items-center gap-y-2">
                <h1 data-swiper-parallax="-400" className="title text-[#000000] Medium font-semibold text-base leading-6 mt-14 mb-2">پذیرش جلسات سخنرانی</h1>
                <p data-swiper-parallax="-400" className="subtitle text-[#4F4F4F] font-light  text-sm leading-6 text-center">
                  درخواست‌های جلسه‌ای که توسط میزبان ها به ثبت رسیده را می‌توانید مشاهده نموده و با بررسی آن اقدام به پذیرش نمایید
                </p>
              </div>

              {/*
              <button className="flex justify-center items-center w-[232px] h-[45px] mb-[61px]  rounded-[8px] py-[10px] px-[6px] bg-[#D7DAF4]
                     text-[#26328D] hover:bg-[#26328D1C] font-semibold text-base leading-6 cursor-pointer">بعدی
              </button>
              */}

            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-dvh">
            <section className="mobileBG h-[50%] w-full flex flex-col items-center">
              <Link href={"/login"} className="absolute top-4 left-4  text-[#FFFFFF] font-medium text-sm cursor-pointer leading-6 text-center py-[3px] px-2 rounded-[6px] hover:bg-[#E1E1E1] active:bg-[#5E6CD3] transition-all duration-300">رد شدن</Link>
              <div className="w-[140px] h-[190px] mt-6">
                <img src={"/images/svg/img-4.svg"} alt="" className="w-full h-full" />
              </div>
            </section>

            <section className="w-full h-[50%] flex flex-col justify-between items-center px-6 bg-white">
              <div className="flex flex-col justify-center items-center gap-y-2">
                <h1 data-swiper-parallax="-400" className="title text-[#000000] Medium font-semibold text-base leading-6 mt-14 mb-2">نقشه تبلیغی کشوری</h1>
                <p data-swiper-parallax="-400" className="subtitle text-[#4F4F4F] font-light  text-sm leading-6 text-center">
                  روی نقشه تبلیغی کشور نقطه مورد نظرتان را مشاهده نموده و و اطلاع دقیقی از جزئیات آن نقطه کسب نمایید</p>
              </div>

              <Link href={"/login"} className="registerBtn flex justify-center items-center w-[232px] h-[45px] Medium rounded-[8px] py-[10px] px-[6px] bg-[#D7DAF4]
                   active:bg-[#5E6CD3] active:text-[#FFFFFF]  text-[#26328D] hover:bg-[#26328D1C] font-semibold text-base leading-6 cursor-pointer">
                ورود و ثبت نام
              </Link>

            </section>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

/*
 <SwiperSlide>
          <SkiptBox img={"/images/svg/img-1.svg"}
            title={"ثبت آسان فعالیت های تبلیغی"}
            subTitle={" فعالیت های تبلیغی خود را در قالب های متعدد می توانید اینجا ثبت نمایید و از مزایای آن بهره‌مند شوید"}
            btnTitle={"بعدی"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <SkiptBox img={"/images/svg/img-2.svg"}
            title={"رزومه و پروفایل اختصاصی تبلیغی"}
            subTitle={" شما می‌توانید رزومه و پروفایل تبلیغی خود را به صورت شخصی سازی شده آماده کنید و برای میزبانان و دوستانتان ارسال کنید"}
            btnTitle={"بعدی"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <SkiptBox img={"/images/svg/img-3.svg"}
            title={"پذیرش جلسات سخنرانی"}
            subTitle={"درخواست‌های جلسه‌ای که توسط میزبان ها به ثبت رسیده را می‌توانید مشاهده نموده و با بررسی آن اقدام به پذیرش نمایید"}
            btnTitle={"بعدی"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <SkiptBox
            img={"/images/svg/img-4.svg"}
            title={"نقشه تبلیغی کشوری"}
            subTitle={" روی نقشه تبلیغی کشور نقطه مورد نظرتان را مشاهده نموده و و اطلاع دقیقی از جزئیات آن نقطه کسب نمایید."}
            btnTitle={"ورود و ثبت نام"}
          />
        </SwiperSlide>
*/