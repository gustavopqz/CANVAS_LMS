//URL'S
const url = document.URL
if(url.match('beta')){
    var homeURL = 'https://unifan.beta.instructure.com/'
    var apiSelf = 'https://unifan.beta.instructure.com/api/v1/users/self'
    var apiEnrollments = 'https://unifan.beta.instructure.com/api/v1/users/self/enrollments'
    var conversations = 'https://unifan.beta.instructure.com/api/v1/conversations'
}else{
    var homeURL = 'https://unifan.instructure.com/'
    var apiSelf = 'https://unifan.instructure.com/api/v1/users/self'
    var apiEnrollments = 'https://unifan.instructure.com/api/v1/users/self/enrollments'
    var conversations = 'https://unifan.instructure.com/api/v1/conversations'
}
const courseID = url.split('/')[4]
const courseURL = homeURL + `courses/${courseID}`
const courseLength = courseURL.length


//ID'S DE ADMINISTRADORES
const admGlobal = [175]
const admUNIFAN = []


//PÁGINA DE LOGIN
if (url.match('login/canvas')){
    //RETIRAR O BACKGROUND IMAGE CANVAS DA PÁGINA
    let wrapperLogout = document.getElementById('wrapper')
    wrapperLogout.setAttribute('id', 'wrapper-logout')

    //ALTERAR LOGIN "E-MAIL" PARA "REGISTRO ACADÊMICO"
    let labels = document.getElementsByTagName('label')
    for (i = 0; i < labels.length; i++) {
        if (labels[i].textContent == 'E-mail') {
            labels[i].innerText = 'Registro Acadêmico'
        }
    }
}else
// ----------------------------------------------------------------------------------------------------------------------------

//PÁGINA DE LOGOUT
if(url.match('logout')){
    //RETIRAR O BACKGROUND IMAGE CANVAS DA PÁGINA
    let wrapperLogout = document.getElementById('wrapper')
    wrapperLogout.setAttribute('id', 'wrapper-logout')
}
// ----------------------------------------------------------------------------------------------------------------------------

//HEADER - NAVBAR + BANNER || NAVBAR
let body = document.querySelector("body")
let application = document.querySelector("#application")
// ----------------------------------------------------------------------------------------------------------------------------

