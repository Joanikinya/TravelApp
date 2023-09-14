import { useState } from "react";
import {Box, useTheme, Typography, IconButton, Button, Tooltip} from '@mui/material';
import {RestaurantOutlined, FlightOutlined, MenuOutlined, HotelOutlined, CommuteOutlined, ForestOutlined, GroupAddOutlined, MonetizationOnOutlined, AccessibleOutlined, ChildCare} from '@mui/icons-material';
import {shades} from '../theme';
import { useNavigate, Link } from "react-router-dom";

const Item = ({item, width}) => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered]=useState(false);
    const {
        palette: {neutral},
    }=useTheme();


    const {category, price, name, image, shortDescription, priceExtension} = item.attributes;
    const {
        data: {
            attributes: {
                formats: {
                    medium: {url}
                    }
                },
            },
    } = image;


    return (
        <Box width={width}>
            <Box position="relative" onMouseOver={()=> setIsHovered(true)} onMouseOut={()=> setIsHovered(false)}>
                <img
                    alt={image.data.attributes.name}
                    width="300px"
                    height="225px"
                    // src={`http://localhost:1337${image.data.attributes.url}`}
                    src={`http://localhost:1337${url}`}
                    // src={`http://localhost:1337${image.data.attributes.formats.medium.url}`}
                    style={{cursor: 'pointer'}}
                />
                <Box
                
                display={isHovered? "block": 'none'}
                position="absolute"
                bottom="10%"
                left="0"
                width="100%"
                padding="0 5%"
                >
                    <Box
                    // display="flex"
                    // justifyContent="space-between"
                    >
                        {/* <Box display="flex" alignItems="center" backgroundColor={shades.neutral[100]} borderRadius="3px">
                            No + or - button here
                        </Box> */}
                        <Link to={shortDescription} target="_blank" rel="noopener">
                            <Button
                                sx={{backgroundColor: shades.primary[300], color:"white"}}
                            >
                                CLICK TO BOOK
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Box>

            <Box mt="3px">
                <Box
                // display="flex"
                // justifyContent="space-between"
                // columnGap="5px"
                // zIndex="2"
                > 
                    {
                    item.attributes.includeFlight?
                    <Tooltip title="Round-trip Flight to Destination Included">
                        <IconButton size="small" sx={{ color: "black"}}>
                            <FlightOutlined/>
                        </IconButton>
                    </Tooltip> : 
                    <Tooltip title="Round-trip Flight to Destination Not Included">
                    <IconButton size="small" sx={{ color: "silver"}}>
                        <FlightOutlined/>
                    </IconButton>
                </Tooltip>
                    }
                        {
                        item.attributes.includeLodging?
                        <Tooltip title="Lodging Included">
                            <IconButton size="small" sx={{ color: "black"}}>
                                <HotelOutlined/>
                            </IconButton>
                        </Tooltip> : 
                        <Tooltip title="Lodging Not Included">
                        <IconButton size="small" sx={{ color: "silver"}}>
                            <HotelOutlined/>
                        </IconButton>
                    </Tooltip>
                        }
                    {
                    item.attributes.includeMeals?
                    <Tooltip title="Some Meals Included">
                        <IconButton size="small" sx={{ color: "black"}}>
                            <RestaurantOutlined/>
                        </IconButton>
                    </Tooltip> : 
                    <Tooltip title="Meals Not Included">
                    <IconButton size="small" sx={{ color: "silver"}}>
                        <RestaurantOutlined/>
                    </IconButton>
                </Tooltip>
                    }
                    {
                    item.attributes.includeTransfers?
                    <Tooltip title="Transfers Included">
                        <IconButton size="small" sx={{ color: "black"}}>
                            <CommuteOutlined/>
                        </IconButton>
                    </Tooltip> : 
                    <Tooltip title="Transfers Not Included">
                    <IconButton size="small" sx={{ color: "silver"}}>
                        <CommuteOutlined/>
                    </IconButton>
                </Tooltip>
                    }
                    {
                    item.attributes.includeActivities?
                    <Tooltip title="Activities Included">
                        <IconButton size="small" sx={{ color: "black"}}>
                            <ForestOutlined/>
                        </IconButton>
                    </Tooltip> : 
                    <Tooltip title="Activities Not Included">
                    <IconButton size="small" sx={{ color: "silver"}}>
                        <ForestOutlined/>
                    </IconButton>
                </Tooltip>
                    }
                    {
                    item.attributes.includeGroupTours?
                    <Tooltip title="Group Tours">
                        <IconButton size="small" sx={{ color: "black"}}>
                            <GroupAddOutlined/>
                        </IconButton>
                    </Tooltip> : 
                    <Tooltip title="Private Tours">
                    <IconButton size="small" sx={{ color: "silver"}}>
                        <GroupAddOutlined/>
                    </IconButton>
                </Tooltip>
                    }
                    {
                    item.attributes.includeAccessibility?
                    <Tooltip title="Accessible upon request">
                        <IconButton size="small" sx={{ color: "black"}}>
                            <AccessibleOutlined/>
                        </IconButton>
                    </Tooltip> : 
                    <Tooltip title="Non-Accessible">
                    <IconButton size="small" sx={{ color: "silver"}}>
                        <AccessibleOutlined/>
                    </IconButton>
                </Tooltip>
                    }
                    {
                    item.attributes.includeAccessibility?
                    <Tooltip title="Age Restriction">
                        <IconButton size="small" sx={{ color: "black"}}>
                            <ChildCare/>
                        </IconButton>
                    </Tooltip> : 
                    <Tooltip title="No Age Restriction">
                    <IconButton size="small" sx={{ color: "silver"}}>
                        <ChildCare/>
                    </IconButton>
                </Tooltip>
                    }
                    {
                    item.attributes.includeAdditionalFees?
                    <Tooltip title="Additional Expenses e.g. Tipping, Some meals, Travel insurance, Booking Fees, Private Tour Fees as applicable">
                        <IconButton size="small" sx={{ color: "pink"}}>
                            <MonetizationOnOutlined/>
                        </IconButton>
                    </Tooltip> : 
                    <Tooltip title="No Additional Expenses">
                    <IconButton size="small" sx={{ color: "silver"}}>
                        <MonetizationOnOutlined/>
                    </IconButton>
                </Tooltip>
                    }
                </Box>
                {/* <Typography variant="subtitle2" color={neutral.dark}>
                    {category
                    .replace(/(A-Z)/g, "$1") 
                    .replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, "$1 $2") //add space between camelCase text
                    .replace(/^./, (str) => str.toUpperCase())}
                </Typography> */}
                <Typography>{name}</Typography>
                <Box
                display="flex"
                // justifyContent="space-between"
                >
                    <Typography fontWeight="bold">${price}</Typography>
                    <Typography variant="subtitle2">{priceExtension}</Typography>
                </Box>
                {/* <Typography variant="subtitle2">{shortDescription}</Typography> */}
            </Box>
        </Box>
    )
}

export default Item
