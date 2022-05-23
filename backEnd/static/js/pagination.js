let page = urlParams.has("page") ? urlParams.get("page") : "0"
let resultLength = document.getElementById("pagination").getAttribute("data-results");
let buttonLocation = document.getElementById("paginationSection")

// first page of pagination
if (page === "0" && Number(resultLength) > 20) {

    let nextButton = document.createElement("button");
    nextButton.setAttribute("class", "pageButton");
    nextButton.textContent = "Next";
    
    let newURL = '/companies/search?' + urlParams + "&page=1";

    nextButton.onclick = () => {
        window.location.href=newURL
    };

    buttonLocation.appendChild(nextButton);
}

// other pages of pagination
if (page > 0){ 

    // other page of pagination
    let nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.setAttribute("class", "pageButton");

    let prevButton = document.createElement("button");
    prevButton.textContent = "Prev";
    prevButton.setAttribute("class", "pageButton");

    nextButton.onclick = () => {
        urlParams.set("page", String(Number(page) + 1))
        let newNextURL = `/companies/search?${urlParams}`;
        console.log(newNextURL)
        window.location.href=newNextURL
    };

    prevButton.onclick = () => {
        urlParams.set("page", String(Number(page) - 1))
        let newPrevURL = `/companies/search?${urlParams}`;
        window.location.href=newPrevURL
    };
    buttonLocation.appendChild(nextButton);
    buttonLocation.appendChild(prevButton);
}