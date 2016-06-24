/*
| -------------------------------------------------------------------
|  MTGNode meta ¿¨ Çý¶¯
| -------------------------------------------------------------------
|
| Author : changdi
| Version : 1.0
*/


;(function(undefined) {

  // Properties
  //------------
  var baseUrl = '../../images/';

  // Driver
  //--------
  this.currentDriver = function(card) {
   // return baseUrl + '&multiverseid=' + card.multiverseid;
   return baseUrl + card.multiverseid + '.jpg';
  };
}).call(this);