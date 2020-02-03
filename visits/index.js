const express = require( 'express' );
const redis = require( 'redis' );

const app = express();
const client = redis.createClient( 
{
  host: 'redis-server', 
  port: 6379
} );
client.set( 'visits', 0 );

app.get( '/', ( req, res ) => 
{
  client.get( 'visits', ( err, visits ) => 
  {    
    let newCommer = parseInt( visits ) + 1;
    res.send( 'Number of visits : ' + newCommer );
    client.set( 'visits', newCommer );
  });
});

app.listen( 7071, () => 
{ 
  console.log( 'Listening on port 7071 ...'); 
});
