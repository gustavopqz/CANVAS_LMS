//Todos os users cadastrados no Canvas
//Nesse caso selecionando pessoas pelo nome
async function atual() {
    let pageCount = 1
    let urlatual = 'https://gruponobre.instructure.com/api/v1/accounts/1/users?per_page=100&page=' + pageCount
    let response = await fetch(urlatual)
    let data = await response.json()

    for(i=0;i<100;i++){
        if(i == 99){
            console.log(i)
            i = 0
            pageCount += 1
            urlatual = 'https://gruponobre.instructure.com/api/v1/accounts/1/users?per_page=100&page=' + pageCount
            response = await fetch(urlatual)
            data = await response.json()
        }else if(!!data[i] == false){
            console.log('Acabou')
            break
        }else if(data[i].sortable_name.match(/Ana Claudia/) || data[i].sortable_name.match(/Laryza/) || data[i].sortable_name.match(/Ana Vitoria/)){
            console.log(data[i])
        }
    }
}

//Selecionando todos os cadastrados no curso 152 de comunicação profissional que não está sendo usado e mostrando no final da página para selecionar
async function atual() {
    let pageCount = 1
    let urlatual = 'https://gruponobre.instructure.com/api/v1/courses/152/users?per_page=100&page=' + pageCount
    //Trocar users por students -> Puxa todos os alunos e puxa todos sem limite de 100
    let response = await fetch(urlatual)
    let data = await response.json()
    let alunos152 = ''
    let meusalunos = document.createElement('p')

    for(i=0;i<100;i++){
        if(i == 99){
            console.log(i)
            i = 0
            pageCount += 1
            urlatual = 'https://gruponobre.instructure.com/api/v1/courses/152/users?per_page=100&page=' + pageCount
            response = await fetch(urlatual)
            data = await response.json()
        }else if(!!data[i] == false){
            console.log('Acabou')
            break
        }else{
            alunos152 += `${Number(data[i].sis_user_id)},`
        }
        meusalunos.innerHTML = alunos152
    }
    pai.append(meusalunos)
}