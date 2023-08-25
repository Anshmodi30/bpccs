import React from "react";

const Contactus = () => {
  return (
    <div>
      <div className="lg:px-12   pt-10 px-5 py-5">
        <h1 className="text-[#0096F1] text-[20px] lg:text-[32px] pl-5 font-bold leading-[46.34px] relative font-libre before:absolute before:bg-[#0096F1] before:w-1 before:h-12 before:top-0 before:left-0">
          Contact Us
        </h1>
      </div>
      <div className="py-2 bg-[#0096F1]">
        <h2 className="text-white font-Poppins text-center text-[10px] lg:text-[26px] md:text-[20px] not-italic font-bold leading-[157.833%] tracking-[0.78px] uppercase  ">
          We are Located Here
        </h2>
      </div>

      <div className="flex justify-center items-center py-7 ">
        <div className="  hidden   lg:flex ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.722952314491!2d72.3237651739341!3d23.28951440631647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c180b7427aa1f%3A0x1804060cf9c5f6e9!2sN.P.%20College%20Of%20Computer%20Studies%20and%20Mangement!5e0!3m2!1sen!2sin!4v1691823310132!5m2!1sen!2sin"
            width="1200"
            height="450"
          ></iframe>{" "}
        </div>
        <div className=" px-5 pt-7  lg:hidden   max-sm:hidden ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.722952314491!2d72.3237651739341!3d23.28951440631647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c180b7427aa1f%3A0x1804060cf9c5f6e9!2sN.P.%20College%20Of%20Computer%20Studies%20and%20Mangement!5e0!3m2!1sen!2sin!4v1691823310132!5m2!1sen!2sin"
            width="700"
            height="250"
          ></iframe>{" "}
        </div>
        <div className=" md:hidden  pt-8 ">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.722952314491!2d72.3237651739341!3d23.28951440631647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c180b7427aa1f%3A0x1804060cf9c5f6e9!2sN.P.%20College%20Of%20Computer%20Studies%20and%20Mangement!5e0!3m2!1sen!2sin!4v1691823310132!5m2!1sen!2sin"></iframe>{" "}
        </div>
      </div>

      <div className="flex flex-col md:gap-x-5 md:flex-row justify-center py-3  lg:gap-x-32 items-center   ">
        <div className="flex flex-col px-4 ">
          <h2 className=" font-KaiseiHarunoUmi py-10 text-[color:var(--01,#0096F1)] lg:text-[26px]  not-italic font-bold leading-[normal] ">
            Address
          </h2>
          <p className=" lg:text-[18px]  text-justify  text-black font-inter   not-italic font-medium leading-[185.023%] tracking-[0.2px] ">
            NPCCSM,Sarva Vidhyalaya Campus
            <br /> Bh.Railway Station,
            <br />
            North Gujarat (INDIA),
            <br />
            Kadi - 382 715.
            <br /> TeleFax : 02764 -244381
          </p>
        </div>
        <div className="md:pb-24  flex flex-col pr-24  ">
          <h2 className=" font-KaiseiHarunoUmi py-10 text-[color:var(--01,#0096F1)] lg:text-[26px]  not-italic font-bold leading-[normal] ">
            Email
          </h2>
          <div className="  ">
            <div className="flex py-1 flex-row gap-x-4 ">
              <h2 className=" lg:text-[18px]  text-black text-center text-lg not-italic font-Poppins font-medium leading-[157.833%] ">
                info@npccs.org
              </h2>
            </div>
            <div className="flex py-1 flex-row gap-x-4 ">
              <h2 className=" text-[18px] text-black text-center text-lg not-italic font-medium font-Poppins leading-[157.833%]">
                contact@npccs.org
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:pb-[3.3rem] px-4 ">
          <div>
            <h2 className=" py-10  text-[color:var(--01,#0096F1)] font-KaiseiHarunoUmi lg:text-[26px]  not-italic font-bold leading-[normal] ">
              Contact Us
            </h2>
          </div>
          <div className="flex md:flex-col lg:flex-row  gap-x-5 ">
            <div className="flex flex-col gap-y-4  ">
              <div>
                <h2 className=" font-semibold text-[color:var(--02,#FFA800)] font-inter lg:text-[22px]  not-italic  leading-[normal] ">
                  For BBA
                </h2>
              </div>
              <div className="  ">
                <a href="tel:942-767-9746" aria-label="Number">
                  <div className="flex py-1 flex-row gap-x-4 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="21"
                      viewBox="0 0 22 21"
                      fill="none"
                    >
                      <path
                        d="M3.14209 2H7.63203L9.07924 5.61803L6.75436 7.16795C6.47616 7.35342 6.30906 7.66565 6.30906 8C6.3116 8.09363 6.30906 8.001 6.30906 8.001L6.30907 8.00205L6.30907 8.00429L6.3091 8.00933L6.30925 8.02167C6.3094 8.03089 6.30965 8.04208 6.31007 8.05519C6.31092 8.0814 6.31245 8.1153 6.31519 8.15636C6.32066 8.23846 6.33097 8.34944 6.35036 8.48517C6.38912 8.75646 6.46434 9.12811 6.61038 9.56623C6.90362 10.4459 7.47979 11.5849 8.60196 12.7071C9.72412 13.8293 10.8631 14.4054 11.7428 14.6987C12.181 14.8447 12.5526 14.9199 12.8239 14.9587C12.9596 14.9781 13.0706 14.9884 13.1527 14.9939C13.1938 14.9966 13.2277 14.9981 13.2539 14.999C13.267 14.9994 13.2782 14.9997 13.2874 14.9998L13.2997 15L13.3048 15L13.307 15L13.3081 15C13.3081 15 13.4197 14.9939 13.3091 15C13.6878 15 14.0341 14.786 14.2035 14.4472L14.8732 13.1078L19.3091 13.8471V18.167C17.198 18.4723 11.4965 18.7732 7.01617 14.2929C2.53587 9.81259 2.83678 4.1111 3.14209 2ZM8.38271 8.48609L10.1886 7.28213C10.9756 6.75751 11.2874 5.75338 10.9362 4.87525L9.48898 1.25722C9.18526 0.497902 8.44984 0 7.63203 0H3.08984C2.18133 0 1.32615 0.631162 1.17701 1.6169C0.837697 3.8595 0.375849 10.481 5.60196 15.7071C10.8281 20.9332 17.4496 20.4714 19.6922 20.1321C20.6779 19.9829 21.3091 19.1277 21.3091 18.2192V13.8471C21.3091 12.8694 20.6022 12.0351 19.6379 11.8743L15.202 11.135C14.3359 10.9907 13.477 11.4281 13.0843 12.2134L12.7378 12.9064C12.6289 12.8796 12.5074 12.8453 12.3753 12.8013C11.755 12.5946 10.894 12.1707 10.0162 11.2929C9.13833 10.4151 8.71451 9.55407 8.50775 8.93377C8.45188 8.76616 8.41165 8.61545 8.38271 8.48609Z"
                        fill="#0096F1"
                      />
                    </svg>
                    <h2 className=" lg:text-[18px]  text-black text-center text-lg not-italic font-Poppins font-medium leading-[157.833%] ">
                      9427679746
                    </h2>
                  </div>
                </a>
                <a href="tel:989-813-6371" aria-label="Number">
                  <div className="flex py-1 flex-row gap-x-4 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="21"
                      viewBox="0 0 22 21"
                      fill="none"
                    >
                      <path
                        d="M3.14209 2H7.63203L9.07924 5.61803L6.75436 7.16795C6.47616 7.35342 6.30906 7.66565 6.30906 8C6.3116 8.09363 6.30906 8.001 6.30906 8.001L6.30907 8.00205L6.30907 8.00429L6.3091 8.00933L6.30925 8.02167C6.3094 8.03089 6.30965 8.04208 6.31007 8.05519C6.31092 8.0814 6.31245 8.1153 6.31519 8.15636C6.32066 8.23846 6.33097 8.34944 6.35036 8.48517C6.38912 8.75646 6.46434 9.12811 6.61038 9.56623C6.90362 10.4459 7.47979 11.5849 8.60196 12.7071C9.72412 13.8293 10.8631 14.4054 11.7428 14.6987C12.181 14.8447 12.5526 14.9199 12.8239 14.9587C12.9596 14.9781 13.0706 14.9884 13.1527 14.9939C13.1938 14.9966 13.2277 14.9981 13.2539 14.999C13.267 14.9994 13.2782 14.9997 13.2874 14.9998L13.2997 15L13.3048 15L13.307 15L13.3081 15C13.3081 15 13.4197 14.9939 13.3091 15C13.6878 15 14.0341 14.786 14.2035 14.4472L14.8732 13.1078L19.3091 13.8471V18.167C17.198 18.4723 11.4965 18.7732 7.01617 14.2929C2.53587 9.81259 2.83678 4.1111 3.14209 2ZM8.38271 8.48609L10.1886 7.28213C10.9756 6.75751 11.2874 5.75338 10.9362 4.87525L9.48898 1.25722C9.18526 0.497902 8.44984 0 7.63203 0H3.08984C2.18133 0 1.32615 0.631162 1.17701 1.6169C0.837697 3.8595 0.375849 10.481 5.60196 15.7071C10.8281 20.9332 17.4496 20.4714 19.6922 20.1321C20.6779 19.9829 21.3091 19.1277 21.3091 18.2192V13.8471C21.3091 12.8694 20.6022 12.0351 19.6379 11.8743L15.202 11.135C14.3359 10.9907 13.477 11.4281 13.0843 12.2134L12.7378 12.9064C12.6289 12.8796 12.5074 12.8453 12.3753 12.8013C11.755 12.5946 10.894 12.1707 10.0162 11.2929C9.13833 10.4151 8.71451 9.55407 8.50775 8.93377C8.45188 8.76616 8.41165 8.61545 8.38271 8.48609Z"
                        fill="#0096F1"
                      />
                    </svg>
                    <h2 className=" text-[18px] text-black text-center text-lg not-italic font-medium font-Poppins leading-[157.833%]">
                      9898136371
                    </h2>
                  </div>
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-y-4 ">
              <div>
                <h2 className=" font-semibold text-[color:var(--02,#FFA800)] lg:text-[22px] not-italic font-inter leading-[normal] ">
                  For BCA
                </h2>
              </div>
              <div className="py-1">
                <a href="tel:942-945-9700" aria-label="Number">
                  <div className="flex py-1 flex-row gap-x-4 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="21"
                      viewBox="0 0 22 21"
                      fill="none"
                    >
                      <path
                        d="M3.14209 2H7.63203L9.07924 5.61803L6.75436 7.16795C6.47616 7.35342 6.30906 7.66565 6.30906 8C6.3116 8.09363 6.30906 8.001 6.30906 8.001L6.30907 8.00205L6.30907 8.00429L6.3091 8.00933L6.30925 8.02167C6.3094 8.03089 6.30965 8.04208 6.31007 8.05519C6.31092 8.0814 6.31245 8.1153 6.31519 8.15636C6.32066 8.23846 6.33097 8.34944 6.35036 8.48517C6.38912 8.75646 6.46434 9.12811 6.61038 9.56623C6.90362 10.4459 7.47979 11.5849 8.60196 12.7071C9.72412 13.8293 10.8631 14.4054 11.7428 14.6987C12.181 14.8447 12.5526 14.9199 12.8239 14.9587C12.9596 14.9781 13.0706 14.9884 13.1527 14.9939C13.1938 14.9966 13.2277 14.9981 13.2539 14.999C13.267 14.9994 13.2782 14.9997 13.2874 14.9998L13.2997 15L13.3048 15L13.307 15L13.3081 15C13.3081 15 13.4197 14.9939 13.3091 15C13.6878 15 14.0341 14.786 14.2035 14.4472L14.8732 13.1078L19.3091 13.8471V18.167C17.198 18.4723 11.4965 18.7732 7.01617 14.2929C2.53587 9.81259 2.83678 4.1111 3.14209 2ZM8.38271 8.48609L10.1886 7.28213C10.9756 6.75751 11.2874 5.75338 10.9362 4.87525L9.48898 1.25722C9.18526 0.497902 8.44984 0 7.63203 0H3.08984C2.18133 0 1.32615 0.631162 1.17701 1.6169C0.837697 3.8595 0.375849 10.481 5.60196 15.7071C10.8281 20.9332 17.4496 20.4714 19.6922 20.1321C20.6779 19.9829 21.3091 19.1277 21.3091 18.2192V13.8471C21.3091 12.8694 20.6022 12.0351 19.6379 11.8743L15.202 11.135C14.3359 10.9907 13.477 11.4281 13.0843 12.2134L12.7378 12.9064C12.6289 12.8796 12.5074 12.8453 12.3753 12.8013C11.755 12.5946 10.894 12.1707 10.0162 11.2929C9.13833 10.4151 8.71451 9.55407 8.50775 8.93377C8.45188 8.76616 8.41165 8.61545 8.38271 8.48609Z"
                        fill="#0096F1"
                      />
                    </svg>
                    <h2 className=" lg:text-[18px] text-black text-center text-lg not-italic font-medium font-Poppins leading-[157.833%] ">
                      9429459700
                    </h2>
                  </div>
                </a>
                <a href="tel:884-913-5125" aria-label="Number">
                  <div className="flex py-1 flex-row gap-x-4 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="21"
                      viewBox="0 0 22 21"
                      fill="none"
                    >
                      <path
                        d="M3.14209 2H7.63203L9.07924 5.61803L6.75436 7.16795C6.47616 7.35342 6.30906 7.66565 6.30906 8C6.3116 8.09363 6.30906 8.001 6.30906 8.001L6.30907 8.00205L6.30907 8.00429L6.3091 8.00933L6.30925 8.02167C6.3094 8.03089 6.30965 8.04208 6.31007 8.05519C6.31092 8.0814 6.31245 8.1153 6.31519 8.15636C6.32066 8.23846 6.33097 8.34944 6.35036 8.48517C6.38912 8.75646 6.46434 9.12811 6.61038 9.56623C6.90362 10.4459 7.47979 11.5849 8.60196 12.7071C9.72412 13.8293 10.8631 14.4054 11.7428 14.6987C12.181 14.8447 12.5526 14.9199 12.8239 14.9587C12.9596 14.9781 13.0706 14.9884 13.1527 14.9939C13.1938 14.9966 13.2277 14.9981 13.2539 14.999C13.267 14.9994 13.2782 14.9997 13.2874 14.9998L13.2997 15L13.3048 15L13.307 15L13.3081 15C13.3081 15 13.4197 14.9939 13.3091 15C13.6878 15 14.0341 14.786 14.2035 14.4472L14.8732 13.1078L19.3091 13.8471V18.167C17.198 18.4723 11.4965 18.7732 7.01617 14.2929C2.53587 9.81259 2.83678 4.1111 3.14209 2ZM8.38271 8.48609L10.1886 7.28213C10.9756 6.75751 11.2874 5.75338 10.9362 4.87525L9.48898 1.25722C9.18526 0.497902 8.44984 0 7.63203 0H3.08984C2.18133 0 1.32615 0.631162 1.17701 1.6169C0.837697 3.8595 0.375849 10.481 5.60196 15.7071C10.8281 20.9332 17.4496 20.4714 19.6922 20.1321C20.6779 19.9829 21.3091 19.1277 21.3091 18.2192V13.8471C21.3091 12.8694 20.6022 12.0351 19.6379 11.8743L15.202 11.135C14.3359 10.9907 13.477 11.4281 13.0843 12.2134L12.7378 12.9064C12.6289 12.8796 12.5074 12.8453 12.3753 12.8013C11.755 12.5946 10.894 12.1707 10.0162 11.2929C9.13833 10.4151 8.71451 9.55407 8.50775 8.93377C8.45188 8.76616 8.41165 8.61545 8.38271 8.48609Z"
                        fill="#0096F1"
                      />
                    </svg>
                    <h2 className=" lg:text-[18px] text-black text-center text-lg not-italic font-medium font-Poppins leading-[157.833%]">
                      8849135125
                    </h2>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;

// Sarva Vidyalaya Kelvani Mandal has been established in the year 1919, by philanthropist Pujya Chhaganbhai. The basic principle preached by him “Kar Bhala Hoga Bhala” has been driving force for the growth of the education activities managed by the trust. Having started with just 6 students then, today the trust manages and runs various schools and colleges both at Kadi and Gandhinagar with more than 46000 students being educated. Of these 46000 students, around 5800 students both boys and girls stay in the hostels being managed by trust.
// The trust is being nourished and managed by its alumni who occupy respectable positions in the society. Many of its alumni have settled abroad and they shower in donations to benefit the existing as well as prospective students for providing them with better facilities for study as well as stay.
// Initially started in the year 1919, the trust currently land of around 165 acres together at Kadi and Gandhinagar. At Kadi the trust currently has a land of 137 acres where in various schools, colleges are being run and at Gandhinagar, the trust has total of 32 acres of land where in various schools, colleges including both technical as well as non technical which include B.Pharm, M.Pharm, MBA, MCA, BBA, BCA, B.Sc., (Bio Technology), M.Sc., (Bio Technology), M.Sc., (IT), B.Ed., M.Ed., PTC, B.Com, Engineering, Polytechnic & Nursing. The trust has made provisions for hostels both for boys and girls and also staff quarters.
// The Trust has always been in the forefront for provision of value based education to all the students irrespective of Caste, Creed, Religion etc. Keeping in with the main motto Kar Bhala Hoga Bhala the trust has surrendered all its management quota seats in all the courses run by it and the admissions to the various courses are strictly conducted on the basis of merit through centralized admission process.
// he trust has been striving hard for the development of education and related activities since 1919 and looking in to this. The Government of Gujarat invited Sarva Vidyalaya Kelvani Mandal to set up education facilities at Gandhinagar in 1976. At that time the trust was allotted a land of 13 acres for establishing schools for the benefit of the population staying in and around Gandhinagar. Since then the trust has set up many educational institutions and hostels which have proven to be the backbone of the development of education in the state of Gujarat and currently more than 36,000 students are being educated at Gandhinagar of which around 4000 students boys and girls are staying in hostels.
// With a need to spread education further and develop a kind of professionalism in the young generation of Gujarat, the trust has started the first self financed college, Kalupur Bank Institute of Pharmaceutical Education and Research (KBIPER) offering B.Pharmacy program with the approval of AICTE in the year 1995 for which Government of Gujarat allotted a land measuring 20,000 sq. meters i.e 5 acres. Currently KBIPER is also offering post graduate and doctoral research programs besides B.Pharmacy. The journey of Sarva Vidyalaya continued programs in the year 1998. The trust went on to establish other institutes offering BBA, BCA, B.Com., B.Ed., PTC and other vocational courses.
// In the year 2005, the trust has established an Engineering college for which Government of Gujarat has allotted a land of around 40,000 sq. Mts, in sector 15 of Gandhinagar. In Addition to this in the year 2006, the trust has also established a Polytechnic College, the VPMP Polytechnic College. In Addition to the above objectives the trust wishes to set up a State of Art Research Centre which would focus the attention upon the latest topics like Nanotechnology, Nano and Material.
