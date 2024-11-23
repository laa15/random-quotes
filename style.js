
var label =[ 
  {
    qoutes:"“Be yourself; everyone else is already taken.”",
    author:"Oscar Wilde"

  } ,
  {
    qoutes:"“So many books, so little time.”",
    author:"Frank Zappa"
    
  },
  {
    qoutes:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    author:"Bernard M. Baruch"
    
  },
  {
    qoutes:"“You only live once, but if you do it right, once is enough.”",
    author:"Mae West"
    
  },
  {
    qoutes:"“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
    author:"Mahatma Gandhi"
    
  }
]


var quoteelement = document.getElementById('quote-label');
var quoteAuthor = document.getElementById('quote-author');
lastIndex = -1 ; 



function GetQuotes(){
var RandomQuotes;



  do{
    RandomQuotes = Math.floor((Math.random() * label.length))
   
  }while(RandomQuotes == lastIndex){
    document.getElementById('quote-label').innerHTML=label[RandomQuotes].qoutes
    document.getElementById('quote-author').innerHTML=label[RandomQuotes].author
    lastIndex=RandomQuotes;
  }
}