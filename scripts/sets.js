// Creating a minimized set info file
//创建一个最小化的设定信息文件

// Loading sets
var fs = require('fs'),
    sets = require('../database/mtg.json');

var blacklist = [
  'DKM',
  'HHO',
  'DPA'
];


// Main Loop
for (var set in sets) {

  if (!~blacklist.indexOf(sets[set].code)) {
    sets[set]['nb_cards'] = sets[set].cards.length
    delete sets[set].cards;
  }
  else {
    delete sets[set];
  }
}

// Writing in file
//写文件
fs.writeFileSync('./database/sets.json', JSON.stringify(sets));