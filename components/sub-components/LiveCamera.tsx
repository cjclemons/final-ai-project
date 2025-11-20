"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { PhaseTwoDataHandling } from "@/app/data-handling/PhaseTwoDataHandling";
import { useImage } from "@/app/context/ImageContext";
import { usePictureData } from "@/app/context/PictureDataContext";
import Base from "../Base";
import { useLoading } from "@/app/context/LoadingContext";
import ResultsLoading from "./ResultsLoading";

export default function LiveCamera({
  onCameraReady,
}: {
  onCameraReady: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isLoadingCamera, setIsLoadingCamera] = useState(true);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { setPreview, clickedCamera } = useImage();
  const { setPictureData } = usePictureData();
  const { isLoading, setIsLoading } = useLoading();
  const router = useRouter();

  // ✅ Start Camera on Page Load
  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user" },
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = () => {
            videoRef.current?.play();
            setIsLoadingCamera(false);
            onCameraReady();
          };
        }
      } catch (error) {
        alert("Camera access denied.");
        router.push("/");
      }
    };

    startCamera();
  }, []);

  // ✅ Capture the photo
  const takePicture = async () => {
    if (!videoRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const video = videoRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const base64 = canvas.toDataURL("image/png");
    setPreviewImage(base64);
  };

  // ✅ Submit image to API
  const usePhoto = async () => {
  if (!previewImage) return;

  setIsAnalyzing(true);
  setPreview(previewImage);
  setIsLoading(true); // ✅ Start loading BEFORE the API call

  try {
    const response = await PhaseTwoDataHandling(previewImage);
    const data = response.data;

    setPictureData(data);
  } finally {
    setIsLoading(false); // ends loading when finished
  }
};

 {isLoading && <ResultsLoading />}
  return (
    <>
      <div className="h-[90vh] w-screen">
        <div className="relative h-[92vh] w-screen overflow-hidden bg-gray-900">
          <div className="absolute inset-0 z-10">
            {/* ✅ LIVE VIDEO */}
            {!previewImage && (
              <video
                ref={videoRef}
                autoPlay
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              ></video>
            )}
            {!previewImage && !isLoadingCamera && (
              <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 flex items-center space-x-3">
                <div className="font-semibold text-sm tracking-tight leading-[14px] text-[#FCFCFC] hidden sm:block">
                  TAKE PICTURE
                </div>
                <div
                  className="transform hover:scale-105 ease-in-out duration-300"
                  onClick={takePicture}
                >
                  <Image
                    src="/assets/take-picture-icon.svg"
                    alt="Take Picture Icon"
                    width={60}
                    height={60}
                    className="w-16 h-16 cursor-pointer"
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
            )}
            <div className="absolute bottom-30 sm:bottom-40 left-0 right-0 text-center z-20">
              <p className="text-sm mb-2 font-normal leading-6 text-[#FCFCFC]">
                TO GET BETTER RESULTS MAKE SURE TO HAVE
              </p>
              <div className="flex justify-center space-x-8 text-xs leading-6 text-[#FCFCFC]">
                <p>◇ NEUTRAL EXPRESSION</p>
                <p>◇ FRONTAL POSE</p>
                <p>◇ ADEQUATE LIGHTING</p>
              </div>
            </div>
          </div>

          {/* everything below apart form the back button will appear after I click on the Take Picture Icon  */}
          {previewImage && (
            <div className="absolute inset-0 z-10 flex flex-col items-center">
              {/* where I want the full video and then picture to be */}
              <img
                src={previewImage}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute text-sm leading-6 uppercase text-[#FCFCFC] top-40">
                GREAT SHOT!
              </div>
              <div className="absolute bottom-40 sm:bottom-16 left-0 right-0 flex flex-col items-center z-20">
                <h2 className="text-lg font-semibold mb-5 md:mb-7 text-[#FCFCFC] drop-shadow-md">
                  Preview
                </h2>
                <div className="flex justify-center space-x-6">
                  <button
                    className="px-4 py-1 bg-gray-200 text-gray-800 cursor-pointer hover:bg-gray-300 shadow-md text-sm"
                    onClick={() => setPreviewImage(null)}
                  >
                    Retake
                  </button>
                  <button
                    className="px-6 py-2 bg-[#1A1B1C] text-[#FCFCFC] cursor-pointer hover:bg-gray-800 shadow-md text-sm"
                    onClick={usePhoto}
                  >
                    Use This Photo
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="absolute md:bottom-8 bottom-60 left-8 z-20 text-[#fff]">
            <Base />
          </div>
          <canvas ref={canvasRef} className="hidden"></canvas>
          {isAnalyzing && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-[#FCFCFC]  opacity-50 p-6 rounded-lg shadow-lg text-center">
                <p className="text-xl animate-pulse">ANALYZING IMAGE...</p>
                <div className="flex items-center justify-center space-x-4 py-8">
                  <div className="w-2 h-2 rounded-full bg-[#1A1B1C] animate-[bounce_1s_infinite_0ms] opacity-30"></div>
                  <div className="w-2 h-2 rounded-full bg-[#1A1B1C] animate-[bounce_1s_infinite_250ms] opacity-30"></div>
                  <div className="w-2 h-2 rounded-full bg-[#1A1B1C] animate-[bounce_1s_infinite_500ms] opacity-30"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
