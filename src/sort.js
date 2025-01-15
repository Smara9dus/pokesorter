
import bw from "./assets/black-white.png"
import bws from "./assets/black-white-shiny.png"
import c from "./assets/crystal.png"
import cs from "./assets/crystal-shiny.png"
import g from "./assets/gold.png"
import gs from "./assets/gold-shiny.png"
import rb from "./assets/red-blue-sgb.png"
import ysgb from "./assets/yellow-sgb.png"
import ygbc from "./assets/yellow-gbc.png"
import s from "./assets/silver.png";
import ss from "./assets/silver-shiny.png"
import gen3 from "./assets/generation-3.png";
import gen3s from "./assets/generation-3-shiny.png";
import frlg from "./assets/firered-leafgreen.png";
import frlgs from "./assets/firered-leafgreen-shiny.png";
import dp from "./assets/diamond-pearl.png";
import dps from "./assets/diamond-pearl-shiny.png";
import p from "./assets/platinum.png";
import ps from "./assets/platinum-shiny.png";
import hgss from "./assets/heartgold-soulsilver.png";
import hgsss from "./assets/heartgold-soulsilver-shiny.png";

import { getTypeArray } from "./typedata";
import { getH, getL, getS } from "./color-ops";

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

function getSourceImg(spriteSheet, shiny) {
    if (spriteSheet === 'rb') {
        gridWidth = 16;
        maxNum = 151;
        return rb;
    } else if (spriteSheet === 'ysgb') {
        gridWidth = 16;
        maxNum = 151;
        return ysgb;
    } else if (spriteSheet === 'ygbc') {
        gridWidth = 16;
        maxNum = 151;
        return ygbc;
    } else if (spriteSheet === 'g') {
        gridWidth = 20;
        maxNum = 251;
        return shiny ? gs : g;
    } else if (spriteSheet === 's') {
        gridWidth = 20;
        maxNum = 251;
        return shiny ? ss : s;
    } else if (spriteSheet === 'c') {
        gridWidth = 20;
        maxNum = 251;
        return shiny ? cs : c;
    } else if (spriteSheet === 'gen3') {
        gridWidth = 25;
        maxNum = 386;
        return shiny ? gen3s : gen3;
    } else if (spriteSheet === 'frlg') {
        gridWidth = 16;
        maxNum = 151;
        return shiny ? frlgs : frlg;
    } else if (spriteSheet === 'dp') {
        gridWidth = 28;
        maxNum = 493;
        return shiny ? dps : dp;
    } else if (spriteSheet === 'p') {
        gridWidth = 28;
        maxNum = 493;
        return shiny ? ps : p;
    } else if (spriteSheet === 'hgss') {
        gridWidth = 28;
        maxNum = 493;
        return shiny ? hgsss : hgss;
    } else {
        gridWidth = 31;
        maxNum = 649;
        return shiny ? bws : bw;
    }
}

async function getCanvas(sourceImg) {
    canvas = document.createElement('canvas');
    ctx = canvas.getContext('2d', { willReadFrequently: true });
    let img = await loadImage(sourceImg);
    canvas.width = img.width
    canvas.height = img.height
    ctx.drawImage(img, 0, 0);
}

