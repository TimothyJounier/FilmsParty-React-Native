import React from 'react';
import { List } from 'react-native-paper';
import { COLORS } from '../constants';

const ListItem = () => (
    <List.Item
    title="First Item"
    description="Item description"
    left={props => <List.Icon {...props} icon="folder" />}
    style={{
        backgroundColor:COLORS.secondary,
        width: '90%',
    }}
    />
);

export default ListItem;