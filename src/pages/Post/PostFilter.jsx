import React from 'react';
import { Input } from '../../components/Input/Input';
import { SelectForm } from '../../components/Select/SelectForm';

export const Postfilter = ({filter, setFilter}) => {
  return (
    <div>
      <Input
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})} 
        placeholder='Поиск' 
      />
      <SelectForm
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue='Сортировка'
        options={[
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По описанию'}
      ]} 
      />
    </div>
  );
}

