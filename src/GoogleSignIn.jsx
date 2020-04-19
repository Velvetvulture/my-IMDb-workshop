import React from "react";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { GoogleLogout } from "react-google-login";

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 20% 1fr 20%;
`;
const SideBar = styled.div`
  background: #b3b3b0;
  /* background: -webkit-linear-gradient(top, #b3b3b0 0%, #e3e2dd 500px); */
  background: linear-gradient(top, #b3b3b0 0%, #e3e2dd 500px);
  background-color: #e3e2dd;
  background-repeat: no-repeat;
  margin: 0;
`;
const Main = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  font-family: Verdana, Arial, sans-serif;
`;
const GoogleButton = styled.button`
  font-size: 16px;
  color: #555555;
  border-radius: 20px;
  border: 1px solid #dddddd;
  font-weight: bold;
  background-color: white;
  height: 38px;
  width: 252px;
  outline: none;
  text-decoration: none;
  padding: 4px 8px;
`;
const GoogleLogo = styled.span`
  background: url("/logos.png");
  background-position: 0 -83px;
  background-size: 34px, 100px;
  display: inline-block;
  height: 24px;
  vertical-align: middle;
  width: 32px;
  margin-left: -10px;
  margin-right: 35px;
`;
const SignInh1 = styled.h1`
  display: flex;
  justify-content: center;
`;
export default function GoogleSignIn() {
  const dispatch = useDispatch();
  const history = useHistory();

  const responseGoogleOk = (response) => {
    console.log(response.Pt.pW);
    dispatch({ type: "login" });
    history.push("/");
  };
  const responseGoogle = (response) => {
    console.log(response);
  };
  return (
    <Wrapper>
      <SideBar />
      <Main>
        <div>
          <SignInh1>Sign in</SignInh1>
          <GoogleLogin
            clientId="669951768244-65rl7af968rsae2bfmm1ctk1n0li4g05.apps.googleusercontent.com"
            render={(renderProps) => (
              <GoogleButton
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <GoogleLogo></GoogleLogo>
                {"  "}
                Sign in with Google
              </GoogleButton>
            )}
            buttonText="Sign in with Google"
            onSuccess={responseGoogleOk}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </Main>
      <SideBar />
    </Wrapper>
  );
}

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       userDetails: {},
//       isUserLoggedIn: false
//     };
//   }

//   responseGoogle = response => {
//     this.setState({ userDetails: response.profileObj, isUserLoggedIn: true });
//   };

//   logout = () => {
//     this.setState({ isUserLoggedIn: false });
//   };

//   render() {
//     return (
//       <div className="App">
//         {!this.state.isUserLoggedIn && (
//           <GoogleLogin
//             clientId="669951768244-65rl7af968rsae2bfmm1ctk1n0li4g05.apps.googleusercontent.com"
//             render={renderProps => (
//               <button
//                 className="button"
//                 onClick={renderProps.onClick}
//                 disabled={renderProps.disabled}
//               >
//                 Log in with Google
//               </button>
//             )}
//             onSuccess={this.responseGoogle}
//             onFailure={this.responseGoogle}
//           />
//         )}
//         {this.state.isUserLoggedIn && (
//           <div className="userDetails-wrapper">
//             <div className="details-wrapper">
//               <GoogleLogout
//                 render={renderProps => (
//                   <button
//                     className="logout-button"
//                     onClick={renderProps.onClick}
//                   >
//                     Log Out
//                   </button>
//                 )}
//                 onLogoutSuccess={this.logout}
//               />

//               <div className="image">
//                 <img src={this.state.userDetails.imageUrl} />
//               </div>
//               <div className="name">
//                 Welcome Mr. {this.state.userDetails.givenName}{" "}
//                 {this.state.userDetails.familyName}
//               </div>
//               <div className="email">
//                 <i>{this.state.userDetails.email}</i>
//               </div>
//             </div>
//             <div className="bar" />
//             <div className="stand" />
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default App;
