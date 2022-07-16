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
    mainText.setAttribute('id', 'backgroundText')
    mainText.innerHTML = ("HOT CHICK SWEET CHICK MAIN CHICK")
    backgroundImage.appendChild(mainText);
    
    content.appendChild(header);
    content.appendChild(backgroundImage)
    header.appendChild(item1)
    header.appendChild(item2)
    header.appendChild(item3)
    console.log(item1);
};



export default loadPage;

