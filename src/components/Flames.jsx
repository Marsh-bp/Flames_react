// import React from 'react';
// import bg from './fire_bg.jpg'; // Ensure the image is inside 'src/'
// import { useEffect, useState } from "react";

// // function CalcFlames()
// // {
// //   const [name1,setName1]= useState("");
// //   const [name2,setName2]= useState("");
// //   // const [common,setCommon]= useState([]);
// //   // const concat= name1+name2
// //   const[dict1,setDict1]=useState({})
// //   const[dict2,setDict2]=useState({})
// //   const dict={}

// //   function createDict(str)
// //   {
// //     for(let i of str)
// //     {
// //       if(dict.hasOwnProperty(i))
// //       {
// //         dict[i]=dict[i]+1
// //       }
// //       else{
// //         dict[i]=1
// //       }
// //       return dict
// //     }
// //   }

// //   function handleSubmit()
// //   {
// //     const dict1 = createDict(name1)
// //     const dict2 = createDict(name2)
// //     console.log(dict1)
// //     console.log(dict2)
// //   }

// //   const fn1 =(e) =>
// //   {
// //     const var1= e.target.value;
// //     setName1(var1);
// //     // setDict1(findCommon(var1,name2))
// //   }

// //   const fn2 =(e)=>
// //   {
// //     const var2= e.target.value;
// //     setName2(var2)
// //     // setDict2(findCommon(name1,var2))
// //   }

// //   // const findCommon = (str1, str2) => {
// //   //   return [...new Set(str1)].filter(char => str2.includes(char));
// //   // }
// //   // for()

// // }





// const Flames = () => {

//   // const [name1,setName1]= useState("");
//   // const [name2,setName2]= useState("");
//   const [formdata,setFormData]=useState({
//     firstname:"",
//     secondname:""
//   })

//   const flamesMeanings = {
//     f: "Friendship",
//     l: "Love",
//     a: "Affection",
//     m: "Marriage",
//     e: "Enemies",
//     s: "Sibling",
//   };

//   // // const [common,setCommon]= useState([]);
//   // // const concat= name1+name2
//   // const dict={}

//   function createDict(str)
//   {
//     console.log(str)
//     let dict={}
//     let i=0
//     while(i < str.length)
//     {
//       // console.log(1)
//       if(dict.hasOwnProperty(str[i]))
//       {
//         dict[str[i]]+=1
//       }
//       else{
//         dict[str[i]]=1
//       }
//       i++
//     }
//     return dict
//   }

//   function handleSubmit()
//   {
//     let dict1={}
//     let dict2={}
//     let key=0
//     dict1 = createDict(formdata.firstname)
//     dict2 = createDict(formdata.secondname)
//     // console.log(dict1)
//     // console.log(dict2)
//     for (let key in dict1) {
//       if (dict2.hasOwnProperty(key)) { 
//         while (dict1[key] > 0 && dict2[key] > 0) {  
//           dict1[key] -= 1;
//           dict2[key] -= 1;
//         }
//       }
//     }
//     let count=0
//     //calculate sum of dict vals:
//     let sum1 = 0;
//     let sum2 = 0;
    
//     // Sum values in dict1
//     for (let key in dict1) {
//       sum1 += dict1[key];
//     }
    
//     // Sum values in dict2
//     for (let key in dict2) {
//       sum2 += dict2[key];
//     }
//     // console.log(dict1)
//     // console.log(dict2)
//     count=sum1+sum2
//     console.log(count)
//     // const flames="flames"
//     let flames = "flames".split(""); // Convert string to array for easy modification
//     let index = 0; // Start index
  
//     // Continue removing characters until only one remains
//     while (flames.length > 1) {
//       index = (index + count - 1) % flames.length; // Find index of character to remove
//       flames.splice(index, 1); // Remove character at calculated index
//     }
//     console.log(flames[0])
//     return flames[0];

//     let finalLetter = flames[0];
//     let finalResult = flamesMeanings[finalLetter]; // Fetch meaning from JSON object
//     setResult(finalResult);
    
//   }



//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     // console.log(name,value)
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // const findCommon = (str1, str2) => {
//   //   return [...new Set(str1)].filter(char => str2.includes(char));
//   // }