//PÁGINA PRINCIPAL
if (url == homeURL || url.match(/success/)){
    //ALTERANDO TÍTULO NA TAB DO NAVEGADOR
    let documentTitle = document.getElementsByTagName('title')
    documentTitle[0].innerText = 'UNIFAN - Canvas'
    // ----------------------------------------------------------------------------------------------------------------------------


    //CRIANDO HEADER
    let divNewHeader = document.createElement('div')
    divNewHeader.setAttribute('id', 'newHeader')

    divNewHeader.innerHTML = 
    `<div id="topLogo" class="headerDiv"> 
        <a href="${homeURL}"><img id="UNIFAN" src="https://unifan.instructure.com/users/175/files/698/preview?verifier=0zlzIhkElOy9diRAnFnuzkNTU8kyKEUmEDJKY2zE" alt="logo" width="160px"/></a>
    </div>
    <div class="headerDiv">
        <h2 id="centro"></h2>
    </div>
    <div class="headerDiv">
        <lu id="navMenu">
            <li class="navIcon"><a href="${homeURL}profile/qr_mobile_login"><img id="1478" class="navIconInside" src="https://unifan.instructure.com/users/175/files/721/preview?verifier=BNh24O6DSzD9Q9TTkCMQbpVjQTKjuDdFCsYIEuR6" alt="QR CODE.png" width="30"/><p style= "color: white;">QR</p></a></li>
            <li class="navIcon"><a href="${homeURL}profile"><img id="1287" class="navIconInside" src="https://unifan.instructure.com/users/175/files/720/preview?verifier=yJDsxKoOBWgtN5TZqBATNCOeQsxwy8w3wEPdJsWy" alt="user-top.png" width="30"/><p style= "color: white;">Perfil</p></a></li>
            <li class="navIcon"><a href="${homeURL}logout"><img id="1294" class="navIconInside" src="https://unifan.instructure.com/users/175/files/718/preview?verifier=8bwoxXNpHzPj0YU4QEgQoNpPglPtn3KeDZH8rzst" alt="sing-out-top.png" width="30"/><p style= "color: white;">Sair</p></a></li>
            <li class="navIcon"><a href="${homeURL}"><img id="1289" class="navIconInside" src="https://unifan.instructure.com/users/175/files/719/preview?verifier=PWGxn5jvAKyorhZJgdpchiNva57FVsFRe2NPfsbc" alt="home-top.png" width="30"/><p style= "color: white;">Início</p></a></li>
        </lu>
    </div>`

    let divAddSpace = document.createElement('div')
    divAddSpace.setAttribute('id', 'toAddSpace')
    divAddSpace.setAttribute('style', 'height: 55px;')

    let divMainBanner = document.createElement('div')
    divMainBanner.setAttribute('id', 'mainBanner')
    divMainBanner.innerHTML = `<img id="1418" src="https://gruponobre.instructure.com/users/180/files/1418/preview?verifier=g1eL9nh61jyhV3rcogLgh9zYlmwdDhpz2awS9qp7" alt="SITE.png" />`

    let divTopEnd = document.createElement('div')
    divTopEnd.setAttribute('id', 'topEnd')
    divTopEnd.innerHTML = `<img id="1212" src="https://gruponobre.instructure.com/users/180/files/1212/preview?verifier=asaUPkbJvOmX0ah1SVBxfpVfvoLEYQQpcY5BoeFX" alt="connection (2).png" width="30"/><p>Ensino por Aproximação Digital</p>`

    body.insertBefore(divNewHeader, application)
    body.insertBefore(divAddSpace, application)
    body.insertBefore(divMainBanner, application)
    body.insertBefore(divTopEnd, application)
    // ----------------------------------------------------------------------------------------------------------------------------


    //ADICIONANDO NOME DO ALUNO NA NAVBAR
    async function nameOnTop() {
        const response = await fetch(apiSelf)
        const data = await response.json()
        document.getElementById('centro').innerHTML = data.name
    }
    nameOnTop()
    // -----------------------------------------------------------------------------------------------------------------------------


    //NOTIFICAÇÃO DE MENSAGENS NÃO LIDAS NO CANVAS MAIL
    async function unreadMessages(){
        let response = await fetch(conversations)
        let data = await response.json()
        
        let unread = 0
        for(index in data){
            if(data[index].workflow_state == 'unread'){
                unread += 1
            }
        }
        if(unread > 0){
            let mainNotification = document.createElement('div')
            mainNotification.setAttribute('id', 'mainNotification')
            mainNotification.innerHTML = 
            `<div id="mailNotification">
            <div id="titleNotification"><div id="imageNotification"><img src="https://gruponobre.instructure.com/users/180/files/2336/preview?verifier=fgYj7iRYjtefkzMwSNliTS7BsKjmB9TgjIXK2Lkm" alt="msg" width="20px"></div><p id="messageNotification"></p></div>
                <a href="${homeURL}conversations" id="buttonNotification">Visualizar mensagens</a>
            </div>`

            let dashboard = document.getElementById('dashboard')
            dashboard.insertAdjacentElement('beforebegin', mainNotification)

            let messageNotification = document.getElementById('messageNotification')
            if(unread == 1){
                messageNotification.innerHTML = `<b>Canvas Mail. </b>Você tem ${unread} mensagem não lida!`
            }else{
                messageNotification.innerHTML = `<b>Canvas Mail. </b>Você tem ${unread} mensagens não lidas!`
            }
        }
    }
    unreadMessages()
    // -----------------------------------------------------------------------------------------------------------------------------


    //ADICIONANDO FAIXA DE ATALHOS
    let shortcuts = document.createElement('div')
    shortcuts.setAttribute('id', 'shortcuts')
    shortcuts.innerHTML = 
    `<h2 id="shortcutsTitle">LINKS RÁPIDOS</h2>
        <div id="divCards">
            <div class="card">
                <h3>DISCIPLINAS</h3>
                <img id="2352" src="https://unifan.instructure.com/users/175/files/729/preview?verifier=42cvzng42yFtXXYOL4WzTd0KxJyAEqLBdp1Z4iUc" alt="disciplinas.png"/>
                <button onClick="window.location.href='${homeURL}courses'">Acessar</button></a>
            </div>
            <div class="card">
                <h3>CHAT TÉCNICO</h3>
                <img id="1241" src="https://unifan.instructure.com/users/175/files/730/preview?verifier=N3oB5W2MukCUztvvjI2HOCW8H64M9C02wlrsqyyw" alt="chat tecnico.png"/>
                <button onClick="chatTecnico()">Acessar</button></a>
            </div>
            <div class="card">
                <h3>CALENDÁRIO</h3>
                <img id="1200" src="https://unifan.instructure.com/users/175/files/728/preview?verifier=gicm6LK99gCetlOU8VYYoe2ElLDSgzWH50at05fo" alt="calendar-faixa.png"/>
                <a href="${homeURL}calendar"><button>Acessar</button></a>
            </div>
            <div class="card">
                <h3>MEU DRIVE</h3>
                <img id="1196" src="https://unifan.instructure.com/users/175/files/727/preview?verifier=R3P2vEaJHZdqQyzyA8AFfUVVhlE5FpYdWFrfaXbP" alt="box-faixa.png"/>
                <a href="${homeURL}files"><button>Acessar</button></a>
            </div>
            <div class="card">
                <h3>COORD. DE CURSO</h3>
                <img id="1243" src="https://unifan.instructure.com/users/175/files/726/preview?verifier=Ikytwpe5gXxow2qpQdI9Zloa3nXIHo5RrmgoVZon" alt="colegas.png" />
                <a href="${homeURL}courses/149/pages/coordenadores-de-curso"><button>Acessar</button></a>
            </div>
            <div class="card">
                <h3>CAIXA DE ENTRADA</h3>
                <img id="1198" src="https://unifan.instructure.com/users/175/files/725/preview?verifier=2kyNFa2A1jPjIVKG55ae5zBnHlYnz0AIuKukehmV" alt="mail-faixa.png" />
                <a href="${homeURL}conversations"><button>Acessar</button></a>
            </div>
            <div class="card">
                <h3>MINHA BIBLIOTECA</h3>
                <img id="1239" src="https://unifan.instructure.com/users/175/files/724/preview?verifier=jRj2LcViCKwpaC3UIx5Kv83FW0guLJa7dVgMyFCn" alt="biblioteca virtual.png" />
                <button id="biblioteca" onClick="minhaBiblioteca()">Acessar</button>
            </div>
        </div>`

    document.querySelector('#main').append(shortcuts)
    // -----------------------------------------------------------------------------------------------------------------------------

    
    //ALTERAÇÕES NA LISTA DE TAREFAS DA PÁGINA INICIAL 
    //TROCAR A LISTA DE TAREFAS DE LUGAR E FAZER FICAR MAIOR VISUALMENTE
    let tasks = document.getElementById('right-side-wrapper')
    let tasksCopy = tasks.outerHTML
    tasks.remove()
    document.querySelector('#shortcuts').insertAdjacentHTML('afterend', tasksCopy)
    tasks = document.getElementById('right-side-wrapper')
    tasks.style.width = '100%'
    tasks.style.marginBottom = '3%'
    tasks.style.display = 'block'
    // -----------------------------------------------------------------------------------------------------------------------------


    //NOTIFICAÇÃO DE QUE NÃO HÁ DISCIPLINA DISPONÍVEL NO MOMENTO
    //USAR TRY CATCH POIS SE A NOTIFICAÇÃO NÃO EXISTIR O PASS NÃO RETORNA ERRO
    window.addEventListener('load', ()=>{
        try {
            if(document.querySelector('.ic-notification__title').textContent.match('Bem-vindo')){
                document.querySelector('.notification_message').innerHTML = `Você finalizou todas as disciplinas do semestre atual. Para visualizar todas as suas disciplinas finalizadas <a href="${homeURL}courses">clique aqui</a>.`
            } 
        } catch (error) {
            //PASS
        }
    })
    // -----------------------------------------------------------------------------------------------------------------------------
}
//DEMAIS PÁGINAS
else if (!url.match(/login/) && !url.match(/logout/)){
    let divNewHeader = document.createElement('div')
    divNewHeader.setAttribute('id', 'newHeader')
    divNewHeader.innerHTML = 
    `<div id="topLogo" class="headerDiv"> 
        <a href="${homeURL}"><img id="UNIFAN" src="https://unifan.instructure.com/users/175/files/698/preview?verifier=0zlzIhkElOy9diRAnFnuzkNTU8kyKEUmEDJKY2zE" alt="logo" width="160px"/></a>
    </div>
    <div class="headerDiv">
        <h2 id="centro"></h2>
    </div>
    <div class="headerDiv">
        <lu id="navMenu">
        <li class="navIcon"><a href="${homeURL}profile/qr_mobile_login"><img id="1478" class="navIconInside" src="https://unifan.instructure.com/users/175/files/721/preview?verifier=BNh24O6DSzD9Q9TTkCMQbpVjQTKjuDdFCsYIEuR6" alt="QR CODE.png" width="30"/><p style= "color: white;">QR</p></a></li>
        <li class="navIcon"><a href="${homeURL}profile"><img id="1287" class="navIconInside" src="https://unifan.instructure.com/users/175/files/720/preview?verifier=yJDsxKoOBWgtN5TZqBATNCOeQsxwy8w3wEPdJsWy" alt="user-top.png" width="30"/><p style= "color: white;">Perfil</p></a></li>
        <li class="navIcon"><a href="${homeURL}logout"><img id="1294" class="navIconInside" src="https://unifan.instructure.com/users/175/files/718/preview?verifier=8bwoxXNpHzPj0YU4QEgQoNpPglPtn3KeDZH8rzst" alt="sing-out-top.png" width="30"/><p style= "color: white;">Sair</p></a></li>
        <li class="navIcon"><a href="${homeURL}"><img id="1289" class="navIconInside" src="https://unifan.instructure.com/users/175/files/719/preview?verifier=PWGxn5jvAKyorhZJgdpchiNva57FVsFRe2NPfsbc" alt="home-top.png" width="30"/><p style= "color: white;">Início</p></a></li>
        </lu>
    </div>`
    
    body.insertBefore(divNewHeader, application)
    // ----------------------------------------------------------------------------------------------------------------------------
}
// -----------------------------------------------------------------------------------------------------------------------------


