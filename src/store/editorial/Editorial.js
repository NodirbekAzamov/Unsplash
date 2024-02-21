import axios from "axios";
import { create } from "zustand";

const ACCESS_KEY = "am99euoh1zYazFvkiuWRAZGCn8c8SWxSry_9Y3VvoKs";
const useEditorialStore = create((set) => ({
    editorial: [],
    getEditorial: async () => {
        try {
            const response = await axios.get(`https://api.unsplash.com/photos?page=1&query=all&client_id=${ACCESS_KEY}`)
            set({ editorial: [...response?.data] })
        } catch (e) {
            console.error(e);
        }
    }
}))

export default useEditorialStore