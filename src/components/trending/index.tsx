import { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

export function TrendingFoods() {
    const[foods, setFoods] = useState([])

 return (
   <FlatList
        data= {foods}
        renderItem={({ item } ) =>}
   />
  );
}