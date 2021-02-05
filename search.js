import React, { useState } from 'react';
 
function Search() {
  const dataList = [
    {
      "id": 1,
      "name": "nature",
      "year": 2000,
      
      "imgsrc": "./images/nature.jfif"
    },
    {
        "id": 2,
        "name": "volcano",
        "year": 2000,
        
        "imgsrc": "./images/download.jfif"
      },
      {
        "id": 3,
        "name": "nature",
        "year": 2000,
       
        "imgsrc": "./images/a.jfif"
      },
      {
        "id": 4,
        "name": "nature",
        "year": 2000,
        
        "imgsrc": "./images/a1.jpg"
      },
          
  ];
 
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(dataList);
 
  // exclude column list from filter
  const excludeColumns = ["id", "color"];
 
  // handle change event of search input
  const handleChange = value => {
    setSearchText(value);
    filterData(value);
  };
 
  // filter records by search text
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(dataList);
    else {
      const filteredData = dataList.filter(item => {
        return Object.keys(item).some(key =>
          excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  }
 
  return (
    <div className="App">
     
      Search: <input
        style={{ marginLeft: 5 }}
        type="text"
        placeholder="Type to search..."
        value={searchText}
        onChange={e => handleChange(e.target.value)}
      />
      <div className="box-container">
        {data.map((d, i) => {
          return <div class="container bcontent">
            <b>Name: </b>{d.name}<br />
          
           
            <img src={d.imgsrc}></img>
          </div>
        })}
        <div className="clearboth"></div>
        {data.length === 0 && <span>No records found to display!</span>}
      </div>
    </div>
  );
}
 
export default Search;