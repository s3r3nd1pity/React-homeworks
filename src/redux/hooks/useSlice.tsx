import {useSelector} from "react-redux";
import {store} from "../store.tsx";


export const useAppSelector=useSelector.withTypes<ReturnType<typeof store.getState>>()