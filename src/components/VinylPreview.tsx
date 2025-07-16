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
  jacketType
}) => {
  return (
    <div className="relative w-full h-full bg-white flex items-center justify-center text-center text-gray-600">
      {/* Mock 3D Vinyl Visual Preview */}
      <div className="w-[300px] h-[300px] bg-gradient-to-br from-gray-800 to-black rounded-full border-[8px] border-gray-700 flex items-center justify-center">
        <div className="w-[80px] h-[80px] rounded-full bg-center bg-no-repeat bg-cover border-4 border-white"
             style={{ backgroundImage: `url(${labelTexture})` }} />
      </div>
      <p className="absolute bottom-4 text-sm">
        {discCount}× {vinylSize} {vinylColor} Vinyl, {vinylWeight} • Jacket: {jacketType}, {jacketFinish}
      </p>
    </div>
  );
};

export default VinylPreview;
