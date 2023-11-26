import { SectionWrapper } from "../hoc";

const CopyPrivacy = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
        <p className='text-[13px] text-justify'><span className="orange-line-nav">COPYRIGHT sucked</span>copy what ever you want and use in any way you want</p>
    </div>
  )
}


export default SectionWrapper(CopyPrivacy, "");
