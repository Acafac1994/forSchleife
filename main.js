function main () {

    var cars = [
        {
            "Marke": "Mercedes",
            "Baujahr": "2000"
        },
        {
            "Marke": "BMW",
            "Baujahr": "2009"    
        },
        {
            "Marke": "VW",
            "Baujahr": "2005"    
        }
    ]
    
    for(let auto of cars){

        if(auto.Marke == "BMW"){
        console.log(auto);
    }   else {
        console.log("das ist kein BMW");

    }
        

    }
    
}

/* Zeile 6: variable erstellt mit den namen cars, und sie über das = in ein Array gepackt
mit "" einen String der angezeigt wird erstellt und und mit "" geantwortet ebenfalls durch einen String

Zeile 18: mit dem code for eine schleife erstellt und in den Klammernn (Let(anderer cod für var) of cars (mit der Einagbe von cars also unserer bestehender Variable geben wir diese in die Schleife ))


Zeile 20 if Staetments in den Klamern (auto(die neue varianle durch die for schleife) und mit den punkt wechselt er in das verzeichniss Marke) 

*/