// search bar
const searchInput = document.getElementById("searchInput");

const namesFromDOM = document.getElementsByClassName("name");

searchInput.addEventListener("keyup", (event) => {
    const { value } = event.target;    
    
    const searchQuery = value.toLowerCase();
    
    for (const nameElement of namesFromDOM) {
        
        let name = nameElement.textContent.toLowerCase();
        
        
        if (name.includes(searchQuery)) {
            
            nameElement.style.display = "block";
        } else {
           
            nameElement.style.display = "none";
        }
    }
});