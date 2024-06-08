import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import { CardPokemon } from '../components';
import { PokemonContext } from '../context/PokemonContext';

export const SearchPage = () => {
    const location = useLocation();
    const { globalPokemons } = useContext(PokemonContext);
    const [alertShown, setAlertShown] = useState(false);

    const filteredPokemons = globalPokemons.filter(pokemon =>
        pokemon.name.includes(location.state.toLowerCase())
    );

    if (filteredPokemons.length === 0 && !alertShown) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No se encontraron Pokémons, trate de ser un poco mas preciso ',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Entendido',
        });
        setAlertShown(true);
    }

    return (
        <div className='container'>
            <p className='p-search'>
                Se encontraron <span>{filteredPokemons.length}</span> resultados:
            </p>
            <div className='card-list-pokemon container'>
                {filteredPokemons.map(pokemon => (
                    <CardPokemon pokemon={pokemon} key={pokemon.id} />
                ))}
            </div>
        </div>
    );
};
