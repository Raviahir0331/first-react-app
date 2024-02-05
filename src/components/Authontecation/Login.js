import { GoogleLogin } from "@react-oauth/google";

const clientId = "291873637093-c7m10nmk9d1ij8d22p7o67cve2e34c9s.apps.googleusercontent.com";
export  const Login = () =>{
    const onSuccess = (result) =>{
        console.log("Login Success",result.profileobj)
    }
    const  onfailure = (result) =>{
        console.log("Login Failed",result)
    }
    return (
    <div id="signinbutton">
        <GoogleLogin 
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onfailure={onfailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
        />
            
       
    </div>
    );
}