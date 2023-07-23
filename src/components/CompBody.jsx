import {
    EllipsisVerticalIcon,
    CogIcon,
  } from "@heroicons/react/24/solid";
  import { QRCodeSVG } from "qrcode.react";
  
  import ReactPlayer from "react-player";
  import FalseBg from "./FalseBg";
  import Video from "../assets/Player.mp4";
  const items = [
    { id: 1, name: "Abra o WhatsApp no seu celular." },
    {
      id: 2,
      name: (
        <span className="flex flex-wrap">
          Toque em
          <strong>
            <span className="mx-2 flex">
              Mais configurações
              <span className="ms-2">
                <EllipsisVerticalIcon className="bg-[#e6e6e6] text-[#919090] w-[20px]" />
              </span>
            </span>
          </strong>{" "}
          ou{" "}
          <strong className="flex mx-2">
            Configurações{" "}
            <span>
              <CogIcon className="bg-[#e6e6e6] text-[#919090] w-[22px] ms-2" />
            </span>
          </strong>{" "}
          e selecione <strong className="mx-2">Aparelhos conectados.</strong>
        </span>
      ),
    },
    {
      id: 3,
      name: (
        <span>
          Toque em <strong>Conectar aparelho.</strong>
        </span>
      ),
    },
    {
      id: 4,
      name: (
        <span>Aponte seu celular para esta tela para capturar o QR code.</span>
      ),
    },
  ];
  export default function CompBody() {
    const listItems = items.map((product) => (
      <li className="list-decimal ml-4 my-5" key={product.id}>
        {product.name}
      </li>
    ));
    const link =
      "https://faq.whatsapp.com/1317564962315842/?cms_platform=web&lang=pt-BR";
  
    return (
      <>
        <FalseBg />
        <div className="sm:mx-10 mx-0 relative sm:mb-[6rem] select-none">
          <div className="min-w-[526px] max-w-[1000px] mx-auto bg-[white] drop-shadow-lg text-[#616161] sm:rounded">
            <div className="flex flex-col md:flex-row sm:pt-[4.5rem] sm:px-16 pt-[3rem] px-10 relative">
              <div className="flex flex-1">
                <div>
                  <h1 className="text-[1.8rem] font-light mb-10">
                    Use o WhatsApp no seu computador
                  </h1>
                  <ol className="text-[1rem]">{listItems}</ol>
                </div>
              </div>
  
              <div className="flex-[.5]">
                <div className="w-full h-full flex md:justify-end justify-center">
                  <QRCodeSVG
                    size={230}
                    imageSettings={{
                      src: "https://img.icons8.com/color/48/whatsapp--v1.png",
                      width: 42,
                      height: 42,
                    }}
                    value="https://github.com/genariocoliveira"
                  />
                </div>
              </div>
            </div>
  
            <div className="sm:px-16 px-10 mt-5 relative flex flex-col w-full text-[#00a683] text-[1.1rem] font-[400]">
              <span className="bg-[#e6e6e6] w-full h-[1px]"></span>
              <spna className="my-12">
                <a href="#">Conectar com número de telefone </a>
              </spna>
            </div>
  
            <div className="flex flex-col relative bg-[#f9f9fa]">
              <div className="sm:py-[3rem] sm:px-16 py-[3rem] px-10 flex flex-col items-center justify-center">
                <div>
                  <h1 className="text-[1.8rem] font-light">Tutorial</h1>
                </div>
                <div>
                  <a
                    href={link}
                    target="_blank"
                    className="text-[#00a683] text-[.9rem] font-[600] hover:underline"
                  >
                    Precisa de ajuda para começar?
                  </a>
                </div>
                <div className="flex w-full md:w-auto md:mt-5">
                  <div className=" flex items-start overflow-hidden">
                    <ReactPlayer url={Video} controls />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  