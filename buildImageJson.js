var sizeOf = require('image-size');
var fs = require('fs');

var outputJson = [];


for (i = 1; i < 121; i++) {
  var thisImage = {
    id: i,
    title: '',
  };

  ['thumb', 'medium'].forEach((size) => {
    var dimensions = sizeOf(`static/photos/${size}/evian-${i}.jpg`);
    thisImage[size] = {
      w: dimensions.width,
      h: dimensions.height
    };
  });

  outputJson.push(thisImage);
}

fs.writeFileSync('src/assets/images.json', JSON.stringify(outputJson));
