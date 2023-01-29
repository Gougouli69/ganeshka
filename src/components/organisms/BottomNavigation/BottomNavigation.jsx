import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";
import { IoFastFoodSharp,IoHomeOutline,IoPeopleOutline } from "react-icons/io5";
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";

export const BottomNavigationCustomized = () => {

    const theme = useTheme();
    const [value, setValue] = useState(0);

    let navigate = useNavigate(); 
    const changeRoute = (param) =>{ 
        navigate(param);
        setValue(param);
    }

    return (
        <BottomNavigation
            sx={{
            backgroundColor:theme.primary,
            bottom: "0",
            position: "fixed",
            width: "100%"
            }}
            showLabels
            value={value}
            // onChange={changeRoute}
        >
        <BottomNavigationAction onClick={() => changeRoute('/') } label="Home" icon={<IoHomeOutline />} sx={{color:'white'}} />
        <BottomNavigationAction onClick={() => changeRoute('/dishes') } label="Dishes list" icon={<IoFastFoodSharp />} sx={{color:'white'}} />
        <BottomNavigationAction onClick={() => changeRoute('/diet') } label="Diet list" icon={<IoPeopleOutline />} sx={{color:'white'}} />
    </BottomNavigation>
    )
}