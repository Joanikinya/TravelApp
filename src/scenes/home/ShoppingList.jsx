import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Item from "../../components/Item";
import { Typography } from "@mui/material";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Store } from "@mui/icons-material";



const ShoppingList = () => {
  const [value, setValue] = useState("all"); //respresents value for filter function
  const [store, setStore] = useState([]);
  // const [price, setPrice] = useState("");
  const isNonMobile = useMediaQuery("(min-width:600px)");
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }; //handles change for tabs

    // const handleChangePrice = (event: SelectChangeEvent) => {
    // setPrice(event.target.value);
    // };//handles change for dropdown

  async function getItems() {
    const items = await fetch(
      "http://localhost:1337/api/items?populate=image",
      { method: "GET" }
    );
    const itemsJson = await items.json();
    setStore(itemsJson.data);
    // console.log("items json",itemsJson.data[0].attributes.name);
  }

  useEffect(() => {
    getItems(); //name of async function
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  console.log("store", store);



//item is a value of iteration
  const americasItems = store.filter(
    (item) => item.attributes.category === 'americas' 
  );

    const europeItems = store.filter(
    (item) => item.attributes.category === 'europe' 
  );

  const asiapacificItems = store.filter(
    (item) => item.attributes.category === 'asiaPacific'
  );



  // const recentlyAddedLowPriceItems = store.filter(
  //   (item) => item.attributes.category === 'recentlyAdded' && item.attributes.price  < 1500
  // );

  // const recentlyAddedMidPriceItems = store.filter(
  //   (item) => item.attributes.category === 'recentlyAdded' && item.attributes.price >= 1500 && item.attributes.price <= 3500
  // );

  // const recentlyAddedHighPriceItems = store.filter(
  //   (item) => item.attributes.category === 'recentlyAdded' && item.attributes.price > 3500
  // );

  const africaItems = store.filter(
    (item) => item.attributes.category === 'africa'
  );

    const middleEastItems = store.filter(
    (item) => item.attributes.category === 'middleEast'
  );


  // const mostPopularLowPriceItems = store.filter(
  //   (item) => item.attributes.category === 'mostPopular' && item.attributes.price  < 1500
  // );

  // const mostPopularMidPriceItems = store.filter(
  //   (item) => item.attributes.category === 'mostPopular' && item.attributes.price >= 1500 && item.attributes.price <= 3500
  // );

  // const mostPopularHighPriceItems = store.filter(
  //   (item) => item.attributes.category === 'mostPopular' && item.attributes.price > 3500
  // );

  // const lowerPriceItems = store.filter(
  //   (item)=> item.attributes.price  < 1500
  // );

  // const midPriceItems = store.filter(
  //   (item)=> item.attributes.price >= 1500 && item.attributes.price <= 3500
  // );

  // const highPriceItems = store.filter(
  //   (item) =>item.attributes.price > 3500
  // );



    return <Box width="80%" margin="80px auto">
      <Typography variant="h3" textAlign="center">
        Featured <b>Travel Packages</b>
      </Typography>
    {/* Use Tabs to switch between different tabs - to be used with filter function  */}
    <Tabs
    textColor="primary"
    indicatorColor="primary"
    value={value}
    onChange={handleChange}
    centered
    TabIndicatorProps={{ sx: {display: isNonMobile? "block": "none"}}}
    sx={{
      m: "25px",
      "& .MuiTabs-flexContainer": {
          flexWrap: "wrap"
      }
    }}
    > 
      <Tab label="all" value="all" />
      <Tab label="americas" value="americas" />
      <Tab label="europe" value="europe" />
      <Tab label="asiaPacific" value="asiaPacific" />
      <Tab label="africa" value="africa" />
      <Tab label="middleEast" value="middleEast" />
      {/* <Tab label="GREAT VALUE" value="topRated" /> */}
    </Tabs>


    {/* <InputLabel
    sx={{
      ml: "25px",
      "& .MuiTabs-flexContainer": {
          flexWrap: "wrap"
      }
    }}
    >Filter by Price</InputLabel>
    <Select
      label="Price"
      placeholder="Price"
      value={price}
      onChange={handleChangePrice}
      sx={{
      m: "25px",
      width: 200,
      "& .MuiTabs-flexContainer": {
          flexWrap: "wrap"
      }
    }}
    >
      <MenuItem label="ALL"  value="all">All</MenuItem>
      <MenuItem label="LOWER PRICE" value="lowerPrice" >Less than $1500</MenuItem>
      <MenuItem label="MID PRICE" value="midPrice" >$1500 - $3500</MenuItem>
      <MenuItem label="HIGHER PRICE"  value="higherPrice" >$3500+</MenuItem>
    </Select> */}




    <Box
    margin="0 auto"
    display="grid"
    gridTemplateColumns="repeat(auto-fill, 300px)"
    justifyContent="space-around"
    rowGap="20px"
    columnGap="1.33%"
    >

      {value === "all" && store
      .sort((a,b)=> a.attributes.price > b.attributes.price? 1: -1)
      .map((item)=> (
        <Item item={item} key={`${item.name}-${item.id}`}></Item>
      ))}
      {value === "americas" && americasItems
      .sort((a,b)=> a.attributes.price > b.attributes.price? 1: -1)
      .map((item)=> (
        <Item item={item} key={`${item.name}-${item.id}`}></Item>
      ))}
      {value === "europe" && europeItems
      .sort((a,b)=> a.attributes.price > b.attributes.price? 1: -1)
      .map((item)=> (
        <Item item={item} key={`${item.name}-${item.id}`} />
      ))}
      {value === "asiaPacific" && asiapacificItems
      .sort((a,b)=> a.attributes.price > b.attributes.price? 1: -1)
      .map((item)=> (
        <Item item={item} key={`${item.name}-${item.id}`} />
      ))}
      {value === "africa" && africaItems
      .sort((a,b)=> a.attributes.price > b.attributes.price? 1: -1)
      .map((item)=> (
        <Item item={item} key={`${item.name}-${item.id}`} />
      ))}
      {value === "middleEast" && middleEastItems
      .sort((a,b)=> a.attributes.price > b.attributes.price? 1: -1)
      .map((item)=> (
        <Item item={item} key={`${item.name}-${item.id}`} />
      ))}


      {/* {value === "all" && price === "lowerPrice" && lowerPriceItems.map((item)=> (
        <Item item={item} key={`${item.name}-${item.id}`}></Item>
      ))}
      {value === "all" && price === "midPrice" && midPriceItems.map((item)=> (
        <Item item={item} key={`${item.name}-${item.id}`}></Item>
      ))}
      {value === "all" && price === "higherPrice" && highPriceItems.map((item)=> (
        <Item item={item} key={`${item.name}-${item.id}`}></Item>
      ))}
      {value === "recentlyAdded" && price === "lowerPrice" && recentlyAddedLowPriceItems.map((item)=> (
        <Item item={item} key={`${item.name}-${item.id}`} />
      ))}
      {value === "recentlyAdded" && price === "midPrice" && recentlyAddedMidPriceItems.map((item)=> (
        <Item item={item} key={`${item.name}-${item.id}`} />
      ))}
      {value === "recentlyAdded" && price === "higherPrice" && recentlyAddedHighPriceItems.map((item)=> (
        <Item item={item} key={`${item.name}-${item.id}`} />
      ))}
      {value === "mostPopular" && price === "lowerPrice" && mostPopularLowPriceItems.map((item)=> (
        <Item item={item} key={`${item.name}-${item.id}`} />
      ))}
      {value === "mostPopular" && price === "midPrice" && mostPopularMidPriceItems.map((item)=> (
        <Item item={item} key={`${item.name}-${item.id}`} />
      ))}
      {value === "mostPopular" && price === "higherPrice" && mostPopularHighPriceItems.map((item)=> (
        <Item item={item} key={`${item.name}-${item.id}`} />
      ))} */}
      
    </Box>
    </Box>
};

export default ShoppingList