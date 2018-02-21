import React from 'react';

export default function Auth(){
  return(
    <div className='Auth'>
      <a href={process.env.REACT_APP_LOGIN}><button>Login</button></a>
    </div>
  )
}




// class Auth extends Component {
//   render() {
//     return (
//       <div className="Auth">
//         <div>
//           <a href={process.env.REACT_APP_LOGIN}><button>Login</button></a>
//         </div>
//       </div>
//     );
//   }
// }

// export default Auth;
