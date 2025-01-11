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
//determine the length of the array

let quotesLength=quotes.length;

// filling the array with empty objects while length is less than 5 elements

while (quotes.length<5){
  //create an empty object
  const quoteObject={};
  //assign property with empty values
  quoteObject.quote='';
  quoteObject.source='';
  quoteObject.citation='';
  quoteObject.year='';
  quoteObject.tag='';
  quoteObject.isbn='';
  //add every  empty object to the quotes array
  
  quotes.unshift(quoteObject);

}

//quote data
const quoteText=[
  'That is one of the tricks of opportunity. It has a sly habit of slipping in by the back door, and often it comes disguised in the form of misfortune, or temporary defeat.',
  'The honest man reaps the good results of his honest thoughts and acts; he also brings upon himself the sufferings, which his vices produce.',
  'If you are constantly naming your aches and symptoms, you inhibit the kinetic action, which means the release of the healing power and energy of your subconscious mind. Furthermore, by the law of your own mind, these imaginings tend to take shape, As the thing I greatly feared.',
  'If the foreman knows and deploys his men well the finished work will be good. The foreman should take into account the abilities and limitations of his men, circulating among them and asking nothing unreasonable. He should know their morale and spirit, and encourage them',
  'I consider that a man\'s brain originally is like a little empty attic, and you have to stock it with such furniture as you choose. A fool takes in all the lumber of every sort that he comes across, so that the knowledge which might be useful to him gets crowded out, or at best is jumbled up with a lot of other things so that he has a difficulty in laying his hands upon it. Now the skilful workman is very careful indeed as to what he takes into his brain-attic. He will have nothing but the tools which may help him in doing his work, but of these he has a large assortment, and all in the most perfect order'
];


const quoteSource=[
  'Napoleon Hill ',
  'James Allen',
  'Joseph Murphy',
  'Miyamoto Mushashi',
  'Arthur Conan Doyle'
];
const quoteCitation=['THink and Grow Rich',
   'As a Man Thinketh',
    'The Power of Your Subconscious Mind',
    'The Book of Five Rings',
    'A study in Scarlet'
  ];
const quoteYear=['1937','1903', '1963','1645'];

const quoteTag=['Opportunity','Results','Subconscious','Strategy', 'Knowledge']
const quoteIsbn=['','','','','']

//loop through the  array
for (let i=0; i<quotes.length;i++){
  //create a quote variable to hold the array position provided by i
  let quote = quotes[i];
  //modify the empty property values with updated property values from  above
  quote['quote'] = quoteText[i];
  quote['source'] = quoteSource[i];
  quote['citation'] = quoteCitation[i];
  quote['year']=quoteYear[i];
  quote['tag']=quoteTag[i];
  quote['isbn']=quoteIsbn[i];
}



/***
 * `getRandomQuote` function
***/


function getRandomQuote(arr){

/**
 * [A short description of the myFunc function]
 *
 * @param {[param type]} quotes - [parameter description]
 * @param {[param type]} param2 - [parameter description]
 * @returns {[return type]} [documents the function's return value]
 */

  
 
  let randomizedIndex=Math.ceil(Math.random()*quotesLength-1)
  



};


/***
 * `printQuote` function
***/
function printQuote(){
  let randomQuote=getRandomQuote(quotes);
 

  let quotePrint=document.querySelector('.quote');
  return quotePrint.innerHTML=quote;

  

}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

//document.getElementById('load-quote').addEventListener("click", printQuote, false);