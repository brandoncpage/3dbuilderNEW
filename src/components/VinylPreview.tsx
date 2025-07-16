// File: src/components/VinylPreview.tsx

import React from 'react';

interface VinylPreviewProps {
  jacketFront: string;
  jacketBack: string;
  showInnerSleeve: boolean;
  discCount: number;
  vinylColor: string;
  vinylWeight: string;
  vinylSize: string;
  labelTexture: string;
  labelMode: string;
  innerSleeveTexture: string;
  jacketColorMode: string;
  jacketFinish: string;
  jacketType: string;
}

const VinylPreview: React.FC<VinylPreviewProps> = ({
  jacketFront,
  jacketBack,
  showInnerSleeve,
  discCount,
  vinylColor,
  vinylWeight,
  vinylSize,
  labelTexture,
  labelMode,
  innerSleeveTexture,
  jacketColorMode,
  jacketFinish,
  jacketType,
}) => {
  return (
    <div className="relative w-[300px] h-[300px] bg-black rounded-full flex items-center justify-center border-8 border-gray-700 shadow-xl">
      <div
        className="w-[80px] h-[80px] rounded-full border-4 border-white bg-center bg-cover"
        style={{
          backgroundImage: `url(${labelTexture || ''})`,
          backgroundColor: labelTexture ? 'transparent' : '#222',
        }}
      />
    </div>
  );
};

export default VinylPreview;
