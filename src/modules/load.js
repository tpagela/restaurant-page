function loadPage() {
    const content = document.getElementById("content");
    const header = document.createElement("div");
    header.setAttribute('id', 'header');
    const backgroundImage = document.createElement("div");
    backgroundImage.setAttribute('id', 'background');
    
    const item1 = document.createElement('ul');
    item1.innerHTML = ("Home")
    
    const item2 = document.createElement('ul');
    item2.innerHTML = ("Menu")
    
    const item3 = document.createElement('ul');
    item3.innerHTML = ("About Us")
    
    content.appendChild(header);
    content.appendChild(backgroundImage)
    header.appendChild(item1)
    header.appendChild(item2)
    header.appendChild(item3)
    console.log(content)
};

export default loadPage;

