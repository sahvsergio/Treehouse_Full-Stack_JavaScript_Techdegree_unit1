/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

// create an array with a minium of 5 quotes
const quotes=[];//create an empty array





/***
 * `getRandomQuote` function
***/
function getRandomQuote(quotes){

  quotesLength=quotes.length;
  console.log(typeof quotesLength)
  randomizedIndex=Math.ceil(Math.random()*quotesLength-1);
 quote=quotes[randomizedIndex]
  return 


  

};


/***
 * `printQuote` function
***/
function printQuote(){
  quote=getRandomQuote
  quotePrint=document.querySelector('#')

  
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);