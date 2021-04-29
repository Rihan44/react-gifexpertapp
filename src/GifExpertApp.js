import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

export const GifExpertApp = () => {

    /* const categories = ['One Punch', 'Dragon Ball', 'Deamon Slayer']; */
    const [categories, setCategories] = useState(['Boku No Hero Academia']);

   /*  const handleAdd = () => {
        setCategories([...categories,'Boku No Hero Academia']);
       /*  setCategories( cats => [...cats,'Boku No Hero Academia']); 
    }; */

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>
            {/* <button onClick={ handleAdd }>Agregar</button> */}
            <ol>
                {
                    // tiene dos partes el contenido del array y el indice
                   categories.map( (category) => (
                        <GifGrid 
                            key={category}
                            category={category} 
                        />
                   ))
                }
            </ol>
        </>
    )
};

export default GifExpertApp;
