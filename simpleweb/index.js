const express = require( "express" );

const app = express();

app.get( '/', ( req, res ) => 
{
  res.send( 'Hi, there !' );
} );

app.listen( 7070, () => 
{
  console.log( 'Listening on port 7070...');
} );