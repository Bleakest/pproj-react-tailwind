import React,{useState} from "react";
import Followers from "./followers/Followers";
import Friends from "./friends/Friends";
import Photos from './photo/Photos'
import Video from "./vkvideo/Video";


export default function Navbar() {

  return (
    <div>
      <div className="flex justify-between border-t-2 m-3">
        <Photos />
        <Followers />
        <Friends />
        <Video />
      </div>
    </div>
  );
}
