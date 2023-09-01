const fs = require("fs")
const server  = require("http").createServer();


server.on("request", (req,res)=>{
    //Solucion 1
    //fs.readFile("test-file.txt",(err, data)=>{
    // if(err) console.log(err);
    //res.end(data);
    //});

    // Solucion 2: Streams

    //const readable = fs.createReadStream("test-file.txt")
    //readable.on('data',chuck =>{
    //    res.write(chuck);
    //});
    //readable.on('end' , ()=>{
    //    res.end();
    //});
    //readable.on('error',err =>{
    // console.log(err);
    // res.statusCode = 500;
    // res.end("file not found!");
    //});

    //Solucion 3

    const readable = fs.createReadStream("test-file.txt")
    readable.pipe(res);
    //readeableSource.pipe(writeableDest) 


    
});

server.listen(8000 , "127.0.0.1", () =>{
    console.log("Listening...");
})
