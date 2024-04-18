import * as fs from 'node.fs';
import * as path from 'node.path';
import * as http from 'node.http';
import * as url from 'node:url';

const port= 1045;
const root= path.join(path.dirname(url.fileURLToPath(import.meta.url)),'Public');


let server = http.createServer((req,res) => {
    let req_path = req.url;
    if(req.url=="/"){
        req_path = '/index.html';
    }
     
    console.log(req.method,req.url);
    let filepath = path.join(root, req.url);
    fs.readfile(filepath,(err,data) =>{
        if(err){
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.write("File not found");
            res.end();
        }
        else{
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write(data);
            res.end();
            
        }

    });
    console.log(filepath);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Success');    
    res.end();
});
server.listen(port,()=>{
    console.log('Now listening on port ' + port);

}); 