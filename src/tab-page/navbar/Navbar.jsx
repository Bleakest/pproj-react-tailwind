import React,{useState} from "react";
import Followers from "./followers/Followers";
import Photos from './photo/Photos'


export default function Navbar() {

  return (
    <div>
      <div className="flex justify-between border-t-2 m-3">
        <Photos />
        <Followers />
        <div className="w-full h-24 text-center">
          <div className="pt-3 text-xl">6</div>
          <div>friends</div>
        </div>
        <div className="w-full h-24 text-center">
          <div className="pt-3 text-xl">2</div>
          <div>video</div>
        </div>
      </div>
    </div>
  );
}
