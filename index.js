const newQuote = async () => {
    const url="https://goquotes-api.herokuapp.com/api/v1/random?count=1";
    const response = await fetch(url);
    const responseJSON = await response.json();
    const quote = responseJSON['quotes'][0]['text'];
    const author = responseJSON['quotes'][0]['author'];
    
    const quoteHTML = document.getElementById("quote");
    const authorHTML = document.getElementById("author");
    
    quoteHTML.innerHTML = quote;
    authorHTML.innerHTML = "~ " + author;
    
     const tweetButton=document.getElementById("tweet-quote");
     tweetButton.href="https://twitter.com/intent/tweet?          text="+quote+" ~ "+author;
    };
  newQuote();