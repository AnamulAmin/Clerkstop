function HeroContent() {
  return (
    <div className="container mx-auto lg:px-10 relative text-left z-10">
      <ul className="text-lg text-theme_orange mb-8 list-disc flex gap-8">
        <li className="list-none">Data entry/Bookkeeping</li>
        <li>Digital Marketing</li>
        <li>Hero/web Development</li>
        <li>Virtual Assistants</li>
      </ul>
      <h1 className="text-[56px] lg:text-[120px] text-center lg:text-left font-bold leading-tight mb-4 text-white capitalize w-full lg:max-w-[850px] ">
        One stop <br /> shop for all your business needs
      </h1>
    </div>
  );
}

export default HeroContent;
