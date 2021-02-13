import React, { useState } from "react";
import axios from "axios";
import Emoji from "./Emoji"
function Dashboard() {
  const [data, setData] = useState();
  const [input, setInput] = useState([]);
  const [render, setRender] = useState(false);

  async function fetchData() {
    const result = await axios.get(
        
        
        `https://cors-anywhere.herokuapp.com/https://emoji-api.com/emojis?search=${input}&access_key=ba15ae726d9e4861773262af4886828dc94ec95e`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    setData(result.data);
    setRender(true);
  }


  return (
    <div>
<input onChange={(e) => setInput(e.target.value)}></input>
<button onClick={fetchData} id="Search">
    Find Emoji
</button>

{render && <Emoji data={data}/>}
    </div>
  );
}

export default Dashboard;
