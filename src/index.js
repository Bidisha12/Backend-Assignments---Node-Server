var http = require("http");

const httpServer = http.createServer(handleServer);

let obj = {
    phone: '18602100000',
    email: 'guestcaredominos@jublfood.com'
    }

function handleServer(req, res) {
   if(req.url === '/welcome'){
       res.write('Welcome to Dominos!');
       res.statusCode=200;
       res.end();

   }else if(req.url === '/contact'){
       res.write(JSON.stringify(obj));
       res.statusCode=200;
       res.end();

   }else{
    res.statusCode=404;
    res.end();

   }
  
}

const port = 8081
httpServer.listen(port, () =>
  console.log(`listening on port: ${port}`)
)

module.exports = httpServer;

