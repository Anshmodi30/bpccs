import React from "react";
// import Inquiry from "../Homepage/Inquiry";

const PlacedStudent = () => {
  const techs = [
    {
      id: 1,
      src: "/img/student3.png",
      title: "Yash Mandal",
      title2: "Software Developer",
      Q1: "Course :",
      Q2: "Ph.D,M.Phil(CS),MCA,B.Sc.",
      Aoi1: "Company :",
      Aoi2: "xyz",
      Te1: "Review",
      Te2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. ",
    },
    {
      id: 2,
      src: "/img/student2.png",
      title: "Aditya Singh",
      title2: "Software Developer",
      Q1: "Course :",
      Q2: "Ph.D,M.Phil(CS),MCA,B.Sc.",
      Aoi1: "Company :",
      Aoi2: "xyz",
      Te1: "Review",
      Te2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. ",
    },
    {
      id: 3,
      src: "/img/student1.png",
      title: "Abhinav Kumar",
      title2: "Software Developer",
      Q1: "Course :",
      Q2: "Ph.D,M.Phil(CS),MCA,B.Sc.",
      Aoi1: "Company :",
      Aoi2: "xyz",
      Te1: "Review",
      Te2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. ",
    },
    {
      id: 4,
      src: "/img/student4.png",
      title: "Shreya Das",
      title2: "Software Developer",
      Q1: "Course :",
      Q2: "Ph.D,M.Phil(CS),MCA,B.Sc.",
      Aoi1: "Company :",
      Aoi2: "xyz",
      Te1: "Review",
      Te2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. ",
    },
  ];
  return (
    <div>
      <div className="flex justify-center items-center mt-5 px-10 md:px-0 lg:px-10 mb-10 lg:mt-20">
        <div className="flex flex-row flex-wrap justify-center items-center md:gap-x-10 lg:gap-x-16 gap-x-4 gap-y-16 lg:gap-y-28 text-center cursor-pointer">
          {techs.map(
            ({ id, src, title, title2, Q1, Q2, Aoi1, Aoi2, Te1, Te2 }) => (
              <div
                key={id}
                className={
                  " hover:border-[2px] hover:border-[#FFA800] bg-[#F8F8F8] border-[2px] lg:border-transparent border-[#ffa800] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.20)] rounded-[5px] w-[100%] md:w-[40%] lg:w-[28%] h-fit py-5 pt-16  transition-all duration-500 px-5"
                }
              >
                <img
                  src={src}
                  alt=""
                  className="w-20 lg:w-36 bg-transparent mx-auto lg:-mt-36 -mt-24"
                />
                <div className="flex flex-col justify-center items-center">
                  <p className="mt-2 text-[#FFA800] text-justify text-[20px] not-italic font-inter font-semibold leading-[161.523%]">
                    {title}
                  </p>
                  <p className="text-[#B7B7B7] text-justify text-[13px] not-italic font-inter font-normal leading-[161.523%]">
                    {title2}
                  </p>
                </div>
                <div className="pl-4 pt-3">
                  <div className="">
                    <p className="text-black font-inter text-justify text-[14px] not-italic font-bold leading-[161.523%]">
                      {Q1}
                      <span className="text-justify text-[12px] text-[#0096F1] not-italic font-normal leading-[161.523%] font-inter px-1 ">
                        {Q2}
                      </span>
                    </p>
                  </div>
                  <div className="">
                    <p className="text-black font-inter text-justify text-[14px] not-italic font-bold leading-[161.523%]">
                      {Aoi1}
                      <span className="text-justify text-[12px] text-[#0096F1] not-italic font-normal leading-[161.523%] font-inter px-1 ">
                        {Aoi2}
                      </span>
                    </p>
                  </div>
                  <div className="">
                    <p className="text-black font-inter text-justify text-[14px] not-italic font-bold leading-[161.523%]">
                      {Te1} :
                      <span className="text-justify text-[12px] text-[#0096F1] not-italic font-normal leading-[161.523%] font-inter px-1 ">
                        {Te2}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default PlacedStudent;

// Sarva Vidyalaya Kelvani Mandal has been established in the year 1919, by philanthropist Pujya Chhaganbhai. The basic principle preached by him “Kar Bhala Hoga Bhala” has been driving force for the growth of the education activities managed by the trust. Having started with just 6 students then, today the trust manages and runs various schools and colleges both at Kadi and Gandhinagar with more than 46000 students being educated. Of these 46000 students, around 5800 students both boys and girls stay in the hostels being managed by trust.
// The trust is being nourished and managed by its alumni who occupy respectable positions in the society. Many of its alumni have settled abroad and they shower in donations to benefit the existing as well as prospective students for providing them with better facilities for study as well as stay.
// Initially started in the year 1919, the trust currently land of around 165 acres together at Kadi and Gandhinagar. At Kadi the trust currently has a land of 137 acres where in various schools, colleges are being run and at Gandhinagar, the trust has total of 32 acres of land where in various schools, colleges including both technical as well as non technical which include B.Pharm, M.Pharm, MBA, MCA, BBA, BCA, B.Sc., (Bio Technology), M.Sc., (Bio Technology), M.Sc., (IT), B.Ed., M.Ed., PTC, B.Com, Engineering, Polytechnic & Nursing. The trust has made provisions for hostels both for boys and girls and also staff quarters.
// The Trust has always been in the forefront for provision of value based education to all the students irrespective of Caste, Creed, Religion etc. Keeping in with the main motto Kar Bhala Hoga Bhala the trust has surrendered all its management quota seats in all the courses run by it and the admissions to the various courses are strictly conducted on the basis of merit through centralized admission process.
// he trust has been striving hard for the development of education and related activities since 1919 and looking in to this. The Government of Gujarat invited Sarva Vidyalaya Kelvani Mandal to set up education facilities at Gandhinagar in 1976. At that time the trust was allotted a land of 13 acres for establishing schools for the benefit of the population staying in and around Gandhinagar. Since then the trust has set up many educational institutions and hostels which have proven to be the backbone of the development of education in the state of Gujarat and currently more than 36,000 students are being educated at Gandhinagar of which around 4000 students boys and girls are staying in hostels.
// With a need to spread education further and develop a kind of professionalism in the young generation of Gujarat, the trust has started the first self financed college, Kalupur Bank Institute of Pharmaceutical Education and Research (KBIPER) offering B.Pharmacy program with the approval of AICTE in the year 1995 for which Government of Gujarat allotted a land measuring 20,000 sq. meters i.e 5 acres. Currently KBIPER is also offering post graduate and doctoral research programs besides B.Pharmacy. The journey of Sarva Vidyalaya continued programs in the year 1998. The trust went on to establish other institutes offering BBA, BCA, B.Com., B.Ed., PTC and other vocational courses.
// In the year 2005, the trust has established an Engineering college for which Government of Gujarat has allotted a land of around 40,000 sq. Mts, in sector 15 of Gandhinagar. In Addition to this in the year 2006, the trust has also established a Polytechnic College, the VPMP Polytechnic College. In Addition to the above objectives the trust wishes to set up a State of Art Research Centre which would focus the attention upon the latest topics like Nanotechnology, Nano and Material.
