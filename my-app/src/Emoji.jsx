import React, { useState } from "react";
import axios from "axios";
import _ from "lodash"
import {CopyToClipboard} from 'react-copy-to-clipboard';

function Dashboard(props) {
    
  return (
<div>
{   props.data.map(el => 
<CopyToClipboard text={el.character}>
<button>{el.character}</button>
</CopyToClipboard>
)}
</div>

  );
}

export default Dashboard;
