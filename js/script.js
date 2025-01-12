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
   'The Power Of Your Subconscious Mind ',
    'The Power of Your Subconscious Mind',
    'The Book of Five Rings',
    'A study in Scarlet'
  ];
const quoteYear=['1937','1903', '1963','1645','1887'];

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
  
  let randomizedIndex= Math.ceil(Math.random()*(arr.length)-1);
  let quote=arr[randomizedIndex];
  
  return quote;
};


/***
 * `printQuote` function
***/
function printQuote(){
  const colorArray=[
    'A52A2A',
    'AB274F',
    '007FFF',
    '555D50',
    '8B008B'
  ];
 
  let randomizedIndex= Math.ceil(Math.random()*(colorArray.length-1));
  let myBackground=colorArray[randomizedIndex];
  document.querySelector('body').style.backgroundColor=`${myBackground}`;
  
  
 

 

  let quoteBox=document.querySelector('.quote-box');
  
 
  // call the getRandomQuote function
 
  let randomizedQuote=getRandomQuote(quotes);
  let quote=randomizedQuote['quote'];
  let source=randomizedQuote['source'];
  
  html=`<p class="quote">${quote} </p>
        <p class="source">${source} `
  if( 'Citation'.toLowerCase() !=false in randomizedQuote) {
   
    html+=`<span class="citation">${randomizedQuote['citation']}</span>`;
  }
  if ('Year'.toLowerCase()!=false in randomizedQuote){
    html+=`<span class="year">${randomizedQuote['year']}</span></p>`;

  }
  if ('Tag'.toLowerCase()!=false in randomizedQuote){
    html+=`<p></p><span class="tag">Topic: <strong>${randomizedQuote['tag']}</strong></span></p>`;
  }



  quoteBox.innerHTML =html+'</p>';

}
setInterval(printQuote, 5000);





/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);