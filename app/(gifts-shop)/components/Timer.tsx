export default function Timer() {
  return (
    <div className="flex justify-center items-center w-auto h-18 p-3 pt-2 bg-cs-static-white-40 rounded-2xl">
      <div className="w-20 h-auto">
        <h2 className="font-[montserrat] w-full font-semibold text-2xl leading-[1.52] text-cs-static-white uppercase tracking-widest">
          47
        </h2>
        <h4 className="font-[montserrat] font-semibold text-xs leading-[1.3] text-cs-static-white uppercase tracking-widest">
          days
        </h4>
      </div>
      <span className="w-[1px] h-5 ml-[-1px] bg-cs-static-white-40"></span>
      <div className="w-20 h-auto">
        <h2 className="font-[montserrat] w-full font-semibold text-2xl leading-[1.52] text-cs-static-white uppercase tracking-widest">
          5
        </h2>
        <h4 className="font-[montserrat] font-semibold text-xs leading-[1.3] text-cs-static-white uppercase tracking-widest">
          hours
        </h4>
      </div>
      <span className="w-[1px] h-5 ml-[-1px] bg-cs-static-white-40"></span>
      <div className="w-20 h-auto">
        <h2 className="font-[montserrat] w-full font-semibold text-2xl leading-[1.52] text-cs-static-white uppercase tracking-widest">
          34
        </h2>
        <h4 className="font-[montserrat] font-semibold text-xs leading-[1.3] text-cs-static-white uppercase tracking-widest">
          minutes
        </h4>
      </div>
      <span className="w-[1px] h-5 ml-[-1px] bg-cs-static-white-40"></span>
      <div className="w-20 h-auto">
        <h2 className="font-[montserrat] w-full font-semibold text-2xl leading-[1.52] text-cs-static-white uppercase tracking-widest">
          12
        </h2>
        <h4 className="font-[montserrat] font-semibold text-xs leading-[1.3] text-cs-static-white uppercase tracking-widest">
          seconds
        </h4>
      </div>
    </div>
  );
}
