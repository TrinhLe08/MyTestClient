"use client";
import { useRef, useState } from "react";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import Recoil from "../recoil";

const TodoList = () => {
  const [list, setList] = useRecoilState(Recoil.AtomList);
  const List: string[] = useRecoilValue(Recoil.AtomList);
  const [completedCount, setCompletedCount] = useRecoilState(
    Recoil.AtomListSucsses
  );
  const [openTask, setOpenTask] = useState(false);
  const ValueListSucsses: any = useRecoilValue(Recoil.AtomListSucsses);
  const formValue: any = useRef("");

  const PushList = () => {
    let values: string = formValue.current.value;
    if (values == "") return;
    setList((list: any) => [...list, { content: values, check: false }]);
    setCompletedCount(completedCount + 1);
    console.log(values);
  };
  const CheckBox = (content: string, check: Boolean) => {
    if (check) {
      console.log(12);
      console.log(ValueListSucsses);

      setCompletedCount(completedCount + 1);
    } else {
      console.log(13);

      setCompletedCount(completedCount - 1);
    }
    setList((list: any) =>
      list.map((l: any) => {
        return l.content == content ? { content: content, check: !l.check } : l;
      })
    );
  };

  const MissionNotSucsess = () => {
    const ListNotSucsess: any = List.filter((l: any) => l.check === false);
    console.log(ListNotSucsess);
    return (
      <div className="grid gap-2 mt-3">
        {ListNotSucsess.map((l: any, index: number) => (
          <div className="flex gap-1">
            <div>
              <input
                type="checkbox"
                id="myCheckbox"
                className="inline-block w-4 h-4 rounded-full border-2 border-gray-400"
                checked={l.check || false}
                onChange={() => CheckBox(l.content, l.check)}
              />
            </div>
            <div className={l.check ? "line-through" : "no-underline"}>
              {l.content}
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className="todo-list-container ">
      <h1
        className="bg-slate-200 font-semibold b-5 text-center rounded-tl-full "
        style={{ borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }}
      >
        You have {ValueListSucsses} tasks left!
      </h1>
      <button className="underline" onClick={() => setOpenTask(!openTask)}>
        Mission not sucsess
      </button>
      {!openTask ? (
        <div className="grid gap-2 mt-3">
          {List.map((l: any, index: number) => (
            <div className="flex gap-1">
              <div>
                <input
                  type="checkbox"
                  id="myCheckbox"
                  className="inline-block w-4 h-4 rounded-full border-2 border-gray-400"
                  checked={l.check || false}
                  onChange={() => CheckBox(l.content, l.check)}
                />
              </div>
              <div className={l.check ? "line-through" : "no-underline"}>
                {l.content}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <MissionNotSucsess />
      )}
      <div className=" flex gap-2">
        <input
          placeholder="Enter task ..."
          className="border-2 w-40"
          ref={formValue}
        />
        <button
          className="bg-slate-200 h-fit p-1 text-black font-xs text-sm rounded-md "
          onClick={() => PushList()}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
export default TodoList;
