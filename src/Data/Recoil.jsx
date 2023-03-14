import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const {persistAtom} = recoilPersist()
export const packagedata = atom({
    key : 'packagedata',
    default : [],
    effects_UNSTABLE : [persistAtom]
})