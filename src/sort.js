
import blackWhite from "./assets/black-white.png"
import blackWhiteShiny from "./assets/black-white-shiny.png"
import { getTypeArray } from "./typedata";

var canvas = null;
var ctx = null;
var gridWidth = 0;
var maxNum = 0;
var imageData = null;
var pixels = []

function initialize() {
    canvas = null;
    ctx = null;
    gridWidth = 0;
    maxNum = 0;
    imageData = null;
    pixels = [];
}

// originally wrote the image processing in Python, so I want my range function back!
function range(start, stop, step) {
    if (typeof stop == 'undefined') {
        stop = start;
        start = 0;
    }

    if (typeof step == 'undefined') {
        step = 1;
    }

    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
    }

    var result = [];
    for (var i = start; i < stop; i += step) {
        result.push(i);
    }

    return result;
};

async function loadImage(url) {
    return new Promise(r => { let i = new Image(); i.onload = (() => r(i)); i.src = url; });
  }

function getSourceImg(spriteSheet) {
//     elif (choice == 2):
//         im = Image.open("images/diamond-pearl.png")
//         grid_width = 28
//         max_num = 493
//     elif (choice == 3):
//         im = Image.open("images/diamond-pearl-shiny.png")
//         grid_width = 28
//         max_num = 493
//     elif (choice == 4):
//         im = Image.open("images/platinum.png")
//         grid_width = 28
//         max_num = 493
//     elif (choice == 5):
//         im = Image.open("images/platinum-shiny.png")
//         grid_width = 28
//         max_num = 493
//     elif (choice == 6):
//         im = Image.open("images/heartgold-soulsilver.png")
//         grid_width = 28
//         max_num = 493
//     elif (choice == 7):
//         im = Image.open("images/heartgold-soulsilver-shiny.png")
//         grid_width = 28
//         max_num = 493
//     elif (choice == 8):
//         im = Image.open("images/heartgold-soulsilver.png")
//         grid_width = 28
//         max_num = 493
//     elif (choice == 9):
//         im = Image.open("images/generation-3.png")
//         grid_width = 25
//         max_num = 386
//     elif (choice == 10):
//         im = Image.open("images/generation-3-shiny.png")
//         grid_width = 25
//         max_num = 386
//     elif (choice == 11):
//         im = Image.open("images/firered-leafgreen.png")
//         grid_width = 16
//         max_num = 152
//     elif (choice == 12):
//         im = Image.open("images/firered-leafgreen-shiny.png")
//         grid_width = 16
//         max_num = 152
    //     im = im.convert("RGBA")
    if (spriteSheet === 'black-white-shiny') {
        gridWidth = 31;
        maxNum = 649;
        return blackWhiteShiny;
    } else {
        gridWidth = 31;
        maxNum = 649;
        return blackWhite;
    }
}

async function getCanvas(sourceImg) {
    canvas = document.createElement('canvas');
    ctx = canvas.getContext('2d');
    let img = await loadImage(sourceImg);
    canvas.width = img.width
    canvas.height = img.height
    ctx.drawImage(img, 0, 0);
}

function typeFilter(type) {
    const spriteWidth = Math.floor(canvas.width / gridWidth);
    const selectedSprites = getTypeArray(type);
    const spritesToExclude = range(maxNum + 1).filter(x => !selectedSprites.includes(x))
    spritesToExclude.forEach(num => {
        const x = ((num - 1) % gridWidth) * spriteWidth;
        const y = Math.floor((num - 1) / gridWidth) * spriteWidth;
        ctx.clearRect(x, y, spriteWidth, spriteWidth);
    });
}

function removeTransparent() {
    imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < imageData.data.length; i += 4) {
        if (imageData.data[i + 3] != 0) {
            const pixel = {
                r: imageData.data[i],
                g: imageData.data[i + 1],
                b: imageData.data[i + 2]
            };
            pixels.push(pixel);
        }
    }
    const newSize = Math.ceil(Math.sqrt(pixels.length));
    canvas.width = newSize;
    canvas.height = newSize;
    ctx.canvas.width = newSize;
    ctx.canvas.height = newSize;
    if (pixels.length < newSize * newSize) {
        // add missing pixels to fill in square
        const pixelsToAdd = (newSize * newSize) - pixels.length
        for (let i = 0; i < pixelsToAdd; i++) {
            pixels.push({r: 0, g: 0, b: 0});
        }
    }
}