//VARIÁVEL GLOBAL DO CENTRO DA NAVBAR
let centro = document.getElementById('centro')
// -----------------------------------------------------------------------------------------------------------------------------


//PÁGINAS DE CURSOS
if (url.match(/courses/) && url.length == courseLength){
    //BLOCOS PARA ACESSOS DENTRO DA DISCIPLINA
    let frontPage = document.createElement('div')
    frontPage.setAttribute('id', 'frontPage')
    frontPage.innerHTML =
        `<a class="courseIcon" href="${courseURL}/modules">
        <img id="1346"
            src="https://gruponobre.instructure.com/users/180/files/1346/preview?verifier=wzsB3ThdEt1iHUiRChDxpRujuXXN84PckeAUYFXQ"
            alt="conteudo online.png" />
        <p>CONTEÚDO ONLINE</p>
        </a>
        <a class="courseIcon" href="${courseURL}/assignments">
            <img id="1499" 
                src="https://gruponobre.instructure.com/users/180/files/1499/preview?verifier=lLlCIOrNHZzZGiOHTjz8Np9sSeoOsZmA3smgD1RZ" 
                alt="simulado.png" />
            <p>EXERCÍCIOS E AVALIAÇÕES</p>
        </a>
        <a class="courseIcon" href="${courseURL}/discussion_topics">
            <img id="1343"
                src="https://gruponobre.instructure.com/users/180/files/1343/preview?verifier=IAIsvvecAhb3p4Cs5XZEyau3d5nwb8YOuLihenXN"
                alt="forum.png" />
            <p>FÓRUM</p>
        </a>
        <a class="courseIcon" href="${courseURL}/external_tools/125">
            <img id="1342"
                src="https://gruponobre.instructure.com/users/180/files/1342/preview?verifier=MbS5YhF1YWwKxwecKMdaeGztSKTDOPWt4lHbT3F9"
                alt="chat disciplina.png" />
            <p>SALA DIGITAL</p>
        </a>
        <a class="courseIcon" href="${courseURL}/conferences">
            <img id="1341"
                src="https://gruponobre.instructure.com/users/180/files/1341/preview?verifier=jzpU8SEDojXQzqLh8cQ11NS4ltJQsngvUskW5SVX"
                alt="tutoria online (2).png" />
            <p>TUTORIA ONLINE</p>
        </a>
        <a class="courseIcon" href="${homeURL}conversations?context_id=course_149&user_id=406&user_name=MARILIA%20PONDE%20FERREIRA%20SUZARTE#filter=type=inbox">
        <img id="1791" 
            src="https://gruponobre.instructure.com/users/180/files/1791/preview?verifier=G9kkDZ7i6fd5OqpNgBtTLFdzmiic509mbzGFxgv8" 
            alt="teacher.png" />
            <p>PROFESSOR</p>
        </a>
        <a class="courseIcon" href="${courseURL}/grades">
        <img  
            src="https://gruponobre.instructure.com/users/180/files/2310/preview?verifier=yCX2SKuBnO0vhmZ1LjUgrq5WfS0tPTwfwjYLFAFL"
            alt="boletim.png" />
            <p>BOLETIM</p>
        </a>
        <hr id="divider">`

    document.getElementById('content-wrapper').appendChild(frontPage)
    // -----------------------------------------------------------------------------------------------------------------------------


    //VERIFICAÇÃO PARA PROFESSORES E ADM'S TEREM ACESSO AOS MENUS
    async function userVerification(){
        const response = await fetch(apiSelf)
        let data = await response.json()

        if (admGlobal.indexOf(data.id) != -1 || admUNEF.indexOf(data.id) != -1){
            //MOSTRAR MENUS ADMINISTRADORES
            document.querySelector("#sticky-container").style.display = 'block'
            document.querySelector("#main").style.marginLeft = '192px'
            document.querySelector('.with-right-side #right-side-wrapper').style.display = 'block'
            //TROCAR O TERMO "BIG BLUE BUTTON" POR "TUTORIAS ONLINE"
            document.querySelector('.conferences').textContent = 'Tutorias online'
        }else{
            //ESCONDER BOTAO SANDUÍCHE QUE FAZ TOGGLE COM MENU ADMINISTRADOR
            document.querySelector('.ic-app-nav-toggle-and-crumbs').style.display = 'none'
        }
    }
    userVerification() //EXECUÇÃO DA FUNÇÃO ACIMA
    // -----------------------------------------------------------------------------------------------------------------------------

    
    //BOTÕES DE CRIAÇÃO DE AVALIAÇÕES E ATIVIDADES INDIVIDUAIS
    let aside = document.getElementById('right-side')
    let eventsList = document.querySelector('.events_list')
    let createTest = document.createElement('button')
    createTest.innerHTML = `<p style="margin:0;"><img src="https://gruponobre.instructure.com/users/180/files/1827/preview?verifier=gXDesXsGxEI7k2RzT6WlkQR3Npy2C1ZYlB8wfFjD" width="20px" />&nbspCriar uma avaliação</p>`
    createTest.setAttribute('id', 'createTest')
    createTest.setAttribute('onClick', `window.location.href = '${url}' + "/quizzes"`)
    aside.insertBefore(createTest, eventsList)

    let createExercise = document.createElement('button')
    createExercise.innerHTML = `<p style="margin:0;"><img src="https://gruponobre.instructure.com/users/180/files/1828/preview?verifier=kQOZagiyFqzJgnPAeho9nRP6LIvRBlElnFNn8pVz" width="20px" />&nbspCriar uma ativitdade individual</p>`
    createExercise.setAttribute('id', 'createExercise')
    createExercise.setAttribute('onClick', `window.location.href = '${url}' + "/assignments"`)
    aside.insertBefore(createExercise, eventsList)
    // -----------------------------------------------------------------------------------------------------------------------------
}else
// -----------------------------------------------------------------------------------------------------------------------------

