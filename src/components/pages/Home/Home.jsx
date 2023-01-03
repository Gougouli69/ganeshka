import { BottomNavigationCustomized } from "../../organisms/BottomNavigation/BottomNavigation"
import { DishesList } from "../../organisms/DishesList/DishesList"
import { Navbar } from "../../organisms/Navbar/Navbar"

export const Home = () => {

    return (
        <>
            <Navbar></Navbar>
            <DishesList></DishesList>
            <BottomNavigationCustomized></BottomNavigationCustomized>
        </>
    )

}