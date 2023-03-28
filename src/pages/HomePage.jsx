import React from 'react';
import { useParams } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { Characters } from '../components/Characters';
import {CharacterCarts} from '@components/CharacterCarts';
import { Header } from '../components/Header';
import { Search } from '../components/Search';
import { useDataBase } from '../hooks/useDataBase';
import { Pagination } from '../components/Pagination';
import { AddedToFavorites } from '../components/AddedToFavoritees';
import { CharacterInFavorites } from '../components/CharacterInFavorites';

function HomePage(){
    const {numPage} = useParams();
    const Api = `https://rickandmortyapi.com/api/character?page=${numPage}`;
    const {
        idInfavorites,
        darkMode,
        handleAddtoFavorite,
        handleRemovetoFavorite,
        handleToggleDarkMode,
        handleSearch,
        filteredCharacters,
    } = useDataBase(Api);
    console.log(filteredCharacters)
    return(
        <IconContext.Provider value={{
            color: "rgb(7, 7, 116)",
            size: 20,
            }}>
            <Header darkMode={darkMode} handleToggleDarkMode={handleToggleDarkMode} />  
            <Search handleSearch={handleSearch} darkMode={darkMode} />
            <Pagination darkMode={darkMode} />
            <AddedToFavorites>
                {idInfavorites.map(item => <CharacterInFavorites item={item}
                key={item.id} />)}
            </AddedToFavorites>  
            <Characters darkMode={darkMode}>     
                {filteredCharacters.map((item)=>(<CharacterCarts handleAddtoFavorite={handleAddtoFavorite}
                     item={item} idInfavorites={idInfavorites} darkMode={darkMode}
                     handleRemovetoFavorite={handleRemovetoFavorite} key={item.id}
                    />))}     
            </Characters>
        </IconContext.Provider>
    )

}

export {HomePage}