//Coloque isso na sua index

client.on('interactionCreate', interaction => {
    
    if (interaction.customId.startsWith('1')) {
        if (interaction.member.roles.cache.get("")) { //Coloque o  id do cargo
            interaction.member.roles.remove("") //Coloque o  id do cargo
            interaction.reply({ content: `\\❌ Você retirou o cargo **Rei**`, ephemeral: true })

            return;
            } 

       

            try {
              
                interaction.member.roles.add("") //Coloque o  id do cargo
                interaction.reply({ content: `\\✅ Você adquiriu o cargo **Rei** com sucesso`, ephemeral: true })
                return;

            }
            catch (er) {
                console.log(er)
            }

            
            


}});

client.on('interactionCreate', interaction => {
    
    if (interaction.customId.startsWith('2')) { 
        if (interaction.member.roles.cache.get("")) { //Coloque o  id do cargo
            interaction.member.roles.remove("") //Coloque o  id do cargo
            interaction.reply({ content: `\\❌ Você retirou o cargo **Príncipe**`, ephemeral: true })

            return;
            } 

       

            try {
              
                interaction.member.roles.add("") //Coloque o  id do cargo
                interaction.reply({ content: `\\✅ Você adquiriu o cargo **Príncipe** com sucesso`, ephemeral: true })
                return;

            }
            catch (er) {
                console.log(er)
            }

            
            


}});

client.on('interactionCreate', interaction => {
    
    if (interaction.customId.startsWith('3')) {
        if (interaction.member.roles.cache.get("")) { //Coloque o  id do cargo
            interaction.member.roles.remove("") //Coloque o  id do cargo
            interaction.reply({ content: `\\❌ Você retirou o cargo **Duque**`, ephemeral: true })

            return;
            } 

       

            try {
              
                interaction.member.roles.add("") //Coloque o  id do cargo
                interaction.reply({ content: `\\✅ Você adquiriu o cargo **Duque** com sucesso`, ephemeral: true })
                return;

            }
            catch (er) {
                console.log(er)
            }

            
            


}});

client.on('interactionCreate', interaction => {
    
    if (interaction.customId.startsWith('4')) {
        if (interaction.member.roles.cache.get("")) { //Coloque o  id do cargo
            interaction.member.roles.remove("") //Coloque o  id do cargo
            interaction.reply({ content: `\\❌ Você retirou o cargo **Nobre**`, ephemeral: true })

            return;
            } 

       

            try {
              
                interaction.member.roles.add("") //Coloque o  id do cargo
                interaction.reply({ content: `\\✅ Você adquiriu o cargo **Nobre** com sucesso`, ephemeral: true })
                return;

            }
            catch (er) {
                console.log(er)
            }

            
            


}});


//Criado por lipey
