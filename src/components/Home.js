import React from "react";
import { name, city } from "../data/data.js";

function Home() {
// update the JSX being returned!
return <div>Home
    <h1>{name} is a a Web Developer from {city}</h1>
</div>;
}

export default Home;

// import React from "react";
// import { name, city } from "../data/data.js";

// function Home() {
//   return (
//     <div>
//       <h1>Home</h1>
//       <h2>{name} is a Web Developer from {city}</h2>
//     </div>
//   );
// }

// export default Home;
