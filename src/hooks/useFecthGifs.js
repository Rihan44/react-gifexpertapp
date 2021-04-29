import { useEffect, useState } from "react";
import {getGifs} from "../helpers/getGifs";


export const useFecthGifs = (category) =>{

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() =>{
        
        getGifs(category)
            .then(images => {

                setstate({
                    data: images,
                    loading: false
                });

            });

    }, [category]);

    return state; // es la {data: [], loading: true}
}