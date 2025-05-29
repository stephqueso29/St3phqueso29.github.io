<!--========================= Sanrio Quiz=========================-->
    function checkAnswers() {
      let score = 0;
      const answers = {
        q1: "Badtz-maru",
        q2: "Chococat",
        q3: "Kuromi"
      };

      for (let q in answers) {
        let selected = document.querySelector(`input[name="${q}"]:checked`);
        if (selected && selected.value === answers[q]) {
          score++;
        }
      }

      const result = document.getElementById("result");
      result.innerText = `You got ${score} out of 3 correct!`;
    }
  </script>
</body>
</html>
<!--========================= Cat Meme Generator =========================-->

const happyCatMemes = [
    'https://media.tenor.com/Cse00b9Ls-4AAAAM/goobers.gif', 
    'https://images.chesscomfiles.com/uploads/v1/blog/909321.2483cbfe.668x375o.0055951b5173@2x.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzFQ_25XavOa5HtNdUDxYyFE3mqx-t3Rft6w&s',
    'https://preview.redd.it/ph6px2drilw71.png?auto=webp&s=f9bd73ed65253891302dca838992a0cdcd0cca6b',
    'https://i.imgflip.com/9amg6.jpg?a483912',
    'https://media.tenor.com/JWFEQcWcJyQAAAAM/happy-catto-cats.gif',
    'https://assets.epuzzle.info/puzzle/079/716/original.jpg',
]; // happy cat pictures
         const angryCatMemes = [
    'https://i.redd.it/cbd801fa2l781.jpg',  'https://i.pinimg.com/564x/1a/c0/23/1ac0231aa6d74d092328d445aa98183e.jpg',
    'https://media.tenor.com/0n62MvZZHxkAAAAM/dungg.gif', 
    'https://i.pinimg.com/474x/64/6b/af/646baf16ffbcc38037dfa7bfb79a9fa8.jpg',
    'https://i.pinimg.com/736x/f2/09/9a/f2099ab7aa48240b8da2b8e618068023.jpg',
    'https://tr.rbxcdn.com/180DAY-e206530a5712708d08fdeafa8dd0c464/420/420/Hat/Webp/noFilter',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9l77vigF4-lhwdYpPqhtA8RkRrOX0i4HCNg&s',
    'https://tr.rbxcdn.com/180DAY-1c161c8fe339ce1e5388a4170f0c9286/420/420/Hat/Png/noFilter',
]; // mad cat pictures

const surprisedCatMemes = [
    'https://media1.giphy.com/media/GRk3GLfzduq1NtfGt5/giphy_s.gif?cid=6c09b952yp90bfyuyr6mf1l3vfoxw17n21aoi4pbl6m3s2om&ep=v1_gifs_search&rid=giphy_s.gif&ct=g', 
    'https://i.imgflip.com/7e296s.jpg?a483912',
    'https://preview.redd.it/i-found-the-origin-to-the-surprised-cat-picture-v0-kwn1j77kzd2e1.jpg?width=1080&format=pjpg&auto=webp&s=b81e4c91759f4367f2b5de2f96bcd239056ed527',
    'https://i.imgflip.com/9ebdz.jpg?a484056',
    'https://i.redd.it/r8m1yv2gz7f61.jpg',
    'https://media4.giphy.com/media/vSSdLSLbGIXio/giphy_s.gif?cid=6c09b952ht221ypm9k738vacgg3woxwvt8cu6x85ww3lac9b&ep=v1_gifs_search&rid=giphy_s.gif&ct=g',
    'https://pbs.twimg.com/profile_images/1280227739312807936/aTmVXPao_400x400.jpg',
]; // surprised cat pictures

const sadCatMemes = [
    'https://media.tenor.com/Y3j6d3RoSEoAAAAM/sad-cat-content-aware-scale.gif', 
    'https://en.meming.world/images/en/d/d0/Crying_Cat.jpg', 
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpr352zc1GjLxSx_Exj551nutMFxoEXTH7aA&s',
    'https://images3.memedroid.com/images/UPLOADED680/652ea9ff787c9.jpeg',
    'https://i.redd.it/icd5o13nm8lc1.jpeg',
    'https://i.pinimg.com/236x/10/2b/e3/102be3e09ec2353430f93112fb0569d7.jpg', 
    'https://pbs.twimg.com/media/EbKRH80WoAA5kGK.jpg',
]; //sad cat pictures

