import { googleLogout } from "@react-oauth/google";

const clientId = "291873637093-c7m10nmk9d1ij8d22p7o67cve2e34c9s.apps.googleusercontent.com";
 
 export const Logout = () =>{
    const onSuccess = () =>{
        console.log("log out");
    }
    return(
        <div>
            <googleLogout 
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}/>
        </div>
    )
}