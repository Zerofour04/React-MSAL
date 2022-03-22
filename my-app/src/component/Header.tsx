import React from "react";
import { useSelector } from "react-redux";
import { useMsal } from "@azure/msal-react";
import { selectLoggedInUser } from "../store/employee/employeeSelectors";
import { msalConfiguration } from "../config/msalConfig";

const Header = () => {

    const msal = useMsal()
    //Log Out
    const employee = useSelector(selectLoggedInUser)
    const {instance, accounts} = useMsal();

    const logOutHandler = () => {
        const logOutRequest = {
            account: accounts[0],
            posttLogoutRedirectUri: "/"
        }
        instance.logoutRedirect(logOutRequest)
        
    };

    return (
        <div>
            <header>
            <button onClick={logOutHandler}>LogOut</button>
            </header>
        </div>
        

    )
}

export default Header;