function fontAwesomeIcon(icon_string, target_element) {
    var icon_code = icon_string;
    var target = target_element;
    var icon = document.createElement("i");
    target.appendChild(icon);
    icon.className = icon_code;
}

function showFormulary() {
    document.getElementById("new-cloth-form").style.display = "block";
}

function closeFormulary() {
    document.getElementById("new-cloth-form").style.display = "none";
    resetFormulary();
}

function resetFormulary() {
    document.getElementById("name-input").value = "";
    document.getElementById("size-select").selectedIndex = 0;
    document.getElementById("desc-input").value = "";
    document.getElementById("value-input").value = "";
}

function getFormClothName() {
    let name = document.getElementById("name-input").value;
    return name;
}

function getFormClothSize() {
    let size = document.getElementById("size-select").value;
    return size;
}

function getFormClothDesc() {
    let desc =  document.getElementById("desc-input").value;
    return desc;
}

function getFormClothValue() {
    let value =  document.getElementById("value-input").value;
    return value;
}

function sendFomulary() {
    if(getFormClothName() == "") {
        document.getElementById("form-msg").innerText = "Os Campos de Nome, Tamanho e Valor devem ser preenchidos."
    }
    else if(getFormClothSize() == "") {
        document.getElementById("form-msg").innerText = "Os Campos de Nome, Tamanho e Valor devem ser preenchidos."
    }
    else if(getFormClothValue() < 0.01) {
        document.getElementById("form-msg").innerText = "Os Campos de Nome, Tamanho e Valor devem ser preenchidos."
    }
    else {
        createCloth();
        closeFormulary();
        resetFormulary();
    }
}

var currentId = 0;

function useId() {
    currentId++;
    return currentId - 1;
}

function createCloth() {
    
    let domDiv = document.createElement("div");
    let domPname = document.createElement("p");
    let domPsize = document.createElement("p");
    let domPdesc = document.createElement("p");
    let domPprice = document.createElement("p");
    let domBbuy = document.createElement("button");
    let domBDiv = document.createElement("div");

    domDiv.className = "cloth-box";
    domPname.className = "cloth-name";
    domPsize.className = "cloth-size";
    domPdesc.className = "cloth-desc";
    domPprice.className = "cloth-price";
    domBDiv.className = "button-container";
    domBbuy.className = "cloth-buy-button";

    domPname.innerText = getFormClothName();
    domPsize.innerText = "Tamanho: " + getFormClothSize();
    domPdesc.innerText = "Descrição: " + getFormClothDesc();
    domPprice.innerText = "Valor: R$ " + String(getFormClothValue());
    domBbuy.innerText = "Comprar ";

    fontAwesomeIcon("fa-solid fa-cart-shopping", domBbuy);

    domDiv.appendChild(domPname);
    domDiv.appendChild(domPsize);
    if(getFormClothDesc() != "") {
        domDiv.appendChild(domPdesc);
    }
    domDiv.appendChild(domPprice);
    domDiv.appendChild(domBDiv);
    domBDiv.appendChild(domBbuy);

    document.getElementById("cloth-display").appendChild(domDiv);
}