function randomizePixels() { // TODO make optional?
    for (let i = pixels.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pixels[i], pixels[j]] = [pixels[j], pixels[i]];
      }
      return pixels;
}

  function mergeSort(array, option) {
    if (array.length == 1) {
        return array;
    } else {
        const left = [];
        const right = [];
        left = array.slice(0, Math.floor(array.length / 2));
        right = array.slice(Math.floor(array.length / 2));
        newLeftArray = mergeSort(left, option);
        newRightArray = mergeSort(right, option);
        return merge(newLeftArray, newRightArray, option);
    }
}
  
  function merge(left, right, option) {
    sorted = [];
    // come back and finish this later
}

// def merge(leftlst, rightlst, option):
//     newLst = []
//     while len(leftlst) > 0 and len(rightlst) > 0:
//         if option == 0: # sort based on lightness
//             r, g, b = leftlst[0][0], leftlst[0][1], leftlst[0][2]
//             h, l, s = colorsys.rgb_to_hls(r, g, b)
//             left = l
//             r, g, b = rightlst[0][0], rightlst[0][1], rightlst[0][2]
//             h, l, s = colorsys.rgb_to_hls(r, g, b)
//             right = l
//         if option == 1: # sort based on hue
//             r, g, b = leftlst[0][0], leftlst[0][1], leftlst[0][2]
//             h, l, s = colorsys.rgb_to_hls(r, g, b)
//             left = h
//             r, g, b = rightlst[0][0], rightlst[0][1], rightlst[0][2]
//             h, l, s = colorsys.rgb_to_hls(r, g, b)
//             right = h
//         if option == 2: # sort based on saturation
//             r, g, b = leftlst[0][0], leftlst[0][1], leftlst[0][2]
//             h, l, s = colorsys.rgb_to_hls(r, g, b)
//             left = s
//             r, g, b = rightlst[0][0], rightlst[0][1], rightlst[0][2]
//             h, l, s = colorsys.rgb_to_hls(r, g, b)
//             right = s
//         if option == 3: # sort based R
//             left = leftlst[0][0]
//             right = rightlst[0][0]
//         if option == 4: # sort based G
//             left = leftlst[0][1]
//             right = rightlst[0][1]
//         if option == 5: # sort based B
//             left = leftlst[0][2]
//             right = rightlst[0][2]
//         if left <= right:
//             newLst.append(leftlst[0])
//             leftlst.pop(0)
//         else:
//             newLst.append(rightlst[0])
//             rightlst.pop(0)
//     if len(leftlst) == 0:
//         newLst = newLst + rightlst
//     if len(rightlst) == 0:
//         newLst = newLst + leftlst
//     return newLst

function horizontalSort() {
    const rows = [];

    for (let x = 0; x < pixels.length; x += canvas.width) {
        const row = pixels.slice(x, x + canvas.width);
        rows.push(row); 
    }

    rows.forEach(row => {
        const sortedRow = mergeSort(row);
    }) 

    // replace pixel array with these rows
}

function verticalSort() {
    const columns = [];

    for (let y = 0; y < canvas.width; y++) {
        const column = []
        for (let i = 0; i < canvas.width; i++) {
            column.push(pixels[canvas.width * y + i])
        }
        columns.push(column);
    }
    
    // replace pixel array with these columns
}

//     """Every horizontal line in the picture is sorted from darkest to lightest.

//     """Every vertical line in the picture is sorted by hue.

function redraw() {
    const newImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < pixels.length; i++) {
        const pixel = pixels[i];
        newImageData.data[i * 4] = pixel.r;
        newImageData.data[i * 4 + 1] = pixel.g;
        newImageData.data[i * 4 + 2] = pixel.b;
        newImageData.data[i * 4 + 3] = 255;
    }
    ctx.putImageData(newImageData, 0, 0);
}

export async function generate(spriteSheet, type) {
    initialize();
    // Load source image based on sprite sheet selection
    const sourceImg = getSourceImg(spriteSheet);
    // Get image data from source image
    await getCanvas(sourceImg);
    // Filter sprites out of the image that do not match type selection
    typeFilter(type); //comment out everything after this line to debug/verify type arrays
    // Remove transparent pixels
    removeTransparent();
    // Randomize pixels. Very important!
    // randomizePixels();

    // horizontalSort();
    // verticalSort();
    // horizontalSort();
    redraw();
    return canvas.toDataURL();
} 
