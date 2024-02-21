import axios from "axios";
import { create } from "zustand";

const ACCESS_KEY = "am99euoh1zYazFvkiuWRAZGCn8c8SWxSry_9Y3VvoKs";
const useCollectionsStore = create((set) => ({
    collections: [],
    getCollections: async () => {
        try {
            const response = await axios.get(`https://api.unsplash.com/collections/?client_id=${ACCESS_KEY}`)
            set({ collections: [...response?.data] })
        } catch (e) {
            console.error(e);
        }
    }
}))

export default useCollectionsStore