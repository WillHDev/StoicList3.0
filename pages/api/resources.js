
export default async function(req, res) {
    //console.log(data)
        //res.send("WORK IN PROGRESS");
        const dataRes = await fetch("http://localhost:3001/api/resources");
        const data = await dataRes.json();

        res.send(data);

    }
