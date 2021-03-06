var http = require("http");

const httpServer = http.createServer(handleServer);

const object = {
    phone: "18602100000",
    email: "guestcaredominos@jublfood.com"
    }

function handleServer(req, res) {
    if(req.url.startsWith("/welcome") && req.method=="GET"){        
       res.writeHead(200, {"Content-Type" : "text/plain"});
       res.write("Welcome to Dominos!");
       res.end();

   }
   else if(req.url.startsWith("/contact") && req.method=="GET"){
       res.writeHead(200, {"Content-Type" : "application/json"});
       res.write(JSON.stringify(object));
       res.end();

   }
   else{   
        //res.statusCode = 404;
        res.writeHead(404, {});
        res.end('404');
   }
}

httpServer.listen(8081);

module.exports = httpServer;