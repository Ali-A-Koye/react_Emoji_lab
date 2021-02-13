import React, { useState } from "react";
import axios from "axios";
import _ from "lodash"
function Dashboard(props) {
    
  return (
<div>
{   props.data.map(el => <button onClick={el => document.execCommand("copy")}>{el.character}</button>)}
</div>

  );
}

export default Dashboard;
