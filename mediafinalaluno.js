//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let media = gets();

if(media>7 ){
  print('APR')
}else if(7>media && media>=5 ){
  print('REC')
}else if(media < 5) {
  print('REP');
}

