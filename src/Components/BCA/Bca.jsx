import React from "react";
import Hero from "../Homepage/Hero";

const Bca = () => {
  const Featuresdata = [
    {
      list: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
    {
      list: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
    {
      list: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
    {
      list: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
  ];
  return (
    <>
      <div className="lg:px-12   pt-10 px-5 py-5">
        <h1 className="text-[#0096F1] text-[20px] lg:text-[32px] pl-5 font-bold leading-[46.34px] relative font-libre before:absolute before:bg-[#0096F1] before:w-1 before:h-12 before:top-0 before:left-0">
          All About BCA in NPCCSM
        </h1>
      </div>
      {/*=====slider */}
      <Hero />
      {/*============ */}
      <div className="px-10 md:px-10 lg:px-12 py-5 lg:py-10 md:py-10">
        <div className="flex flex-col items-center gap-6   lg:flex-row ">
          <div className="">
            <p className="text-justify  text-[#000] text-[16px] not-italic font-medium leading-[177.5%] font-inter">
              <b className="text-justify pl-6  text-[#000] text-[28px] not-italic font-medium leading-[177.5%] font-inter">
                L
              </b>
              orem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
              mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque
              aliquet lacinia, nulla nisi venenatis odio, id blandit mauris
              ipsum id sapien. Vestibulum malesuada orci sit amet pretium
              facilisis. In lobortis congue augue, a commodo libero tincidunt
              scelerisque. Donec tempus congue lacinia. Phasellus lacinia felis
              est, placerat commodo odio tincidunt iaculis. Sed felis magna,
              iaculis a metus id, ullamcorper suscipit nulla. Fusce facilisis,
              nunc ultricies posuere porttitor, nisl lacus tincidunt diam, vel
              feugiat nisi elit id massa. Proin nulla augue, dapibus non justo
              in, laoreet commodo nunc. Maecenas faucibus neque in nulla mollis
              interdum. Quisque quis pellentesque enim, vitae pulvinar purus.
              Quisque vitae suscipit risus. Curabitur scelerisque magna a
              interdum pretium. Integer sodales metus ut placerat viverra.
              Curabitur accumsan, odio quis vehicula imperdiet, tellus ex
              venenatis nisl, a dignissim lectus augue tincidunt arcu.{" "}
            </p>
          </div>

          <div className="">
            <img
              src="./img/npc1.png"
              alt="image1"
              className="w-[470rem] h-[25rem] md:w-[200rem] md:[20rem]  lg:w-[470rem] lg:h-[25rem]"
            />
          </div>
        </div>

        {/* ===============================second para===================== */}

        <div className="py-5 ">
          <p className="text-justify text-[16px] not-italic font-medium leading-[177.5%] font-inter">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque
            aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum
            id sapien. Vestibulum malesuada orci sit amet pretium facilisis. In
            lobortis congue augue, a commodo libero tincidunt scelerisque. Donec
            tempus congue lacinia. Phasellus lacinia felis est, placerat commodo
            odio tincidunt iaculis. Sed felis magna, iaculis.{" "}
          </p>
        </div>

        {/*======================================third para=================== */}

        <div className="flex flex-col items-center gap-6   lg:flex-row ">
          <div className="">
            <img
              src="./img/npc1.png"
              alt="image1"
              className="w-[470rem] h-[25rem] md:w-[200rem] md:[20rem]  lg:w-[470rem] lg:h-[25rem]"
            />
          </div>

          <div className="">
            <p className="text-justify text-[#000] text-[16px] not-italic font-medium leading-[177.5%] font-inter">
              {" "}
              <b className="text-justify pl-6  text-[#000] text-[28px] not-italic font-medium leading-[177.5%] font-inter">
                L
              </b>
              orem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
              mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque
              aliquet lacinia, nulla nisi venenatis odio, id blandit mauris
              ipsum id sapien. Vestibulum malesuada orci sit amet pretium
              facilisis. In lobortis congue augue, a commodo libero tincidunt
              scelerisque. Donec tempus congue lacinia. Phasellus lacinia felis
              est, placerat commodo odio tincidunt iaculis. Sed felis magna,
              iaculis a metus id, ullamcorper suscipit nulla. Fusce facilisis,
              nunc ultricies posuere porttitor, nisl lacus tincidunt diam, vel
              feugiat nisi elit id massa. Proin nulla augue, dapibus non justo
              in, laoreet commodo nunc. Maecenas faucibus neque in nulla mollis
              interdum. Quisque quis pellentesque enim, vitae pulvinar purus.
              Quisque vitae suscipit risus. Curabitur scelerisque magna a
              interdum pretium. Integer sodales metus ut placerat viverra.
              Curabitur accumsan, odio quis vehicula imperdiet, tellus ex
              venenatis nisl, a dignissim lectus augue tincidunt arcu.{" "}
            </p>
          </div>
        </div>

        {/*==========================================end third======================= */}

        {/*===================================four section========================= */}

        <div className="py-5">
          <h1 className="text-[color:var(--01,#0096F1)]  font-KaiseiHarunoUmi text-[20px] lg:text-[32px] not-italic font-semibold leading-[normal]">
            {" "}
            Features
          </h1>

          <p className="py-2 text-justify text-[#000] text-[16px] not-italic font-medium leading-[177.5%] font-inter">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque
            aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum
            id sapien. Vestibulum malesuada orci sit amet pretium facilisis. In
            lobortis congue augue, a commodo libero tincidunt scelerisque. Donec
            tempus congue lacinia. Phasellus lacinia felis est, placerat commodo
            odio tincidunt iaculis. Sed felis magna, iaculis.{" "}
          </p>
        </div>

        {Featuresdata.map((data, index) => {
          return (
            <div className="flex flex-col  lg:flex-row  lg:gap-10 items-center  justify-center ">
              <ul className="list-disc">
                <li className="py-3 lg:py-2 text-[color:var(--02,#FFA800)] text-[10px] md:text-[18px] font-inter not-italic  font-semibol leading-normal ">
                  {data.list}
                </li>
              </ul>
              <ul className="list-disc">
                <li className=" lg:py-2 text-[color:var(--02,#FFA800)]  text-[10px] md:text-[18px] font-inter not-italic  font-semibol leading-normal ">
                  {data.list}
                </li>
              </ul>
            </div>
          );
        })}

        {/*==================================four section end===================== */}

        {/*===================================five section========================= */}

        <div className="py-5">
          <h1 className="text-[color:var(--01,#0096F1)]  font-KaiseiHarunoUmi text-[20px] lg:text-[32px] not-italic font-semibold leading-[normal]">
            {" "}
            Placements
          </h1>

          <p className="py-2 text-justify text-[#000] text-[16px] not-italic font-medium leading-[177.5%] font-inter">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque
            aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum
            id sapien. Vestibulum malesuada orci sit amet pretium facilisis. In
            lobortis congue augue, a commodo libero tincidunt scelerisque. Donec
            tempus congue lacinia. Phasellus lacinia felis est, placerat commodo
            odio tincidunt iaculis. Sed felis magna, iaculis.{" "}
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:gap-10 px-5 md:px-5 ">
          <ul className="list-disc">
            <li className="py-2 text-[color:var(--02,#FFA800)] text-[11px] md:text-[18px]  font-inter not-italic  font-semibol leading-normal">
              Placements Partners
            </li>
            <li className="py-2 text-[color:var(--02,#FFA800)] text-[11px] md:text-[18px] font-inter not-italic  font-semibol leading-normal">
              Placements Partners
            </li>
          </ul>
          <ul className="list-disc">
            <li className="py-2 text-[color:var(--02,#FFA800)] text-[11px] md:text-[18px] font-inter not-italic  font-semibol leading-normal">
              Placements Partners
            </li>
            <li className="py-2 text-[color:var(--02,#FFA800)] text-[11px] md:text-[18px] font-inter not-italic  font-semibol leading-normal">
              Placements Partners
            </li>
          </ul>
        </div>

        {/*==================================fourth section end===================== */}

        {/* ==========know more button= */}

        <div className="py-5">
          <button
            type="button"
            class="text-[16px] font-Poppins not-italic font-semibold leading-[93.833%] rounded-[4px] border border-[#0096F1] text-[#FFF] bg-[#0096F1] px-8 py-2.5"
          >
            Know More
          </button>
        </div>

        {/* ==========end button===== */}
      </div>

      {/*======================Inquiry page===== */}

      {/*======================end=============== */}
    </>
  );
};
export default Bca;