//PÁGINA DE QUIZZES
//RETORNAR À HOME DO CURSO
if(url.match('quizzes')){
    centro.innerHTML = `<a id="courseReturnButton" href="${courseURL}">➤ RETORNAR À PÁGINA PRINCIPAL DA DISCIPLINA</a>`
}else
// -----------------------------------------------------------------------------------------------------------------------------


//PÁGINA DE CONTEÚDO ONLINE
if(url.match('modules') && url.length == courseLength + 8){
    //TROCAR ÍCONES
    let modulesIcons = document.querySelectorAll('.type_icon')
    for(i=0;i<modulesIcons.length;i++){
        if(modulesIcons[i].attributes['title'].value == 'Página'){
            modulesIcons[i].children[1].innerHTML = '<img id="1822" src="https://unifan.instructure.com/users/175/files/735/preview?verifier=v5pvRX5FVP3YgsoETv9fgSeUlsICLThxJPhipDG6" alt="webpage2" />'
        }else if(modulesIcons[i].attributes['title'].value == 'URL externa'){
            modulesIcons[i].children[1].innerHTML = '<img id="1820" src="https://unifan.instructure.com/users/175/files/737/preview?verifier=yPnUCbmHWoHR9FfXkGNdwby24HEp8869T7s8xdhB" alt="videoaula" />'
        }else if(modulesIcons[i].attributes['title'].value == 'Anexo'){
            modulesIcons[i].children[1].innerHTML = '<img id="1815" src="https://unifan.instructure.com/users/175/files/738/preview?verifier=2ngZFDidkIs6f7WxpssJyR0Ohc4kJpLqrTH7a7VG" alt="book" />'
        }else if(modulesIcons[i].attributes['title'].value == 'Subcabeçalho do módulo de contexto'){
            modulesIcons[i].children[1].innerHTML = '<img id="1823" src="https://unifan.instructure.com/users/175/files/736/preview?verifier=gUVJBbMOCsOGVShsFJdLp4Fu2ReOu5aTnUYOOoDy" alt="playlist" />'
            document.querySelectorAll('.ig-type-icon')[i].style.display = 'block'
            document.querySelectorAll('.item_name')[i].style.marginLeft = '2.3%'
        }
    }
    // -----------------------------------------------------------------------------------------------------------------------------


    //RETORNAR À HOME DO CURSO
    centro.innerHTML = `<a id="courseReturnButton" href="${courseURL}">➤ RETORNAR À PÁGINA PRINCIPAL DA DISCIPLINA</a>`
    // -----------------------------------------------------------------------------------------------------------------------------
}else
// -----------------------------------------------------------------------------------------------------------------------------

//CONTEÚDOS DA DISCIPLINA
if(url.match('module_item')){
    //RETORNAR À PÁGINA DE COUTEÚDO ONLINE
    centro.innerHTML = `<a id="courseReturnButton" href="${courseURL}/modules">➤ RETORNAR AO CONTEÚDO ONLINE</a>`
    // -----------------------------------------------------------------------------------------------------------------------------


    //RETIRAR NOME DO LIVRO DIGITAL E DOWNLOAD
    try {
        document.querySelector('#content h2').style.display = 'none'
        document.querySelector('#content div').style.display = 'none'
    } catch (error) {
        //PASS
    }
    // -----------------------------------------------------------------------------------------------------------------------------
}else

if(url.match('items')){
    //RETORNAR À PÁGINA DE COUTEÚDO ONLINE
    centro.innerHTML = `<a id="courseReturnButton" href="${courseURL}/modules">➤ RETORNAR AO CONTEÚDO ONLINE</a>`
    // -----------------------------------------------------------------------------------------------------------------------------
}else
// -----------------------------------------------------------------------------------------------------------------------------


