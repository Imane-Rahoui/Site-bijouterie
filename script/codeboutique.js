   // Rahoui Imane & Ait El Mahjoub Sara 2AP-G2-EMSI_Centre 
var monPanier = Array();
function chargerArticles()
{
	var articles=document.getElementById("content");
    for(var i = 0; i <catalogue.length; i++)
	{   
        var article= document.createElement("div" );
		article.className = "article";
		article.id = i + "-article";
		var articleNom = document.createElement("h2" );
		articleNom.className = "nom_art";
		articleNom.innerText = catalogue[i].nom;
		article.appendChild(articleNom);
		var articleImg =document.createElement("img");
		articleImg.className = "img_art";
        articleImg.setAttribute("src", catalogue[i].image);
		article.appendChild(articleImg);		
        var articleDesc= document.createElement("div");
		articleDesc.className = "desc_art";
	    articleDesc.innerText = catalogue[i].desc;
		article.appendChild(articleDesc);
        var articlePrix=document.createElement("div");
		articlePrix.className = "prix_art";
	    articlePrix.innerText = catalogue[i].prix + " €";
		article.appendChild(articlePrix);
		var zoneCmd=document.createElement("div");
		zoneCmd.className = "cmd_art";
		var inputCmd=document.createElement("input");
		inputCmd.className = "input_art";
        inputCmd.id= i +"-qte";
		inputCmd.type ="number";
        inputCmd.value = 0;
        inputCmd.min = 0 ;
        inputCmd.max = 5 ;
		zoneCmd.appendChild(inputCmd);
        var bouton =document.createElement("button");
		bouton.className = "btn_art";
        bouton.id = i+"-cmd";
		bouton.onclick = function(){
        var item = this.getAttribute("id");
        var pos = item.substring(0,1) ;
		ajouterAuPanier(pos); 
		}
        zoneCmd.appendChild(bouton);
        article.appendChild(zoneCmd);
		articles.appendChild(article);
    }
}
function  searchDansPanier(nom){
	for(var j=0;j<monPanier.length;j++)
	{		
		if( nom.localeCompare(monPanier[j].nom)==0)
			return 1;
            
	}
	return 0;
}
function ajouterAuPanier(pos) 
{   
    if (searchDansPanier(catalogue[pos].nom))
	    alert("Article déjà commandé");
    else 
	{	
        var ident = pos +"-qte";
        var qte =document.getElementById(ident).value;
		if(qte==0)
			alert("Veuillez Choisir une quantité > 0");
		else
		{
			var articleCmd = {};
            articleCmd.nom = catalogue[pos].nom;
			articleCmd.prix = catalogue[pos].prix;
			articleCmd.qte = qte;
            articleCmd.prixHt = articleCmd.prix* articleCmd.qte;
            monPanier.push(articleCmd);
 			alert("Article commandé : "+articleCmd.nom+"  Quantité : "+articleCmd.qte+"  Prix unitaire : "+articleCmd.prix+" €  Prix HT : "+articleCmd.prixHt+" €.");             
		}
    }
}
function stockerPanier(data)
{
    var panierJSON = {};
    panierJSON.monpanier = data;
    localStorage.setItem("panierLocalStorage", JSON.stringify(panierJSON));
}
