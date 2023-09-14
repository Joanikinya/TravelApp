import {Box, Typography, ListItem} from '@mui/material';

const Questions = () => {
  return (
    <Box width="100%" margin="100px auto" textAlign="left" marginLeft="50px">
        <Typography variant="h3">
            FAQs
        </Typography>
        <br/>
        <Typography fontWeight="bold"> What is VoyageRow?</Typography>
        <br/>
        <Typography>
          Voyagerow offers a One-Stop-Shop for travel packages offered by travel agencies around the world. 
          The travel packages on VoyageRow include many of the <br/>aspects 
          of trip planning such as Flight, Meals, Transportation etc., to help you cut 
          back on the time it takes to plan your next getaway. <br/>On our site, you are also able to quikly 
          compare different packages to find the one that's best for you.
        </Typography>
        <br/>
        <Typography fontWeight="bold"> I'd like to give feedback!</Typography>
        <br/>
        <Typography>
          Please do! We would love to hear about your experience on VoyageRow. Please tell us what is/is not working <br/> 
          for you or any issues you may have encountered with VoyageRow.<br/>
          Feel free to email us here. 
        </Typography>
        <a class="mailtoui" href="mailto:hi@voyagerow.com">hi@voyagerow.com</a>
    </Box>
  )
}

export default Questions