//   return (
//     <div 
//       className="min-h-screen flex flex-col items-center justify-start bg-red-300 w-full"
//       style={{
//         backgroundImage: `url(${bg})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//       }}
//     >
//       {/* Title */}
//       <h1 className="text-white text-4xl font-bold mt-10">🔥 Welcome to Flames 🔥</h1>

//       {/* Input Box Container */}
//       <div className="rounded-lg shadow-lg w-250 p-30 bg-red-200 mt-10 flex items-center space-x-4">
//         <div className="text-xl text-red-500 font-bold">Enter your name:</div>
//             <input 
//             type="text" 
//             name="firstname"
//             value={formdata.firstname}
//             onChange={handleChange}
//             className="border bg-white text-black border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
//             />
        
    
//         <div className="text-xl text-red-500 font-bold">Enter your name:</div>
//         <input 
//           type="text" 
//           name="secondname"
//           value={formdata.secondname}
//           onChange={handleChange}
//           className="border bg-white text-black border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
//         />
//       </div>
//       <button className="bg-red-200 flex items-center justify-center bg-white rounded-lg p-10 text-3xl h-15 w-50 font-bold" onClick={handleSubmit}>
//           Submit
//       </button>
      
//     </div>
    
//   );
// };

// export default Flames;


import React, { useState } from "react";
import bg from "./fire_bg.jpg"; // Ensure the image is inside 'src/'

const Flames = () => {
  const [formdata, setFormData] = useState({
    firstname: "",
    secondname: "",
  });

  const [result, setResult] = useState(""); // State to store the final result

  // FLAMES Mappings
  const flamesMeanings = {
    f: "Friendship",
    l: "Love",
    a: "Affection",
    m: "Marriage",
    e: "Enemies",
    s: "Sibling",
  };

  function createDict(str) {
    let dict = {};
    let i = 0;
    while (i < str.length) {
      if (dict.hasOwnProperty(str[i])) {
        dict[str[i]] += 1;
      } else {
        dict[str[i]] = 1;
      }
      i++;
    }
    return dict;
  }

  function handleSubmit() {
    let dict1 = createDict(formdata.firstname);
    let dict2 = createDict(formdata.secondname);

    // Remove common letters
    for (let key in dict1) {
      if (dict2.hasOwnProperty(key)) {
        while (dict1[key] > 0 && dict2[key] > 0) {
          dict1[key] -= 1;
          dict2[key] -= 1;
        }
      }
    }

    // Calculate remaining letter count
    let count = Object.values(dict1).reduce((a, b) => a + b, 0) +
                Object.values(dict2).reduce((a, b) => a + b, 0);
    
    // Perform FLAMES elimination
    let flames = "flames".split("");
    let index = 0;

    while (flames.length > 1) {
      index = (index + count - 1) % flames.length;
      flames.splice(index, 1);
    }

    // Get final result and store in state
    let finalLetter = flames[0];
    let finalResult = flamesMeanings[finalLetter]; // Fetch meaning from JSON object
    setResult(finalResult);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-start bg-red-300 w-full"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-white text-4xl font-bold mt-10">🔥 Welcome to Flames 🔥</h1>

      <div className="rounded-lg shadow-lg w-250 p-6 bg-red-200 mt-10 flex flex-col items-center space-y-4">
        <div className="text-xl text-red-500 font-bold">Enter First Name:</div>
        <input 
          type="text" 
          name="firstname"
          value={formdata.firstname}
          onChange={handleChange}
          className="border bg-white text-black border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        
        <div className="text-xl text-red-500 font-bold">Enter Second Name:</div>
        <input 
          type="text" 
          name="secondname"
          value={formdata.secondname}
          onChange={handleChange}
          className="border bg-white text-black border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      <button 
        className="mt-6 bg-white text-red-500 px-6 py-3 rounded-lg text-2xl font-bold hover:bg-gray-100 transition"
        onClick={handleSubmit}
      >
        Submit
      </button>

      {result && (
        <div className="mt-6 text-3xl font-bold text-white bg-black p-4 rounded-lg shadow-lg">
          🔥 Your FLAMES result: <span className="text-red-400">{result}</span> 🔥
        </div>
      )}
    </div>
  );
};

export default Flames;
