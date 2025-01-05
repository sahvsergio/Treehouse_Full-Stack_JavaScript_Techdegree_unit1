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
const quotes=[];//create an empty array
//push quote objects to quotes array






/***
 * `getRandomQuote` function
***/
function getRandomQuote(quotes){

/**
 * [A short description of the myFunc function]
 *
 * @param {[param type]} param1 - [parameter description]
 * @param {[param type]} param2 - [parameter description]
 * @returns {[return type]} [documents the function's return value]
 */

  let quotesLength=quotes.length;
 
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
  return quotePrint.textContent=quote;

  
}
getRandomQuote(quotes)


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);