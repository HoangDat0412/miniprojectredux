import { submit_action } from "../types/BaiTapType";

export const submitAction = (listNd) =>(
    {
        type:submit_action,
        listNd:listNd
    }
)