'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

kontra.init();

kontra.assets.imagePath = '/assets/images';
kontra.assets.audioPath = '/assets/audio';
kontra.assets.dataPath = '/assets/data';

kontra.assets.load('data.json', ['charge.ogg', 'charge.mp3'], 'mango.gif').then(function () {
    console.log('Assets loaded');
    var audio = kontra.assets.audio;
    var images = kontra.assets.images;
    var data = kontra.assets.data;

    var loop = kontra.gameLoop({ // create the main game loop
        update: function update() {
            // update the game state
            sprite1.update();
            sprite2.update();
        },
        render: function render() {
            // render the game state
            sprite1.render();
            sprite2.render();
        }
    });

    var _createSprites = createSprites(kontra.assets),
        _createSprites2 = _slicedToArray(_createSprites, 2),
        sprite1 = _createSprites2[0],
        sprite2 = _createSprites2[1];

    console.log(sprite1.image);

    loop.start(); // start the game
    // audio.charge.play();
    // console.log(data.data);
});

function createSprites(assets) {
    var sprite1 = kontra.sprite({
        x: 100, // starting x,y position of the sprite
        y: 80,
        dx: 2,
        dy: 1,
        image: assets.images.mango,
        update: function update() {
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
        } // move the sprite 2px to the right every frame
    });

    var sprite2 = kontra.sprite({
        x: 100, // starting x,y position of the sprite
        y: 80,
        dx: 1,
        dy: .2,
        image: assets.images.mango,
        update: function update() {
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
        } // move the sprite 2px to the right every frame
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