"use client";
import Image from "next/image";
import TodoList from "./TodoList/page";
import Footer from "./Footer/page";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

export default function Home() {
  return (
    <RecoilRoot>
      <div className="w-fit h-fit">
        <div className="w-fit h-fit p-5 bg-black-500 shadow-lg shadow-black-500/50">
          <TodoList />
        </div>
        <Footer />
      </div>
    </RecoilRoot>
  );
}
