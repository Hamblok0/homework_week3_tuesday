// #1 The average price is $23.63
var avg = items.reduce(function(previousValue, currentValue, index, array){
  return previousValue + currentValue.price;
}, 0) / items.length;
console.log('Avg Price: ', avg);


// #2
var cost = items.filter(function(element, index, array){
  return element.price > 14.00 && element.price < 18.00;
});

console.log(cost);

// #3
 var GBP = items.filter(function(dook){
   return dook.currency_code === "GBP";
 }).forEach(function(item){
   console.log(item.title + ' costs £' + item.price);
 });


 // #4
var wood = items.filter(function(ugh) {
  return ugh.materials.indexOf('wood') != -1;
}).forEach(function(item){
  console.log(item.title);

});

// #5
var eight = items.filter(function(lolno){
  return lolno.materials.length > 7;
}).forEach(function(item){
  console.log(item.title);
  console.log(item.materials);


});



// #6
var made = items.filter(function(sigh){
  return sigh.who_made === "i_did";

})

var dunkel = made.length

console.log(dunkel + " were made by their sellers")
