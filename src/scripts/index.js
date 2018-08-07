kontra.init();

kontra.assets.imagePath = '/assets/images';
kontra.assets.audioPath = '/assets/audio';
kontra.assets.dataPath = '/assets/data';

kontra.assets.load('data.json', ['charge.ogg', 'charge.mp3'], 'mango.gif')
  .then(function() {
    console.log('Assets loaded');
    // console.log(kontra.assets);

    const audio = kontra.assets.audio;
    const images = kontra.assets.images;
    const data = kontra.assets.data

    // audio.charge.play();
    // console.log(data.data);
  }); 


// let sprite = kontra.sprite({
//     x: 100,        // starting x,y position of the sprite
//     y: 80,
//     color: 'red',  // fill color of the sprite rectangle
//     width: 20,     // width and height of the sprite rectangle
//     height: 40,
//     dx: 2          // move the sprite 2px to the right every frame
//   });
  
//   var loop = kontra.gameLoop({  // create the main game loop
//     update: function() {        // update the game state
//       sprite.update();
  
//       // wrap the sprites position when it reaches
//       // the edge of the screen
//       if (sprite.x > kontra.canvas.width) {
//         sprite.x = -sprite.width;
//       }
//     },
//     render: function() {        // render the game state
//       sprite.render();
//     }
//   });
  
//   loop.start();    // start the game
