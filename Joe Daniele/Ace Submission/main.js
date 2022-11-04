const wrapper = document.querySelector(".wrapper"),
selectBtn = wrapper.querySelector(".select-btn"),
searchInp = wrapper.querySelector("input"),
options = wrapper.querySelector(".options");

let countries = ["Afrikaans", "Albanian", "Amharic", "Arabic", "Armenian","Assamese", "Aymara", 
                "Azerbaijani", "Bangla", "Basque", "Belarusian", "Bosnian", "Bulgarian", "Burmese", "Catalan", "Cebuano", "Chinese",
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
    countries.forEach(country => {
        let isSelected = country == selectedCountry ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addCountry();

function updateName(selectedLi) {

    var translations = {

        "Afrikaans": ["1. Reddingsbaadjies is vir almal beskikbaar.",
        "2. Ouers is verantwoordelik vir die grootte van hul kind se reddingsbaadjie. Reddingsbaadjie sal nie werk as die grootte te groot is nie.",
        "3. Reddingsbaadjie lener aanvaar alle verantwoordelikheid vir gebruik.",
        "4. Lener sal geen party wat betrokke is by die verspreiding van reddingsbaadjies aanspreeklik hou nie.",
        "5.Inspekteer reddingsbaadjie voor gebruik.",
        "6.Bring reddingsbaadjies terug na gebruik."],

        "Albanian":["1. Jelekët e shpëtimit janë të disponueshme për të gjithë.",
        "2. Prindërit janë përgjegjës për madhësinë e jelekut të shpëtimit të fëmijës së tyre. Jeleku i shpëtimit nuk do të funksionojë nëse madhësia është shumë e madhe.",
        "3. Huamarrësi i jelekut të shpëtimit merr përsipër të gjithë përgjegjësinë e përdorimit.",
        "4. Huamarrësi nuk do të mbajë përgjegjës asnjë palë të përfshirë në shpërndarjen e jelekëve të shpëtimit.",
        "5.Inspektoni jelekun e shpëtimit përpara përdorimit.",
        "6. Kthejini jelekët e shpëtimit pas përdorimit."],

        "Amharic": ["1. የህይወት ጃኬቶች ለሁሉም ሰው ይገኛሉ.",
        "2. ወላጆች ለልጃቸው የህይወት ጃኬት መጠን ሀላፊነት አለባቸው። መጠኑ በጣም ትልቅ ከሆነ የህይወት ጃኬት አይሰራም።",
        "3. የህይወት ጃኬት ተበዳሪው ሁሉንም የአጠቃቀም ሃላፊነት ይወስዳል.",
        "4. ተበዳሪው በህይወት ጃኬቶች ስርጭት ውስጥ የተሳተፈ ማንኛውንም አካል ተጠያቂ አይሆንም.",
        "5. ከመጠቀምዎ በፊት የህይወት ጃኬትን ይፈትሹ.",
        "6. ከተጠቀሙ በኋላ የህይወት ጃኬቶችን ይመልሱ."],

         "Arabic": ["1. سترات النجاة متاحة للجميع.",
         "2. الآباء مسؤولون عن قياس سترة نجاة أطفالهم. لن تعمل سترة النجاة إذا كان الحجم كبيرًا جدًا.",
         "3. يتحمل مقترض سترة النجاة كامل مسؤولية الاستخدام.",
         "4. لن يحاسب المقترض أي طرف يشارك في توزيع سترات النجاة.",
         "5. فحص سترة النجاة قبل الاستخدام.",
         "6.إرجاع سترات النجاة بعد الاستخدام."],

         "Armenian": ["1. Փրկարար բաճկոնները հասանելի են բոլորի համար",
        "2. Ծնողները պատասխանատվություն են կրում իրենց երեխայի փրկարար բաճկոնի չափսերի համար: Փրկարար բաճկոնը չի աշխատի, եթե չափը շատ մեծ է",
        "3. Փրկարար բաճկոն փոխառուն ստանձնում է օգտագործման ողջ պատասխանատվությունը",
        "4. Վարկառուն պատասխանատվություն չի կրի փրկարար բաճկոնների բաշխման մեջ ներգրավված որևէ կողմի",
        "5. Օգտագործելուց առաջ ստուգեք փրկարարական բաճկոնը",
        "6.Վերադարձրեք փրկարարական բաճկոնները օգտագործելուց հետո."],

         "Assamese": ["১. সকলোৰে বাবে লাইফ জেকেট উপলব্ধ।",
         "২. সন্তানৰ লাইফ জেকেটৰ আকাৰ নিৰ্ধাৰণৰ বাবে অভিভাৱক দায়বদ্ধ। আকাৰ বেছি হ’লে লাইফ জেকেটৰ কাম নহ’ব।",
         "৩. লাইফ জেকেট ঋণ লোৱা ব্যক্তিয়ে ব্যৱহাৰৰ সকলো দায়িত্ব গ্ৰহণ কৰে।",
         "৪. লাইফ জেকেট বিতৰণৰ লগত জড়িত কোনো পক্ষক ঋণ লোৱা ব্যক্তিয়ে জগৰীয়া নকৰে।",
         "৫.ব্যৱহাৰৰ পূৰ্বে লাইফ জেকেট পৰীক্ষা কৰক।",
         "৬.ব্যৱহাৰৰ পিছত লাইফ জেকেট ঘূৰাই দিয়ক।"],

         "Aymara": ["1. Chalecos salvavidas ukanakax taqinitak utji.",
         "2. Awk taykanakax wawapan chaleco salvavidas ukan tamaparjam uñjapxañapawa. Chaleco salvavidas ukax janiw irnaqkaniti tamapax sinti jach’ächi ukhaxa.",
         "3. Chaleco salvavidas mayt'irixa taqi lurawinakata apnaqañapawa.",
         "4. Mayt’irixa janiwa khiti jaqisa chalecos salvavidas ukanaka jaljañanxa juchañchkaniti.",
         "5.Janïra apnaqañkamax chaleco salvavidas uñakipaña.",
         "6.Usuña tukuyatatxa chalecos salvavidas ukanaka kutt'ayaña."],

         "Azerbaijani": ["1. Xilasedici jiletlər hər kəs üçün mövcuddur.",
         "2. Valideynlər övladlarının xilasedici jiletinin ölçüsünə cavabdehdirlər. Ölçüsü çox böyük olarsa, xilasedici jilet işləməyəcək.",
         "3. Xilasedici jileti alan şəxs istifadə üçün bütün məsuliyyəti öz üzərinə götürür.",
         "4. Borcalan xilasedici jiletlərin paylanmasında iştirak edən heç bir tərəfi məsuliyyətə cəlb etməyəcək.",
         "5. Istifadə etməzdən əvvəl xilasedici jileti yoxlayın.",
         "6.Xilasedici jiletləri istifadə etdikdən sonra qaytarın."],

         "Bambara": ["1. Life jackets bɛ sɔrɔ bɛɛ ye.",
         "2. Bangebagaw de bɛ u den ka ɲɛnamaya-ji-minɛn bonya jateminɛ. Ɲɛnamaya-ji-minɛn tɛna baara kɛ ni a bonya ka bon kojugu.",
         "3. Ɲɛnamaya jatigila jurudonna bɛ baara kɛcogo bɛɛ ta.",
         "4. Boris tɛna jalaki mɔgɔ si la min sen bɛ ɲɛnamaya jakitew tilatilali la.",
         "5.Aw bɛ ɲɛnamaya jakite sɛgɛsɛgɛ sani a ka baara kɛ ni a ye.",
         "6.Aw bɛ ɲɛnamaya jakitew segin u baara kɔfɛ."],
         
         "Basque":["1. Salbamendu-txakak guztientzako eskuragarri daude.",
         "2. Gurasoak dira euren haurraren salbamendu-txalekoaren tamainaren ardura. Salbamendu-txalekoak ez du funtzionatuko tamaina handiegia bada",
         "3. Salbamendu-jaka mailegatzaileak bere gain hartzen du erabileraren erantzukizun guztia.",
         "4. Mailegu hartzaileak ez du erantzukizunik izango salbamendu-txalekoen banaketan parte hartzen duen alderdirik",
         "5. Ikuskatu salbamendu-jaka erabili aurretik.",
         "6.Itzuli salbamendu-txakak erabili ondoren."],

         "Belarusian": ["1. Выратавальныя камізэлькі даступныя кожнаму.",
        "2. Бацькі нясуць адказнасць за памер выратавальнай камізэлькі свайго дзіцяці. Выратавальная камізэлька не падыдзе, калі памер занадта вялікі",
        "3. Пазычальнік выратавальнага камізэлькі бярэ на сябе ўсю адказнасць за выкарыстанне.",
        "4. Пазычальнік не нясе адказнасці ні з аднаго боку, які ўдзельнічае ў размеркаванні выратавальных камізэлек.",
        "5.Праверце выратавальны камізэлька перад выкарыстаннем.",
        "6.Вярніце выратавальныя камізэлькі пасля выкарыстання."],

         "Bengali": ["1. লাইফ জ্যাকেট সবার জন্য উপলব্ধ।",
         "2. পিতামাতারা তাদের সন্তানের লাইফ জ্যাকেটের আকারের জন্য দায়ী। আকার খুব বড় হলে লাইফ জ্যাকেট কাজ করবে না।",
         "3. লাইফ জ্যাকেট ঋণগ্রহীতা ব্যবহারের সমস্ত দায়িত্ব গ্রহণ করে।",
         "4. ঋণগ্রহীতা লাইফ জ্যাকেট বিতরণের সাথে জড়িত কোন পক্ষকে দায়ী করবে না।",
         "5. ব্যবহারের আগে লাইফ জ্যাকেট পরিদর্শন করুন।",
         "6. ব্যবহারের পর লাইফ জ্যাকেট ফেরত দিন।"],
        
         "Bhojpuri": ["1. सबके खातिर लाइफ जैकेट उपलब्ध बा।",
         "2. अपना बच्चा के लाइफ जैकेट के साइजिंग के जिम्मेदारी माता-पिता के होखेला। साइज बहुत बड़ होखे त लाइफ जैकेट काम ना करी।",
         "3. लाइफ जैकेट उधार लेवे वाला उपयोग के सभ जिम्मेदारी लेवेला।",
         "4. उधारकर्ता लाइफ जैकेट बांटे में शामिल कवनो पक्ष के जिम्मेदार ना ठहराई।",
         "5.उपयोग से पहिले लाइफ जैकेट के निरीक्षण करीं।",
         "6.उपयोग के बाद लाइफ जैकेट वापस कर दीं।"],

         "Bosnian":["1. Prsluci za spašavanje su dostupni svima.",
             "2. Roditelji su odgovorni za veličinu prsluka za spašavanje svog djeteta. Prsluk za spašavanje neće raditi ako je veličina prevelika.",
             "3. Zajmoprimac prsluka za spašavanje preuzima svu odgovornost za korištenje.",
             "4. Zajmoprimac neće smatrati odgovornim nijednu stranu uključenu u distribuciju prsluka za spašavanje.",
             "5. Pregledajte prsluk za spašavanje prije upotrebe.",
             "6. Vratite prsluke za spašavanje nakon upotrebe."],

         "Bulgarian": ["1. Спасителните жилетки са достъпни за всички.",
             "2. Родителите са отговорни за размера на спасителната жилетка на детето си. Спасителната жилетка няма да работи, ако размерът е твърде голям.",
             "3. Получателят на спасителната жилетка поема цялата отговорност за използването.",
             "4. Заемополучателят няма да търси отговорност от никоя страна, участваща в разпространението на спасителни жилетки.",
             "5.Проверете спасителната жилетка преди употреба.",
             "6.Върнете спасителните жилетки след употреба."],

         "Burmese": ["၁။ အသက်ကယ်အင်္ကျီများကို လူတိုင်းရနိုင်သည်။",
         "၂။ မိဘများသည် ကလေး၏ အသက်ကယ်အင်္ကျီအရွယ်အစားအတွက် တာဝန်ရှိပါသည်။ အရွယ်အစားကြီးလွန်းပါက အသက်ကယ်အင်္ကျီ အလုပ်မဖြစ်ပါ။",
         "၃။ အသက်ကယ်အင်္ကျီအငှားသည် အသုံးပြုရန် တာဝန်ရှိသည်ဟု ယူဆပါသည်။",
         "၄။ ငွေချေးသူသည် အသက်ကယ်အင်္ကျီများ ဖြန့်ဖြူးရာတွင် ပါဝင်ပတ်သက်သည့် မည်သည့်ပါတီကိုမျှ တာဝန်မယူပါ။",
         "၅။ အသက်ကယ်အင်္ကျီအသုံးမပြုမီ စစ်ဆေးပါ။",
         "၆။ အသုံးပြုပြီးနောက် အသက်ကယ်အင်္ကျီများ ပြန်ပေးသည်။"],

         "Catalan": ["1. Les armilles salvavides estan disponibles per a tothom.",
             "2. Els pares són responsables de la mida de l'armilla salvavides del seu fill. L'armilla salvavides no funcionarà si la mida és massa gran.",
             "3. El prestatari de l'armilla salvavides assumeix tota la responsabilitat de l'ús.",
             "4. El prestatari no responsabilitzarà cap part implicada en la distribució de armilles salvavides.",
             "5. Inspeccioneu l'armilla salvavides abans d'utilitzar-la.",
             "6.Retorn els armilles salvavides després de l'ús."],

         "Cebuano": ["1. Ang mga life jacket anaa alang sa tanan.",
             "2. Ang mga ginikanan ang responsable sa pagsukod sa life jacket sa ilang anak. Ang life jacket dili molihok kung ang gidak-on dako kaayo.",
             "3. Ang nanghulam sa life jacket nagbaton sa tanang responsibilidad sa paggamit.",
             "4. Ang nangutang dili manubag sa bisan unsang partido nga nalambigit sa pag-apod-apod sa mga life jacket.",
             "5. Susiha ang life jacket sa dili pa gamiton.",
             "6. Iuli ang mga life jacket human magamit."],

         "Chinese": ["1. 人人都有救生衣.",
            "2. 孩子的救生衣尺码由家长负责，如果尺码太大，救生衣将不起作用。",
            "3.救生衣借用者承担所有使用责任。",
            "4. 借款人对涉及救生衣配送的任何一方不承担任何责任。",
            "5.使用前检查救生衣。",
            "6.救生衣使用后归还。"],

         "Corsican": ["1. I giacche di salvezza sò dispunibuli per tutti.",
             "2. I genitori sò rispunsevuli di a misura di a giacca di salvezza di u so zitellu. A giacca di salvezza ùn funziona micca se a dimensione hè troppu grande. ",
             "3. U prestitu di giacca di salvezza assume tutte e rispunsabilità di l'usu.",
             "4. U borrower ùn hà micca rispunsevuli di alcuna parte implicata in a distribuzione di giacche di salvezza.",
             "5.Inspect giacca di salvezza prima di usu.",
             "6. Riturnà i giacche di salvezza dopu l'usu."],

         "Croatian": ["1. Prsluci za spašavanje dostupni su svima.",
             "2. Roditelji su odgovorni za veličinu prsluka za spašavanje svog djeteta. Prsluk za spašavanje neće funkcionirati ako je veličina prevelika.",
             "3. Posuditelj prsluka za spašavanje preuzima svu odgovornost za korištenje.",
             "4. Zajmoprimac neće smatrati odgovornom nijednu stranu uključenu u distribuciju prsluka za spašavanje.",
             "5. Pregledajte prsluk za spašavanje prije uporabe.",
             "6. Vratite prsluke za spašavanje nakon upotrebe."],

         "Czech": ["1. Záchranné vesty jsou dostupné pro každého.",
         "2. Rodiče jsou zodpovědní za velikost záchranné vesty svého dítěte. Záchranná vesta nebude fungovat, pokud je velikost příliš velká.",
         "3. Vypůjčitel záchranné vesty přebírá veškerou odpovědnost za použití.",
         "4. Dlužník neponese odpovědnost za žádnou stranu zapojenou do distribuce záchranných vest.",
         "5. Před použitím prohlédněte záchrannou vestu.",
         "6.Po použití vraťte záchranné vesty."],

         "Danish": ["1. Redningsveste er tilgængelige for alle.",
        "2. Forældre er ansvarlige for størrelsen af deres barns redningsvest. Redningsvesten fungerer ikke, hvis størrelsen er for stor.",
        "3. Låner af redningsveste påtager sig alt ansvar for brug.",
        "4. Låntager vil ikke holde nogen part, der er involveret i distributionen af redningsveste, ansvarlig.",
        "5. Efterse redningsvesten før brug.",
        "6. Returner redningsveste efter brug."],

        "Dutch": ["1. Reddingsvesten zijn voor iedereen beschikbaar.",
        "2. Ouders zijn verantwoordelijk voor de maatvoering van het reddingsvest van hun kind. Reddingsvest werkt niet als de maat te groot is.",
        "3. De lener van reddingsvesten neemt alle verantwoordelijkheid voor het gebruik op zich.",
        "4. Lener zal geen enkele partij aansprakelijk stellen die betrokken is bij de distributie van reddingsvesten.",
        "5.Inspecteer het reddingsvest voor gebruik.",
        "6.Retourneer reddingsvesten na gebruik."],

        "English": ["1. Life jackets are available for everyone.",
        "2. Parents are responsible for the sizing of their child’s life jacket. Life jacket will not work if the size is too big.",
        "3. Life jacket borrower assumes all responsibility of use.",
        "4. Borrower will not hold liable any party involved in the distribution of life jackets.",
        "5.Inspect life jacket before use.",
        "6.Return life jackets after use."], 

        "English": ["1. Life jackets are available for everyone.",
        "2. Parents are responsible for the sizing of their child's life jacket. Life jacket will not work if the size is too big.",
        "3. Life jacket borrower assumes all responsibility of use.",
        "4. Borrower will not hold liable any party involved in the distribution of life jackets.",
        "5.Inspect life jacket before use.",
        "6.Return life jackets after use."],

        "Esperanto": ["1. Savvestoj disponeblas por ĉiuj.",
        "2. Gepatroj respondecas pri la grandeco de la savvesto de sia infano. Savvesto ne funkcios se la grandeco estas tro granda.",
        "3. Prunteprenanto de savvesko prenas ĉian respondecon pri uzo.",
        "4. Prunteprenanto ne respondecos ajnan partion implikitan en la distribuado de savvestoj.",
        "5.Inspektu savveston antaŭ uzo.",
        "6.Redonu savvestojn post uzo."],

        "Estonian": ["1. Päästevestid on saadaval kõigile.",
        "2. Lapse päästevesti suuruse määramise eest vastutavad vanemad. Päästevest ei tööta, kui suurus on liiga suur.",
        "3. Päästevesti laenuvõtja võtab kogu vastutuse kasutamise eest.",
        "4. Laenaja ei vastuta päästevestide levitamisega seotud osapoolte eest.",
        "5. Kontrollige päästevesti enne kasutamist.",
        "6. Tagastage päästevestid pärast kasutamist."],

        "Filipino": ["1. Available ang mga life jacket para sa lahat.",
        "2. Responsable ang mga magulang sa pagsukat ng life jacket ng kanilang anak. Hindi gagana ang life jacket kung masyadong malaki ang sukat.",
        "3. Inaako ng nanghihiram ng life jacket ang lahat ng pananagutan sa paggamit.",
        "4. Hindi mananagot ang nanghihiram sa sinumang partido na kasangkot sa pamamahagi ng mga life jacket.",
        "5.Suriin ang life jacket bago gamitin.",
        "6. Ibalik ang mga life jacket pagkatapos gamitin."],

        "Finnish": ["1. Pelastusliivit ovat kaikkien saatavilla.",
        "2. Vanhemmat ovat vastuussa lapsensa pelastusliivien mitoituksesta. Pelastusliivi ei toimi, jos koko on liian suuri.",
        "3. Pelastusliivin lainaaja ottaa kaiken vastuun käytöstä.",
        "4. Lainaaja ei ota vastuuta ketään pelastusliivien jakeluun osallistuvaa osapuolta.",,
        "5.Tarkista pelastusliivi ennen käyttöä.",
        "6. Palauta pelastusliivit käytön jälkeen."],

        "French": ["1. Des gilets de sauvetage sont disponibles pour tout le monde.",
        "2. Les parents sont responsables de la taille du gilet de sauvetage de leur enfant. Le gilet de sauvetage ne fonctionnera pas si la taille est trop grande.",
        "3. L'emprunteur du gilet de sauvetage assume l'entière responsabilité de son utilisation.",
        "4. L'emprunteur ne tiendra pas responsable toute partie impliquée dans la distribution des gilets de sauvetage.",
        "5. Inspectez le gilet de sauvetage avant utilisation.",
        " 6. Renvoyez les gilets de sauvetage après utilisation. "],

        "Gallician": ["1. Os chalecos salvavidas están dispoñibles para todos.",
        "2. Os pais son responsables do tamaño do chaleco salvavidas dos seus fillos. O chaleco salvavidas non funcionará se o tamaño é demasiado grande.",
        "3. O prestatario do chaleco salvavidas asume toda a responsabilidade do uso.",
        "4. O prestatario non fará responsable a ningunha das partes implicadas na distribución de chalecos salvavidas.",
        "5. Inspeccionar o chaleco salvavidas antes de usalo.",
        "6. Devolver os chalecos salvavidas despois do uso."],

        "Georgian": ["1. მაშველი ჟილეტი ყველასთვის ხელმისაწვდომია.",
        "2. მშობლები პასუხისმგებელნი არიან თავიანთი შვილის მაშველი ჟილეტის ზომაზე. მაშველი ჟილეტი არ იმუშავებს, თუ ზომა ძალიან დიდია.",
        "3. მაშველი ქურთუკის მსესხებელი იღებს ყველა პასუხისმგებლობას გამოყენების შესახებ.",
        "4. მსესხებელი არ აგებს პასუხს არცერთ მხარეს, რომელიც მონაწილეობს სამაშველო ჟილეტების დარიგებაში.",
        "5. შეამოწმეთ სამაშველო ჟილეტი გამოყენებამდე.",
        "6.დააბრუნე სამაშველო ჟილეტი გამოყენების შემდეგ."],

        "German": ["1. Schwimmwesten sind für alle erhältlich.",
        "2. Die Eltern sind für die Größe der Schwimmweste ihres Kindes verantwortlich. Die Schwimmweste funktioniert nicht, wenn die Größe zu groß ist.",
        "3. Der Entleiher der Schwimmweste übernimmt die gesamte Verantwortung für die Verwendung.",
        "4. Der Leihnehmer haftet nicht für Parteien, die an der Verteilung von Schwimmwesten beteiligt sind.",
        "5.Überprüfen Sie die Schwimmweste vor Gebrauch.",
        "6.Rettungswesten nach Gebrauch zurückgeben."],

        "Greek": ["1. Τα σωσίβια είναι διαθέσιμα για όλους.",
        "2. Οι γονείς είναι υπεύθυνοι για το μέγεθος του σωσίβιου του παιδιού τους. Το σωσίβιο δεν θα λειτουργήσει εάν το μέγεθος είναι πολύ μεγάλο.",
        "3. Ο δανειολήπτης σωσίβιου γιλέκου αναλαμβάνει όλη την ευθύνη χρήσης.",
        "4. Ο δανειολήπτης δεν θα θεωρήσει υπεύθυνο κανένα μέρος που εμπλέκεται στη διανομή σωσίβων.",
        "5.Επιθεωρήστε το σωσίβιο πριν από τη χρήση.",
        "6. Επιστρέψτε τα σωσίβια μετά τη χρήση."],

        "Gujarati": ["1. લાઇફ જેકેટ દરેક માટે ઉપલબ્ધ છે.",
        "2. માતા-પિતા તેમના બાળકના લાઇફ જેકેટના કદ માટે જવાબદાર છે. જો કદ ખૂબ મોટું હોય તો લાઇફ જેકેટ કામ કરશે નહીં.",
        "3. લાઇફ જેકેટ લેનારા ઉપયોગની તમામ જવાબદારી લે છે.",
        "4. લેનારા લાઇફ જેકેટના વિતરણમાં સામેલ કોઈપણ પક્ષને જવાબદાર ઠેરવશે નહીં.",
        "5. ઉપયોગ કરતા પહેલા લાઇફ જેકેટની તપાસ કરો.",
        "6. ઉપયોગ કર્યા પછી લાઇફ જેકેટ પરત કરો."],

        "Haitian Creole": ["1. Jakèt sovtaj yo disponib pou tout moun.",
        "2. Paran yo responsab pou gwosè vès sovtaj pitit yo a. Gilet sovtaj pa pral travay si gwosè a twò gwo.",
        "3. Anprentè jakèt sovtaj asime tout responsablite pou itilize.",
        "4. Anprentè pa pral responsab okenn pati ki enplike nan distribisyon vès sovtaj yo.",
        "5.Enspekte vès sovtaj anvan ou itilize.",
        "6.Retounen vès sovtaj apre w fin itilize."],

        "Hausa": ["1. Riguna na rayuwa suna samuwa ga kowa da kowa.",
        "2. Iyaye suna da alhakin girman jaket ɗin rayuwar ɗansu. Jaket ɗin rayuwa ba zai yi aiki ba idan girman ya yi girma sosai. ",
        "3. Life jacket borrower daukan duk alhakin amfani.",
        "4. Borrower ba zai dauki alhakin duk wata ƙungiya da ke da hannu a cikin rarraba riguna na rai.",
        "5. Duba jaket ɗin rai kafin amfani.",
        "6.Mayar da jaket ɗin rai bayan amfani."],
         
        "Hawaiian":  ["1. Loaʻa nā lole ola no kēlā me kēia kanaka.",
        "2. Na nā mākua ke kuleana no ka nui ʻana o ka ʻaʻahu ola o kā lākou keiki",
        "3. Na ka mea hō'ai'ē lole ola ke kuleana o ka ho'ohana.",
        "4. ʻAʻole e hoʻopaʻa ʻia ka mea hōʻaiʻē i kekahi ʻaoʻao i pili i ka hāʻawi ʻana i nā lole ola.",
        "5. E nānā i ka lole ola ma mua o ka hoʻohana ʻana.",
        "6. E hoʻihoʻi i nā lole ola ma hope o ka hoʻohana ʻana."],

        "Hebrew": ["1. חליפות הצלה זמינות לכולם.",
        "2. הורים אחראים לגודל חגורת ההצלה של ילדם. חגורת ההצלה לא תעבוד אם המידה גדולה מדי",
        "3. שואל חגורת הצלה לוקח על עצמו את כל האחריות לשימוש.",
        "4. הלווה לא ישא באחריות לכל גורם המעורב בחלוקת חליפות הצלה.",
        "5. בדוק את חגורת ההצלה לפני השימוש.",
        "6. החזרת חליפות הצלה לאחר השימוש."],

        "Hindi": ["1. लाइफ जैकेट सभी के लिए उपलब्ध हैं।",
        "2. माता-पिता अपने बच्चे के जीवन जैकेट के आकार के लिए जिम्मेदार हैं। अगर आकार बहुत बड़ा है तो लाइफ जैकेट काम नहीं करेगा।",
        "3. लाइफ जैकेट उधारकर्ता उपयोग की सभी जिम्मेदारी लेता है।",
        "4. जीवन रक्षक जैकेट के वितरण में शामिल किसी भी पक्ष के लिए उधारकर्ता उत्तरदायी नहीं होगा।",
        "5. उपयोग करने से पहले लाइफ जैकेट का निरीक्षण करें।",
        "6. उपयोग के बाद लाइफ जैकेट लौटाएं।"],

        "Hmong": ["1. Lub tsho muaj sia muaj rau txhua tus.",
        "2. Cov niam txiv muaj lub luag haujlwm rau qhov loj me ntawm lawv tus menyuam lub tsho lub neej. lub tsho lub neej yuav tsis ua haujlwm yog tias qhov loj dhau lawm.",
        "3. Tus neeg txais lub tsho lub neej yuav luag txhua lub luag haujlwm ntawm kev siv.",
        "4. Tus neeg qiv yuav tsis tuav lub luag haujlwm ntawm ib tog neeg koom nrog kev faib cov tsho cawm neeg txoj sia.",
        "5.Nrhiav lub tsho tiv no ua ntej siv.",
        "6. Rov qab lub tsho tiv no tom qab siv."],

        "Hungarian": ["1. A mentőmellények mindenki számára elérhetőek.",
        "2. A szülők felelősek gyermekük mentőmellényének méretéért. Túl nagy méret esetén a mentőmellény nem működik.",
        "3. A mentőmellény kölcsönvevője minden felelősséget vállal a használatért.",
        "4. A kölcsönvevő nem vállal felelősséget a mentőmellények forgalmazásában részt vevő felekért.",
        "5. Használat előtt ellenőrizze a mentőmellényt.",
        "6. Használat után vigye vissza a mentőmellényeket."],

        "Icelandic": ["1. Björgunarvesti eru í boði fyrir alla.",
        "2. Foreldrar bera ábyrgð á stærð björgunarvesti barnsins. Björgunarvesti virkar ekki ef stærðin er of stór.",
        "3. Lántaki björgunarvesta ber alla ábyrgð á notkun.",
        "4. Lántaki mun ekki bera ábyrgð á neinum aðila sem kemur að dreifingu björgunarvesta.",
        "5. Skoðaðu björgunarvesti fyrir notkun.",
        "6. Skilaðu björgunarvestum eftir notkun."],

        "Igbo": ["1. Uwe mkpuchi ndụ dị maka onye ọ bụla.",
        "2. Ndị nne na nna na-ahụ maka nha uwe mkpuchi ndụ nwa ha, jaket ndụ agaghị arụ ọrụ ma ọ bụrụ na nha ahụ buru ibu. ",
        "3. Onye na-agbaziri jaket ndụ na-eburu ọrụ niile nke iji.",
        "4. Onye na-agbaziri agbaziri agaghị ejide onye ọ bụla na-etinye aka na nkesa jaket ndụ.",
        "5. Nyochaa jaket ndụ tupu ejiri ya.",
        "6. Weghachite jaket ndụ mgbe ejiri ya."],

        "Indonesian": ["1. Jaket pelampung tersedia untuk semua orang.",
        "2. Orang tua bertanggung jawab atas ukuran jaket pelampung anaknya. Jaket pelampung tidak akan berfungsi jika ukurannya terlalu besar.",
        "3. Peminjam jaket pelampung menanggung semua tanggung jawab penggunaan.",
        "4. Peminjam tidak akan bertanggung jawab kepada pihak manapun yang terlibat dalam distribusi jaket pelampung.",
        "5.Periksa jaket pelampung sebelum digunakan.",
        "6.Kembalikan jaket pelampung setelah digunakan."],

        "Irish": ["1. Tá seaicéid tarrthála ar fáil do chách.",
        "2. Tá tuismitheoirí freagrach as méid seaicéad tarrthála a bpáiste. Ní oibreoidh seaicéad tarrthála má tá an méid ró-mhór.",
        "3. Glacann iasachtaí seaicéid tarrthála gach freagracht úsáide.",
        "4. Ní bheidh an t-iasachtaí faoi dhliteanas ar aon pháirtí a bhfuil baint aige le dáileadh seaicéid tarrthála.",
        "5.Inspect seaicéad tarrthála roimh úsáid.",
        "6.Fill seaicéid tarrthála tar éis iad a úsáid."],

        "Italian": ["1. I giubbotti di salvataggio sono disponibili per tutti.",
        "2. I genitori sono responsabili delle dimensioni del giubbotto di salvataggio del proprio bambino. Il giubbotto di salvataggio non funzionerà se la taglia è troppo grande.",
        "3. Il mutuatario del giubbotto di salvataggio si assume tutta la responsabilità dell'uso.",
        "4. Il mutuatario non riterrà responsabile alcuna parte coinvolta nella distribuzione dei giubbotti di salvataggio.",
        "5. Ispezionare il giubbotto di salvataggio prima dell'uso.",
        "6. Restituire i giubbotti di salvataggio dopo l'uso."],

        "Japanese": ["1.ライフジャケットはどなたでもご利用いただけます.",
        "2. お子様のライフ ジャケットのサイズは保護者の責任です。サイズが大きすぎると、ライフ ジャケットは機能しません.",
        "3. ライフジャケットの使用は、借用者がすべての責任を負います。",
        "4. 借り手は、救命胴衣の配布に関与したいかなる当事者にも責任を負わないものとします。",
        "5.使用前にライフジャケットを点検してください。",
        "6.使用後の救命胴衣は返却してください"],

        "Javanese": ["1. Jaket pelampung kasedhiya kanggo kabeh wong.",
        "2. Wong tuwa tanggung jawab kanggo ukuran jaket pelampung anak. Jaket pelampung ora bakal bisa digunakake yen ukurane gedhe banget.",
        "3. Nyilih jaket urip nganggep kabeh tanggung jawab panggunaan.",
        "4. Peminjam ora bakal tanggung jawab marang pihak sing melu distribusi jaket urip.",
        "5. Priksa jaket pelampung sadurunge digunakake.",
        "6. Wangsulake jaket pelampung sawise digunakake."],

        "Kannada": ["1. ಲೈಫ್ ಜಾಕೆಟ್‌ಗಳು ಎಲ್ಲರಿಗೂ ಲಭ್ಯವಿದೆ.",
        "2. ತಮ್ಮ ಮಗುವಿನ ಲೈಫ್ ಜಾಕೆಟ್‌ನ ಗಾತ್ರಕ್ಕೆ ಪೋಷಕರು ಜವಾಬ್ದಾರರಾಗಿರುತ್ತಾರೆ. ಗಾತ್ರವು ತುಂಬಾ ದೊಡ್ಡದಾಗಿದ್ದರೆ ಲೈಫ್ ಜಾಕೆಟ್ ಕೆಲಸ ಮಾಡುವುದಿಲ್ಲ.",
        "3. ಲೈಫ್ ಜಾಕೆಟ್ ಎರವಲುಗಾರನು ಬಳಕೆಯ ಎಲ್ಲಾ ಜವಾಬ್ದಾರಿಯನ್ನು ತೆಗೆದುಕೊಳ್ಳುತ್ತಾನೆ.",
        "4. ಲೈಫ್ ಜಾಕೆಟ್‌ಗಳ ವಿತರಣೆಯಲ್ಲಿ ತೊಡಗಿರುವ ಯಾವುದೇ ಪಕ್ಷವನ್ನು ಸಾಲಗಾರನು ಹೊಣೆಗಾರರನ್ನಾಗಿ ಮಾಡುವುದಿಲ್ಲ.",
        "5.ಬಳಸುವ ಮೊದಲು ಲೈಫ್ ಜಾಕೆಟ್ ಅನ್ನು ಪರೀಕ್ಷಿಸಿ.",
        "6.ಬಳಸಿದ ನಂತರ ಲೈಫ್ ಜಾಕೆಟ್‌ಗಳನ್ನು ಹಿಂತಿರುಗಿಸಿ."],

        "Kazakh":  ["1. Құтқару кеудешелері барлығына қолжетімді.",
        "2. Ата-анасы баласының құтқару жилетінің өлшеміне жауапты. Өлшемі тым үлкен болса, құтқарушы кеудеше жұмыс істемейді.",
        "3. Құтқару кеудешесінің қарыз алушысы пайдаланудың барлық жауапкершілігін өзіне алады.",
        "4. Қарыз алушы құтқару кеудешелерін таратуға қатысы бар ешбір тарапты жауапқа тартпайды.",
        "5. Қолданар алдында құтқару кеудешесін тексеріңіз.",
        "6. Қолданғаннан кейін құтқару кеудешелерін қайтарыңыз."],

        "Khmer": ["1. អាវជីវិតមានសម្រាប់អ្នករាល់គ្នា។",
        "2. ឪពុកម្តាយទទួលខុសត្រូវចំពោះទំហំអាវជីវិតរបស់កូន។ អាវជីវិតនឹងមិនដំណើរការទេប្រសិនបើទំហំធំពេក។",
        "3. អ្នកខ្ចីអាវជីវិត ទទួលខុសត្រូវលើការប្រើប្រាស់ទាំងអស់។",
        "4. អ្នកខ្ចីនឹងមិនទទួលខុសត្រូវចំពោះភាគីណាមួយដែលពាក់ព័ន្ធនឹងការចែកចាយអាវជីវិតឡើយ។",
        "5. ពិនិត្យអាវជីវិតមុនពេលប្រើ",
        "6. ប្រគល់អាវជីវិតបន្ទាប់ពីប្រើរួច។"],

        "Kinyarwanda": ["1. Ikoti ry'ubuzima riraboneka kuri buri wese.",
        "2. Ababyeyi bafite inshingano zo gupima ikoti ry'ubuzima bw'umwana wabo. Ikoti ry'ubuzima ntirizakora niba ingano ari nini cyane.",
        "3. Uwagurijwe ikoti ry'ubuzima afite inshingano zose zo gukoresha.",
        "4. Uwagurijwe ntazaryozwa ishyaka iryo ari ryo ryose ryagize uruhare mu gukwirakwiza amakoti y'ubuzima.",
        "5.Tekereza ikoti ry'ubuzima mbere yo gukoreshwa.",
        "6.Garura ikoti ry'ubuzima nyuma yo gukoreshwa."],

        "Korean": ["1. Ikoti ry'ubuzima riraboneka kuri buri wese.",
        "2. Ababyeyi bafite inshingano zo gupima ikoti ry'ubuzima bw'umwana wabo. Ikoti ry'ubuzima ntirizakora niba ingano ari nini cyane.",
        "3. Uwagurijwe ikoti ry'ubuzima afite inshingano zose zo gukoresha.",
        "4. Uwagurijwe ntazaryozwa ishyaka iryo ari ryo ryose ryagize uruhare mu gukwirakwiza amakoti y'ubuzima.",
        "5.Tekereza ikoti ry'ubuzima mbere yo gukoreshwa.",
        "6.Garura ikoti ry'ubuzima nyuma yo gukoreshwa."],

        "Kyrgyz": ["1. Куткаруучу жилеттер баарына жеткиликтүү.",
        "2. Ата-эне баласынын куткаруучу жилетинин өлчөмүнө жооп берет. Өлчөмү өтө чоң болсо куткаруучу жилет иштебейт.",
        "3. Куткаруучу жилетти пайдалануучу бардык жоопкерчиликти өзүнө алат.",
        "4. Карыз алуучу куткаруучу жилеттерди таратууга катышкан эч бир тарапты жоопкерчиликке тартпайт.",
        "5.Колдонуудан мурун куткаруучу жиликти текшериңиз.",
        "6.Колдонгондон кийин куткаруу жилеттерин кайтарыңыз."],

        "Lao": ["1. ເສື້ອຊູຊີບມີໃຫ້ທຸກຄົນ.",
        "2. ພໍ່​ແມ່​ມີ​ຄວາມ​ຮັບ​ຜິດ​ຊອບ​ສໍາ​ລັບ​ການ​ຂະ​ຫນາດ​ຂອງ​ເສື້ອ​ຊູ​ຊີ​ວິດ​ຂອງ​ເດັກ​ນ້ອຍ​ຂອງ​ເຂົາ​ເຈົ້າ, ເສື້ອ​ຊູ​ຊີ​ວິດ​ຈະ​ບໍ່​ເຮັດ​ວຽກ​ຖ້າ​ຫາກ​ວ່າ​ຂະ​ຫນາດ​ໃຫຍ່​ເກີນ​ໄປ​",
        "3. ຜູ້ກູ້ຢືມເສື້ອຊູຊີບ ຮັບຜິດຊອບທັງໝົດໃນການນຳໃຊ້",
        "4. ຜູ້ກູ້ຢືມຈະບໍ່ຮັບຜິດຊອບຕໍ່ຝ່າຍໃດໆທີ່ກ່ຽວຂ້ອງກັບການແຈກຢາຍເສື້ອຊູຊີບ",
        "5. ກວດກາເສື້ອຊູຊີບກ່ອນນຳໃຊ້",
        "6.ຄືນເສື້ອຊູຊີບຫຼັງໃຊ້ແລ້ວ."],

        "Latin": ["I. Vita tunicas omnibus praesto sunt.",
        "II. Parentes responsales sunt ad iaccam vitae prolis inspectionem. Vita iaccam non laborabit si magnitudo nimis magna est",
        "3. Vita iaccam mutuum accipit omnem curam usus.",
        "4. Mutuum non tenebit partem aliquam in distributione vitae tunicas implicatam",
        "5.Inspect vitae iaccam ante usum.",
        "6.Return vita tunicas post usum."],

        "Latvian": ["1. Glābšanas vestes ir pieejamas ikvienam.",
        "2. Vecāki ir atbildīgi par sava bērna glābšanas vestes izmēra noteikšanu. Glābšanas veste nedarbosies, ja izmērs ir pārāk liels.",
        "3. Glābšanas vestes aizņēmējs uzņemas visu atbildību par lietošanu.",
        "4. Aizņēmējs neuzņems atbildību nevienu glābšanas vestu izplatīšanā iesaistīto pusi.",
        "5. Pirms lietošanas pārbaudiet glābšanas vesti.",
        "6. Atgrieziet glābšanas vestes pēc lietošanas."],

        "Lithuanian": ["1. Gelbėjimosi liemenės yra prieinamos visiems.",
        "2. Tėvai atsako už savo vaiko gelbėjimosi liemenės dydį. Gelbėjimosi liemenė neveiks, jei dydis per didelis.",
        "3. Gelbėjimosi liemenių skolininkas prisiima visą atsakomybę už naudojimą.",
        "4. Paskolos gavėjas neprisiima atsakomybės už gelbėjimosi liemenių platinimą.",
        "5. Prieš naudodami patikrinkite gelbėjimosi liemenę.",
        "6. Po naudojimo grąžinkite gelbėjimosi liemenes."],

        "Luxembourgish": ["1. Rettungsjacken si fir jiddereen verfügbar.",
        "2. D'Eltere si verantwortlech fir d'Gréisst vun der Rettungsjacket vun hirem Kand. D'Rettungsjacket funktionnéiert net wann d'Gréisst ze grouss ass.",
        "3. Rettungsjacket Prêt iwwerhëlt all Verantwortung vum Gebrauch.",
        "4. De Prêt hält keng Partei verantwortlech un der Verdeelung vu Rettungsjacken.",
        "5.Inspektéiert Rettungsjacket virum Gebrauch.",
        "6.Retour Rettungsjacken nom Gebrauch."],

        "Macedonian": ["1. Елекот за спасување се достапни за секого.",
        "2. Родителите се одговорни за големината на појасот за спасување на нивното дете. Елекот за спасување нема да работи ако големината е преголема.",
        "3. Заемопримачот на појасот за спасување ја презема целата одговорност за користење.",
        "4. Заемопримачот нема да сноси одговорност на која било страна вклучена во дистрибуцијата на елеци за спасување.",
        "5.Проверете го спасувачкиот елек пред употреба.",
        "6.Вратете ги спасувачките елеци по употреба."],

        "Malagasy": ["1. Ny akanjo fiarovan-tena dia misy ho an'ny rehetra.",
        "2. Ny ray aman-dreny no tompon'andraikitra amin'ny fampitomboana ny akanjo fiarovan-janany. Tsy mandeha ny akanjo fiarovan-tena raha lehibe loatra ny habeny.",
        "3. Ny mpindram-bola palitao dia mandray ny andraikitra rehetra amin'ny fampiasana.",
        "4. Ny mpindram-bola dia tsy tompon'andraikitra amin'ny antoko rehetra voarohirohy amin'ny fizarana palitao.",
        "5. Jereo ny palitao alohan'ny fampiasana.",
        "6. Avereno palitao fiainana aorian'ny fampiasana."],

        "Malay": ["1. Jaket keselamatan tersedia untuk semua orang.",
        "2. Ibu bapa bertanggungjawab untuk saiz jaket keselamatan anak mereka. Jaket keselamatan tidak akan berfungsi jika saiz terlalu besar.",
        "3. Peminjam jaket keselamatan memikul semua tanggungjawab penggunaan.",
        "4. Peminjam tidak akan bertanggungjawab kepada mana-mana pihak yang terlibat dalam pengedaran jaket keselamatan.",
        "5.Periksa jaket keselamatan sebelum digunakan.",
        "6. Kembalikan jaket keselamatan selepas digunakan."],

        "Malayalam":  ["1. ലൈഫ് ജാക്കറ്റുകൾ എല്ലാവർക്കും ലഭ്യമാണ്.",
        "2. കുട്ടിയുടെ ലൈഫ് ജാക്കറ്റിന്റെ വലുപ്പത്തിന് രക്ഷിതാക്കൾ ഉത്തരവാദികളാണ്. വലിപ്പം വളരെ വലുതാണെങ്കിൽ ലൈഫ് ജാക്കറ്റ് പ്രവർത്തിക്കില്ല.",
        "3. ലൈഫ് ജാക്കറ്റ് കടം വാങ്ങുന്നയാൾ ഉപയോഗത്തിന്റെ എല്ലാ ഉത്തരവാദിത്തവും ഏറ്റെടുക്കുന്നു.",
        "4. ലൈഫ് ജാക്കറ്റുകളുടെ വിതരണത്തിൽ ഉൾപ്പെട്ടിരിക്കുന്ന ഒരു കക്ഷിക്കും കടം വാങ്ങുന്നയാൾ ബാധ്യസ്ഥനായിരിക്കില്ല.",
        "5. ഉപയോഗിക്കുന്നതിന് മുമ്പ് ലൈഫ് ജാക്കറ്റ് പരിശോധിക്കുക.",
        "6. ഉപയോഗത്തിന് ശേഷം ലൈഫ് ജാക്കറ്റുകൾ തിരികെ നൽകുക."],

        "Maltese": ["1. Il-ġkieket tas-salvataġġ huma disponibbli għal kulħadd.",
        "2. Il-ġenituri huma responsabbli għad-daqs tal-ġakketta tas-salvataġġ tat-tfal tagħhom. Il-ġakketta tas-salvataġġ mhux se taħdem jekk id-daqs ikun kbir wisq.",
        "3. Min jissellef il-ġakketta tas-salvataġġ jassumi r-responsabbiltà kollha tal-użu.",
        "4. Min jissellef ma jżomm responsabbli lil xi parti involuta fid-distribuzzjoni tal-ġkieket tas-salvataġġ.",
        "5.Spezzjona l-ġakketta tas-salvataġġ qabel l-użu.",
        "6.Irritorna l-ġkieket tas-salvataġġ wara l-użu."],

        "Maori": ["1. E waatea ana nga koti ora mo te katoa.",
        "2. Ma nga matua te kawenga mo te rahi o te koti ora o ta ratau tamaiti. Ka kore e pai te koti ora mena he nui rawa te rahi.",
        "3. Ka mau i te kairewa koti ora nga kawenga katoa mo te whakamahi.",
        "4. Karekau te tangata nana te nama e mau ki tetahi taha ka uru ki te tohatoha o nga koti ora.",
        "5.Tirotirohia te koti ora i mua i te whakamahi.",
        "6.Whakahokia nga koti ora i muri i te whakamahinga."],

        "Marathi": ["1. लाईफ जॅकेट प्रत्येकासाठी उपलब्ध आहेत.",
        "2. पालक त्यांच्या मुलाच्या लाईफ जॅकेटच्या आकारासाठी जबाबदार आहेत. जर आकार खूप मोठा असेल तर लाईफ जॅकेट काम करणार नाही.",
        "3. लाईफ जॅकेट कर्जदार वापरण्याची सर्व जबाबदारी घेतो.",
        "4. लाईफ जॅकेटच्या वितरणात सहभागी असलेल्या कोणत्याही पक्षाला कर्जदार जबाबदार धरणार नाही.",
        "5. वापरण्यापूर्वी लाईफ जॅकेटची तपासणी करा.",
        "6. लाइफ जॅकेट वापरल्यानंतर परत करा."],

        "Mongolian": ["1. Аврах хантааз хүн бүрт боломжтой.",
        "2. Хүүхдийнхээ аврах хантаазны хэмжээг эцэг эх хариуцна. Хэт том хэмжээтэй аврах хантааз ажиллахгүй.",
        "3. Аврах хантааз зээлдэгч нь ашиглалтын бүх хариуцлагыг хүлээнэ.",
        "4. Зээлдэгч нь аврах хантааз тараасан этгээдэд хариуцлага хүлээхгүй.",
        "5. Хэрэглэхийн өмнө аврах хантаазыг шалгана уу.",
        "6. Аврах хантаазыг хэрэглэсний дараа буцааж өгнө үү."],

        "Nepali": ["१. लाइफ ज्याकेटहरू सबैका लागि उपलब्ध छन्।",
        "२. आमाबाबु आफ्नो बच्चाको लाइफ ज्याकेटको साइजको लागि जिम्मेवार छन्। साइज धेरै ठूलो छ भने लाइफ ज्याकेटले काम गर्दैन।",
        "3. लाइफ ज्याकेट उधारकर्ताले प्रयोगको सम्पूर्ण जिम्मेवारी लिन्छ।",
        "4. लाइफ ज्याकेटको वितरणमा संलग्न कुनै पनि पक्षलाई ऋणीले जवाफदेही बनाउँदैन।",
        "5. प्रयोग गर्नु अघि लाइफ ज्याकेट जाँच गर्नुहोस्।",
        "6. प्रयोग पछि लाइफ ज्याकेट फिर्ता गर्नुहोस्।"],

        "Norwegian":  ["1. Redningsvester er tilgjengelig for alle.",
        "2. Foreldre er ansvarlige for størrelsen på barnets redningsvest. Redningsvest vil ikke fungere hvis størrelsen er for stor.",
        "3. Låner av redningsvest påtar seg alt ansvar for bruk.",
        "4. Låntaker vil ikke holde noen part som er involvert i distribusjon av redningsvester ansvarlig.",
        "5.Inspiser redningsvest før bruk.",
        "6.Returner redningsvester etter bruk."],

       
        "Odia": ["1. ଲାଇଫ୍ ଜ୍ୟାକେଟ୍ ସମସ୍ତଙ୍କ ପାଇଁ ଉପଲବ୍ଧ |",
        "2. ପିତାମାତାମାନେ ନିଜ ପିଲାଙ୍କ ଲାଇଫ୍ ଜ୍ୟାକେଟର ଆକାର ପାଇଁ ଦାୟୀ ଅଟନ୍ତି। ଆକାର ବହୁତ ବଡ ହେଲେ ଲାଇଫ୍ ଜ୍ୟାକେଟ୍ କାମ କରିବ ନାହିଁ।",
        "3. ଲାଇଫ୍ ଜ୍ୟାକେଟ୍ orr ଣଗ୍ରହୀତା ବ୍ୟବହାରର ସମସ୍ତ ଦାୟିତ୍। ଗ୍ରହଣ କରନ୍ତି।",
        "4. life ଣଦାତା ଲାଇଫ୍ ଜ୍ୟାକେଟ୍ ବଣ୍ଟନରେ ଜଡିତ କ party ଣସି ଦଳକୁ ଦାୟୀ କରିବେ ନାହିଁ।",
        "5. ବ୍ୟବହାର ପୂର୍ବରୁ ଲାଇଫ୍ ଜ୍ୟାକେଟ୍ ଯାଞ୍ଚ କରନ୍ତୁ।",
        "6. ବ୍ୟବହାର ପରେ ଲାଇଫ୍ ଜ୍ୟାକେଟ୍ ଫେରାନ୍ତୁ |"],

        "Pashto": ["1. د ژوند جاکټونه د هرچا لپاره شتون لري.",
        "2. والدین د خپل ماشوم د ژوند جاکټ د اندازې لپاره مسؤل دي. د ژوند جاکټ به کار ونکړي که چیرې اندازه خورا لوی وي.",
        "3. د ژوند جاکټ پور اخیستونکی د کارونې ټول مسؤلیت په غاړه لري.",
        "4. پور اخیستونکی به د ژوند جاکټونو په ویش کې دخیل هیڅ اړخ مسؤل نه وي.",
        "5. د کارولو دمخه د ژوند جاکټ معاینه کړئ.",
        "6. د ژوند جاکټونه د کارولو وروسته بیرته راستانه کړئ."],
             
        "Persian": ["1. جلیقه نجات برای همه در دسترس است.",
        "2. والدین مسئول اندازه جلیقه نجات فرزند خود هستند. اگر اندازه جلیقه نجات خیلی بزرگ باشد، کار نخواهد کرد.",
        "3. وام گیرنده جلیقه نجات تمام مسئولیت استفاده را بر عهده می گیرد.",
        "4. وام گیرنده هیچ یک از طرفین دخیل در توزیع جلیقه نجات را مسئول نخواهد دانست.",
        "5. قبل از استفاده جلیقه نجات را بازرسی کنید.",
        "6. جلیقه نجات را پس از استفاده برگردانید."],
        
        "Polish": ["1. Kamizelki ratunkowe są dostępne dla każdego.",
        "2. Rodzice są odpowiedzialni za rozmiar kamizelki ratunkowej swojego dziecka. Kamizelka ratunkowa nie będzie działać, jeśli rozmiar jest za duży.",
        "3. Wypożyczający kamizelki ratunkowe przyjmuje na siebie pełną odpowiedzialność za użytkowanie.",
        "4. Pożyczkobiorca nie ponosi odpowiedzialności żadnej strony zaangażowanej w dystrybucję kamizelek ratunkowych.",
        "5.Sprawdź kamizelkę ratunkową przed użyciem.",
        "6.Zwróć kamizelki ratunkowe po użyciu."],

        "Portugese": ["1. Coletes salva-vidas estão disponíveis para todos.",
        "2. Os pais são responsáveis pelo tamanho do colete salva-vidas de seus filhos. O colete salva-vidas não funcionará se o tamanho for muito grande.",
        "3. O mutuário do colete salva-vidas assume toda a responsabilidade pelo uso.",
        "4. O Mutuário não responsabilizará qualquer parte envolvida na distribuição de coletes salva-vidas.",
        "5. Inspecione o colete salva-vidas antes de usar.",
        "6.Devolva os coletes salva-vidas após o uso."],

        "Punjabi": ["1. ਲਾਈਫ ਜੈਕਟ ਹਰ ਕਿਸੇ ਲਈ ਉਪਲਬਧ ਹਨ।",
        "2. ਮਾਤਾ-ਪਿਤਾ ਆਪਣੇ ਬੱਚੇ ਦੀ ਲਾਈਫ ਜੈਕੇਟ ਦੇ ਆਕਾਰ ਲਈ ਜ਼ਿੰਮੇਵਾਰ ਹਨ। ਜੇਕਰ ਆਕਾਰ ਬਹੁਤ ਵੱਡਾ ਹੈ ਤਾਂ ਲਾਈਫ ਜੈਕੇਟ ਕੰਮ ਨਹੀਂ ਕਰੇਗੀ।",
        "3. ਲਾਈਫ ਜੈਕੇਟ ਲੈਣ ਵਾਲਾ ਵਰਤੋਂ ਦੀ ਸਾਰੀ ਜ਼ਿੰਮੇਵਾਰੀ ਲੈਂਦਾ ਹੈ।",
        "4. ਕਰਜ਼ਦਾਰ ਲਾਈਫ ਜੈਕਟਾਂ ਦੀ ਵੰਡ ਵਿੱਚ ਸ਼ਾਮਲ ਕਿਸੇ ਵੀ ਧਿਰ ਨੂੰ ਜਵਾਬਦੇਹ ਨਹੀਂ ਠਹਿਰਾਏਗਾ।",
        "5. ਵਰਤੋਂ ਤੋਂ ਪਹਿਲਾਂ ਲਾਈਫ ਜੈਕੇਟ ਦੀ ਜਾਂਚ ਕਰੋ।",
        "6. ਵਰਤੋਂ ਤੋਂ ਬਾਅਦ ਲਾਈਫ ਜੈਕਟਾਂ ਵਾਪਸ ਕਰੋ।"],

        "Romanian": ["1. Vestele de salvare sunt disponibile pentru toată lumea.",
        "2. Părinții sunt responsabili pentru mărirea vestei de salvare a copilului lor. Vesta de salvare nu va funcționa dacă dimensiunea este prea mare.",
        "3. Împrumutatul vestei de salvare își asumă toată responsabilitatea de utilizare.",
        "4. Împrumutatul nu va trage răspunderea niciunei părți implicate în distribuirea vestelor de salvare.",
        "5. Inspectați vesta de salvare înainte de utilizare.",
        "6. Returnați vestele de salvare după utilizare."],

        "Russian": ["1. Спасательные жилеты доступны для всех.",
        "2. Родители несут ответственность за размер спасательного жилета своего ребенка. Спасательный жилет не подойдет, если размер слишком велик.",
        "3. Заемщик спасательного жилета берет на себя всю ответственность за его использование.",
        "4. Заемщик не будет привлекать к ответственности любую сторону, участвующую в распределении спасательных жилетов.",
        "5.Осмотрите спасательный жилет перед использованием.",
        "6. Верните спасательные жилеты после использования»."],

        "Samoan": ["1. E maua lava peleue ola mo tagata uma.",
        "2. O matua e nafa ma le fuaina o le peleue ola a le la tama. E le aoga le peleue ola pe a lapopoa tele.",
        "3. O le tagata nono mai le peleue ola e nafa uma le matafaioi o le faʻaaogaina.",
        "4. E le mafai e le tagata nono mai ona noatia so'o se itu e aafia i le tufatufaina atu o ofu faaola.",
        "5. Su'esu'e le peleue ola a'o le'i fa'aogaina.",
        "6. Fa'afo'i peleue ola pe a uma ona fa'aoga."],

        "Sanskrit": ["१. सर्वेषां कृते जीवनरक्षकजाकेटाः उपलभ्यन्ते।",
        "2. मातापितरौ स्वस्य बालस्य जीवनरक्षकस्य आकारस्य उत्तरदायी भवन्ति। जीवनरक्षकजाकेटस्य आकारः अतीव विशालः चेत् कार्यं न करिष्यति।",
        "3. जीवनरक्षकजाकेटऋणग्राहकः उपयोगस्य सर्वाणि उत्तरदायित्वं गृह्णाति।",
        "4. ऋणग्राहकः जीवनरक्षकजाकेटवितरणे सम्बद्धस्य कस्यापि पक्षस्य उत्तरदायी न भविष्यति।",
        "5.उपयोगात् पूर्वं जीवनरक्षकजाकेटस्य निरीक्षणं कुर्वन्तु।",
        "6.उपयोगानन्तरं जीवनरक्षकजाकेटं प्रत्यागच्छतु।"],

        "Scottish Gaelic": ["1. Tha seacaidean-beatha rim faotainn don a h-uile duine.",
        "2. Tha uallach air pàrantan airson meud seacaid-teasairginn an leanaibh aca. Chan obraich seacaid-teasairginn ma tha am meud ro mhòr.",
        "3. Bidh neach-iasaid seacaid beatha a 'gabhail ris a h-uile uallach cleachdaidh.",
        "4. Cha bhi an neach-iasaid cunntachail do phàrtaidh sam bith a tha an sàs ann an sgaoileadh sheacaidean-teasairginn.",
        "5.Sgrùd seacaid-teasairginn mus cleachdar i.",
        "6.Till seacaidean-teasairginn às dèidh an cleachdadh."],

        "Serbian": ["1. Прслуци за спасавање су доступни свима.",
        "2. Родитељи су одговорни за величину прслука за спасавање свог детета. Прслук за спасавање неће радити ако је величина превелика.",
        "3. Зајмопримац прслука за спасавање преузима сву одговорност за коришћење.",
        "4. Зајмопримац неће сматрати одговорним ниједну страну укључену у дистрибуцију прслука за спасавање.",
        "5. Прегледајте прслук за спасавање пре употребе.",
        "6. Вратите прслуке за спасавање након употребе."],

        "Shona": ["1. Mabhachi ehupenyu anowanikwa kune wese munhu.",
        "2. Vabereki ndivo vane basa rekuyera bhachi remwana wavo. Bhachi rehupenyu harishande kana saizi yakakura kwazvo.",
        "3. Mukwereti webhachi rehupenyu anotora mutoro wese wekushandisa.",
        "4. Mukwereti haazove nemhosva kune chero bato rine chekuita nekugoverwa kwemabhachi ehupenyu.",
        "5.Ongorora bhachi rehupenyu usati washandisa.",
        "6.Dzora mabhachi ehupenyu mushure mekushandisa."],

        "Sindhi": ["1. لائف جيڪٽس هر ڪنهن لاءِ دستياب آهن.",
        "2. والدين پنهنجي ٻار جي لائف جيڪٽ جي سائيز جا ذميوار آهن. لائف جيڪٽ ڪم نه ڪندي جيڪڏهن سائيز تمام وڏي آهي.",
        "3. لائف جيڪٽ قرض وٺندڙ استعمال جي سموري ذميواري قبول ڪري ٿو.",
        "4. قرضدار لائف جيڪٽس جي ورڇ ۾ ملوث ڪنهن به پارٽي کي ذميوار نه رکندو.",
        "5. استعمال ڪرڻ کان اڳ لائف جيڪٽ جو معائنو ڪريو.",
        "6. استعمال ڪرڻ کان پوءِ لائف جيڪٽس واپس ڪريو."],
        
        
        "Sinhala": ["1. ජීවිතාරක්ෂක ජැකට් සෑම කෙනෙකුටම තිබේ.",
        "2. තම දරුවාගේ ජීවිතාරක්ෂක කබායේ ප්‍රමාණයට දෙමාපියන් වගකිව යුතුය. ප්‍රමාණය ඉතා විශාල නම් ජීවිතාරක්ෂක කබාය ක්‍රියා නොකරයි.",
        "3. ජීවිතාරක්ෂක ජැකට් ණය ගැණුම්කරු භාවිතයේ සියලු වගකීම් භාර ගනී.",
        "4. ජීවිතාරක්ෂක කබා බෙදා හැරීමට සම්බන්ධ කිසිදු පාර්ශ්වයකට ණය ගැනුම්කරු වගකීමක් දරන්නේ නැත.",
        "5. භාවිතා කිරීමට පෙර ජීවිතාරක්ෂක කබාය පරීක්ෂා කරන්න.",
        "6. භාවිතා කිරීමෙන් පසු ජීවිතාරක්ෂක ජැකට් ආපසු ලබා දෙන්න."],
         
        "Slovak": ["1. Záchranné vesty sú dostupné pre každého.",
        "2. Rodičia sú zodpovední za veľkosť záchrannej vesty svojho dieťaťa. Záchranná vesta nebude fungovať, ak je veľkosť príliš veľká.",
        "3. Vypožičiavateľ záchrannej vesty preberá všetku zodpovednosť za používanie.",
        "4. Dlžník nenesie zodpovednosť za žiadnu stranu zapojenú do distribúcie záchranných viest.",
        "5.Pred použitím skontrolujte záchrannú vestu.",
        "6.Po použití vráťte záchranné vesty."],

        "Slovenian": ["1. Rešilni jopiči so na voljo vsem.",
        "2. Starši so odgovorni za velikost rešilnega jopiča svojega otroka. Rešilni jopič ne bo deloval, če je velikost prevelika.",
        "3. Izposojevalec rešilnega jopiča prevzame vso odgovornost za uporabo.",
        "4. Posojilojemalec ne bo smatral odgovornega nobene stranke, ki sodeluje pri razdeljevanju rešilnih jopičev.",
        "5.Preglejte rešilni jopič pred uporabo.",
        "6. Po uporabi vrnite rešilne jopiče."],

        "Somali": ["1. Jaakadaha nolosha ayaa diyaar u ah qof walba.",
        "2. Waalidiinta ayaa mas'uul ka ah cabbirka jaakadda badbaadada ilmahooda. Jaakada naftu ma shaqeyn doonto haddii cabbirku aad u weyn yahay.",
        "3. Amaahiyaha jaakada nolosha ayaa qaadaya dhammaan mas'uuliyadda isticmaalka.",
        "4. Amaahiyuhu mas'uul kama noqon doono dhinac kasta oo ku lug leh qaybinta jaakadaha nolosha.",
        "5. Baadh jaakada nolosha ka hor inta aan la isticmaalin.",
        "6. Soo celi jaakadaha nolosha ka dib isticmaalka."],

        "Spanish": ["1. Los chalecos salvavidas están disponibles para todos.",
        "2. Los padres son responsables del tamaño del chaleco salvavidas de su hijo. El chaleco salvavidas no funcionará si el tamaño es demasiado grande",
        "3. El prestatario del chaleco salvavidas asume toda la responsabilidad del uso.",
        "4. El prestatario no responsabilizará a ninguna de las partes involucradas en la distribución de chalecos salvavidas",
        "5. Inspeccione el chaleco salvavidas antes de usarlo.",
        "6. Devuelva los chalecos salvavidas después de usarlos."],

        "Sundanese": ["1. jaket hirup sadia pikeun dulur.",
        "2. Kolot tanggung jawab pikeun ukuran jaket hirup budakna. Jaket pelampung moal jalan upami ukuranana ageung teuing.",
        "3. peminjam jaket hirup nganggap sagala tanggung jawab pamakéan.",
        "4. Peminjam moal nanggung jawab pihak mana wae nu kalibet dina distribusi jaket hirup.",
        "5. Inspect life jacket sateuacan dianggo.",
        "6. Balikkeun jaket pelampung saatos dianggo."],

        "Swahili": ["1. Jaketi za kuokoa maisha zinapatikana kwa kila mtu.",
        "2. Wazazi wana jukumu la kupima ukubwa wa koti la maisha la mtoto wao. Jacket ya kuokoa haitafanya kazi ikiwa ukubwa ni mkubwa sana.",
        "3. Mkopaji wa koti la maisha huchukua jukumu lote la matumizi.",
        "4. Mkopaji hatawajibisha upande wowote unaohusika katika usambazaji wa jaketi za kuokoa maisha.",
        "5.Kagua jaketi la kuokoa maisha kabla ya kutumia.",
        "6.Rudisha jaketi za kuokoa maisha baada ya kutumia."],

        "Swedish": ["1. Flytvästar finns tillgängliga för alla.",
        "2. Föräldrar är ansvariga för storleken på deras barns flytväst. Flytväst fungerar inte om storleken är för stor.",
        "3. Låntagaren av flytväst tar allt ansvar för användningen.",
        "4. Låntagaren kommer inte att hålla någon part ansvarig i distributionen av flytvästar.",
        "5.Inspektera flytvästen före användning.",
        "6. Returnera flytvästar efter användning."],

        "Tajik": ["1. Куртаҳои наҷот барои ҳама дастрасанд.",
        "2. Волидайн барои андозаи куртаи наҷотбахши фарзандашон масъуланд. Агар андозааш аз ҳад калон бошад, куртаи наҷотбахш кор намекунад.",
        "3. Қарзгирандаи куртаи наҷот тамоми масъулияти истифодаро ба дӯш мегирад.",
        "4. Қарзгиранда ҳеҷ як тараферо, ки дар тақсими куртаҳои наҷот иштирок дорад, ба ҷавобгарӣ кашида наметавонист.",
        "5. Пеш аз истифода куртаи наҷотбахшро тафтиш кунед.",
        "6. Куртаҳои наҷотбахшро пас аз истифода баргардонед."],

        "Tamil": ["1. லைஃப் ஜாக்கெட்டுகள் அனைவருக்கும் கிடைக்கும்.",
        "2. தங்கள் குழந்தையின் லைஃப் ஜாக்கெட்டை அளவிடுவதற்கு பெற்றோர்கள் பொறுப்பு. அளவு மிக அதிகமாக இருந்தால் லைஃப் ஜாக்கெட் வேலை செய்யாது.",
        "3. லைஃப் ஜாக்கெட் கடன் வாங்குபவர் பயன்பாட்டின் அனைத்துப் பொறுப்பையும் ஏற்றுக்கொள்கிறார்.",
        "4. லைஃப் ஜாக்கெட்டுகள் விநியோகத்தில் ஈடுபட்டுள்ள எந்தவொரு தரப்பினரையும் கடன் வாங்குபவர் பொறுப்பேற்க மாட்டார்.",
        "5. பயன்படுத்துவதற்கு முன் லைஃப் ஜாக்கெட்டை பரிசோதிக்கவும்.",
        "6. பயன்பாட்டிற்குப் பிறகு லைஃப் ஜாக்கெட்டுகளைத் திருப்பி விடுங்கள்."],

        "Tatar": ["1. Тормыш курткалары һәркем өчен мөмкин.",
        "2. Ата-аналар баласының тормыш курткасының зурлыгы өчен җаваплы. Зурлык зур булса, тормыш курткасы эшләмәячәк.",
        "3. Тормыш курткасы заемчы куллануның барлык җаваплылыгын үз өстенә ала.",
        "4. Заемчы тормыш курткаларын таратуда катнашкан бернинди дә җаваплылыкка тартылмый.",
        "5. Куллану алдыннан тормыш курткасын карагыз.",
        "6. Кулланганнан соң тормыш курткаларын кире кайтарыгыз."],

        "Telugu": ["1. లైఫ్ జాకెట్లు అందరికీ అందుబాటులో ఉన్నాయి.",
        "2. తమ పిల్లల లైఫ్ జాకెట్ పరిమాణానికి తల్లిదండ్రులు బాధ్యత వహిస్తారు. పరిమాణం చాలా పెద్దగా ఉంటే లైఫ్ జాకెట్ పని చేయదు.",
        "3. లైఫ్ జాకెట్ రుణగ్రహీత ఉపయోగం యొక్క అన్ని బాధ్యతలను స్వీకరిస్తాడు.",
        "4. లైఫ్ జాకెట్ల పంపిణీలో పాల్గొన్న ఏ పక్షానికి రుణగ్రహీత బాధ్యత వహించడు.",
        "5. ఉపయోగించే ముందు లైఫ్ జాకెట్‌ని తనిఖీ చేయండి.",
        "6.ఉపయోగించిన తర్వాత లైఫ్ జాకెట్లను తిరిగి ఇవ్వండి."],

        "Thai": ["1. เสื้อชูชีพมีไว้สำหรับทุกคน",
        "2. ผู้ปกครองมีหน้าที่รับผิดชอบในการปรับขนาดเสื้อชูชีพของลูก เสื้อชูชีพจะไม่ทำงานหากขนาดที่ใหญ่เกินไป",
        "3. ผู้ยืมเสื้อชูชีพรับผิดชอบการใช้งานทั้งหมด",
        "4. ผู้ยืมจะไม่รับผิดชอบต่อฝ่ายใดที่เกี่ยวข้องกับการแจกจ่ายเสื้อชูชีพ",
        "5.ตรวจสอบเสื้อชูชีพก่อนใช้งาน",
        "6.คืนเสื้อชูชีพหลังใช้งาน"],
        
        "Tsonga": ["1. Ti life jacket ta kumeka eka un'wana na un'wana.",
        "2. Vatswari va na vutihlamuleri byo pima sayizi ya life jacket ya n’wana wa vona. Life jacket a yi nge tirhi loko sayizi yi ri yikulu ngopfu.",
        "3. Mudyeleki wa xiketi xo ponisa vutomi u teka vutihlamuleri hinkwabyo bya ku tirhisa.",
        "4. Mukoloti a nge khomi vutihlamuleri eka tlhelo rihi na rihi leri katsekaka eka ku hangalasiwa ka tijakete to ponisa vutomi.",
        "5.Kambela xiketi xo ponisa vutomi u nga si xi tirhisa.",
        "6.Buyisa tijakete to ponisa vutomi endzhaku ko tirhisiwa."],

        "Turkish": ["1. Can yelekleri herkes için mevcuttur.",
        "2. Çocuğunun can yeleğinin beden ölçüsünden ebeveynler sorumludur. Beden çok büyükse can yeleği çalışmaz.",
        "3. Can yeleği ödünç alan tüm kullanım sorumluluğunu üstlenir.",
        "4. Borçlu, can yeleklerinin dağıtımına dahil olan hiçbir tarafı sorumlu tutmayacaktır.",
        "5.Kullanmadan önce can yeleğini kontrol edin.",
        "6.Kullandıktan sonra can yeleklerini iade edin."],

        "Turkmen": ["1. Durmuş penjekleri hemmeler üçin elýeterlidir.",
        "2. Ene-atalar çagasynyň halas ediş eşiginiň ululygyna jogapkärdirler. Ölçegi gaty uly bolsa, durmuş kurtkasy işlemez.",
        "3. Durmuş kurtka karz alyjy ähli jogapkärçiligi öz üstüne alýar.",
        "4. Karz alyjy halas ediş eşiklerini paýlamak bilen baglanyşykly haýsydyr bir tarapy jogapkärçilik çekmez.",
        "5. Ulanylmazdan ozal durmuş kurtkasyna göz aýlaň.",
        "6. Ulanylandan soň halas ediş eşiklerini yzyna gaýtaryň."],

        "Ukranian": ["1. Рятувальні жилети доступні для всіх.",
        "2. Батьки несуть відповідальність за розмір рятувального жилета своєї дитини. Рятувальний жилет не підійде, якщо розмір надто великий.",
        "3. Позичальник рятувального жилета бере на себе всю відповідальність за використання.",
        "4. Позичальник не буде притягувати до відповідальності будь-яку сторону, залучену до розповсюдження рятувальних жилетів",
        "5. Огляньте рятувальний жилет перед використанням.",
        "6. Поверніть рятувальні жилети після використання."],

        "Urdu": ["1. لائف جیکٹس ہر ایک کے لیے دستیاب ہیں۔",
        "2۔ والدین اپنے بچے کی لائف جیکٹ کے سائز کے لیے ذمہ دار ہیں۔ لائف جیکٹ کام نہیں کرے گی اگر سائز بہت بڑا ہے۔",
        "3. لائف جیکٹ لینے والا استعمال کی تمام ذمہ داری قبول کرتا ہے۔",
        "4. قرض لینے والا لائف جیکٹس کی تقسیم میں ملوث کسی بھی فریق کو ذمہ دار نہیں ٹھہرائے گا۔",
        "5. استعمال سے پہلے لائف جیکٹ کا معائنہ کریں۔",
        "6. استعمال کے بعد لائف جیکٹس واپس کریں۔"],

        "Uyghur": ["1. قۇتقۇزۇش كىيىمى ھەممەيلەنگە تەمىنلىنىدۇ.",
        "2. ئاتا-ئانىلار بالىسىنىڭ قۇتقۇزۇش كىيىمىنىڭ چوڭ-كىچىكلىكىگە مەسئۇل بولىدۇ ، چوڭلۇقى بەك چوڭ بولسا ھايات چاپان ئىشلىمەيدۇ.",
        "3. ھايات چاپان قەرز ئالغۇچى بارلىق مەسئۇلىيەتنى ئۈستىگە ئالىدۇ.",
        "4. قەرز ئالغۇچى ھايات چاپان تارقىتىشقا قاتناشقان ھەر قانداق تەرەپنى جاۋابكارلىققا تارتمايدۇ».",
        "5. ئىشلىتىشتىن بۇرۇن قۇتقۇزۇش كىيىمىنى تەكشۈرۈڭ.",
        "6. ئىشلىتىپ بولغاندىن كېيىن قۇتقۇزۇش كىيىمىنى قايتۇرۇڭ."],

        "Uzbek":["1. Qutqaruvchi jiletlar hamma uchun mavjud.",
        "2. Ota-onalar farzandining qutqaruv ko'ylagi o'lchamiga javobgardir. Agar o'lcham juda katta bo'lsa, qutqaruv ko'ylagi ishlamaydi.",
        "3. Qutqaruvchi ko'ylagi qarz oluvchi foydalanish uchun barcha javobgarlikni o'z zimmasiga oladi.",
        "4. Qarz oluvchi qutqaruv jiletlarini tarqatishda ishtirok etuvchi tomonlarni javobgarlikka tortmaydi.",
        "5. Foydalanishdan oldin qutqaruv ko'ylagini tekshiring.",
        "6. Foydalanishdan keyin qutqaruv jiletlarini qaytaring."],

        "Vietnamese": ["1. Áo phao dành cho tất cả mọi người.",
        "2. Cha mẹ chịu trách nhiệm về kích thước của áo phao của con họ. Áo phao sẽ không hoạt động nếu kích cỡ quá lớn.",
        "3. Người mượn áo phao chịu mọi trách nhiệm sử dụng.",
        "4. Bên vay sẽ không chịu trách nhiệm với bất kỳ bên nào liên quan đến việc phân phối áo phao.",
        "5. Kiểm tra áo phao trước khi sử dụng.",
        "6 Trả lại áo phao sau khi sử dụng."],

        "Welsh": ["1. Mae siacedi achub ar gael i bawb.",
        "2. Rhieni sy'n gyfrifol am faint siaced achub eu plentyn. Ni fydd siaced achub yn gweithio os yw'r maint yn rhy fawr.",
        "3. Mae benthyciwr siaced achub yn cymryd yr holl gyfrifoldeb am ddefnydd.",
        "4. Ni fydd y benthyciwr yn atebol i unrhyw barti sy'n ymwneud â dosbarthu siacedi achub.",
        "5.Archwiliwch siaced achub cyn ei defnyddio.",
        "6.Dychwelyd siacedi achub ar ôl eu defnyddio."],

        "Xhosa": ["1. Iibhatyi zobomi ziyafumaneka kumntu wonke.",
        "2. Abazali banoxanduva lokulinganisa ibhatyi yobomi yomntwana wabo. Ijacket yobomi ayiyi kusebenza ukuba ubungakanani bukhulu kakhulu.",
        "3. Umboleki webhatyi yobomi uthatha lonke uxanduva lokusebenzisa.",
        "4. Umboleki akayi kubamba uxanduva naliphi na iqela elibandakanyekayo ekusasazeni iibhatyi zobomi.",
        "5.Hlola ibhatyi yobomi phambi kokuba uyisebenzise.",
        "6.Buyisa iibhatyi zobomi emva kokusetyenziswa."],

        "Yiddish": ["1. לעבן דזשאַקיץ זענען בנימצא פֿאַר אַלעמען.",
        "2. עלטערן זענען פאַראַנטוואָרטלעך פֿאַר די גרייס פון זייער קינד 'ס לעבן רעקל. לעבן רעקל וועט נישט אַרבעטן אויב די גרייס איז צו גרויס.",
        "3. לעבן רעקל באַראָוער אַסומז אַלע פֿאַראַנטוואָרטלעכקייט פון נוצן.",
        "4. באַראָוער וועט נישט האַלטן פאַראַנטוואָרטלעך קיין פּאַרטיי ינוואַלווד אין די פאַרשפּרייטונג פון לעבן דזשאַקיץ.",
        "5. דורכקוקן לעבן רעקל איידער נוצן.",
        "6. צוריקקומען לעבן דזשאַקיץ נאָך נוצן."],
        
        "Yoruba": ["1. Awọn jaketi igbesi aye wa fun gbogbo eniyan.",
        "2. Awọn obi ni o ni idajọ fun titobi jaketi igbesi aye ọmọ wọn. Jakẹti igbesi aye kii yoo ṣiṣẹ ti iwọn ba tobi ju. ",
        "3. Life jaketi oluya dawọle gbogbo ojuse ti lilo.",
        "4. Oluya yoo ko di oniduro eyikeyi keta lowo ninu pinpin aye Jakẹti. ",
        "5. Ṣayẹwo jaketi aye ṣaaju lilo.",
        "6. Pada awọn jaketi igbesi aye lẹhin lilo."],

        "Zulu": ["1. Amajakhethi empilo ayatholakala kuwo wonke umuntu.",
        "2. Abazali banesibopho sokukala ijakhethi yengane yabo. Ijazi lempilo ngeke lisebenze uma usayizi mkhulu kakhulu.",
        "3. Umboleki wejakhethi yokuphila uthatha wonke umthwalo wokuwusebenzisa.",
        "4. Umboleki ngeke athwale icala noma yimuphi umuntu ohililekile ekusatshalalisweni kwamajakhethi okuzivikela.",
        "5.Hlola ibhantshi lempilo ngaphambi kokulisebenzisa.",
        "6.Buyisela amajakhethi okuphila ngemva kokuwasebenzisa."],
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
