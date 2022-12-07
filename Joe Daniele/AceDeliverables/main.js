const wrapper = document.querySelector(".wrapper");
selectBtn = wrapper.querySelector(".select-btn");
searchInp = wrapper.querySelector("input");
options = wrapper.querySelector(".options");

var translations;
var langauges;

 
    fetch('prettyTranslations.json')
    .then((response) => response.json())
    .then((json) => translations = json)
    .then(() => { 

      languages = Object.keys(translations);
      addCountry();

  }
    
    );
  


function addCountry(selectedLanguage) {
    options.innerHTML = "";
    languages.forEach(language => {
        let isSelected = language == selectedLanguage ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${language}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}

function updateName(selectedLi) {

    

      searchInp.value = "";
   addCountry(selectedLi.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
    var id = selectBtn.firstElementChild.innerText;

    

    console.log(id);

    var translatedSection = document.getElementById("translation");

    if (id in translations) {
        console.log(translations[id]);
        if (translatedSection.innerText.length > 1) {
            translatedSection.innerText = "";
        }
        
        translations[id].forEach((data) =>{
        
        translatedSection.innerText += data + "\n \n"; 
        })
    }


}

searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = languages.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Sorry! Language not found</p>`;
});

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));
