import React from 'react';

type VinylPreviewProps = {
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
};

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
    <div className="text-center">
      <div className="mb-4 font-semibold">Vinyl 3D Mockup Preview</div>
      <div className="w-[300px] h-[300px] rounded-full border-[16px] border-gray-800 relative mx-auto"
           style={{ backgroundColor: vinylColor }}>
        {labelTexture && <img src={labelTexture} alt="label" className="absolute inset-1/3 w-1/3 h-1/3 rounded-full" />}
      </div>
      <p className="text-xs mt-2">Type: {vinylWeight} • Size: {vinylSize}" • Label: {labelMode}</p>
      {showInnerSleeve && innerSleeveTexture && (
        <img src={innerSleeveTexture} alt="Inner Sleeve" className="mt-2 max-h-24 mx-auto" />
      )}
      {jacketFront && <img src={jacketFront} alt="Jacket Front" className="mt-4 max-h-40 mx-auto" />}
      {jacketBack && <img src={jacketBack} alt="Jacket Back" className="mt-2 max-h-40 mx-auto" />}
    </div>
  );
};

export default VinylPreview;