import WebWhats48 from "../assets/whatsapp-144.svg";
export default function Header() {
  return (
    <>
      <div className="bg-[#00a683] w-full py-7 select-none">
        <div className="sm:mx-10 mx-0">
          <div className="flex items-center uppercase font-semibold text-[white] min-w-[526px] max-w-[1000px] mx-auto px-10 sm:px-0">
            <img
              className="w-[3rem] mr-3"
              src={WebWhats48}
              alt="Logo web whatsapp"
            />
            <span>clone web whatsapp</span>
          </div>
        </div>
      </div>
    </>
  );
}
