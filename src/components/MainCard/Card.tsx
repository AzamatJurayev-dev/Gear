import type React from "react";

type Cardtypes = {
  img?: string;
  title?: string;
  subtitle?: string;
  rate?: React.ReactNode;
  className?: string;
  classNameText?: string;
  classNameImg?: string;
  heroName?: string;
  heroJob?: string;
  classNameImgBox?: string;
}



const Card = ({img , title, subtitle,rate,className,classNameText,classNameImg,heroName,heroJob ,classNameImgBox}:Cardtypes) => {
  return (
    <div className={className}>
        <div className={classNameImgBox}>
            <img className={classNameImg} src={img} alt="" />
            <div>
              <p>{heroName}</p>
              <p>{heroJob}</p>
            </div>
        </div>
        <div className={classNameText}>
          <h1>{rate}</h1>
          <h1 className="font-poppins font-medium text-[28px] leading-[150%] tracking-[0]">{title}</h1>
          <p className="font-poppins font-normal text-[16px] leading-[150%] tracking-[0] text-[#475E69] pt-3 ">{subtitle}</p>
        </div>
    </div>
  )
}

export default Card