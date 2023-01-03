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
                color: '#FFF'
                
            }}
            showLabels
            value={value}
            // onChange={changeRoute}
        >
        <BottomNavigationAction onClick={() => changeRoute('/') } label="Home" icon={<IoHomeOutline />} />
        <BottomNavigationAction onClick={() => changeRoute('/dishes') } label="Dishes list" icon={<IoFastFoodSharp />} />
        <BottomNavigationAction onClick={() => changeRoute('/diet') } label="Diet list" icon={<IoPeopleOutline />} />
    </BottomNavigation>
    )
}