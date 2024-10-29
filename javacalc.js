function calculation()
{
alert("Välkommen till kalkylatorn!")

let tal1=prompt ("Ange ett tal");


let tal2=prompt ("Ange ännu ett tal");


let operator=prompt ("Ange tecknet för räknesättet du vill använda");

tal1 = parseFloat(tal1);
tal2 = parseFloat(tal2);

if (operator==="+")
  {
  let summa=tal1+tal2;
  alert("Summan är" + " " + summa);

  }

else if (operator==="-")
  {
  let differens=tal1-tal2;
  alert("Differensen är" + " " + differens);

  }

else if (operator==="/")
  {
  let kvot=tal1/tal2;
  alert("Kvoten är" + " " + kvot);

  }

else if (operator==="*")
  {
  let produkt=tal1*tal2;
  alert("Produkten är" + " " + produkt);
  
  }



else
{
alert("Beräkningen går ej att utföra. Du kan enbart ange tecknen + , - , / eller *. Vänligen försök igen.");

}

alert("Tack och hej!");

}