//PÁGINA DE EXERCÍCIOS
if(url.match('assignments') && url.length == courseLength + 12){
    //ADICIONAR INSTRUÇÕES NO TOPO
    let newParent = document.querySelector('#main')
    let newChildren = document.querySelector('#not_right_side')
    let instructionBox = document.createElement('div')
    instructionBox.setAttribute('id','instructionBox')
    instructionBox.innerHTML = `<div id=instructionTitle>
    <img id="1829" src="https://gruponobre.instructure.com/users/180/files/1829/preview?verifier=PaqkJlgcYQp4izwHK6wsEg188O1w0AHauPJFLGNY" alt="instructions2" width="35px"/>
    <h3>INSTRUÇÕES</h3>
    </div>
    <div ID="instructionContent">
        <P CLASS="instruction"><img id="1827" src="https://gruponobre.instructure.com/users/180/files/1827/preview?verifier=gXDesXsGxEI7k2RzT6WlkQR3Npy2C1ZYlB8wfFjD" alt="quiz" width="25px"/> <B>EXERCÍCIOS NÃO AVALIATIVOS:</B><BR>&emsp;&emsp;&emsp;•REALIZADOS PARA PRÁTICA DO CONTEÚDO.</P>
        <P CLASS="instruction"><img id="1827" src="https://gruponobre.instructure.com/users/180/files/1827/preview?verifier=gXDesXsGxEI7k2RzT6WlkQR3Npy2C1ZYlB8wfFjD" alt="quiz" width="25px"/> <B>SIMULADO:</B> <BR>&emsp;&emsp;&emsp;•DATA: ATÉ 07/12(23:59)<BR>&emsp;&emsp;&emsp;•PONTUAÇÃO: ATÉ 1 (UM) PONTO.</P>
        <P CLASS="instruction"><img id="1828" src="https://gruponobre.instructure.com/users/180/files/1828/preview?verifier=kQOZagiyFqzJgnPAeho9nRP6LIvRBlElnFNn8pVz" alt="atividade individual2" width="25px"/> <B>ATIVIDADE INDIVIDUAL:</B> <BR>&emsp;&emsp;&emsp;•DATA: ATÉ 21/12(23:59)<BR>&emsp;&emsp;&emsp;•PONTUAÇÃO: ATÉ 2 (DOIS) PONTOS.</P>
        <P CLASS="instruction"><img id="1826" src="https://gruponobre.instructure.com/users/180/files/1826/preview?verifier=vNo4XzIa8rbmffQb0aWpMXEdeorhIYGhk09ONLuO" alt="forum2" width="25px"/> <B>FÓRUM:</B> <BR>&emsp;&emsp;&emsp;•DATA: ATÉ 04/12(23:59)<BR>&emsp;&emsp;&emsp;•PONTUAÇÃO: ATÉ 1 (UM) PONTO.</P>
        <P CLASS="instruction"><img id="1827" src="https://gruponobre.instructure.com/users/180/files/1827/preview?verifier=gXDesXsGxEI7k2RzT6WlkQR3Npy2C1ZYlB8wfFjD" alt="quiz" width="25px"/> <B>TESTE:</B> <BR>&emsp;&emsp;&emsp;•DATA: DE 05/12(00:00) ATÉ 07/12(23:59)<BR>&emsp;&emsp;&emsp;•PONTUAÇÃO: ATÉ 6 (SEIS) PONTOS.</P>
        <P CLASS="instruction"><img id="1827" src="https://gruponobre.instructure.com/users/180/files/1827/preview?verifier=gXDesXsGxEI7k2RzT6WlkQR3Npy2C1ZYlB8wfFjD" alt="quiz" width="25px"/> <B>TESTE FINAL:</B> <BR>&emsp;&emsp;&emsp;•REQUISITOS: O SOMATÓRIO DAS DEMAIS AVALIAÇÕES DEVE RESULTAR EM UM VALOR ENTRE 5(CINCO) E 7(SETE) PONTOS.<BR>&emsp;&emsp;&emsp;•DATA: DE 19/12(00:00) ATÉ 21/12(23:59)<BR>&emsp;&emsp;&emsp;•PONTUAÇÃO: ATÉ 6 (SEIS) PONTOS.</P>
    </div>`

    newParent.insertBefore(instructionBox, newChildren)
    // -----------------------------------------------------------------------------------------------------------------------------


    //RETORNAR À HOME DO CURSO
    centro.innerHTML = `<a id="courseReturnButton" href="${courseURL}">➤ RETORNAR À PÁGINA PRINCIPAL DA DISCIPLINA</a>`
    // -----------------------------------------------------------------------------------------------------------------------------
}else
// -----------------------------------------------------------------------------------------------------------------------------


//CORREÇÃO DE EXERCÍCIOS
if(url.match('assignments') && url.length == courseLength + 16){
    document.querySelector('#right-side-wrapper').style.display = 'block'
    document.querySelectorAll('.icon-hamburger')[1].style.display = 'none'
}else
// -----------------------------------------------------------------------------------------------------------------------------


//PÁGINA DO SPEEDGRADER
if(url.match('speed_grader')){
    document.querySelector('#newHeader').style.display = 'none'

    let quitSpeedgrader = document.createElement('div')
    quitSpeedgrader.setAttribute('id', 'quitSpeedgrader')
    quitSpeedgrader.innerHTML = `<button onClick="window.location = '${url.substring('0', courseLength)}'">Sair do SpeedGrader™</button>`

    document.querySelector('#rightside_inner').appendChild(quitSpeedgrader)
}else
// -----------------------------------------------------------------------------------------------------------------------------


