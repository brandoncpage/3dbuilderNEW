// File: src/components/VinylPreview.tsx

import React from 'react';

type Props = {
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

export default function VinylPreview({
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
}: Props) {
  return (
    <div className="flex flex-col items-center gap-4 text-center p-4">
      <div className="w-48 h-48 rounded-full border-4 border-black overflow-hidden shadow-lg relative">
        {labelTexture ? (
          <img src={labelTexture} alt="Label" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            {labelMode === 'color' ? 'Full Color' : labelMode === 'bw' ? 'B/W Label' : 'Blank'}
          </div>
        )}
      </div>

      <div className="text-sm">
        <strong>Color:</strong> {vinylColor} <br />
        <strong>Size:</strong> {vinylSize}" <br />
        <strong>Weight:</strong> {vinylWeight} <br />
        <strong>Discs:</strong> {discCount} <br />
        <strong>Jacket:</strong> {jacketType} ({jacketColorMode}, {jacketFinish}) <br />
        {jacketFront && <span className="block text-green-600">Front Cover: ✓</span>}
        {jacketBack && <span className="block text-blue-600">Back Cover: ✓</span>}
        {showInnerSleeve && <span className="block text-purple-600">Inner Sleeve: ✓</span>}
      </div>
    </div>
  );
}

