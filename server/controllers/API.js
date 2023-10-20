const { spawn } = require("child_process");




exports.getGainerapi = async (req, res) => {
    try {
        
        
    
        const childpython = await spawn('python', ['Gainer_loser_api.py']);
    
        var jsonobject = [];
        
        await childpython.stdout.on('data', async (data) => {
            let fetchedData = await JSON.parse(data.toString());
            jsonobject = fetchedData;
        }); 
    
        childpython.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`);
        });
    
        childpython.on('close', (code) => {
            res.status(200).json({
                success: true,
                data: jsonobject,
                message: "Data fetched successfully"
            });
        })
       
    } catch (error) {
        console.log(error);

        res.status(400).json({
            success: false,
            message: "Data failed to fetch"
        });
    }
}

exports.api = async (req, res) => {
    const {stockName,year} = req.body;
    try {
        
        const obj = {
            StockName: stockName,
            Year: year,
        }
    
        const childpython = await spawn('python', ['api.py', JSON.stringify(obj)]);
    
        var jsonobject = [];
        
        await childpython.stdout.on('data', async (data) => {
            let fetchedData = await JSON.parse(data.toString());
            jsonobject = fetchedData;
        }); 
    
        childpython.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`);
        });
    
        childpython.on('close', (code) => {
            res.status(200).json({
                success: true,
                data: jsonobject,
                message: "Data fetched successfully"
            });
        })
       
    } catch (error) {
        console.log(error);

        res.status(400).json({
            success: false,
            message: "Data failed to fetch"
        });
    }
}