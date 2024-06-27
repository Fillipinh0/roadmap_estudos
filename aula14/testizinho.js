for(var peso = 55; peso <= 80; peso += 3) {
    if(peso < 60) {
    console.log(`Voce ainda esta muito magro. so tem ${peso}Kg treine mais e retorne `);
    } else if(peso >= 60 && peso < 67) {
        console.log(`voce ja esta com ${peso}. agora nos vamos te ajudas. So nos imite.`);
    } else if(peso >= 67 && peso <= 70) {
        console.log(`Voce esta grandinho com seus ${peso}Kg, ja pode treinar sozinho... va seguir seu caminho!`)
    } else {
        console.log(`ja estou com ${peso}. to quase la`);
        console.log(`treinar! treinar! treinar! treinar!`);

    }
}