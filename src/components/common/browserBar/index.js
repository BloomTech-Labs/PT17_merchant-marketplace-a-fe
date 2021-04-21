import React from 'react';
import { Input, Form } from 'antd';
import './BrowserBar.css';
import { AutoComplete } from 'antd';
import { useHistory } from 'react-router-dom';

function BrowserBar() {
  // const [search, setSearch] = useState();
  /* const searchHandle = e => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };*/
  let history = useHistory();
  const submitHandler = data => {
    history.push({
      pathname: '/ProductSearch',
      search: '?query=abc',
      state: { detail: data },
    });
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

  const Search = Input.Search;
  return (
    <Form className="search-bar">
      <AutoComplete
        style={{
          width: 800,
        }}
        options={productName}
        filterOption={(inputValue, option) =>
          option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
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
