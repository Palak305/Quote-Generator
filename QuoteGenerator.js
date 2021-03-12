


const spinner = document.querySelector('#js-spinner');

const newQuoteButton = document.querySelector('#js-new-quote');
newQuoteButton.addEventListener('click', getQuote);

const endpoint = 'https://api.quotable.io/random';

async function getQuote() {
  
 try {
    spinner.classList.remove('hidden');
    newQuoteButton.disabled = true;
    const response = await fetch(endpoint)
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const json = await response.json();
    displayQuote(json.content);
    displayAuthor(json.author);

  } catch {
    alert('Failed to fetch new quote');
  } finally {
   
    newQuoteButton.disabled = false;
    spinner.classList.add('hidden');
  }
}

function displayQuote(quote) {
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}
 
function displayAuthor(author){
const quoteAuthor = document.querySelector('#js-quote-author');
  quoteAuthor.textContent = '-' + author;
}

getQuote();
