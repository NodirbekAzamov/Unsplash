import axios from "axios";
import { create } from "zustand";
const ACCESS_KEY = "am99euoh1zYazFvkiuWRAZGCn8c8SWxSry_9Y3VvoKs";
const useSearchStore = create((set) => ({
    search: [],
    getSearch: async (inputValue) => {
        console.log(inputValue, "inputValue");
        try {
            const response = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${inputValue}&client_id=${ACCESS_KEY}`)
            set({ search: [...response?.data?.results] })
            console.log(response.data);
            // if (inputValue.length > 0) {
                
            // } else {
            //     toast.error("Please enter your photo name", {
            //         icon: false
            //     });
            // }
        } catch (err) {
            console.error(err);

        }
    }
}))

export default useSearchStore