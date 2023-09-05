import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Career = () => {
  
  return (
    <div>
      <div className="lg:px-12   pt-7 px-5 py-5">
      <h1 className="text-[#0096F1] text-[20px] lg:text-[32px] pl-5 font-bold leading-[46.34px] relative font-libre before:absolute before:bg-[#0096F1] before:w-1 before:h-12 before:top-0 before:left-0">
            Career
          </h1>
      </div>

  <div className='my-5'>
                <div className="h-[35rem] mx-[2rem] p-6 bg-white border border-[#A6A6A680] rounded-lg shadow  sm:h-[18rem] xl:h-[15rem] ">
                    <div className='flex space-x-10 sm:flex sm:space-x-40 md:flex md:space-x-60 lg:flex lg:space-x-80 xl:flex xl:justify-between'>
                        <h1 className='text-[#0096F1] text-[0.8rem]  font-bold font-inter xl:text-[1rem] xl:text-bold'>Mechanical Engineer</h1>
                        
                            <h5 className="mb-2 text-[0.8rem] text-[#0096F1]  font-bold font-inter tracking-tight sm:absolute sm:inset-x[30rem] sm:right-50 xl:absolute xl:inset-x-[65rem] xl:right-10">Apply Now</h5>
                        
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.4208 19.393L8.59173 14.9785M8.57919 11.393L17.4166 6.97431M25 21.1826C25 23.3918 23.2091 25.1826 21 25.1826C18.7909 25.1826 17 23.3918 17 21.1826C17 18.9735 18.7909 17.1826 21 17.1826C23.2091 17.1826 25 18.9735 25 21.1826ZM25 5.18262C25 7.39176 23.2091 9.18262 21 9.18262C18.7909 9.18262 17 7.39176 17 5.18262C17 2.97348 18.7909 1.18262 21 1.18262C23.2091 1.18262 25 2.97348 25 5.18262ZM9 13.1826C9 15.3918 7.20914 17.1826 5 17.1826C2.79086 17.1826 1 15.3918 1 13.1826C1 10.9735 2.79086 9.18262 5 9.18262C7.20914 9.18262 9 10.9735 9 13.1826Z" stroke="#0096F1" stroke-width="1.5" />
                        </svg>

                    </div>

                    <div className='flex flex-col md:flex-row  md:space-x-3 my-3'>
                        <h4 className='text-[#101010] md:text-lg text-[14px] font-semibold font-Poppins'>Schedule : <span className=' md:text-lg text-[14px] font-normal font-inter'>Full Time</span> </h4>
                        <h4 className='text-[#101010] md:text-lg text-[14px] font-semibold font-Poppins'>Job Category :<span className=' md:text-lg text-[14px] font-normal font-inter'> Engineering</span> </h4>

                        <h4 className='text-[#101010] md:text-lg text-[14px] font-semibold font-Poppins'>Requisition Number : <span className=' md:text-lg text-[14px] font-normal font-inter'>MEF2001988F</span> </h4>


                    </div>

                    <p  className="mb-3 font-normal font-inter  text-gray-700 ">The Mechanical Engineer will design and develop new and modified products based on team interaction with the marketing and sales department. He / she will produce and maintain manufacturing instructions via detailed Bills of Materials and CAD drawings while continuously improving the quality and robustness of the products and manufacturing processes. This position will be at the Fort Worth Plant.</p>

                    <div className='flex space-x-10'>
                        <span className='text-[0.8rem] text-[#808080]'>20 Jan 2023</span>
                        <h3 className='text-[0.8rem] text-[#0096F1] sm:absolute sm:inset-x-[28rem] sm:right-10 md:absolute md:inset-x-[35rem] md:right-10 lg:absolute lg:inset-x-[50rem] lg:right-10 xl:absolute xl:inset-x-[68rem] xl:right-10'>20 already Applied</h3>
                    </div>
                </div>
            </div>

            {/*===============================================second======================================================= */}
            <div className='my-5 '>
                <div  className="h-[35rem] mx-[2rem] p-6 bg-white border border-[#A6A6A680] rounded-lg shadow sm:h-[18rem] xl:h-[15rem] ">
                    <div className='flex space-x-10 sm:flex sm:space-x-40 md:flex md:space-x-60 lg:flex lg:space-x-80 xl:flex xl:justify-between'>
                        <h1 className='text-[#0096F1] text-[0.8rem]  font-bold font-inter xl:text-[1rem] xl:text-bold'>Manufacturing Project Engineer</h1>
                        
                            <h5  className="mb-2 text-[0.8rem] text-[#0096F1]  font-bold font-inter tracking-tight sm:absolute sm:inset-x[30rem] sm:right-50 xl:absolute xl:inset-x-[65rem] xl:right-10">Apply Now</h5>
                        
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.4208 19.393L8.59173 14.9785M8.57919 11.393L17.4166 6.97431M25 21.1826C25 23.3918 23.2091 25.1826 21 25.1826C18.7909 25.1826 17 23.3918 17 21.1826C17 18.9735 18.7909 17.1826 21 17.1826C23.2091 17.1826 25 18.9735 25 21.1826ZM25 5.18262C25 7.39176 23.2091 9.18262 21 9.18262C18.7909 9.18262 17 7.39176 17 5.18262C17 2.97348 18.7909 1.18262 21 1.18262C23.2091 1.18262 25 2.97348 25 5.18262ZM9 13.1826C9 15.3918 7.20914 17.1826 5 17.1826C2.79086 17.1826 1 15.3918 1 13.1826C1 10.9735 2.79086 9.18262 5 9.18262C7.20914 9.18262 9 10.9735 9 13.1826Z" stroke="#0096F1" stroke-width="1.5" />
                        </svg>

                    </div>

                    <div className='flex flex-col md:flex-row  md:space-x-3 my-3'>
                        <h4 className='text-[#101010] md:text-lg text-[14px] font-semibold font-Poppins'>Schedule : <span className=' md:text-lg text-[14px] font-normal font-inter'>Full Time</span> </h4>
                        <h4 className='text-[#101010] md:text-lg text-[14px] font-semibold font-Poppins'>Job Category :<span className=' md:text-lg text-[14px] font-normal font-inter'> Engineering</span> </h4>

                        <h4 className='text-[#101010] md:text-lg text-[14px] font-semibold font-Poppins'>Requisition Number : <span className=' md:text-lg text-[14px] font-normal font-inter'>MEF2001988F</span> </h4>


                    </div>

                    <p  className="mb-3 font-normal font-inter text-gray-700 ">The Mechanical Engineer will design and develop new and modified products based on team interaction with the marketing and sales department. He / she will produce and maintain manufacturing instructions via detailed Bills of Materials and CAD drawings while continuously improving the quality and robustness of the products and manufacturing processes. This position will be at the Fort Worth Plant.</p>

                    <div className='flex space-x-10'>
                        <span className='text-[0.8rem] text-[#808080]'>10 Feb 2023</span>
                        <h3 className='text-[0.8rem] text-[#0096F1] sm:absolute sm:inset-x-[28rem] sm:right-10 md:absolute md:inset-x-[35rem] md:right-10 lg:absolute lg:inset-x-[50rem] lg:right-10 xl:absolute xl:inset-x-[68rem] xl:right-10'>20 already Applied</h3>
                    </div>
                </div>
            </div>


            {/*=======================================================================third=================================== */}
            <div className='my-5 '>
                <div  className="h-[35rem] mx-[2rem] p-6 bg-white border border-[#A6A6A680] rounded-lg shadow sm:h-[18rem] xl:h-[15rem] ">
                    <div className='flex space-x-10 sm:flex sm:space-x-40 md:flex md:space-x-60 lg:flex lg:space-x-80 xl:flex xl:justify-between'>
                        <h1 className='text-[#0096F1] text-[0.8rem]  font-bold font-inter xl:text-[1rem] xl:text-bold'>Design & Installation Engineer</h1>
                        
                            <h5  className="mb-2 text-[0.8rem] text-[#0096F1]  font-bold font-inter tracking-tight sm:absolute sm:inset-x[30rem] sm:right-50 xl:absolute xl:inset-x-[65rem] xl:right-10">Apply Now</h5>
                        
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.4208 19.393L8.59173 14.9785M8.57919 11.393L17.4166 6.97431M25 21.1826C25 23.3918 23.2091 25.1826 21 25.1826C18.7909 25.1826 17 23.3918 17 21.1826C17 18.9735 18.7909 17.1826 21 17.1826C23.2091 17.1826 25 18.9735 25 21.1826ZM25 5.18262C25 7.39176 23.2091 9.18262 21 9.18262C18.7909 9.18262 17 7.39176 17 5.18262C17 2.97348 18.7909 1.18262 21 1.18262C23.2091 1.18262 25 2.97348 25 5.18262ZM9 13.1826C9 15.3918 7.20914 17.1826 5 17.1826C2.79086 17.1826 1 15.3918 1 13.1826C1 10.9735 2.79086 9.18262 5 9.18262C7.20914 9.18262 9 10.9735 9 13.1826Z" stroke="#0096F1" stroke-width="1.5" />
                        </svg>

                    </div>

                    <div className='flex flex-col md:flex-row  md:space-x-3 my-3'>
                        <h4 className='text-[#101010] md:text-lg text-[14px] font-semibold font-Poppins'>Schedule : <span className=' md:text-lg text-[14px] font-normal font-inter'>Full Time</span> </h4>
                        <h4 className='text-[#101010] md:text-lg text-[14px] font-semibold font-Poppins'>Job Category :<span className=' md:text-lg text-[14px] font-normal font-inter'> Engineering</span> </h4>

                        <h4 className='text-[#101010] md:text-lg text-[14px] font-semibold font-Poppins'>Requisition Number : <span className=' md:text-lg text-[14px] font-normal font-inter'>MEF2001988F</span> </h4>


                    </div>

                    <p  className="mb-3 font-normal font-inter text-gray-700 ">The Mechanical Engineer will design and develop new and modified products based on team interaction with the marketing and sales department. He / she will produce and maintain manufacturing instructions via detailed Bills of Materials and CAD drawings while continuously improving the quality and robustness of the products and manufacturing processes. This position will be at the Fort Worth Plant.</p>

                    <div className='flex space-x-10'>
                        <span className='text-[0.8rem] text-[#808080]'>10 Feb 2023</span>
                        <h3 className='text-[0.8rem] text-[#0096F1] sm:absolute sm:inset-x-[28rem] sm:right-10 md:absolute md:inset-x-[35rem] md:right-10 lg:absolute lg:inset-x-[50rem] lg:right-10 xl:absolute xl:inset-x-[68rem] xl:right-10'>20 already Applied</h3>
                    </div>
                </div>
            </div>

            {/*=================================fourt====================================================== */}

            <div className='my-5 '>
                <div  className="h-[35rem] mx-[2rem] p-6 bg-white border border-[#A6A6A680] rounded-lg shadow  sm:h-[18rem] xl:h-[15rem] ">
                    <div className='flex space-x-10 sm:flex sm:space-x-40 md:flex md:space-x-60 lg:flex lg:space-x-80 xl:flex xl:justify-between'>
                        <h1 className='text-[#0096F1] text-[0.8rem]  font-bold font-inter xl:text-[1rem] xl:text-bold'>Design & Installation Engineer</h1>
                        
                            <h5  className="mb-2 text-[0.8rem] text-[#0096F1]  font-bold font-inter tracking-tight sm:absolute sm:inset-x[30rem] sm:right-50 xl:absolute xl:inset-x-[65rem] xl:right-10">Apply Now</h5>
                        
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.4208 19.393L8.59173 14.9785M8.57919 11.393L17.4166 6.97431M25 21.1826C25 23.3918 23.2091 25.1826 21 25.1826C18.7909 25.1826 17 23.3918 17 21.1826C17 18.9735 18.7909 17.1826 21 17.1826C23.2091 17.1826 25 18.9735 25 21.1826ZM25 5.18262C25 7.39176 23.2091 9.18262 21 9.18262C18.7909 9.18262 17 7.39176 17 5.18262C17 2.97348 18.7909 1.18262 21 1.18262C23.2091 1.18262 25 2.97348 25 5.18262ZM9 13.1826C9 15.3918 7.20914 17.1826 5 17.1826C2.79086 17.1826 1 15.3918 1 13.1826C1 10.9735 2.79086 9.18262 5 9.18262C7.20914 9.18262 9 10.9735 9 13.1826Z" stroke="#0096F1" stroke-width="1.5" />
                        </svg>

                    </div>

                    <div className='flex flex-col md:flex-row  md:space-x-3 my-3'>
                        <h4 className='text-[#101010] md:text-lg text-[14px] font-semibold font-Poppins'>Schedule : <span className=' md:text-lg text-[14px] font-normal font-inter'>Full Time</span> </h4>
                        <h4 className='text-[#101010] md:text-lg text-[14px] font-semibold font-Poppins'>Job Category :<span className=' md:text-lg text-[14px] font-normal font-inter'> Engineering</span> </h4>

                        <h4 className='text-[#101010] md:text-lg text-[14px] font-semibold font-Poppins'>Requisition Number : <span className=' md:text-lg text-[14px] font-normal font-inter'>MEF2001988F</span> </h4>


                    </div>

                    <p  className="mb-3 font-normal font-inter text-gray-700 ">The Mechanical Engineer will design and develop new and modified products based on team interaction with the marketing and sales department. He / she will produce and maintain manufacturing instructions via detailed Bills of Materials and CAD drawings while continuously improving the quality and robustness of the products and manufacturing processes. This position will be at the Fort Worth Plant.</p>

                    <div className='flex space-x-10'>
                        <span className='text-[0.8rem] text-[#808080]'>07 Jan 2023</span>
                        <h3 className='text-[0.8rem] text-[#0096F1] sm:absolute sm:inset-x-[28rem] sm:right-10 md:absolute md:inset-x-[35rem] md:right-10 lg:absolute lg:inset-x-[50rem] lg:right-10 xl:absolute xl:inset-x-[68rem] xl:right-10'>20 already Applied</h3>
                    </div>
                </div>
            </div>

            {/*====================================================five=================================== */}

            <div className='my-5 '>
                <div  className="h-[35rem] mx-[2rem] p-6 bg-white border border-[#A6A6A680] rounded-lg shadow  sm:h-[18rem] xl:h-[15rem] ">
                    <div className='flex space-x-10 sm:flex sm:space-x-40 md:flex md:space-x-60 lg:flex lg:space-x-80 xl:flex xl:justify-between'>
                        <h1 className='text-[#0096F1] text-[0.8rem]  font-bold font-inter xl:text-[1rem] xl:text-bold'>Industrial Sewing Machine Operator</h1>
                        
                            <h5  className="mb-2 text-[0.8rem] text-[#0096F1]  font-bold font-inter tracking-tight sm:absolute sm:inset-x[30rem] sm:right-50 xl:absolute xl:inset-x-[65rem] xl:right-10">Apply Now</h5>
                        
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.4208 19.393L8.59173 14.9785M8.57919 11.393L17.4166 6.97431M25 21.1826C25 23.3918 23.2091 25.1826 21 25.1826C18.7909 25.1826 17 23.3918 17 21.1826C17 18.9735 18.7909 17.1826 21 17.1826C23.2091 17.1826 25 18.9735 25 21.1826ZM25 5.18262C25 7.39176 23.2091 9.18262 21 9.18262C18.7909 9.18262 17 7.39176 17 5.18262C17 2.97348 18.7909 1.18262 21 1.18262C23.2091 1.18262 25 2.97348 25 5.18262ZM9 13.1826C9 15.3918 7.20914 17.1826 5 17.1826C2.79086 17.1826 1 15.3918 1 13.1826C1 10.9735 2.79086 9.18262 5 9.18262C7.20914 9.18262 9 10.9735 9 13.1826Z" stroke="#0096F1" stroke-width="1.5" />
                        </svg>

                    </div>

                    <div className='flex flex-col md:flex-row  md:space-x-3 my-3'>
                        <h4 className='text-[#101010] md:text-lg text-[14px] font-semibold font-Poppins'>Schedule : <span className=' md:text-lg text-[14px] font-normal font-inter'>Full Time</span> </h4>
                        <h4 className='text-[#101010] md:text-lg text-[14px] font-semibold font-Poppins'>Job Category :<span className=' md:text-lg text-[14px] font-normal font-inter'> Engineering</span> </h4>

                        <h4 className='text-[#101010] md:text-lg text-[14px] font-semibold font-Poppins'>Requisition Number : <span className=' md:text-lg text-[14px] font-normal font-inter'>MEF2001988F</span> </h4>


                    </div>

                    <p  className="mb-3 font-normal font-inter text-gray-700 ">The Mechanical Engineer will design and develop new and modified products based on team interaction with the marketing and sales department. He / she will produce and maintain manufacturing instructions via detailed Bills of Materials and CAD drawings while continuously improving the quality and robustness of the products and manufacturing processes. This position will be at the Fort Worth Plant.</p>

                    <div className='flex space-x-10'>
                        <span className='text-[0.8rem] text-[#808080]'>02 Jan 2023</span>
                        <h3 className='text-[0.8rem] text-[#0096F1] sm:absolute sm:inset-x-[28rem] sm:right-10 md:absolute md:inset-x-[35rem] md:right-10 lg:absolute lg:inset-x-[50rem] lg:right-10 xl:absolute xl:inset-x-[68rem] xl:right-10'>20 already Applied</h3>
                    </div>
                </div>
            </div>
    </div>
  );
};

export default Career;
