let haslo1="Carpe dijem"
haslo1=haslo1.toUpperCase();
let haslo2="";
let blendy=0;

let litery=new Array(35);
litery[0]="A";
litery[1]="Ą";
litery[2]="B";
litery[3]="C";
litery[4]="Ć";
litery[5]="E";
litery[6]="D";
litery[7]="Ę";
litery[8]="F";
litery[9]="G";
litery[10]="H";
litery[11]="I";
litery[12]="J";
litery[13]="K";
litery[14]="L";
litery[15]="Ł";
litery[16]="M";
litery[17]="N";
litery[18]="Ń";
litery[19]="O";
litery[20]="Ó";
litery[21]="P";
litery[22]="Q";
litery[23]="R";
litery[24]="S";
litery[25]="Ś";
litery[26]="T";
litery[27]="U";
litery[28]="V";
litery[29]="W";
litery[30]="X";
litery[31]="Y";
litery[32]="Z";
litery[33]="Ź";
litery[34]="Ź";
for(let i=0;i<haslo1.length ;i++)
{   
    if(haslo1.charAt(i)==" ")
        haslo2=haslo2+" ";
    else
        haslo2=haslo2+"-";
}

const wypisz=()=>
{
    document.getElementById("plansza").innerHTML=haslo2;
}

String.prototype.ustawZnak=function(miejsce,znak)
{
    console.log(miejsce);
    console.log(znak);
    if(miejsce>this.length-1)
    { 
        return this.toString();
    }
    else
    {
        return this.substr(0,miejsce) +znak+ this.substr(miejsce+1);
    }
}

const sprawdz=(nr)=>
{
    let jest=0;
    let literka=litery[nr];
    for(let i=0;i<haslo1.length;i++)
    {
        if(haslo1.charAt(i)==literka)
        {
            jest=1;
            haslo2=haslo2.ustawZnak(i,literka);
        }
    }
    if(jest==0)
    {
        let element="lit"+nr;
        blendy++;
        document.getElementById(element).style.background="#330000"
        document.getElementById(element).style.color="#C00000"
        document.getElementById(element).style.border="3px solid #C00000"     
        document.getElementById(element).style.cursor="defaults"
        document.getElementById(element).setAttribute("onclick",";");


            let obraz='<img src="img/s'+blendy+'.jpg" alt="" >';
            document.getElementById("szubienica").innerHTML=obraz;
    }
    else
    {
        let element="lit"+nr;
        document.getElementById(element).style.background="#003300"
        document.getElementById(element).style.color="#00C000"
        document.getElementById(element).style.border="3px solid #00C000"     
        document.getElementById(element).style.cursor="default"     
    }
    if(haslo1==haslo2)
    {
        document.getElementById("alfabet").innerHTML='Tak jest! Hasło jest poprawne: "'+haslo1+'<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>'
    }
    if(blendy>=9)
    {
        document.getElementById("alfabet").innerHTML='Przegrana! Poprawne haslo: "'+haslo1+'<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>'
    }

    wypisz();

}


const start=()=>
{
    let tresc_diva="";
    for(let i=0;i<35;i++)
    {
        let elent="lit"+i;
            tresc_diva=tresc_diva+'<div class="litera" onclick="sprawdz('+i+')" id="'+elent+'" >'+ litery[i]+'</div>';
        if(i%7==6)
            tresc_diva=tresc_diva+'<div style="clear:both;"></div>';
    }

    document.getElementById("alfabet").innerHTML=tresc_diva;
    wypisz();

}



window.onload=start;

