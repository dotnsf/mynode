module.exports = function( RED ){
  function ReverseNode( config ){
    RED.nodes.createNode( this, config );
    var node = this;
    node.on( 'input', function( msg ){
      var payload = msg.payload;
      var newpayload = '';
      for( i = 0; i < payload.length; i ++ ){
        var c = payload.charAt( i );
        newpayload = c + newpayload;
      }
      
      msg.payload = newpayload;
      node.send( msg );
    });
  }
  RED.nodes.registerType( "reverse", ReverseNode );
}

