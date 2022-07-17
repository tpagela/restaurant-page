function loadPage() {

    const content = document.getElementById("content");

    const header = document.createElement("div");
    header.setAttribute('id', 'header',);

    const backgroundImage = document.createElement("div");
    backgroundImage.setAttribute('id', 'background');
    
    const item1 = document.createElement('ul');
    item1.innerHTML = ("Home")
    item1.setAttribute('class', 'tablinks');


    const item2 = document.createElement('ul');
    item2.innerHTML = ("Menu")
    item2.setAttribute('class', 'tablinks');
    
    const item3 = document.createElement('ul');
    item3.innerHTML = ("About Us")
    item3.setAttribute('class', 'tablinks');

    const mainText = document.createElement('div');
    mainText.setAttribute('id', 'backgroundText');
    mainText.innerHTML = ("HOT CHICK SWEET CHICK MAIN CHICK");
    
    const subText = document.createElement('div');
    subText.setAttribute('id', 'subText');
    subText.innerHTML = ("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate sodales arcu nec commodo. ");

    content.appendChild(header);
    content.appendChild(backgroundImage)
    header.appendChild(item1)
    header.appendChild(item2)
    header.appendChild(item3)
    backgroundImage.appendChild(mainText);
    backgroundImage.appendChild(subText);
};


export default loadPage;

