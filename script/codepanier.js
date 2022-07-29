   // Rahoui Imane & Ait El Mahjoub Sara 2AP-G2-EMSI_Centre 
var tabPanier = Array();
function chargerPanier()
{
	panierLocal = JSON.parse(localStorage.getItem("panierLocalStorage"));
    tabPanier = panierLocal.monpanier;
  	totalHt = 0;
	var monTableau=document.getElementById("panier");
	for( var i = 0; i < tabPanier.length;i++)
    {    			
        var ligne = document.createElement("tr");
		ligne.id= i +"ligne";
		var cellule1 = document.createElement("td");
		var imgElem =  document.createElement("img");
        imgElem.setAttribute("src","../images/trash.png");
		imgElem.className = "imgpoubelle";
		imgElem.id=i+"supp";
		imgElem.onclick = function()
        { 
		    var reponse=confirm("Êtes-vous sûrs de vouloir supprimer cette article ?");

			if(reponse == true)
            {   
                var item = this.getAttribute("id");
                var pos = item.substring(0,1,1);
                supprimerDuPanier(pos);
		    }
		}
		cellule1.appendChild(imgElem);
		ligne.appendChild(cellule1);	
        for(var prop1 in tabPanier[i])
	    {
			var cellule2 = document.createElement("td");
			cellule2.innerText= tabPanier[i][prop1];
			ligne.appendChild(cellule2);	
		}
        totalHt = totalHt + tabPanier[i].prixHt ;
		monTableau.appendChild(ligne);
	}
    total = document.createElement("p");
    total.id = "totalht";
	total.className = "total";
	total.innerText = "Total :" + totalHt + " €";
    montant.appendChild(total);	
}
function supprimerDuPanier(pos)
{   
    totalHt = totalHt - tabPanier[pos].prixHt ; 
    var total = document.getElementById("totalht");
	tabPanier.splice(pos,1);
	var maLigne = document.getElementById(pos+"ligne");
    maLigne.parentNode.removeChild(maLigne);                                   
    total.innerText= "Total :" + totalHt + " €";
	panier.monpanier = tabPanier;
	localStorage.setItem("panierLocalStorage",JSON.stringify(panier));
    window.location.reload();
}