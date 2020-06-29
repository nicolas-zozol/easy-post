/**
 * Simple file to post on the prod serve from localhost env
 */

const axios = require('axios')

async function work(){

    const json = await axios.post("http://localhost:8000/api", {hi:"world"})
    console.log(json.data)

}

work().then(()=>console.log(".... Finished")).catch(e => console.log(e.response.data))