import { FaStar } from "react-icons/fa";

const TopfourHappy = () => {
  return (
    <div className="   ">
      <div className="w-[654px] ralative  h-[58px] text-[#000000] ">
        <h3 className="max-sm:left-[16px] max-sm:text-[32px] max-sm:w-[286px] max-sm:h-[72px] font-bold leading-[57.6px] text-[48px] relative left-[100px]  pt-[70px] ">
          OUR HAPPY CUSTOMERS
        </h3>
      </div>

      <div className="max-sm:left-[16px] max-sm:w-[358px] max-sm:h-[186px] max-sm:pt-[16px] max-sm:pr-[16px] max-sm:pb-[16px]   mt-[98px] flex relative left-[100px] ">
        <div className=" border-[1px] rounded-[20px] pt-[28px] pr-[32px] pb-[48px] pl-[32px] ">
          <div className="flex w-[113.7px] h-[18.49px] justify-between gap-[5.31px] relative ">
            <FaStar size={16} color="gold" />
            <FaStar size={16} color="gold" />
            <FaStar size={16} color="gold" />
            <FaStar size={16} color="gold" />
            <FaStar size={16} color="gold" />
          </div>
          <div className="w-[336px] h-[124px] gap-3  ">
            <div>
              <p className="mt-[15px] ">Sarah m</p>
              <p className="mt-[15px] max-sm:text-[14px] ">&quot; I m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I&apos;ve bought has exceeded my expectations.&quot;</p>
            </div>
          </div>
        </div>
        {/* second */}
        <div className="max-sm:hidden max-sm:p-6 border-[1px] relative left-3 rounded-[20px] pt-[28px] pr-[32px] pb-[28px] pl-[32px] ">
          <div className="flex w-[113.7px] h-[18.49px]  justify-between gap-[5.31px] relative ">
            <FaStar size={16} color="gold" />
            <FaStar size={16} color="gold" />
            <FaStar size={16} color="gold" />
            <FaStar size={16} color="gold" />
            <FaStar size={16} color="gold" />
          </div>
          <div className="w-[336px] h-[124px] gap-3  ">
            <div>
              <p className="mt-[15px] ">Alex K.</p>
              <p className="mt-[15px] ">&quot;Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.&quot;</p>
            </div>
          </div>
        </div>

        {/* third */}
        <div className="max-sm:hidden  border-[1px] relative left-6 rounded-[20px] pt-[28px] pr-[32px] pb-[28px] pl-[32px] ">
          <div className="flex w-[113.7px] h-[18.49px]  justify-between gap-[5.31px] relative ">
            <FaStar size={16} color="gold" />
            <FaStar size={16} color="gold" />
            <FaStar size={16} color="gold" />
            <FaStar size={16} color="gold" />
            <FaStar size={16} color="gold" />
          </div>
          <div className="w-[336px] h-[124px] gap-3  ">
            <div>
              <p className="mt-[15px] ">James L.</p>
              <p className="mt-[15px] ">&quot;As someone who s always on the lookout for unique fashion pieces, I am thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.&quot;</p>
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
}
 
export default TopfourHappy;