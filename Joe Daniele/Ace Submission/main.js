const wrapper = document.querySelector(".wrapper"),
selectBtn = wrapper.querySelector(".select-btn"),
searchInp = wrapper.querySelector("input"),
options = wrapper.querySelector(".options");

let language = ["Afrikaans", "Albanian", "Amharic", "Arabic", "Armenian", "Azerbaijani", "Bangla",
                 "Basque", "Belarusian", "Bosnian", "Bulgarian", "Burmese", "Catalan", "Cebuano", "Chinese",
                 "Corsican", "Croatian", "Czech", "Danish", "Dutch", "English", "Esperanto", "Estonian",
                 "Filipino", "Finnish", "French", "Gallician", "Georgian","German", "Greek", "Gujarati", "Haitian Creole",
                 "Hausa", "Hawaiian", "Hebrew", "Hindi", "Hmong", "Hungarian", "Icelandic", "Igbo",
                 "Indonesian", "Irish", "Italian", "Japanese", "Javanese", "Kannada", "Kazakh", "Khmer", "Kinyarwanda", 
                 "Korean", "Kyrgyz", "Lao", "Latin", "Lithuanian", "Luxembourgish",
                 "Macedonian", "Malagasy", "Malay", "Malayalam", "Maltese", "Maori", "Marathi", "Mongolian",
                 "Nepali", "Norwegian", "Nyanja", "Odia", "Pastho", "Persian", "Polish", "Portugese",
                 "Punjabi", "Romanian", "Russian", "Samoan", "Scottish Gaelic", "Serbian", "Shona", "Sindhi",
                 "Sinhala", "Slovak", "Slovenian", "Somali", "Southern Sotho", "Spanish", "Sundanese", "Swahili",
                 "Swedish", "Tajik", "Tamil", "Tatar", "Telugu", "Thai", "Turkish", "Turkmen", "Ukranian", 
                 "Urdu", "Uyghur", "Uzbek", "Vietnamese", "Welsh", "Western Frisian", "Xhosa",
                 "Yiddish", "Yoruba", "Zulu"];

function addCountry(selectedCountry) {
    options.innerHTML = "";
    language.forEach(country => {
        let isSelected = country == selectedCountry ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addCountry();

function updateName(selectedLi) {

    var translations = {
        "English": ["1. Life jackets are available for everyone.",
            "2. Parents are responsible for the sizing of their child’s life jacket. Life jacket will not work if the size is too big.",
            "3. Life jacket borrower assumes all responsibility of use.",
            "4. Borrower will not hold liable any party involved in the distribution of life jackets.",
            "5.Inspect life jacket before use.",
            "6.Return life jackets after use."],

        "Spanish": ["1. Los chalecos salvavidas están disponibles para todos.",
        "2. Los padres son responsables del tamaño del chaleco salvavidas de sus hijos. El chaleco salvavidas no funcionará si el tamaño es demasiado grande.",
        "3. El prestatario del chaleco salvavidas asume toda la responsabilidad del uso.",
        "4. El Prestatario no responsabilizará a ninguna de las partes involucradas en la distribución de los chalecos salvavidas.",
        "5. Inspeccione el chaleco salvavidas antes de usarlo.",
        "6. Devuelva los chalecos salvavidas después de usarlos."],


        "Arabic" : "Rules in Arabic"
      };



    searchInp.value = "";
    addCountry(selectedLi.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
    var id = selectBtn.firstElementChild.innerText;

    

    console.log(id);

    var translatedSection = document.getElementById("translation");
    var translationList = document.getElementById("translatedRules");

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
    arr = countries.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Language not found</p>`;
});

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));
