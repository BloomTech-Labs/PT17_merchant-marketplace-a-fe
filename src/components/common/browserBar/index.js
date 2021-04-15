import React, { useState, useEffect } from 'react';
import { Input, Form, Button } from 'antd';
import { AimOutlined, SearchOutlined } from '@ant-design/icons';
import './BrowserBar.css';
import { AutoComplete } from 'antd';

function BrowserBar() {
  // const [search, setSearch] = useState();
  /* const searchHandle = e => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };*/
  const submitHandler = () => {
    console.log('hi');
  };
  //Dummy product name search
  const productName = [
    {
      value: 'Burns Bay Road',
    },
    {
      value: 'Downing Street',
    },
    {
      value: 'Wall Street',
    },
  ];
  /*
const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = e => {
    
    setSearchTerm(e.target.value);
  
  };
  const handleClickItem = (data) => {
    
    setSearchTerm(data)
 }
  useEffect(() => {
    const results = productName.filter(product =>
      product.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);*/

  const Search = Input.Search;
  return (
    <Form className="search-bar" onFinish={submitHandler}>
      <AutoComplete
        style={{
          width: 800,
        }}
        options={productName}
        filterOption={(inputValue, option) =>
          option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
        onSearch={submitHandler}
      >
        <Input.Search
          size="large"
          placeholder="Search Product"
          onSearch={submitHandler}
          color="blue"
        />
      </AutoComplete>
    </Form>
  );
}

export default BrowserBar;