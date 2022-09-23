import React from 'react';

interface LoadingProps {
  size: number;
}

export const Loading: React.FC<LoadingProps> = ({ size }) => {
  return (
    <div className="">
      <div style={{ width: `${size}px`, height: `${size}px` }} className="animate-spin">
        <div
          className="h-full w-full border-4 border-t-indigo-500
       border-b-indigo-500 rounded-[50%]"
        ></div>
      </div>
    </div>
  );
};
