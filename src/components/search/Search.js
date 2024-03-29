import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { geoApiOptions, GeoApiUrl } from '../../api/api';

const Search = ({ onSearchChange }) => {

    const [search, setSearch] = useState(null);

    const handleOnChange = (searchData) => {
        setSearch(searchData)
        onSearchChange(searchData)
    }

    const loadOptions = (inputValue) => {
        return fetch(`${GeoApiUrl}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
            .then(response => response.json())
            .then(response => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude
                            } ${city.longitude}`,
                            label: `${city.name
                            }, ${city.countryCode
                            }` 
                        };
                    })
                };
            })
            .catch(err => console.error(err));
    }

    return (
        <AsyncPaginate placeholder="Search the city"
            debounceTimeout={900}
            value={search} onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}

export default Search