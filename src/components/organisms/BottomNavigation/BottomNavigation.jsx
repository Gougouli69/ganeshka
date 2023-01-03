import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { IoFastFoodSharp,IoHomeOutline,IoPeopleOutline } from "react-icons/io5";
import { useTheme } from "styled-components";
export const BottomNavigationCustomized = () => {

    // [value, setValue] = useState();
    const theme = useTheme();

    return (
        <BottomNavigation
        sx={{
            backgroundColor:theme.primary
        }}
        showLabels
        // value={value}
        // onChange={(event, newValue) => {
        //     setValue(newValue);
        // }}
        >
        <BottomNavigationAction label="Home" icon={<IoHomeOutline />} />
        <BottomNavigationAction label="Dishes list" icon={<IoFastFoodSharp />} />
        <BottomNavigationAction label="Diet list" icon={<IoPeopleOutline />} />
        </BottomNavigation>
    )
}