import React from 'react'
import { Rings } from "react-loader-spinner";

const Spinner = () => {
    return (
        <div>
            <Rings
                // type="Circles"
                color="#000000"
                height={50}
                width={200}
                

            />
            <p>Analyzing your Web Page</p>
        </div>
    )
}

export default Spinner
