// Load the necessary servers.
var sys = require( "sys" );
var http = require( "http" );
 
// Create our HTTP server.
var server = http.createServer(
function( request, response ){
 
 
// Create a SUPER SIMPLE response.
response.writeHead( 200, {"content-type": "text/plain"} );
response.write( "<h>Hello, welcome to PROPO, your one-stop website for home remodeling</h>" );
response.write( "<p>Please tell us what you would like to do" );
response.write( "<form action=\"#\">" );
response.write( "" );
response.write( "" );
response.end();
 
 
}
);
 
// Point the HTTP server to port 8080.
server.listen( 8080 );
 
// For logging....
sys.puts( "Server is running on 8080" );
