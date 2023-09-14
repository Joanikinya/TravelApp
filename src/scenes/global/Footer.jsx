import { useTheme } from "@mui/material";
import {Box, Typography} from "@mui/material";
import { shades } from "../../theme";
import { Link } from "react-router-dom";

const Footer = () => {
    const { palette: {neutral}} = useTheme();

  return (
    <Box mt="70px" p="40px 0" backgroundColor={neutral.light} >
        <Box
            width="80%"
            margin="auto"
            display="flex"
            justifyContent="space-between"
            flexWrap="wrap"
            rowGap="30px"
            columnGap="clamp(20px, 30px, 40px)"
        >
            <Box width="clamp(20%, 30%, 40%)">
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    mb="30px"
                    color="#EB5E28"
                    // color={shades.secondary[500]}
                >
                    VOYAGEROW
                </Typography>
                <div>
                Spend less time planning your next getaway!
                </div>
            </Box>
            <Box>
                <Typography variant="h4" fontWeight="bold" mb="30px">
                    About Us
                </Typography>
                {/* <Typography mb="30px">Careers</Typography> */}
                {/* <Typography mb="30px">Our Stores</Typography> */}
                <Link to="/termsandconditions">
                    <Typography mb="30px">Terms & Conditions</Typography>
                </Link>
                <Link to="/privacypolicy">
                    <Typography mb="30px">Privacy Policy</Typography>
                </Link>
            </Box>

            <Box>
                <Typography variant="h4" fontWeight="bold" mb="30px">
                    Customer Care
                </Typography>
                {/* <Typography mb="30px">Help Center</Typography> */}
                <Link to="/Faq">
                    <Typography mb="30px">FAQs</Typography>
                </Link>
                {/* <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
                <Typography mb="30px">Returns & Refunds</Typography> */}
            </Box>

            <Box width="clamp(20%, 25%, 30%)">
            <Typography variant="h4" fontWeight="bold" mb="30px">
                    Contact Us
                </Typography>
                <Typography mb="30px">Email: hi@voyagerow.com</Typography>
                {/* <Typography mb="30px">(222)333-4444</Typography> */}
            </Box>
        </Box>
    </Box>
  )
}

export default Footer