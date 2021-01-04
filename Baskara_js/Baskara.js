var deltaf = (a, b, c) => (b**2) - (4*a*c);

var solucao1 = (a, b, c) => {
    return ((-b) + Math.sqrt(deltaf(a, b, c)))/ 2* a;
};

var solucao2 = (a, b, c) => {
    return ((-b) - Math.sqrt(deltaf(a, b, c)))/ 2* a;
};

var deltaAnalise = (a, b, c) => {
    delta = deltaf(a, b, c);
    if (Math.sqrt(delta) == 0){
        console.log('Delta = 0 solução unica iqual a: ' + solucao1(a, b, c));
    }

    else if (Math.sqrt(delta) > 0){
        console.log('Delta > 0 Duas soluções: ' + solucao1(a, b, c) + ' e ' + solucao2(a, b, c) );
    }

    else if (Math.sqrt(delta) < 0){
        console.log('Delta < 0 Sem soluções');
    };
};


console.log(deltaAnalise(2,9,7))