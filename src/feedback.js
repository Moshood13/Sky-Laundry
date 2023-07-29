let REVIEWBOX = [
        {
            "reviewQuote": "An outstanding service from sky laundry. I'll recommend them over and over again. Thanks",
            "client": "Mr Christopher"
        },
        {
            "reviewQuote": "There was no single doubt in my trust for their services, they will remain the best laundry service.",
            "client": "Mr Stephen"
        },
        {
            "reviewQuote": "If you are thinking of getting the best laundry services in the whole of Lagos, i can assure you Sky laundry will meet and beat your expectations.",
            "client": "Mr Hassan"
        }
    ];

window.onload = init;

const init = () => {
    randomReview()
}

const randomReview = () => {
    let reviewSize = REVIEWBOX.length;
    let randomIndex = Math.floor(Math.random() * reviewSize);
    let randomReviewData = REVIEWBOX[randomIndex]

    document.getElementById("review").innerText = randomReviewData.reviewQuote;
    document.getElementById("client-name")
        .innerText = randomReviewData.client;
}

console.log(randomReview)
