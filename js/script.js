/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 


/* `quotes` array 
***/

// create an array with a minium of 5 quotes

//create an empty array
const quotes=[];

let quotesLength=quotes.length;

// filling the array with empty objects while length is less than 5 objects

while (quotes.length<5){
  const quoteObject={};
  quoteObject.quote='';
  quoteObject.source='';
  quoteObject.citation='';
  quoteObject.year=0;
  quotes.unshift(quoteObject);

}






/***
 * `getRandomQuote` function
***/
function getRandomQuote(quotes){

/**
 * [A short description of the myFunc function]
 *
 * @param {[param type]} quotes - [parameter description]
 * @param {[param type]} param2 - [parameter description]
 * @returns {[return type]} [documents the function's return value]
 */

  
 
  let randomizedIndex=Math.ceil(Math.random()*quotesLength-1);
  let quote=quotes[randomizedIndex]
  return quote;



};


/***
 * `printQuote` function
***/
function printQuote(){
  let quote=getRandomQuote(quotes);
  let quotePrint=document.querySelector('.quote');
  return quotePrint.innerHTML=quote;

  

}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);