// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router";

// export const SignIn = ({ showsignin, setshowsignin }) => {
//   const {token} = useParams()
//   const [name, setname] = useState("");
//   const [email, setemail] = useState("");
//   const [password, setpassword] = useState("");
//   const [showPopup, setshowPopup] = useState(showsignin);
//   const [confirmpassword, setconfirmpassword] = useState("")
//   const [message, setmessage] = useState("")

//   const result = async () => {
//     console.log("====>>");
//     const saveData = {
//       firstname: name,
//       email,
//       password,
//     };

//     let data = saveData;
//     let config = {
//       method: "post",
//       maxBodyLength: Infinity,
//       url: "http://localhost:5001/api/v1/router/register",
//       headers: {},
//       data: data,
//     };

//     try {
//       const { data } = await axios.request(config);
//       console.log(data.message, "response====>>");
//       alert(data.message);
//       setshowsignin(false);
//     } catch (error) {
//       alert(error.response.data.message);
//       console.log(error.response.data.message);
//       setname("")
//       setemail("")
//       setpassword("")
//       setshowsignin(false);
      
//     }
//   };

//   const signinresult = async()=>{
//     const output = {
//       email,password
//     }
//     let config={
//       method:"post",
//       maxBodyLength: Infinity,
//       url: "http://localhost:5001/api/v1/router/login",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       data:output

//     }
//     try{
//       const response = await axios.request(config)
//       console.log(">>>>response",response)
//       console.log(">>>>response.data",response.data)
//       alert(response.data.message)
//       setshowsignin(true)
      
//     }
//     catch(error){
//       alert(error.response?.data?.message || "Login Failed")
//       setshowsignin(true)
//       setemail("")
//       setpassword("")
//     }
//   }

//   const forgot = async()=>{
//     try{
//       const config={
//         method:"post",
//         url:"http://localhost:5001/api/v1/router/forgot",
//         headers:{
//           'Content-Type':'application/json'
//         },
//         data:{
//           email:email
//         }
//       }
//       const response = await axios(config)
//       console.log("...>>>forgot",response.data)
//       alert(response.data.message)
//       setshowsignin(true)
//     }
//     catch(error){
//       alert(error.response?.data?.message||"Something Went Wrong")
//       setshowsignin(true)
//     }
//   }

//   const handleSubmit = async()=>{
//     if(password!==confirmpassword){
//       return setmessage("Password do not match")
//     }
//     try{
//       const response = await axios.post("http://localhost:5001/api/v1/router/reset",{token,password})
//       setmessage(response.data.message)      
//     } 
//     catch (error) {
//       setmessage(error.response?.data?.message)
//     }
//   }

//   const togglesignin = () => {
//     setshowsignin(!showsignin);
//   };
//   return (
//     <>
//     <div>
//       {showPopup?(
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 flex items-center
//             justify-center z-50">
//           <div className="relative">
//             <button
//               className="absolute top-2 right-2 text-red-500 font-bold text-xl"
//               onClick={() => setshowsignin(false)}>X</button>

//             <div className="bg-white p-6 rounded-lg shadow-lg w-80">
//               <h1 className="text-center text-xl font-bold">{setshowsignin?"SignIn":"SignUp"}</h1>

//               <input
//                 className="w-full mb-2 p-2 border rounded mt-2"
//                 type="email"
//                 placeholder="Email"
//                 onChange={(e) => setemail(e.target.value)}
//                 value={email}
//               />

//               <input
//                 className="w-full mb-2 p-2 border rounded"
//                 type="password"
//                 placeholder="Password"
//                 onChange={(e) => setpassword(e.target.value)}
//                 value={password}
//               />

//               <button
//                 className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded w-full mb-2"onClick={signinresult}>
//                   {(showsignin)?"SignIn":"SignUp"}
//               </button>
//               <p className="absolute right-2 underline hover:text-red-700" onClick={forgot}>Forgot Password</p>
//               <p className="py-4 cursor-pointer text-lg underline hover:text-blue-700" onClick={()=>setshowPopup(false)}>
//                 {showsignin ? "New User? SignUp" : "Already registered? SignIn Now"}
//               </p>
//             </div>
//           </div>
//         </div>
//       ):(
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 flex items-center
//             justify-center z-50">
//           <div className="relative">
//             <button
//               className="absolute top-2 right-2 text-red-500 font-bold text-xl"
//               onClick={() => setshowsignin(false)}>X</button>

//             <div className="bg-white p-6 rounded-lg shadow-lg w-80">
//               <h1 className="text-center text-xl font-bold">{setshowsignin?"SignUp":"SignIn"}</h1>

//               {showsignin && <input
//                 className="w-full mb-2 p-2 border rounded mt-2"
//                 type="text"
//                 placeholder="Name"
//                 onChange={(e) => setname(e.target.value)}
//                 value={name}
//               />}

//               <input
//                 className="w-full mb-2 p-2 border rounded"
//                 type="email"
//                 placeholder="Email"
//                 onChange={(e) => setemail(e.target.value)}
//                 value={email}
//               />

//               <input
//                 className="w-full mb-2 p-2 border rounded"
//                 type="password"
//                 placeholder="Password"
//                 onChange={(e) => setpassword(e.target.value)}
//                 value={password}
//               />  

//               <button
//                 className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded w-full mb-2"onClick={result}>
//                   {(!showsignin)?"SignUp":"SignIn"}
//               </button>
//               <p className="py-4 cursor-pointer text-lg underline hover:text-blue-700" onClick={togglesignin}>
//                 {showsignin ? "Already registered? SignIn Now" : "New User? SignUp"}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>

//     <form onSubmit={(e) => { e.preventDefault(); handleSubmit()}}>
//       <input type="password" placeholder="New Password" onChange={e=>setpassword(e.target.value)} required/>
//       <input type="password" placeholder="Confirm Password" onChange={e=>setconfirmpassword(e.target.value)} required/>
//       <button type="submit">Submit</button>
//     </form>
//     </>
    
    
//   );
// };
