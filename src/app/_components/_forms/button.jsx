'use client'
import SVG from '@/app/_libs/svg'
import { useRouter } from 'next/navigation';

const Button = ({
  label,
  backgroundColor,
  textColor,
  borderColor,
  width,
  height,
  font,
  fullWidth,
  svgColor,
  svg,
  href,
  disabled,
  borderRadius,
  loading,
  loadingColor
}) => {

  const router = useRouter();
  
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-eina text-[20px] leading-none hover:cursor-pointer ` + (fullWidth ? " w-full " : ` w-[${width}px] `) + (borderRadius ? " rounded-full " : " rounded-md ") + (height ? ` h-[${height}px] ` : " h-[20px] ") + (font ? ` font-[${font}] ` : " font-[500] ")}
      style={{
        backgroundColor: backgroundColor ? `${backgroundColor}` : "transparent",
        color: textColor ? `${textColor}` : "transparent",
        borderColor: borderColor ? `${borderColor}` : "transparent"
      }}
      onClick={() => href ? router.push(href) : null}
      disabled={disabled}
    >
      {
        loading
        ?
        <div className="loading border-r-white after:border-r-white before:border-l-white mr-3"></div>
        :
        label
      }
      { svg &&
        <SVG
          svg={svg}
          width={20}
          height={20}
          schemeOne={svgColor}
          className='ml-2 rounded-full bg-white w-5 h-5'
        />
      }
    </button>
  );
};

export default Button;