//PÁGINA DO BOLETIM DE ALUNO
if(url.match('grades')){
    window.addEventListener('load', ()=>{
        //CRIAR VARIÁVEL COM MENSAGEM DE APROVAÇÃO, PROVA FINAL OU REPROVAÇÃO
        let status = ''

        //CAPTURAR MÉDIA FINAL DO ALUNO
        let getPoints = document.querySelectorAll('.points_possible')
        getPoints = getPoints[getPoints.length - 1]
        let finalMedia = getPoints.textContent.substring(0,4).replace(',','.')

        //ADICIONAR A MÉDIA FINAL DO ALUNO NA LINHA "TOTAL"
        let scoreHolder = document.querySelectorAll('.score_holder')
        scoreHolder = scoreHolder[scoreHolder.length - 1]
        scoreHolder.textContent = finalMedia

        //DELIMITAR SE FOI APROVADO
        if(finalMedia >= 6.75){
            if(finalMedia < 7){
                getPoints.textContent = '≅ 7,00 / 10,00' //APROXIMANDO CASO NOTA ESTEJA ENTRE 6.75 E 6.99
            }
            status = 'Aprovado'
        }else if(finalMedia > 4.75 && finalMedia < 6.75){
            if(finalMedia < 5){
                getPoints.textContent = '≅ 5,00 / 10,00'//APROXIMANDO CASO NOTA ESTEJA ENTRE 4.75 E 4.99
            }
            status = 'Prova Final'
        }else{
            status = 'Reprovado'
        }

        //ADICIONAR MENSAGEM DE APROVAÇÃO, PROVA FINAL OU REPROVAÇÃO
        document.querySelector("#submission_final-grade > td.details").textContent = status
        // -----------------------------------------------------------------------------------------------------------------------------


        //RETORNAR À HOME DO CURSO
        centro.innerHTML = `<a id="courseReturnButton" href="${courseURL}">➤ RETORNAR À PÁGINA PRINCIPAL DA DISCIPLINA</a>`
        // -----------------------------------------------------------------------------------------------------------------------------
    })
}else
// -----------------------------------------------------------------------------------------------------------------------------


//PÁGINA BOLETIM PARA PROFESSORES
if(url.match('gradebook')){
    //RETORNAR À HOME DO CURSO
    centro.innerHTML = `<a id="courseReturnButton" href="${courseURL}">➤ RETORNAR À PÁGINA PRINCIPAL DA DISCIPLINA</a>`
    // -----------------------------------------------------------------------------------------------------------------------------
}else
// -----------------------------------------------------------------------------------------------------------------------------


//PÁGINA DO FÓRUM
if(url.match('discussion_topics')){
    //RETORNAR À HOME DO CURSO
    centro.innerHTML = `<a id="courseReturnButton" href="${courseURL}">➤ RETORNAR À PÁGINA PRINCIPAL DA DISCIPLINA</a>`
}else
// -----------------------------------------------------------------------------------------------------------------------------


//PÁGINA DA SALA DIGITAL DA DISCIPLINA
if(url.match('external_tools/125')){
    //RETORNAR À HOME DO CURSO
    centro.innerHTML = `<a id="courseReturnButton" href="${courseURL}">➤ RETORNAR À PÁGINA PRINCIPAL DA DISCIPLINA</a>`
}else


//PÁGINA DE CRIAÇÃO/EDIÇÃO DE AVALIAÇÃO
if(url.match('courses') && url.match('assignments') && url.length > courseLength + 12){
    //RETIRAR NAVBAR NEWHEADER
    document.querySelector('#newHeader').style.display = 'none'
}else
// -----------------------------------------------------------------------------------------------------------------------------

//PÁGINA DE TUTORIAS ONLINE
if(url.match('conferences')){
    //ALTERAR DIZER NO BOTÃO AZUL E BRANCO
    //DENTRO DO TRYCATCH POIS O BOTÃO NÃO APARECE PARA ALUNOS E ESSE COMANDO DEVE SER IGNORADO
    try {
        document.querySelector('.new-conference-btn').innerHTML = '<i class="icon-plus"></i>&nbspTUTORIA ONLINE'
        // -----------------------------------------------------------------------------------------------------------------------------
    } catch (error) {
        //PASS
    }

    //ALTERAR TÍTULO TÓPICO 1
    document.querySelector('.element_toggler').innerHTML = '<i class="auto_rotate icon-mini-arrow-down">&nbspNOVAS TUTORIAS</i>'
    // -----------------------------------------------------------------------------------------------------------------------------

    //ALTERAR TÍTULO TÓPICO 2
    document.querySelectorAll('.element_toggler')[1].innerHTML = '<i class="auto_rotate icon-mini-arrow-down">&nbspTUTORIAS CONCLUÍDAS</i>'
    // -----------------------------------------------------------------------------------------------------------------------------

    //RETORNAR À HOME DO CURSO
    centro.innerHTML = `<a id="courseReturnButton" href="${courseURL}">➤ RETORNAR À PÁGINA PRINCIPAL DA DISCIPLINA</a>`
    // -----------------------------------------------------------------------------------------------------------------------------
}


//ALTERAR SUBPÁGINAS:

//ACCOUNTS
if(url.match('accounts') && !url.match('theme_editor')){
    //TÍTULO NO CENTRO
    centro.innerText = 'PAINEL ADMINISTRATIVO'
    // -----------------------------------------------------------------------------------------------------------------------------

    //TRAZER MENU LATERAL
    document.querySelector("#sticky-container").style.display = 'block'
    document.querySelector("#main").style.marginLeft = '192px'
    // -----------------------------------------------------------------------------------------------------------------------------

    //RETIRAR BANCO DE PERGUNTAS ANTIGO (NÃO UTILIZADO E SERÁ RETIRADO DO CANVAS EM 2O24)
    try {
        let sectionsAdm = document.getElementsByClassName('section')
        for (i = 0; i < sectionsAdm.length; i++) {
            if (sectionsAdm[i].children[0].textContent == 'Bancos de perguntas') {
                sectionsAdm[i].style.display = 'none'
                break
            }
        }
    } catch (error) {
        //PASS
    }
    // -----------------------------------------------------------------------------------------------------------------------------
}else 
// -----------------------------------------------------------------------------------------------------------------------------


//PROFILE
if(url.match('profile') && url.length == homeURL.length + 7){
    //TÍTULO NO CENTRO
    centro.innerText = 'PERFIL'
    // -----------------------------------------------------------------------------------------------------------------------------

    //TRAZER MENU LATERAL
    document.querySelector("#sticky-container").style.display = 'block'
    document.querySelector("#main").style.marginLeft = '192px'
    // -----------------------------------------------------------------------------------------------------------------------------

    //ADICIONAR BOTÃO ADMINISTRADOR
    async function painelAdministrador(){
        let response = await fetch(apiSelf)
        let data = await response.json()
        let id = await data.id

        let painelADM = document.createElement('div')
        try {
            if(admGlobal.indexOf(id) != -1){
                painelADM.innerHTML = `<a href="${homeURL}accounts/1?" style="font-size: 22px;">Painel administrativo</a>`
                document.querySelector("#edit_profile_form > div > div.profileContent__Block").append(painelADM)
            } else if(admUNEF.indexOf(id) != -1){
                painelADM.innerHTML = `<a href="${homeURL}accounts/111?" style="font-size: 22px;">Painel administrativo</a>`
                document.querySelector("#edit_profile_form > div > div.profileContent__Block").append(painelADM)
            } else{
                painelADM.innerHTML = `<a href="${homeURL}profile/settings" style="font-size: 22px;">ALTERAR SENHA</a>`
                document.querySelector("#edit_profile_form > div > div.profileContent__Block").append(painelADM)
            }
        } catch (error) {
            //PASS
        }
    }
    painelAdministrador()
    // -----------------------------------------------------------------------------------------------------------------------------
}else
// -----------------------------------------------------------------------------------------------------------------------------


