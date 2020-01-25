// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

//retrieve data
const tabsData = axios.get('https://lambda-times-backend.herokuapp.com/topics')
console.log(tabsData)

//select the entry point div
const topicsDiv = document.querySelector('.topics')

//get into the arrray and for each item in it create and append the tab
tabsData.then(response => {
    response.data.topics.forEach(item => {
        const newTab = document.createElement('div')
        newTab.classList.add('tab')
        newTab.textContent = `${item}`
        topicsDiv.appendChild(newTab)
    })
})