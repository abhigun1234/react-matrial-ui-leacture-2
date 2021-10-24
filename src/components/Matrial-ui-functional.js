import React from 'react';
import { Button  } from '@material-ui/core';
function Matrialuifunctional(props) {
    
    return (
        <div>
          <Button variant="contained">Contained</Button>

            <Button variant="contained" disabled>
            Disabled
            </Button>
            <Button variant="contained" href="#contained-buttons">
            Link
            </Button> 
        </div>
    );
}

export default Matrialuifunctional;