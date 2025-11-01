
'use client'

import { useState } from "react"

import LiveCamera from "@/components/sub-components/LiveCamera"
import CameraLoading from "@/components/sub-components/CameraLoading"
import Header from "@/components/Header"
export default function CameraClient() {
    const [cameraReady, setCameraReady] = useState(false)
    return(
        <>
        <Header/>
        {/* Show loading until LiveCamera notifies us it's ready */}
      {!cameraReady && <CameraLoading />}

      {/* Pass setter so LiveCamera can notify when video is ready */}
      <LiveCamera onCameraReady={() => setCameraReady(true)} />
        </>
    )
}