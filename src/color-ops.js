export function getH(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
  
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
  
    let hue = 0;
  
    if (max === min) {
      hue = 0;
    } else if (max === r) {
      hue = 60 * ((g - b) / (max - min)) + 360;
    } else if (max === g) {
      hue = 60 * ((b - r) / (max - min)) + 120;
    } else if (max === b) {
      hue = 60 * ((r - g) / (max - min)) + 240;
    }
  
    hue = hue % 360;
    return hue;
}

export function getL(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
  
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
  
    const lightness = (max + min) / 2;
  
    return lightness * 100;
  }

  export function getS(r, g, b) {
    const rNorm = r / 255;
    const gNorm = g / 255;
    const bNorm = b / 255;
  
    const max = Math.max(rNorm, gNorm, bNorm);
    const min = Math.min(rNorm, gNorm, bNorm);
  
    if (max === 0) {
      return 0; 
    } else {
      return (max - min) / max;
    }
  }