if(url.match('qr_mobile')){
    //ESCONDER BOTAO SANDUÍCHE QUE FAZ TOGGLE COM MENU ADMINISTRADOR
    document.querySelector('.ic-app-nav-toggle-and-crumbs').style.display = 'none'
    // -----------------------------------------------------------------------------------------------------------------------------
}else
// -----------------------------------------------------------------------------------------------------------------------------


//PÁGINA DE COORDENADORES
if (document.URL.match(/coordenadores/)) {
    //RETIRAR CONTEÚDO DESNECESSÁRIO
    document.querySelector("#content").style.display = 'none'
    // -----------------------------------------------------------------------------------------------------------------------------

    //TÍTULO NO CENTRO
    centro.innerText = 'COORDENADORES'
    // -----------------------------------------------------------------------------------------------------------------------------


    //CONTEÚDO
    let titleCoordPage = document.createElement('h2')

    titleCoordPage.innerText = 'COORDENADORES DE CURSO'
    titleCoordPage.setAttribute('id','titleCoordPage')

    let coordPage = document.createElement('div')
    coordPage.setAttribute('id', 'coordPage')
    coordPage.innerHTML =
        `<a href="https://gruponobre.instructure.com/conversations?context_id=course_149&user_id=591&user_name=EMANUELA%20AVELAR%20SILVA%20DE%20SIQUEIRA#filter=type=inbox" class="courseIcon">
        <img id="1673" src="https://gruponobre.instructure.com/users/180/files/1673/preview?verifier=0vUEz08Qc1UF3uxZvtdpbYmX75b4W5NEmtHlbxuB" alt="biomedicina.png" />
        <p>BIOMEDICINA</p>
        </a>
        <a href="https://gruponobre.instructure.com/conversations?context_id=course_149&user_id=592&user_name=FILIPE%20GOMES%20DE%20ALBUQUERQUE#filter=type=inbox" class="courseIcon">
        <img id="1672" src="https://gruponobre.instructure.com/users/180/files/1672/preview?verifier=8rW1J31y8duQlOXdJ1txpsMzAAbunrmk6Y4J0w8z" alt="design.png" />
        <p>ARQUITETURA<BR>DESIGN</p>
        </a>
        <a href="https://gruponobre.instructure.com/conversations?context_id=course_149&user_id=400&user_name=EVERLAN%20BRITO%20ARAUJO#filter=type=inbox" class="courseIcon">
        <img id="1671" src="https://gruponobre.instructure.com/users/180/files/1671/preview?verifier=3I3FFQQrjEPrvlmngVsoITtDFjQ2X9bsdr8xdpzM" alt="adm.png" />
        <p>PUBLICIDADE E PROPAGANDA<BR>ADMINISTRAÇÃO</p>
        </a>
        <a href="https://gruponobre.instructure.com/conversations?context_id=course_149&user_id=407&user_name=FERNANDA%20MANSANI%20SILVA%20GOMES#filter=type=inbox" class="courseIcon">
        <img id="1670" src="https://gruponobre.instructure.com/users/180/files/1670/preview?verifier=kTUKQfI1rSr7slU7Q00iDKCU0PwzgOmxmvV6IWHw" alt="eng elet.png" />
        <p>ENG. ELÉTRICA<BR>ENG. MECÂNICA</p>
        </a>
        <a href="https://gruponobre.instructure.com/conversations?context_id=course_149&user_id=593&user_name=EDGARD%20FREITAS%20DE%20SIQUEIRA%20J%C3%9ANIOR#filter=type=inbox" class="courseIcon">
        <img id="1669" src="https://gruponobre.instructure.com/users/180/files/1669/preview?verifier=jyRNyqQDwu1sAvrtRA6XxM05EipscAjvmal8rWl3" alt="civil.png" />
        <p>ENG. CIVIL<BR>ENG. QUÍMICA<BR>ENG. DE PRODUÇÃO</p>
        </a>
        <a href="https://gruponobre.instructure.com/conversations?context_id=course_149&user_id=594&user_name=FERNANDA%20PINHEIRO%20DE%20CARVALHO%20RIBEIRO#filter=type=inbox" class="courseIcon">
        <img id="1668" src="https://gruponobre.instructure.com/users/180/files/1668/preview?verifier=F0SoRtmu6tvmMJJADASSICFEhvdz05P7HbbTmvh3" alt="farmacia.png" />
        <p>FARMÁCIA</p>
        </a>
        <a href="https://gruponobre.instructure.com/conversations?context_id=course_149&user_id=595&user_name=SANMARA%20SOUZA%20PEDREIRA%20LIMA#filter=type=inbox" class="courseIcon">
        <img id="1667" src="https://gruponobre.instructure.com/users/180/files/1667/preview?verifier=8RFE9Lp4lTzoQaFlmQvIAkiCay2rkyWw2wDjeElT" alt="enfermagem.png" />
        <p>ENFERMAGEM<BR>NUTRIÇÃO</p>
        </a>
        <a href="https://gruponobre.instructure.com/conversations?context_id=course_149&user_id=596&user_name=JEIDSON%20ANTONIO%20MORAES%20MARQUES#filter=type=inbox" class="courseIcon">
        <img id="1666" src="https://gruponobre.instructure.com/users/180/files/1666/preview?verifier=fJH2Y9cxiLVyBukZ7XQfJWJgSdbi2oJZmQCJU0qa" alt="odontologia.png" />
        <p>ODONTOLOGIA</p>
        </a>
        <a href="https://gruponobre.instructure.com/conversations?context_id=course_149&user_id=597&user_name=CAMILLA%20SANTOS%20PORTUGAL%20BRITTO#filter=type=inbox" class="courseIcon">
        <img id="1665" src="https://gruponobre.instructure.com/users/180/files/1665/preview?verifier=zv9vn9As1vCtXX8AmUB3o72ldtQ4ZY5juFwnT4aL" alt="fisioterapia.png" />
        <p>FISIOTERAPIA</p>
        </a>
        <a href="https://gruponobre.instructure.com/conversations?context_id=course_149&user_id=598&user_name=BRUNO%20VARGENS%20NUNES#filter=type=inbox" class="courseIcon">
        <img id="1664" src="https://gruponobre.instructure.com/users/180/files/1664/preview?verifier=RZS0TjlVDD5ubILblqdlMcY2uNYMHtknGDnji7nM" alt="direito.png" />
        <p>DIREITO</p>
        </a>
        <hr id="divider">
    `
    document.getElementById('content-wrapper').appendChild(titleCoordPage)
    document.getElementById('content-wrapper').appendChild(coordPage)
    // -----------------------------------------------------------------------------------------------------------------------------
}else
// -----------------------------------------------------------------------------------------------------------------------------


