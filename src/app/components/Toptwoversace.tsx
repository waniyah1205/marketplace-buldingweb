import Image from "next/image";

const TopTwoVersace = () => {
  return (
    <div className="max-sm:w-[358px] max-sm:h-[1075px] max-sm:left-[16px] w-[1239px] h-[866px] relative left-[100px] rounded-[40px] bg-[#F0F0F0]">
      <div className="max-sm:left[0px] w-[687px] ralative mt-[70px] h-[58px] text-[#000000]">
        <h3 className="max-sm:w-[246px] max-sm:h-[72px] max-sm:left-[56px] max-sm:mt-[10px] max-sm:pt-[40px] max-sm:text-[32px] max-sm:text-center max-sm:pl-[0px] font-bold justify-center text-center leading-[57.6px] text-[48px] relative left-[276px] mt-[70px] pt-[70px]">
          BROWSE BY DRESS STYLE
        </h3>
      </div>
      <div className="max-sm:grid max-sm:pt-[108px] flex pt-[192px] relative rounded-[20px]">
        {/* Casual Product */}
        <div className="bg-bannerImgTwo bg-repeat bg-cover bg-bottom w-[407px] h-[289px] rounded-[20px] relative left-[40px] max-sm:w-[310px] max-sm:h-[190px] max-sm:left-[24px]">
          <p className="w-[114px] h-[49px] relative mt-[25px] left-[16px] font-bold text-[36px] leading-[48px]">Casual</p>
          {/* Image */}
          <Image
            src="/images/image7.png"  // Correct path to image in the public folder
            alt="Casual Dress"
            width={300}  // Adjust width as needed
            height={200} // Adjust height as needed
            className="rounded-[20px]"
          />
        </div>

        {/* Formal Product */}
        <div className="bg-bannerImgTwoo bg-repeat bg-cover bg-bottom w-[684px] h-[289px] rounded-[20px] relative left-[60px] max-sm:w-[310px] max-sm:h-[190px] max-sm:left-[24px] max-sm:mt-[24px]">
          <p className="w-[114px] h-[49px] relative mt-[25px] left-[16px] font-bold text-[36px] leading-[48px]">Formal</p>
          {/* Image */}
          <Image
            src="/images/image9.png"  // Correct path to image in the public folder
            alt="Formal Dress"
            width={300}
            height={200}
            className="rounded-[20px]"
          />
        </div>
      </div>

      <div className="max-sm:grid flex gap-[20px] relative mt-[20px]">
        {/* Party Product */}
        <div className="bg-bannerImgThree bg-repeat bg-cover bg-bottom w-[684px] h-[289px] rounded-[20px] relative left-[40px] max-sm:w-[310px] max-sm:h-[190px] max-sm:left-[24px] max-sm:mt-[24px]">
          <p className="w-[114px] h-[49px] relative mt-[25px] left-[16px] font-bold text-[36px] leading-[48px]">Party</p>
          {/* Image */}
          <Image
            src="/images/image10.png"  // Correct path to image in the public folder
            alt="Party Dress"
            width={300}
            height={200}
            className="rounded-[20px]"
          />
        </div>

        {/* Gym Product */}
        <div className="bg-bannerImgFour bg-repeat bg-cover bg-bottom w-[407px] h-[289px] rounded-[20px] relative left-[40px] max-sm:w-[310px] max-sm:h-[190px] max-sm:left-[24px] max-sm:mt-[24px]">
          <p className="w-[114px] h-[49px] relative mt-[25px] left-[16px] font-bold text-[36px] leading-[48px]">Gym</p>
          {/* Image */}
          <Image
            src="/images/image7.png"  // Correct path to image in the public folder (or change it)
            alt="Gym Dress"
            width={300}
            height={200}
            className="rounded-[20px]"
          />
        </div>
      </div>
    </div>
  );
}
 export default TopTwoVersace;