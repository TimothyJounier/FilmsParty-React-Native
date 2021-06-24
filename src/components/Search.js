import React from 'react';
import { Searchbar } from 'react-native-paper';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
            <Searchbar
            placeholder="Rechercher un film.."
            onChangeText={onChangeSearch}
            value={searchQuery}
            icon={require("../assets/icons/search_icon.png")}
            style={{
                width: '80%',
                height: '50%',
            }}
            />
        );
    };

export default SearchBar;