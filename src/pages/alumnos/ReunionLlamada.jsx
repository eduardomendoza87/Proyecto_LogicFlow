import React from 'react';
import { JitsiMeeting } from '@jitsi/react-sdk';

function Reunion() {
  return (
    <div className="min-h-screen bg-cafe4Personalizado flex flex-col items-center justify-center p-6">
      <h2 className="text-3xl font-bold text-negroPersonalizado mb-6">Reunión en vivo</h2>
      
      <div className="w-full max-w-5xl h-[700px]">
        <JitsiMeeting
          domain="meet.jit.si"
          roomName="UCLA_Reunion"
          configOverwrite={{
            startWithAudioMuted: true,
            startWithVideoMuted: false,
            disableInviteFunctions: true,
          }}
          interfaceConfigOverwrite={{
            TOOLBAR_BUTTONS: [
              'microphone', 'camera', 'desktop', 'fullscreen', 'hangup', 'closedcaptions'
            ],
          }}
          getIFrameRef={(iframeRef) => {
            iframeRef.style.border = '0px';
            iframeRef.style.height = '100%';
            iframeRef.style.width = '100%';
          }}
        />
      </div>
    </div>
  );
}

export default Reunion;
