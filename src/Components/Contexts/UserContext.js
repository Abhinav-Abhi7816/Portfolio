import { createContext, useContext } from "react";

const UserContext=createContext({ind:null,setInd:()=>{},usedArr:'',setUsedArr:()=>{},});

export const UserConProvider=UserContext.Provider;

export default function useUserContext(){
    return useContext(UserContext);
}