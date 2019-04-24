class TabLink {
  constructor(tabElement){
    // assign this.tabElement to the tabElement DOM reference
    this.tabElement = tabElement;
    //debugger;

    // Get the `data-tab` value from this.tabElement and store it here
    this.tabData = this.tabElement.getAttribute("data-tab");
    //console.log(this.tabElement);
    //console.log(this.tabElement.children);
    //console.log(this.tabData)
    
    // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:    
    
    // Check to see if this.tabData is equal to 'all'
    //this.cards;

    if(this.tabData === "all"){
      // If `all` is true, select all cards regardless of their data attribute values
      this.cards = document.querySelectorAll(".card");
      //console.log(this.cards);
      //debugger;
    } else {
      //temp = document.querySelector();
      //temp = document.querySelector();
      //console.log(this.tabData)
      let temp = document.querySelector(".cards-container");
      this.cards = temp.querySelectorAll(`[data-tab=${this.tabData}]`); //it took me two hours to figure this out b/c I'm a do0rk

      // else if `all` is false, only select the cards with matching this.tabData values
      //let temp = document.getElementsByClassName("card");
      //this.cards = temp.filter(elem => elem.getAttribute('data-tab') === this.tabData);

      //debugger;
      //console.log(this.tabData);
      //let temp = document.getElementsByClassName("card");
      //this.cards = temp.forEach(function(element){
      //this.cards = document.getElementsByClassName("card").getElementsByTagName(this.tabData);
      //console.log(this.tabData);
      //this.cards = document.getElementsByTagName(this.tabData);
      //this.cards = document.getElementsByClassName("card").querySelectorAll(this.tabData);
      //});
      //let tempArray = [];
      //console.log(temp[0].getAttribute("data-tab"));
      //for (let n = 0; n < temp.length; n++){
      //  if (this.tabData === temp[n].getAttribute("data-tab")){
      //    tempArray.push(temp[n]);
      //    //console.log(this.tabData);
      //  }
      //}

      //this.cards = tempArray.
      //console.log(this.cards);
    }

    //console.log(this.cards);

     // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
    this.cards = Array.from(this.cards).map(function(card) {return new TabCard(card)});
    //Array.from(this.cards).map(function(card) {new TabCard(card)});
    console.log(this.cards);

    // Add a click event that invokes this.selectTab
    //this.tabElement.addEventListener("click", this.selectTab());
    this.tabElement.addEventListener("click", this.selectTab);
  }

  selectTab(){

    console.log("select tab");
    // Select all elements with the .tab class on them
    const tabs = document.querySelectorAll(".tab");
    
    // Iterate through the NodeList removing the .active-tab class from each element
    tabs.forEach(function(element){
      element.classList.remove(".active-tab");
    });

    // Select all of the elements with the .card class on them
    const cards = document.querySelectorAll(".card");

    // Iterate through the NodeList setting the display style each one to 'none'
    cards.forEach(function(element){
      element.style.display = "none";
    });
    
    // Add a class of ".active-tab" to this.tabElement
    this.tabElement.classList.add(".active-tab");
  
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
    this.cards.forEach(card => card.selectCard());
  }
}

class TabCard {
  constructor(cardElement){
    // Assign this.cardElement to the cardElement DOM reference
    this.cardElement = cardElement;
  }
  selectCard(){
    // Update the style of this.cardElement to display = "flex"
    //debugger;
    this.cardElement.style.display = "flex";
  }

}

/* START HERE: 

- Select all classes named ".tab" and assign that value to the tabs variable

- With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter

*/
let tabs = document.querySelectorAll(".tab");
//console.log(tabs.length);
tabs.forEach(function(element) {
  //debugger;
  return new TabLink(element);
});