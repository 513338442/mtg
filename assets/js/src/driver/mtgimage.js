/*
| -------------------------------------------------------------------
|  MTGNode mtgimage.com Card Driver
| -------------------------------------------------------------------
|
| Author : Yomguithereal
| Version : 1.0
*/

;(function(undefined) {

  // Properties
  //------------
  var urls = {
    //multiverseid: 'http://mtgimage.com/multiverseid/',
    cardname: 'http://mtgimage.com/set/',
    test: 'http://october.dev/storage/app/construct/',
  };

  // Driver
  //--------
  this.currentDriver = function(card) {

    if (card.multiverseid)
        return urls.test + card.image_name + '.jpg';
     // return urls.multiverseid + card.multiverseid + '.jpg';
    else
      return urls.cardname + card.set + '/' + card.name + '.jpg';
  };
}).call(this);
