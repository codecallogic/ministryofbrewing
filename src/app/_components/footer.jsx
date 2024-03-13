import { footerLinks } from "../_constants"
import { useRouter } from 'next/navigation';

const Footer = ({}) => {

  const router = useRouter()
  
  return (
    <section className="bg-gradient-to-l to-schemefive from-5% from-schemefive h-[350px] bg-cover bg-centerbg-no-repeat text-black flex flex-col max-lg:h-[100%]">
      <div className="w-full h-full mt-[60px] flex justify-between pl-[109px] pr-[120px] max-lg:flex-col max-lg:items-start max-md:pl-[35px] max-md:pr-[35px]">
        <div className="flex max-md:w-full">
          <div className="flex justify-around gap-x-[38px] max-lg:flex-col max-lg:items-start max-md:w-full">
            <a href="/" className="w-[130px] h-[35px] max-md:mb-[35px] max-md:self-center max-md:w-[145px] max-md:h-[40px]">
              <img src="/assets/logo.png" alt="Fairline Defense Logo" />
            </a>
            { footerLinks.length > 0 && footerLinks.map((item, idx) =>   
              <div 
                key={idx}
                className="w-[170px] mr-[50px] flex flex-col max-md:py-[23px] max-md:border-b-[1px] max-md:w-full"
              >
                <h1 className="font-eina text-[20px] font-[500] leading-[40px]">{item.label}</h1>
                { item.items.length > 0 && item.items.map((item, idx) => 
                  <a key={idx} href={item.href} className="font-eina text-[14px] font-[400] leading-[28px] hover:cursor-pointer">{item.label}</a>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col items-end text-schemetwo max-lg:items-start max-lg:mb-10 max-md:mb-[23px] max-md:w-full">
          <h1 className="font-eina text-[20px] font-[500] leading-[40px]">Support</h1>
          <p className="font-eina text-[14px] font-[500] leading-[28px]">1-833-201-1463</p>
          <p className="font-eina text-[14px] font-[400] leading-[28px] hover:cursor-pointer" onClick={() => router.push('/contact')}>Contact us</p>
        </div>
      </div>
      <div className="w-full pl-[102px] pr-[120px] pb-[44px] max-md:pl-[35px] max-md:pr-[35px]">
        <div className="border-t-[1px] border-schemetwo pt-[14px] flex justify-between max-md:flex-col max-md:items-center">
          <div className="text-schemetwo font-eina text-[14px] font-[400] leading-[20px] flex">
            <span className="border-r-[2px] border-schemetwo pr-[30px] hover:cursor-pointer" onClick={() => router.push('/termsandservices')}>Terms & Services</span>
            <span className="pl-[30px] hover:cursor-pointer" onClick={() => router.push('/privacypolicy')}>Privacy Policy</span>
          </div>
          <div className="text-schemetwo font-eina text-[15px] font-[400] leading-[20px] max-md:mt-[48px] max-md:text-center">2024, Influx, All Rights Reserved.</div>  
        </div>            
      </div>
    </section>
  )
}

export default Footer
