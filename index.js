 var review = document.getElementById("feedback");
 var client = document.getElementById("client");
 
 
 
 var reviewBank = [
    {
    quote:"The mind is everything. What you think you become.",
    author:"Kevin Kruse"},
{
    quote:"Whatever the mind of man can conceive and believe, it can achieve.",
    author:"Napoleon Hill"},
{
    quote:"Strive not to be a success, but rather to be of value.",
    author:"Albert Einstein"},
{
    quote:"Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.",
    author:"Robert Frost"},
{
    quote:"I attribute my success to this: I never gave or took any excuse.",
    author:"Florence Nightingale"},
{
    quote:"We must balance conspicuous consumption with conscious capitalism.",
    author:"Kevin Kruse"},
]


const generateRandomReview = () => {
    setInterval(function () {
        let reviewSize = reviewBank.length;
        let randomReview = Math.floor(Math.random() * reviewSize);
        let randomReviewData = reviewBank[randomReview];
    
        review.innerHTML = randomReviewData.quote;
        client.innerHTML = randomReviewData.author + " ~ happy customer";
    }, 5000)
}

window.onload = generateRandomReview(); 