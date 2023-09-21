import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const AtomList = atom({
  key: "AtomList",
  default: [
    "Build some websites",
    "Do excercises",
    "Go shopping",
    "House cleaning",
  ],
  effects_UNSTABLE: [persistAtom],
});

const AtomListSucsses = atom({
  key: "AtomListSucsses",
  default: 4,
  effects_UNSTABLE: [persistAtom],
});

export default {
  AtomListSucsses,
  AtomList,
};