document.getElementById('btn1').addEventListener('click', function() {
    document.getElementById('memeImage').src = 'https://placekitten.com/500/500?image=0'; // Happy Cat
});

document.getElementById('btn2').addEventListener('click', function() {
    document.getElementById('memeImage').src = 'https://placekitten.com/500/500?image=1'; // Sad Cat
});

document.getElementById('btn3').addEventListener('click', function() {
    document.getElementById('memeImage').src = 'https://placekitten.com/500/500?image=2'; // Angry Cat
});

document.getElementById('btn4').addEventListener('click', function() {
    document.getElementById('memeImage').src = 'https://placekitten.com/500/500?image=3'; // Surprised Cat
});

const memeImage = document.getElementById('memeImage');
const happyCatBtn = document.getElementById('btn1');
const angryCatBtn = document.getElementById('btn2');
const surprisedCatBtn = document.getElementById('btn3');
const sadCatBtn = document.getElementById('btn4');


// function to get a random meme from a given category
function getRandomMemeFromCategory(category) {
    const randomIndex = Math.floor(Math.random() * category.length);
    memeImage.src = category[randomIndex];
}

// add event listeners to the buttons
happyCatBtn.addEventListener('click', () => getRandomMemeFromCategory(happyCatMemes));
angryCatBtn.addEventListener('click', () => getRandomMemeFromCategory(angryCatMemes));
surprisedCatBtn.addEventListener('click', () => getRandomMemeFromCategory(surprisedCatMemes));
sadCatBtn.addEventListener('click', () => getRandomMemeFromCategory(sadCatMemes));
<!--========================= Chikawa Run =========================-->
    function rand(max) {
    return Math.floor(Math.random() * max);
  }
  
  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  
  function changeBrightness(factor, sprite) {
    var virtCanvas = document.createElement("canvas");
    virtCanvas.width = 500;
    virtCanvas.height = 500;
    var context = virtCanvas.getContext("2d");
    context.drawImage(sprite, 0, 0, 500, 500);
  
    var imgData = context.getImageData(0, 0, 500, 500);
  
    for (let i = 0; i < imgData.data.length; i += 4) {
      imgData.data[i] = imgData.data[i] * factor;
      imgData.data[i + 1] = imgData.data[i + 1] * factor;
      imgData.data[i + 2] = imgData.data[i + 2] * factor;
    }
    context.putImageData(imgData, 0, 0);
  
    var spriteOutput = new Image();
    spriteOutput.src = virtCanvas.toDataURL();
    virtCanvas.remove();
    return spriteOutput;
  }
  
  function displayVictoryMess(moves) {
    document.getElementById("moves").innerHTML = "You Moved " + moves + " Steps.";
    toggleVisablity("Message-Container");  
  }
  
  function toggleVisablity(id) {
    if (document.getElementById(id).style.visibility == "visible") {
      document.getElementById(id).style.visibility = "hidden";
    } else {
      document.getElementById(id).style.visibility = "visible";
    }
  }
  
  function Maze(Width, Height) {
    var mazeMap;
    var width = Width;
    var height = Height;
    var startCoord, endCoord;
    var dirs = ["n", "s", "e", "w"];
    var modDir = {
      n: {
        y: -1,
        x: 0,
        o: "s"
      },
      s: {
        y: 1,
        x: 0,
        o: "n"
      },
      e: {
        y: 0,
        x: 1,
        o: "w"
      },
      w: {
        y: 0,
        x: -1,
        o: "e"
      }
    };
  
    this.map = function() {
      return mazeMap;
    };
    this.startCoord = function() {
      return startCoord;
    };
    this.endCoord = function() {
      return endCoord;
    };
  
    function genMap() {
      mazeMap = new Array(height);
      for (y = 0; y < height; y++) {
        mazeMap[y] = new Array(width);
        for (x = 0; x < width; ++x) {
          mazeMap[y][x] = {
            n: false,
            s: false,
            e: false,
            w: false,
            visited: false,
            priorPos: null
          };
        }
      }
    }
  
    function defineMaze() {
      var isComp = false;
      var move = false;
      var cellsVisited = 1;
      var numLoops = 0;
      var maxLoops = 0;
      var pos = {
        x: 0,
        y: 0
      };
      var numCells = width * height;
      while (!isComp) {
        move = false;
        mazeMap[pos.x][pos.y].visited = true;
  
        if (numLoops >= maxLoops) {
          shuffle(dirs);
          maxLoops = Math.round(rand(height / 8));
          numLoops = 0;
        }
        numLoops++;
        for (index = 0; index < dirs.length; index++) {
          var direction = dirs[index];
          var nx = pos.x + modDir[direction].x;
          var ny = pos.y + modDir[direction].y;
  
          if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
            //Check if the tile is already visited
            if (!mazeMap[nx][ny].visited) {
              //Carve through walls from this tile to next
              mazeMap[pos.x][pos.y][direction] = true;
              mazeMap[nx][ny][modDir[direction].o] = true;
  
              //Set Currentcell as next cells Prior visited
              mazeMap[nx][ny].priorPos = pos;
              //Update Cell position to newly visited location
              pos = {
                x: nx,
                y: ny
              };
              cellsVisited++;
              //Recursively call this method on the next tile
              move = true;
              break;
            }
          }
        }
  
        if (!move) {
          //  If it failed to find a direction,
          //  move the current position back to the prior cell and Recall the method.
          pos = mazeMap[pos.x][pos.y].priorPos;
        }
        if (numCells == cellsVisited) {
          isComp = true;
        }
      }
    }
  
    function defineStartEnd() {
      switch (rand(4)) {
        case 0:
          startCoord = {
            x: 0,
            y: 0
          };
          endCoord = {
            x: height - 1,
            y: width - 1
          };
          break;
        case 1:
          startCoord = {
            x: 0,
            y: width - 1
          };
          endCoord = {
            x: height - 1,
            y: 0
          };
          break;
        case 2:
          startCoord = {
            x: height - 1,
            y: 0
          };
          endCoord = {
            x: 0,
            y: width - 1
          };
          break;
        case 3:
          startCoord = {
            x: height - 1,
            y: width - 1
          };
          endCoord = {
            x: 0,
            y: 0
          };
          break;
      }
    }
  
    genMap();
    defineStartEnd();
    defineMaze();
  }
  
  function DrawMaze(Maze, ctx, cellsize, endSprite = null) {
    var map = Maze.map();
    var cellSize = cellsize;
    var drawEndMethod;
    ctx.lineWidth = cellSize / 40;
  
    this.redrawMaze = function(size) {
      cellSize = size;
      ctx.lineWidth = cellSize / 50;
      drawMap();
      drawEndMethod();
    };
  
    function drawCell(xCord, yCord, cell) {
      var x = xCord * cellSize;
      var y = yCord * cellSize;
  
      if (cell.n == false) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + cellSize, y);
        ctx.stroke();
      }
      if (cell.s === false) {
        ctx.beginPath();
        ctx.moveTo(x, y + cellSize);
        ctx.lineTo(x + cellSize, y + cellSize);
        ctx.stroke();
      }
      if (cell.e === false) {
        ctx.beginPath();
        ctx.moveTo(x + cellSize, y);
        ctx.lineTo(x + cellSize, y + cellSize);
        ctx.stroke();
      }
      if (cell.w === false) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y + cellSize);
        ctx.stroke();
      }
    }
  
    function drawMap() {
      for (x = 0; x < map.length; x++) {
        for (y = 0; y < map[x].length; y++) {
          drawCell(x, y, map[x][y]);
        }
      }
    }
  
    function drawEndFlag() {
      var coord = Maze.endCoord();
      var gridSize = 4;
      var fraction = cellSize / gridSize - 2;
      var colorSwap = true;
      for (let y = 0; y < gridSize; y++) {
        if (gridSize % 2 == 0) {
          colorSwap = !colorSwap;
        }
        for (let x = 0; x < gridSize; x++) {
          ctx.beginPath();
          ctx.rect(
            coord.x * cellSize + x * fraction + 4.5,
            coord.y * cellSize + y * fraction + 4.5,
            fraction,
            fraction
          );
          if (colorSwap) {
            ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
          } else {
            ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
          }
          ctx.fill();
          colorSwap = !colorSwap;
        }
      }
    }
  
    function drawEndSprite() {
      var offsetLeft = cellSize / 50;
      var offsetRight = cellSize / 25;
      var coord = Maze.endCoord();
      ctx.drawImage(
        endSprite,
        2,
        2,
        endSprite.width,
        endSprite.height,
        coord.x * cellSize + offsetLeft,
        coord.y * cellSize + offsetLeft,
        cellSize - offsetRight,
        cellSize - offsetRight
      );
    }
  
    function clear() {
      var canvasSize = cellSize * map.length;
      ctx.clearRect(0, 0, canvasSize, canvasSize);
    }
  
    if (endSprite != null) {
      drawEndMethod = drawEndSprite;
    } else {
      drawEndMethod = drawEndFlag;
    }
    clear();
    drawMap();
    drawEndMethod();
  }
  
  function Player(maze, c, _cellsize, onComplete, sprite = null) {
    var ctx = c.getContext("2d");
    var drawSprite;
    var moves = 0;
    drawSprite = drawSpriteCircle;
    if (sprite != null) {
      drawSprite = drawSpriteImg;
    }
    var player = this;
    var map = maze.map();
    var cellCoords = {
      x: maze.startCoord().x,
      y: maze.startCoord().y
    };
    var cellSize = _cellsize;
    var halfCellSize = cellSize / 2;
  
    this.redrawPlayer = function(_cellsize) {
      cellSize = _cellsize;
      drawSpriteImg(cellCoords);
    };
  
    function drawSpriteCircle(coord) {
      ctx.beginPath();
      ctx.fillStyle = "yellow";
      ctx.arc(
        (coord.x + 1) * cellSize - halfCellSize,
        (coord.y + 1) * cellSize - halfCellSize,
        halfCellSize - 2,
        0,
        2 * Math.PI
      );
      ctx.fill();
      if (coord.x === maze.endCoord().x && coord.y === maze.endCoord().y) {
        onComplete(moves);
        player.unbindKeyDown();
      }
    }
  
    function drawSpriteImg(coord) {
      var offsetLeft = cellSize / 50;
      var offsetRight = cellSize / 25;
      ctx.drawImage(
        sprite,
        0,
        0,
        sprite.width,
        sprite.height,
        coord.x * cellSize + offsetLeft,
        coord.y * cellSize + offsetLeft,
        cellSize - offsetRight,
        cellSize - offsetRight
      );
      if (coord.x === maze.endCoord().x && coord.y === maze.endCoord().y) {
        onComplete(moves);
        player.unbindKeyDown();
      }
    }
  
    function removeSprite(coord) {
      var offsetLeft = cellSize / 50;
      var offsetRight = cellSize / 25;
      ctx.clearRect(
        coord.x * cellSize + offsetLeft,
        coord.y * cellSize + offsetLeft,
        cellSize - offsetRight,
        cellSize - offsetRight
      );
    }
  
    function check(e) {
      var cell = map[cellCoords.x][cellCoords.y];
      moves++;
      switch (e.keyCode) {
        case 65:
        case 37: // west
          if (cell.w == true) {
            removeSprite(cellCoords);
            cellCoords = {
              x: cellCoords.x - 1,
              y: cellCoords.y
            };
            drawSprite(cellCoords);
          }
          break;
        case 87:
        case 38: // north
          if (cell.n == true) {
            removeSprite(cellCoords);
            cellCoords = {
              x: cellCoords.x,
              y: cellCoords.y - 1
            };
            drawSprite(cellCoords);
          }
          break;
        case 68:
        case 39: // east
          if (cell.e == true) {
            removeSprite(cellCoords);
            cellCoords = {
              x: cellCoords.x + 1,
              y: cellCoords.y
            };
            drawSprite(cellCoords);
          }
          break;
        case 83:
        case 40: // south
          if (cell.s == true) {
            removeSprite(cellCoords);
            cellCoords = {
              x: cellCoords.x,
              y: cellCoords.y + 1
            };
            drawSprite(cellCoords);
          }
          break;
      }
    }
  
    this.bindKeyDown = function() {
      window.addEventListener("keydown", check, false);
  
      $("#view").swipe({
        swipe: function(
          event,
          direction,
          distance,
          duration,
          fingerCount,
          fingerData
        ) {
          console.log(direction);
          switch (direction) {
            case "up":
              check({
                keyCode: 38
              });
              break;
            case "down":
              check({
                keyCode: 40
              });
              break;
            case "left":
              check({
                keyCode: 37
              });
              break;
            case "right":
              check({
                keyCode: 39
              });
              break;
          }
        },
        threshold: 0
      });
    };
  
    this.unbindKeyDown = function() {
      window.removeEventListener("keydown", check, false);
      $("#view").swipe("destroy");
    };
  
    drawSprite(maze.startCoord());
  
    this.bindKeyDown();
  }
  
  var mazeCanvas = document.getElementById("mazeCanvas");
  var ctx = mazeCanvas.getContext("2d");
  var sprite;
  var finishSprite;
  var maze, draw, player;
  var cellSize;
  var difficulty;
  // sprite.src = 'media/sprite.png';
  
  window.onload = function() {
    let viewWidth = $("#view").width();
    let viewHeight = $("#view").height();
    if (viewHeight < viewWidth) {
      ctx.canvas.width = viewHeight - viewHeight / 100;
      ctx.canvas.height = viewHeight - viewHeight / 100;
    } else {
      ctx.canvas.width = viewWidth - viewWidth / 100;
      ctx.canvas.height = viewWidth - viewWidth / 100;
    }
  
    //Load and edit sprites
    var completeOne = false;
    var completeTwo = false;
    var isComplete = () => {
      if(completeOne === true && completeTwo === true)
         {
           console.log("Runs");
           setTimeout(function(){
             makeMaze();
           }, 500);         
         }
    };
    sprite = new Image();
    sprite.src =
      "https://png.pngtree.com/png-vector/20190120/ourmid/pngtree-key-vector-icon-png-image_470666.jpg" +
      "?" +
      new Date().getTime();
    sprite.setAttribute("crossOrigin", " ");
    sprite.onload = function() {
      sprite = changeBrightness(1.2, sprite);
      completeOne = true;
      console.log(completeOne);
      isComplete();
    };
  
    finishSprite = new Image();
    finishSprite.src = "https://png.pngtree.com/png-vector/20240827/ourlarge/pngtree-home-logo-png-image_13643592.png"+
    "?" +
    new Date().getTime();
    finishSprite.setAttribute("crossOrigin", " ");
    finishSprite.onload = function() {
      finishSprite = changeBrightness(1.1, finishSprite);
      completeTwo = true;
      console.log(completeTwo);
      isComplete();
    };
    
  };
  
  window.onresize = function() {
    let viewWidth = $("#view").width();
    let viewHeight = $("#view").height();
    if (viewHeight < viewWidth) {
      ctx.canvas.width = viewHeight - viewHeight / 100;
      ctx.canvas.height = viewHeight - viewHeight / 100;
    } else {
      ctx.canvas.width = viewWidth - viewWidth / 100;
      ctx.canvas.height = viewWidth - viewWidth / 100;
    }
    cellSize = mazeCanvas.width / difficulty;
    if (player != null) {
      draw.redrawMaze(cellSize);
      player.redrawPlayer(cellSize);
    }
  };
  
  function makeMaze() {
    if (player != undefined) {
      player.unbindKeyDown();
      player = null;
    }
    var e = document.getElementById("diffSelect");
    difficulty = e.options[e.selectedIndex].value;
    cellSize = mazeCanvas.width / difficulty;
    maze = new Maze(difficulty, difficulty);
    draw = new DrawMaze(maze, ctx, cellSize, finishSprite);
    player = new Player(maze, mazeCanvas, cellSize, displayVictoryMess, sprite);
    if (document.getElementById("mazeContainer").style.opacity < "100") {
      document.getElementById("mazeContainer").style.opacity = "100";
    }
  }
