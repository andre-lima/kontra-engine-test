kontra.init();

kontra.assets.imagePath = '/assets/images';
kontra.assets.audioPath = '/assets/audio';
kontra.assets.dataPath = '/assets/data';

kontra.assets.load('data.json', ['charge.ogg', 'charge.mp3'], 'mango.gif')
.then(function() {
console.log('Assets loaded');

// const audio = kontra.assets.audio;
// const images = kontra.assets.images;
// const data = kontra.assets.data

    const loop = kontra.gameLoop({  // create the main game loop
        update: function() {        // update the game state
            sprite1.update();
            sprite2.update();
        },
        render: function() {        // render the game state
            sprite1.render();
            sprite2.render();
        }
        });

    const [sprite1, sprite2] = createSprites(kontra.assets);
    console.log(sprite1.image)

    loop.start();    // start the game

    // audio.charge.play();
});


function createSprites(assets) {
    const sprite1 = kontra.sprite({
        x: 100,        // starting x,y position of the sprite
        y: 80,
        dx: 2,
        dy: 1,
        image: assets.images.mango,
        update: function() {
            this.y += this.dy;
            this.x += this.dx;
            // wrap the sprites position when it reaches
            // the edge of the 
            if (this.x > kontra.canvas.width) {
                this.x = -this.width;
            }
            if (this.y > kontra.canvas.height) {
                this.y = -this.height;
            }
        }   // move the sprite 2px to the right every frame
    });

    const sprite2 = kontra.sprite({
        x: 100,        // starting x,y position of the sprite
        y: 80,
        dx: 1,
        dy: .2,
        image: assets.images.mango,
        update: function() {
            this.y += this.dy;
            this.x += this.dx;
            // wrap the sprites position when it reaches
            // the edge of the 
            if (this.x > kontra.canvas.width) {
                this.x = -this.width;
            }
            if (this.y > kontra.canvas.height) {
                this.y = -this.height;
            }
        }   // move the sprite 2px to the right every frame
    });

    return [sprite1, sprite2];
}


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
