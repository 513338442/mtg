/*
| -------------------------------------------------------------------
|  MTGNode Sets Library
| 集库
| -------------------------------------------------------------------
|
| Author : Yomguithereal
| Version : 1.0
*/

// Dependencies
// 依赖
//==============
var sets = require('../../database/sets.json'),
    card_library = require('./Card');

// Main Class
//============
function SetLibrary() {

  // Return info for a precise set
  //返回一个精确的设定信息
  this.getSetInfo = function(set_code) {
    return _.find(sets, function(set) {
      return set.code === set_code;
    });
  }

  // Return sets infos
  //回台的相关信息
  this.getSetsInfo = function() {
    return sets;
  }

  // Return every cards from a particular set
  //返回每卡由一组特定的
  this.getCards = function(set_code) {
    return card_library.getBy({set: set_code});
  }
}

// Exporting
//出口
//===========
module.exports = new SetLibrary();
