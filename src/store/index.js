import axios from "axios";
import { create } from "zustand";

const useIndexStore = create(() => ({
    editorial: [],
    GetEditorial: async()=>{
        try{
            const response = await axios.get("").then((res) => {})
            
        }catch(e){
            console.error(e);
        }
    }
}))

export default useIndexStore