import "./styles/dropdown.css";
import Select from "react-select";
import { useState } from "react";
import PokeFightHpBar from "./PokeFightHpBar";

const PokemonDropdown = ({ pokemons, hp }) => {
  const [userSelect, setUserSelect] = useState(null);

  const onChangeHandler = (selectedOption) => {
    setUserSelect(selectedOption.value);
  };

    console.log('userselect:', userSelect);
  
  return (
    <>
      {!userSelect &&
      <div className="dropdown_select">
        {pokemons && (
          <Select
          
            onChange={onChangeHandler}
            options={pokemons.map((pokemon) => {
              return {
                value: pokemon.data,
                label:
                  pokemon.data.name.charAt(0).toUpperCase() +
                  pokemon.data.name.slice(1),
              };
            })}
          />
        )}
        </div>
        }
        {userSelect && <><PokeFightHpBar fight={hp} />
        <img src={userSelect && userSelect.sprites.back_default} /></>
      }
    </>
  );
};

export default PokemonDropdown;
