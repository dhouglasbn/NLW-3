const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    // inserir dados na tabela
     await saveOrphanage(db, {
        lat: "-27.222633", 
        lng: "-49.6555874",
        name: "Lar dos meninos",
        about: "Presta assistência a crinças de 06 a 15 anos que se encontre em situação de risco e/ ou vulnerabilidade social.",
        whatsapp: "+55 83 8161-0402",
        images: [
            "https://images.unsplash.com/photo-1590033821368-7f7f469b1561?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1595803330237-83a3a8698450?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciêcia para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h ",
        open_on_weekends: "0"
    }); 
    
    // consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages");
    console.log(selectedOrphanages);

    // consultar somente um dado da tabela
    // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"');
    // console.log(orphanage);

    // remover um dado da tabela
    // console.log(await db.run("DELETE FROM orphanages"))

})

