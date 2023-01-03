import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { IoFastFoodSharp,IoHomeOutline,IoPeopleOutline } from "react-icons/io5";
import { useTheme } from "styled-components";
export const BottomNavigationCustomized = () => {

    // [value, setValue] = useState();
    const theme = useTheme();

    return (
        <BottomNavigation
        sx={{
            backgroundColor:theme.primary,
            bottom: "0",
            position: "fixed",
            width: "100%"
        }}
        showLabels
        // value={value}
        // onChange={(event, newValue) => {
        //     setValue(newValue);
        // }}
        >
        <BottomNavigationAction label="Home" icon={<IoHomeOutline />} sx={{color:'white'}} />
        <BottomNavigationAction label="Dishes list" icon={<IoFastFoodSharp />} sx={{color:'white'}} />
        <BottomNavigationAction label="Diet list" icon={<IoPeopleOutline />} sx={{color:'white'}} />
        </BottomNavigation>
    )
}