//PÁGINA DE CONFIGURAÇÕES DE PERFIL
if (document.URL.match(/settings/)) {
    //NOME DA PÁGINA NO CENTRO DA NAVBAR
    centro.innerText = 'CONFIGURAÇÕES'
    // -----------------------------------------------------------------------------------------------------------------------------


    //TRAZER MENU LATERAL DIREITO
    document.querySelector('#right-side-wrapper').style.display = 'block'

    //VERIFICAR SE É ALUNO OU ADM - CASO SEJA ALUNO, RETIRAR EXCESSO DA PÁGINA DE CONFIGURAÇÕES
    let settingsContent = document.getElementById('content')
    async function retiraExcesso(){
        const response = await fetch(apiSelf)
        const data = await response.json()
    
        if (!data.login_id){
            for(i=6;i<settingsContent.children.length;i++){
                settingsContent.children[i].style.display = 'none'
            }
        }
    }
    retiraExcesso()
    // -----------------------------------------------------------------------------------------------------------------------------


    //ALTERAR TERMO DO BOTÃO "EDITAR CONFIGURAÇÕES" PARA ALTERAR
    //DENTRO DO TRY PARA EVITAR ERRO CASO O BOTÃO DEMORE DE CARREGAR
    try {
        document.querySelector(".edit_settings_link").innerHTML = '<i class="icon-edit" aria-hidden="true"></i>  Alterar Senha'
    } catch (error) {
        //PASS
    }
    // -----------------------------------------------------------------------------------------------------------------------------
}else


//PÁGINA DO CALENDÁRIO
if (document.URL.match(/calendar/)) {
    centro.innerText = 'CALENDÁRIO'
    document.querySelector("#right-side-wrapper").style.display = 'block'
    document.querySelector("#content").style.marginTop = '60px'
}else
// -----------------------------------------------------------------------------------------------------------------------------


//PÁGINA DE MAIL
if (document.URL.match(/conversations/)) {
    centro.innerText = 'CAIXA DE ENTRADA'
}


//CONFIGURAÇÕES GERAIS
//HUGGY CHAT
var $_Huggy = { defaultCountry: '+55', uuid: '85ac3fe0-e07a-4179-9095-fc053fd7e4ef' , company: '15062' }; 
function chatTecnico(){
    window.alert('Chat offline para manutenção. Entre em contato com: 75 9 9805-5785')
    // (function(i,s,o,g,r,a,m){ 
    //     i[r]={context:{id:'a72fd26eab611a43faea002839d28c36'}};
    //     a=o;o=s.createElement(o); 
    //     o.async=1;
    //     o.src=g;m=s.getElementsByTagName(a)[0];
    //     m.parentNode.insertBefore(o,m); 
    // })
    // (window,document,'script','https://js.huggy.chat/widget.min.js','pwz');
}
// ----------------------------------------------------------------------------------------------------------------------------


//MINHA BIBLIOTECA
async function minhaBiblioteca(){
    //FAZER O ALUNO AGUARDAR A RESPOSTA
    document.getElementById('biblioteca').textContent = 'Aguarde...'

    let getUser = await fetch(apiEnrollments)
    let userToJson = await getUser.json()
    let userCanvas = await userToJson[0].user
    
    let length = userCanvas.name.split(' ').length
    let firstName = userCanvas.name.split(' ')[0]
    let lastName = userCanvas.name.split(' ')[length -1]
    let ra = userCanvas.login_id

    let response = await fetch(`https://gruponobre.netlify.app/.netlify/functions/bibli_fan`, {
        method: 'post',
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            ra: ra
        })
    })
    let data = await response.json()
    
    if(response.status == 200){
        document.getElementById('biblioteca').textContent = 'Acessar'
        window.open(`${data.resposta}`)
        return
    }else{
        document.getElementById('biblioteca').textContent = 'Acessar'
        window.alert('Erro ao entrar na biblioteca online. Por gentileza entre em contato com a instituição!')
    }
}
// -----------------------------------------------------------------------------------------------------------------------------


//HEADER PARA TELA DE CELULAR
if(window.visualViewport.width < 582){
    //ALTERAR TAMANHO DA LOGO, DO NOME, DOS ÍCONES E DAS LEGENDAS DOS ÍCONES
    document.querySelector('#logoUNEF').style.width = '100px'
    centro.style.fontSize = '10px'

    let topIconsNodeList = document.querySelectorAll('.navIconInside')
    let topIcons = Array.from(topIconsNodeList)
    for(index in topIcons){
        topIcons[index].setAttribute('width','25px')
    }

    let iconsLabel = document.querySelectorAll('.navIcon a p')
    for(i=0;i<iconsLabel.length;i++){
        iconsLabel[i].style.fontSize = '9px'
        iconsLabel[i].style.marginTop = '3px'
        iconsLabel[i].style.textAlign = 'center'
    }
}
// -----------------------------------------------------------------------------------------------------------------------------