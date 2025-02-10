import { useState } from "react";

import "./App.css";

function App() {
  const [pagetoShow, setPageToShow] = useState("1");
  const [showNoModal, setShowNoModal] = useState(false);
  const [showYesModal, setShowYesModal] = useState(false);
  return (
    <>
      {showNoModal && (
        <div className="fixed poppins-regular bg-[#3A0716] shadow-xl h-[500px] flex justify-center items-center my-auto md:w-[50%] w-[85%]  rounded-md inset-0 bg-opacity z-10 flex-col gap-4   mx-auto">
          <p
            class="absolute top-4 right-4  flex justify-center items-center text-xl  w-[30px] h-[30px] rounded-full bg-white text-black cursor-pointer"
            onClick={() => {
              setShowNoModal(false);
            }}
          >
            X
          </p>
          <div class="flex flex-col mx-auto gap-2 w-[90%]  items-end">
            <p class="bg-[#468CF7] w-[90%]  text-white p-4 rounded-tl-full rounded-bl-full rounded-tr-full">
              Noooooo. I just clicked no because I just wanted to see what would
              happen if I did.
            </p>
          </div>

          <div class="flex flex-col gap-2 mr-[40%] items-start">
            <p
              class="bg-white rounded-tr-full rounded-br-full rounded-tl-full  text-black p-4 flex flex-col gap-2 rounded-md cursor-pointer"
              onClick={() => {
                setShowNoModal(false);
                setShowYesModal(true);
              }}
            >
              <p>Okay then , I say yes!</p>
              <p>Click here to continue</p>
            </p>
          </div>
        </div>
      )}
      {showYesModal && (
        <div className="fixed poppins-regular bg-[#3A0716] rounded-md shadow-xl md:h-[500px] h-[580px] flex justify-center items-center my-auto md:w-[50%] w-[85%] inset-0 bg-opacity z-10 flex-col gap-4   mx-auto">
          <p
            class="absolute top-4 right-4  flex justify-center items-center text-xl  w-[30px] h-[30px] rounded-full bg-white text-black cursor-pointer"
            onClick={() => {
              setShowYesModal(false);
            }}
          >
            x
          </p>

          <div class="flex flex-col mx-auto gap-2 w-[90%]  items-end">
            <p class="bg-[#468CF7] w-[90%]  text-white p-4 rounded-tl-full rounded-bl-full rounded-tr-full">
              I want to make this day as special for you as you are to me
            </p>
          </div>

          <div class="flex flex-col gap-2 mr-[40%] items-start">
            <img
              src="/img.jpg"
              alt=""
              class="w-[150px] h-[200px] object-cover rounded-md"
            />
            <p
              class="bg-white rounded-tr-full rounded-br-full rounded-tl-full  text-black p-4 flex flex-col gap-2 rounded-md cursor-pointer"
              onClick={() => {
                setShowYesModal(false);
              }}
            >
              Yeeyyy !!!
            </p>
          </div>
        </div>
      )}

      {pagetoShow == "2" && (
        <div class="relative  w-[100%] h-[100vh]">
          <img
            src="/baloon.png"
            alt=""
            class="w-[100%] h-[100vh] z-10 opacity-90  object-cover"
          />

          <img
            src="/baloonsmall.png"
            alt=""
            class="w-[100%]  mx-auto z-100 md:hidden   h-[100vh] object-contain absolute top-0"
          />

          <div class="absolute top-32 font-face-gm left-1/2 text-[#3A0716] md:text-6xl text-3xl w-[100%] text-center transform -translate-x-1/2">
            <p>Shyleen Wangui</p>
            WILL YOU BE MY
          </div>

          <div class="absolute bottom-32  left-1/2 w-[100%]   transform -translate-x-1/2">
            <div class="md:w-[40%] w-[90%] mx-auto flex bg-[#3A0716] rounded-3xl  justify-between items-center p-4">
              <p
                class="text-black p-2  cursor-pointer bg-white rounded-tr-full rounded-br-full rounded-tl-full"
                onClick={() => {
                  setShowYesModal(true);
                }}
              >
                Yessssss
              </p>

              <p
                onClick={() => {
                  setShowNoModal(true);
                }}
                class="bg-[#468CF7] cursor-pointer text-white p-2 rounded-tl-full rounded-bl-full rounded-tr-full"
              >
                No....
              </p>
            </div>
          </div>
        </div>
      )}
      {pagetoShow === "1" && (
        <div
          class="min-h-[100vh] w-[100%] bg-cover bg-center"
          style={{
            backgroundImage: `url("/img.jpg")`,

            backgroundSize: "cover",
          }}
        >
          <div class="w-[100%] bg-gradient-to-b  items-center from-[#E86895]/50 from-10%  to-black/90 flex flex-col justify-center h-[100vh]">
            <div class="flex flex-col mx-auto gap-2 w-[80%]  items-end">
              <img
                src="/img.jpg"
                alt=""
                class="w-[200px] h-[250px] object-cover rounded-md"
              />

              <p class="bg-[#468CF7] text-white p-4 rounded-tl-full rounded-bl-full rounded-tr-full">
                Heyy Beautiful!
              </p>

              <p class="bg-[#468CF7] md:w-[40%] w-[80%] text-white p-4 rounded-tl-full rounded-bl-full rounded-tr-full">
                I’ve been thinking a lot about how much you mean to me. Will you
                be my Valentine?
              </p>

              <iframe
                src="https://open.spotify.com/embed/track/5XeFesFbtLpXzIVDNQP22n"
                frameborder="0"
                allowtransparency="true"
                allow="encrypted-media"
              ></iframe>
            </div>

            <div class="flex flex-col gap-2 mr-[40%] items-start">
              <p
                class="bg-white rounded-tr-full cursor-pointer rounded-br-full rounded-tl-full  text-black p-4 flex flex-col gap-2 rounded-md"
                onClick={() => setPageToShow("2")}
              >
                <p>Yess....</p>

                <p>click here to continue</p>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