function typeFilter(type) {
    if (type === 'all') {
        return;
    }
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

function randomize(array) { // TODO make optional?
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
}

function mergeSortL(array) {
    if (array.length <= 1) {
      return array; 
    }

    const mid = Math.floor(array.length / 2);
    const left = mergeSortL(array.slice(0, mid));
    const right = mergeSortL(array.slice(mid));

    return mergeL(left, right);
}

function mergeSortH(array) {
    if (array.length <= 1) {
      return array; 
    }

    const mid = Math.floor(array.length / 2);
    const left = mergeSortH(array.slice(0, mid));
    const right = mergeSortH(array.slice(mid));

    return mergeH(left, right);
}

function mergeSortS(array) {
    if (array.length <= 1) {
      return array; 
    }

    const mid = Math.floor(array.length / 2);
    const left = mergeSortS(array.slice(0, mid));
    const right = mergeSortS(array.slice(mid));

    return mergeS(left, right);
}

function mergeSortR(array) {
    if (array.length <= 1) {
      return array; 
    }

    const mid = Math.floor(array.length / 2);
    const left = mergeSortR(array.slice(0, mid));
    const right = mergeSortR(array.slice(mid));

    return mergeR(left, right);
}

function mergeSortG(array) {
    if (array.length <= 1) {
      return array; 
    }

    const mid = Math.floor(array.length / 2);
    const left = mergeSortG(array.slice(0, mid));
    const right = mergeSortG(array.slice(mid));

    return mergeG(left, right);
}

function mergeSortB(array) {
    if (array.length <= 1) {
      return array; 
    }

    const mid = Math.floor(array.length / 2);
    const left = mergeSortB(array.slice(0, mid));
    const right = mergeSortB(array.slice(mid));

    return mergeB(left, right);
}

function mergeL(left, right) {
    const result = [];
    let i = 0;
    let j = 0;
    
    while (i < left.length && j < right.length) {
        const ll = getL(left[i].r, left[i].g, left[i].b);
        const rl = getL(right[j].r, right[j].g, right[j].b);
        if (ll < rl) {
            result.push(left[i]);
            i++;
        } else if (ll > rl) {
            result.push(right[j]);
            j++;
        } else { // if equal, sort by H
            const lh = getH(left[i].r, left[i].g, left[i].b);
            const rh = getH(right[j].r, right[j].g, right[j].b);
            if (lh < rh) {
                result.push(left[i]);
                i++;
            } else if (lh > rh) {
                result.push(right[j]);
                j++;
            } else { // if equal, sort by S
                const ls = getS(left[i].r, left[i].g, left[i].b);
                const rs = getS(right[j].r, right[j].g, right[j].b);
                if (ls < rs) {
                    result.push(left[i]);
                    i++;
                } else {
                    result.push(right[j]);
                    j++;
                }
            }
        }
    }
    
    return result.concat(left.slice(i)).concat(right.slice(j));
}   

function mergeH(left, right) {
    const result = [];
    let i = 0;
    let j = 0;
    
    while (i < left.length && j < right.length) {
        const lh = getH(left[i].r, left[i].g, left[i].b);
        const rh = getH(right[j].r, right[j].g, right[j].b);
        if (lh < rh) {
            result.push(left[i]);
            i++;
        } else if (lh > rh) {
            result.push(right[j]);
            j++;
        } else { // if equal, sort by S
            const ls = getS(left[i].r, left[i].g, left[i].b);
            const rs = getS(right[j].r, right[j].g, right[j].b);
            if (ls < rs) {
                result.push(left[i]);
                i++;
            } else if (ls > rs) {
                result.push(right[j]);
                j++;
            } else { // if equal, sort by L
                const ll = getL(left[i].r, left[i].g, left[i].b);
                const rl = getL(right[j].r, right[j].g, right[j].b);
                if (ll < rl) {
                    result.push(left[i]);
                    i++;
                } else {
                    result.push(right[j]);
                    j++;
                }
            }
        }
    }
    
    return result.concat(left.slice(i)).concat(right.slice(j));
}   

function mergeS(left, right) {
    const result = [];
    let i = 0;
    let j = 0;
    
    while (i < left.length && j < right.length) {
        const ls = getS(left[i].r, left[i].g, left[i].b);
        const rs = getS(right[j].r, right[j].g, right[j].b);
        if (ls < rs) {
            result.push(left[i]);
            i++;
        } else if (ls > rs) {
            result.push(right[j]);
            j++;
        } else { // if equal, sort by L
            const ll = getL(left[i].r, left[i].g, left[i].b);
            const rl = getL(right[j].r, right[j].g, right[j].b);
            if (ll < rl) {
                result.push(left[i]);
                i++;
            } else if (ll > rl) {
                result.push(right[j]);
                j++;
            } else { // if equal, sort by S
                const ls = getS(left[i].r, left[i].g, left[i].b);
                const rs = getS(right[j].r, right[j].g, right[j].b);
                if (ls < rs) {
                    result.push(left[i]);
                    i++;
                } else {
                    result.push(right[j]);
                    j++;
                }
            }
        }
    }
    
    return result.concat(left.slice(i)).concat(right.slice(j));
} 

function mergeR(left, right) {
    const result = [];
    let i = 0;
    let j = 0;
    
    while (i < left.length && j < right.length) {
        if (left[i].r < right[j].r) {
            result.push(left[i]);
            i++;
        } else if (left[i].r > right[j].r) {
            result.push(right[j]);
            j++;
        } else { // if equal, sort by L
            const ll = getL(left[i].r, left[i].g, left[i].b);
            const rl = getL(right[j].r, right[j].g, right[j].b);
            if (ll < rl) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }
    }
    
    return result.concat(left.slice(i)).concat(right.slice(j));
}

function mergeG(left, right) {
    const result = [];
    let i = 0;
    let j = 0;
    
    while (i < left.length && j < right.length) {
        if (left[i].g < right[j].g) {
            result.push(left[i]);
            i++;
        } else if (left[i].g > right[j].g) {
            result.push(right[j]);
            j++;
        } else { // if equal, sort by L
            const ll = getL(left[i].r, left[i].g, left[i].b);
            const rl = getL(right[j].r, right[j].g, right[j].b);
            if (ll < rl) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }
    }
    
    return result.concat(left.slice(i)).concat(right.slice(j));
}

function mergeB(left, right) {
    const result = [];
    let i = 0;
    let j = 0;
    
    while (i < left.length && j < right.length) {
        if (left[i].b < right[j].b) {
            result.push(left[i]);
            i++;
        } else if (left[i].b > right[j].b) {
            result.push(right[j]);
            j++;
        } else { // if equal, sort by L
            const ll = getL(left[i].r, left[i].g, left[i].b);
            const rl = getL(right[j].r, right[j].g, right[j].b);
            if (ll < rl) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }
    }
    
    return result.concat(left.slice(i)).concat(right.slice(j));
}

  function horizontalSort(option) {
    const rows = [];

    for (let x = 0; x < pixels.length; x += canvas.width) {
        const row = pixels.slice(x, x + canvas.width);
        rows.push(row); 
    }

    const newRows = []
    rows.forEach(row => {
        let newRow = [];
        if (option === 'l') {
            newRow = mergeSortL(row);
        } else if (option === 'h') {
            newRow = mergeSortH(row);
        } else if (option === 's') {
            newRow = mergeSortS(row);
        } else if (option === 'r') {
            newRow = mergeSortR(row);
        } else if (option === 'g') {
            newRow = mergeSortG(row);
        } else if (option === 'b') {
            newRow = mergeSortB(row);
        } else {
            newRow = randomize(row);
        }   
        newRows.push(newRow)
    }) 

    console.log(newRows[100])

    // replace pixel array with these rows
    pixels = []
    newRows.forEach(row => {
        pixels = pixels.concat(row);
    })
}

function verticalSort(option) {
    const columns = [];

    for (let y = 0; y < canvas.width; y++) {
        const column = []
        for (let i = 0; i < canvas.width; i++) {
            column.push(pixels[canvas.width * i + y])
        }
        columns.push(column);
    }

    const newColumns = [];
    columns.forEach(column => {
        let newColumn = [];
        if (option === 'l') {
            newColumn = mergeSortL(column);
        } else if (option === 'h') {
            newColumn = mergeSortH(column);
        } else if (option === 's') {
            newColumn = mergeSortS(column);
        } else if (option === 'r') {
            newColumn = mergeSortR(column);
        } else if (option === 'g') {
            newColumn = mergeSortG(column);
        } else if (option === 'b') {
            newColumn = mergeSortB(column);
        } else {
            newColumn = randomize(column);
        }
        newColumns.push(newColumn);
    })

    // replace pixel array with these columns
    for (let y = 0; y < canvas.width; y++) {
        for (let i = 0; i < canvas.width; i++) {
            pixels[canvas.width * i + y] = newColumns[y][i];
        }
    }    
}

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

export async function generate(spriteSheet, shiny, type, rand, opt1, opt2, opt3) {
    initialize();
    // Load source image based on sprite sheet selection
    const sourceImg = getSourceImg(spriteSheet, shiny);
    // Get image data from source image
    await getCanvas(sourceImg);
    // Filter sprites out of the image that do not match type selection
    typeFilter(type); //comment out everything after this line to debug/verify type arrays
    // Remove transparent pixels
    removeTransparent();
    // Randomize pixels.
    if (rand) {
        pixels = randomize(pixels);
    }

    // Sorts! (sorting 3 times really only does stuff when rand is false)
    if (opt1 !== 'n') {
        verticalSort(opt1);
    }
    if (opt2 !== 'n') {
        horizontalSort(opt2);
    }
    if (opt3 !== 'n') {
        verticalSort(opt3);
    }
    redraw();
    return canvas.toDataURL();
} 
