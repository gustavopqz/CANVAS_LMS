const apiURL = "https://gruponobre.instructure.com/api/v1/users/self"

const admGlobal = [180]
const admUNEF = [193, 188, 686]

//Adicionando novo menu do topo
let pai = document.querySelector("body")
let filho = document.querySelector("#application")

if (document.URL == 'https://gruponobre.instructure.com/' || document.URL.match(/success/)) {
    let divNewHeader = document.createElement('div')
    divNewHeader.setAttribute('id', 'newHeader')
    divNewHeader.innerHTML = `<div id="topLogo" class="headerDiv"> 
            <a href="https://gruponobre.instructure.com/"><img id="1164" src="https://gruponobre.instructure.com/users/180/files/1164/preview?verifier=p6HZobxT0AiEBv1EfAVdqo2jBN7wS3HHmqC0nTzw" alt="UNEF.png" width="180px"/></a>
        </div>
        <div class="headerDiv">
            <h2 id="centro"></h2>
        </div>
        <div class="headerDiv">
            <lu id="navMenu">
                <li class="navIcon"><a href="https://gruponobre.instructure.com/profile/qr_mobile_login"><img id="1478" class="navIconInside" src="https://gruponobre.instructure.com/users/180/files/1478/preview?verifier=juMuXeQj7ggaCoxJMIve8xT2V0wOw9Cmiy2eJRKR" alt="QR CODE.png" width="30"/><p style= "color: white;">QR</p></a></li>
                <li class="navIcon"><a href="https://gruponobre.instructure.com/profile"><img id="1287" class="navIconInside" src="https://gruponobre.instructure.com/users/180/files/1287/preview?verifier=BeOPywW1RvB9W7ZekjiWHS5cqIh6Xg43N7V8R4sE" alt="user-top.png" width="30"/><p style= "color: white;">Perfil</p></a></li>
                <li class="navIcon"><a href="https://gruponobre.instructure.com/logout"><img id="1294" class="navIconInside" src="https://gruponobre.instructure.com/users/180/files/1294/preview?verifier=6rpFZzDuoURYrr8pV9e9nlMKsbDhL0WkXC49ZjpV" alt="sing-out-top.png" width="30"/><p style= "color: white;">Sair</p></a></li>
                <li class="navIcon"><a href="https://gruponobre.instructure.com/"><img id="1289" class="navIconInside" src="https://gruponobre.instructure.com/users/180/files/1289/preview?verifier=XnqsXmh4Ji1tEx3krxi0yKIYN51sO7VCblBWWZuM" alt="home-top.png" width="30"/><p style= "color: white;">Início</p></a></li>
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

    pai.insertBefore(divNewHeader, filho)
    pai.insertBefore(divAddSpace, filho)
    pai.insertBefore(divMainBanner, filho)
    pai.insertBefore(divTopEnd, filho)
}else if (!document.URL.match(/login/) && !document.URL.match(/logout/)){
    let divNewHeader = document.createElement('div')
    divNewHeader.setAttribute('id', 'newHeader')
    divNewHeader.innerHTML = `<div id="topLogo" class="headerDiv"> 
            <a href="https://gruponobre.instructure.com/"><img id="1164" src="https://gruponobre.instructure.com/users/180/files/1164/preview?verifier=p6HZobxT0AiEBv1EfAVdqo2jBN7wS3HHmqC0nTzw" alt="UNEF.png" width="180px"/></a>
        </div>
        <div class="headerDiv">
            <h2 id="centro"></h2>
        </div>
        <div class="headerDiv">
            <lu id="navMenu">
            <li class="navIcon"><a href="https://gruponobre.instructure.com/profile/qr_mobile_login"><img id="1478" class="navIconInside" src="https://gruponobre.instructure.com/users/180/files/1478/preview?verifier=juMuXeQj7ggaCoxJMIve8xT2V0wOw9Cmiy2eJRKR" alt="QR CODE.png" width="30"/><p style= "color: white;">QR</p></a></li>
            <li class="navIcon"><a href="https://gruponobre.instructure.com/profile"><img id="1287" class="navIconInside" src="https://gruponobre.instructure.com/users/180/files/1287/preview?verifier=BeOPywW1RvB9W7ZekjiWHS5cqIh6Xg43N7V8R4sE" alt="user-top.png" width="30"/><p style= "color: white;">Perfil</p></a></li>
            <li class="navIcon"><a href="https://gruponobre.instructure.com/logout"><img id="1294" class="navIconInside" src="https://gruponobre.instructure.com/users/180/files/1294/preview?verifier=6rpFZzDuoURYrr8pV9e9nlMKsbDhL0WkXC49ZjpV" alt="sing-out-top.png" width="30"/><p style= "color: white;">Sair</p></a></li>
            <li class="navIcon"><a href="https://gruponobre.instructure.com/"><img id="1289" class="navIconInside" src="https://gruponobre.instructure.com/users/180/files/1289/preview?verifier=XnqsXmh4Ji1tEx3krxi0yKIYN51sO7VCblBWWZuM" alt="home-top.png" width="30"/><p style= "color: white;">Início</p></a></li>
            </lu>
        </div>`
    
    pai.insertBefore(divNewHeader, filho)

    //Adicionando padding ao menu topo mobile para que ele apareça normalmente nas páginas
    try {
        document.querySelector("#mobile-header").style.paddingTop = '55px'
    } catch (error) {
        //pass
    }
}

function headerToMobile(){
    if(window.visualViewport.width < 582){
        document.querySelector('#newHeader').innerHTML = 
        `<div id="topLogo" class="headerDiv"> 
            <a href="https://gruponobre.instructure.com/"><img id="1164" src="https://gruponobre.instructure.com/users/180/files/1164/preview?verifier=p6HZobxT0AiEBv1EfAVdqo2jBN7wS3HHmqC0nTzw" alt="UNEF.png" width="100px"/></a>
        </div>
        <div class="headerDiv">
            <h2 id="centro"></h2>
        </div>
        <div class="headerDiv">
            <lu id="navMenu">
                <li class="navIcon"><a href="https://gruponobre.instructure.com/profile/qr_mobile_login"><img id="1478" class="navIconInside" src="https://gruponobre.instructure.com/users/180/files/1478/preview?verifier=juMuXeQj7ggaCoxJMIve8xT2V0wOw9Cmiy2eJRKR" alt="QR CODE.png" width="25"/><p style= "color: white;">QR</p></a></li>
                <li class="navIcon"><a href="https://gruponobre.instructure.com/profile"><img id="1287" class="navIconInside" src="https://gruponobre.instructure.com/users/180/files/1287/preview?verifier=BeOPywW1RvB9W7ZekjiWHS5cqIh6Xg43N7V8R4sE" alt="user-top.png" width="25"/><p style= "color: white;">Perfil</p></a></li>
                <li class="navIcon"><a href="https://gruponobre.instructure.com/logout"><img id="1294" class="navIconInside" src="https://gruponobre.instructure.com/users/180/files/1294/preview?verifier=6rpFZzDuoURYrr8pV9e9nlMKsbDhL0WkXC49ZjpV" alt="sing-out-top.png" width="25"/><p style= "color: white;">Sair</p></a></li>
                <li class="navIcon"><a href="https://gruponobre.instructure.com/"><img id="1289" class="navIconInside" src="https://gruponobre.instructure.com/users/180/files/1289/preview?verifier=XnqsXmh4Ji1tEx3krxi0yKIYN51sO7VCblBWWZuM" alt="home-top.png" width="25"/><p style= "color: white;">Início</p></a></li>
            </lu>
        </div>`
    
        document.querySelector('#centro').style.fontSize = '10px'
        let iconsLabel = document.querySelectorAll('.navIcon a p')
        for(i=0;i<iconsLabel.length;i++){
            iconsLabel[i].style.fontSize = '9px'
            iconsLabel[i].style.marginTop = '3px'
            iconsLabel[i].style.textAlign = 'center'
        }
        window.removeEventListener('resize', headerToMobile)
        try {
            document.querySelector('#mobile-header').style.display = 'none'
            document.querySelector('#centro').innerHTML = ''
        } catch (error) {
            //pass
        }
    }
}
headerToMobile()
window.addEventListener('resize', headerToMobile)

//Trazendo o nome do aluno para o topo
if (document.URL == 'https://gruponobre.instructure.com/' || document.URL.match('success')) {
    async function nameOnTop() {
        const response = await fetch(apiURL)
        const data = await response.json()
        document.getElementById('centro').innerHTML = data.name
    }
    nameOnTop()

    //Retirando Lista de Tarefas do lado direito
    window.addEventListener('load', ()=>{
        try {
            let rightBarChildren = document.querySelector('.Sidebar__TodoListContainer').children[0].children
            for(i=0;i<rightBarChildren.length;i++){
                if(rightBarChildren[i].textContent == 'Mostrar tudo'){
                    rightBarChildren[i].style.display = 'none'
                }
            }   
        } catch (error) {
            //pass
        }
        
        //Deixando no máximo 3 tarefas visíveis
        try {
            let closeTask = document.querySelectorAll('.ToDoSidebarItem__Close')
            if(closeTask.length > 3){
                for(i=closeTask.length;i>3;i--){
                    closeTask[i-1].children[0].children[0].click()
                }
            }
        } catch (error) {
            //pass
        }
    })
}

//Adicionando background em todas as páginas
if (!document.URL.match('canvas') && !document.URL.match('logout')) {
    try {
        setTimeout(() => {
            document.getElementById('wrapper').setAttribute('style', 'background: url("https://gruponobre.instructure.com/users/180/files/1314/preview?verifier=bHe9FOzKxCifF3ip1UsH3cXuyT2JD2bGbBgdm1Yi")')
            //Retirando margem da lateral esquerda
            document.querySelector("#wrapper").style.marginLeft = '0'
        }, 2000);
    } catch (error) {
        //pass
    }
    try {
        document.querySelector('.header-bar').setAttribute('style','background: url("https://gruponobre.instructure.com/users/180/files/1314/preview?verifier=bHe9FOzKxCifF3ip1UsH3cXuyT2JD2bGbBgdm1Yi")')
    } catch (error) {
        //pass
    }
    try {
        document.getElementById('application').setAttribute('style', 'background: url("https://gruponobre.instructure.com/users/180/files/1314/preview?verifier=bHe9FOzKxCifF3ip1UsH3cXuyT2JD2bGbBgdm1Yi")')
    } catch (error) {
        //pass
    }
}


//Deixando a página invisível para terminar de carregar
// if (document.URL == 'https://gruponobre.instructure.com/' || document.URL.match(/success/)) {
//         document.querySelector("#wrapper").classList.add('mainOpacityOff')
//     }

//Alterando os dizeres da caixa de login
if (document.URL.match(/login/)) {
    let labels = document.getElementsByTagName('label')
    for (i = 0; i < labels.length; i++) {
        if (labels[i].textContent == 'E-mail') {
            labels[i].innerText = 'Registro Acadêmico'
        }
    }
}

//Trocando o título da página principal na tab
let documentTitle = document.getElementsByTagName('title')
documentTitle[0].innerText = 'UNEF: Alunos'

//Alterando margin-top no painel administrativo para aprecer o botão de abrir o menu lateral
if (document.URL.match(/accounts/)) {
    try {
        document.querySelector('.ic-app-nav-toggle-and-crumbs').style.marginTop = '55px'
    } catch (error) {
        //pass
    }
}

//Ajustando BUG da página calendário:
if (document.URL.match(/calendar/)) {
    document.querySelector("#right-side-wrapper").style.marginTop = '110px'
    document.querySelector("#content").style.marginTop = '60px'
}

// Alterando dizeres da página de conferências / tutoria online
if (document.URL.match(/conferences/)) {
    //Texto do botão azul e branco
    document.querySelector(".element_toggler").innerHTML = '<i class="icon-mini-arrow-down auto_rotate"></i> Tutorias online'

    //Título do primeiro bloco
    document.querySelectorAll(".element_toggler")[1].innerHTML = '<i class="auto_rotate icon-mini-arrow-down"></i>Novas Tutorias'

    //Título do segundo bloco
    document.querySelector("#content > div.item-group-container.item-box > div:nth-child(2) > div.ig-header > h2 > a").innerHTML = '<i class="icon-mini-arrow-down auto_rotate"></i>Tutorias concluídas'

    //Alterando dizeres da mensagem quando bloco está vazio
    try {
        document.querySelector('.conferences').classList.add('mainOpacityOff')
        setTimeout(() => {
            try {
                document.querySelector('.conferences').classList.remove('mainOpacityOff')
                document.querySelector('.conferences').classList.add('mainOpacityOn')
                document.querySelector(".emptyMessage").textContent = 'Não há nenhuma nova tutoria'
            } catch (error) {
                //pass
            }
        }, 2000)
    } catch (error) {
        //pass
    }
}


//Retirando barra de rolagem do menu do curso
// try {
//     document.querySelector("#sticky-container").style.overflow = 'hidden'
// } catch (error) {
//     //pass
// }


//Retirando os dizeres desncesssários na tela inicial
//Alterando dizeres do painel de controle pra professores
function initialPageMain() {
    try {
        if (document.URL == 'https://gruponobre.instructure.com/' || document.URL.match(/success/)) {
            // document.querySelector("#wrapper").classList.remove('mainOpacityOff')
            // document.querySelector("#wrapper").classList.add('mainOpacityOn')
            //Retirando barra de tarefas na lateral direita
            // document.querySelector("#right-side-wrapper").style.display = 'none'
        }

        // //Retirando os dizeres perto dos cards
        // document.querySelector("#dashboard_header_container > div").style.display = 'none'
        // document.querySelector("#DashboardCard_Container > div > div:nth-child(1) > h2").style.display = 'none'
        // document.querySelectorAll('.ic-DashboardCard__box')[1].style.display = 'none'

    } catch (error) {
        //pass
    }
}
setTimeout(initialPageMain, 2000)

//Tentando executar as mudanças dizeres na página principal de acordo com o carregamento completo da página
// function apagaDizeres(){
//     try {
//         //Retirando os dizeres perto dos cards
//         document.querySelector("#dashboard_header_container > div").style.display = 'none'
//         document.querySelector("#DashboardCard_Container > div > div:nth-child(1) > h2").style.display = 'none'
//         document.querySelectorAll('.ic-DashboardCard__box')[1].style.display = 'none'
//     } catch (error) {
//         //pass
//     }
// }
// window.addEventListener('load', apagaDizeres)


//Adicionando div contendo funções principais
if (document.URL == 'https://gruponobre.instructure.com/' || document.URL.match(/success/)) {
    let shortcuts = document.createElement('div')
    shortcuts.setAttribute('id', 'shortcuts')
    shortcuts.innerHTML = `<h2 id="shortcutsTitle">LINKS RÁPIDOS</h2>
        <div id="divCards">
            <div class="card">
                <h3>CHAT TÉCNICO</h3>
                <img id="1241" src="https://gruponobre.instructure.com/users/180/files/1241/preview?verifier=wVoA5i8aMyVx6e0BuYaxW2GKezTczwE4WHhYUpPo" alt="chat tecnico.png" width="70px"/>
                <button onClick="chatTecnico()">Acessar</button></a>
            </div>
            <div class="card">
                <h3>CALENDÁRIO</h3>
                <img id="1200" src="https://gruponobre.instructure.com/users/180/files/1200/preview?verifier=CLY3hme6iERUbC0pFRxUmJVvCgUXYtk99YIzLtA6" alt="calendar-faixa.png" width="70px"/>
                <a href="https://gruponobre.instructure.com/calendar"><button>Acessar</button></a>
            </div>
            <div class="card">
                <h3>MEU DRIVE</h3>
                <img id="1196" src="https://gruponobre.instructure.com/users/180/files/1196/preview?verifier=aS1fL7ixcPuKUzPmvsTli7zXrelOOMlumAFsMgTl" alt="box-faixa.png" width="70px"/>
                <a href="https://gruponobre.instructure.com/files"><button>Acessar</button></a>
            </div>
            <div class="card">
                <h3>COORD. DE CURSO</h3>
                <img id="1243" src="https://gruponobre.instructure.com/users/180/files/1243/preview?verifier=fLgBXRc1VOvsXclWvq91sqZpr3bmXI3IsznwWfuF" alt="colegas.png" />
                <a href="https://gruponobre.instructure.com/courses/149/pages/coordenadores-de-curso"><button>Acessar</button></a>
            </div>
            <div class="card">
                <h3>CAIXA DE ENTRADA</h3>
                <img id="1198" src="https://gruponobre.instructure.com/users/180/files/1198/preview?verifier=FD9LMoO4ULEr1fIOI6p1Kphm4pQ7acGPDOW7Egy5" alt="mail-faixa.png" />
                <a href="https://gruponobre.instructure.com/conversations"><button>Acessar</button></a>
            </div>
            <div class="card">
                <h3>MINHA BIBLIOTECA</h3>
                <img id="1239" src="https://gruponobre.instructure.com/users/180/files/1239/preview?verifier=h3Lev5XmVIp5f7y8e9w6polvGIvdLc6dI75xQT4l" alt="biblioteca virtual.png" />
                <button id="biblioteca" onClick="minhaBiblioteca()">Acessar</button>
            </div>
        </div>`


    document.querySelector('#main').append(shortcuts)
}

//Chat Técnico
function chatTecnico() {
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function () {
        var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/632c7e6137898912e96ab958/1gdisrbrg';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
    })();
}


// try {
//     // Retirando o menu lateral principal
//     document.querySelector("#header").remove()  
// } catch (error) {
//     //pass
// }
try {
    // Retirando margem à esquerda pre-setada da parte principal da página.
    document.querySelector("#wrapper").style.marginLeft = '0'
} catch (error) {
    //pass
}



// Tornando título da página início estático (antes era sticky)
try {
    document.querySelector("#dashboard_header_container").style.position = 'static'
} catch (error) {
    //pass
}
try {
    //Alterando tamanho da primeira div do topo para centralizar
    document.querySelector('.headerDiv').style.width = '31%'
} catch (error) {
    //pass
}
//Escondendo overflowX
document.querySelector("body").style.overflowX = 'hidden'

//Trocando o nome BigBlueButton para Tutoria Online na barra lateral dentro da disciplina
if (document.URL.match(/courses/) && document.URL.length == 46 && !document.URL.match('151')) {
    // try {
    //     var sections = document.getElementsByClassName('section')
    //     for (i = 0; i < sections.length; i++) { if (sections[i].innerText == 'BigBlueButton') { sections[i].children[0].innerText = 'Tutoria Online' } }
    // } catch (error) {
    //     //pass
    // }
    // try {
    //     var sections = document.getElementsByClassName('section')
    //     for (i = 0; i < sections.length; i++) { if (sections[i].innerText == 'Página inicial') { sections[i].children[0].innerText = 'Conteúdo Online' } }
    // } catch (error) {
    //     //pass
    // }
    // try {
    //     var sections = document.getElementsByClassName('section')
    //     for (i = 0; i < sections.length; i++) { if (sections[i].innerText == 'Tarefas') { sections[i].children[0].innerText = 'Exercícios e Avaliações' } }
    // } catch (error) {
    //     //pass
    // }
    // try {
    //     var sections = document.getElementsByClassName('section')
    //     for (i = 0; i < sections.length; i++) { if (sections[i].innerText == 'Testes') { sections[i].style.display = 'none' } }
    // } catch (error) {
    //     //pass
    // }  

    //Deixnado invisível até que carregue
    try {
        document.querySelector('body').classList.add('mainOpacityOff')
        setTimeout(() => {
            document.querySelector('body').classList.remove('mainOpacityOff')
            document.querySelector('body').classList.add('mainOpacityOn')
        }, 2000)
    } catch (error) {
        console.log(error)
    }

    //Aderindo conteúdo da página principal
    let frontPage = document.createElement('div')
    frontPage.setAttribute('id', 'frontPage')
    frontPage.innerHTML =
        `<a id="conteudoOnline" class="courseIcon">
        <img id="1346"
            src="https://gruponobre.instructure.com/users/180/files/1346/preview?verifier=wzsB3ThdEt1iHUiRChDxpRujuXXN84PckeAUYFXQ"
            alt="conteudo online.png" />
        <p>CONTEÚDO ONLINE</p>
        </a>
        <!--<a id="exercicios" class="courseIcon">
            <img id="1345"
                src="https://gruponobre.instructure.com/users/180/files/1345/preview?verifier=nAeBpsNksMjrQrlbuFsHe5cIC8dsjMnBgF6Tg75r"
                alt="exercicios.png" />
            <p>EXERCÍCIOS</p>
        </a>
        <a id="atividadeIndividual" class="courseIcon">
                <img id="1529" 
                    src="https://gruponobre.instructure.com/users/180/files/1529/preview?verifier=2kZl4nSVlMX2uRgaEUAYy1J62hrCBWEbVv7ws094" 
                    alt="atividade individual.png" />
                <p>ATIVIDADE INDIVIDUAL</p>
        </a>
        <a id="teste" class="courseIcon">
            <img id="1344" 
                src="https://gruponobre.instructure.com/users/180/files/1344/preview?verifier=Wv3SLQPU6H1rhIjv9LDisr3wm4XiCBzzkFBURG1U" 
                alt="avaliacoes (2).png" />
            <p>TESTE</p>
        </a>-->
        <a id="simulado" class="courseIcon">
            <img id="1499" 
                src="https://gruponobre.instructure.com/users/180/files/1499/preview?verifier=lLlCIOrNHZzZGiOHTjz8Np9sSeoOsZmA3smgD1RZ" 
                alt="simulado.png" />
            <p>EXERCÍCIOS E AVALIAÇÕES</p>
        </a>
        <a id="forum" class="courseIcon">
            <img id="1343"
                src="https://gruponobre.instructure.com/users/180/files/1343/preview?verifier=IAIsvvecAhb3p4Cs5XZEyau3d5nwb8YOuLihenXN"
                alt="forum.png" />
            <p>FÓRUM</p>
        </a>
        <a id="digitalRoom" class="courseIcon">
            <img id="1342"
                src="https://gruponobre.instructure.com/users/180/files/1342/preview?verifier=MbS5YhF1YWwKxwecKMdaeGztSKTDOPWt4lHbT3F9"
                alt="chat disciplina.png" />
            <p>SALA DIGITAL</p>
        </a>
        <a id="tutoriaOnline" class="courseIcon">
            <img id="1341"
                src="https://gruponobre.instructure.com/users/180/files/1341/preview?verifier=jzpU8SEDojXQzqLh8cQ11NS4ltJQsngvUskW5SVX"
                alt="tutoria online (2).png" />
            <p>TUTORIA ONLINE</p>
        </a>
        <a id="teacher" class="courseIcon">
        <img id="1791" 
            src="https://gruponobre.instructure.com/users/180/files/1791/preview?verifier=G9kkDZ7i6fd5OqpNgBtTLFdzmiic509mbzGFxgv8" 
            alt="teacher.png" />
            <p>PROFESSOR</p>
        </a>
        <hr id="divider">`

    document.getElementById('content-wrapper').appendChild(frontPage)
}

//Criando página de coordenadores de curso
if (document.URL.match(/coordenadores/)) {
    let titleCoordPage = document.createElement('h2')
    titleCoordPage.innerText = 'COORDENADORES DE CURSO'
    titleCoordPage.setAttribute('id','titleCoordPage')
    let coordPage = document.createElement('div')
    coordPage.setAttribute('id', 'coordPage')
    coordPage.innerHTML =
        `<a id="coordEmanuela" class="courseIcon">
        <img id="1673" src="https://gruponobre.instructure.com/users/180/files/1673/preview?verifier=0vUEz08Qc1UF3uxZvtdpbYmX75b4W5NEmtHlbxuB" alt="biomedicina.png" />
        <p>BIOMEDICINA</p>
        </a>
        <a id="coordFilipe" class="courseIcon">
        <img id="1672" src="https://gruponobre.instructure.com/users/180/files/1672/preview?verifier=8rW1J31y8duQlOXdJ1txpsMzAAbunrmk6Y4J0w8z" alt="design.png" />
        <p>ARQUITETURA<BR>DESIGN</p>
        </a>
        <a id="coordEverlan" class="courseIcon">
        <img id="1671" src="https://gruponobre.instructure.com/users/180/files/1671/preview?verifier=3I3FFQQrjEPrvlmngVsoITtDFjQ2X9bsdr8xdpzM" alt="adm.png" />
        <p>PUBLICIDADE E PROPAGANDA<BR>ADMINISTRAÇÃO</p>
        </a>
        <a id="coordFernandaMansani" class="courseIcon">
        <img id="1670" src="https://gruponobre.instructure.com/users/180/files/1670/preview?verifier=kTUKQfI1rSr7slU7Q00iDKCU0PwzgOmxmvV6IWHw" alt="eng elet.png" />
        <p>ENG. ELÉTRICA<BR>ENG. MECÂNICA</p>
        </a>
        <a id="coordEdgard" class="courseIcon">
        <img id="1669" src="https://gruponobre.instructure.com/users/180/files/1669/preview?verifier=jyRNyqQDwu1sAvrtRA6XxM05EipscAjvmal8rWl3" alt="civil.png" />
        <p>ENG. CIVIL<BR>ENG. QUÍMICA<BR>ENG. DE PRODUÇÃO</p>
        </a>
        <a id="coordFernandaPinheiro" class="courseIcon">
        <img id="1668" src="https://gruponobre.instructure.com/users/180/files/1668/preview?verifier=F0SoRtmu6tvmMJJADASSICFEhvdz05P7HbbTmvh3" alt="farmacia.png" />
        <p>FARMÁCIA</p>
        </a>
        <a id="coordSanmara" class="courseIcon">
        <img id="1667" src="https://gruponobre.instructure.com/users/180/files/1667/preview?verifier=8RFE9Lp4lTzoQaFlmQvIAkiCay2rkyWw2wDjeElT" alt="enfermagem.png" />
        <p>ENFERMAGEM<BR>NUTRIÇÃO</p>
        </a>
        <a id="coordJeidson" class="courseIcon">
        <img id="1666" src="https://gruponobre.instructure.com/users/180/files/1666/preview?verifier=fJH2Y9cxiLVyBukZ7XQfJWJgSdbi2oJZmQCJU0qa" alt="odontologia.png" />
        <p>ODONTOLOGIA</p>
        </a>
        <a id="coordCamilla" class="courseIcon">
        <img id="1665" src="https://gruponobre.instructure.com/users/180/files/1665/preview?verifier=zv9vn9As1vCtXX8AmUB3o72ldtQ4ZY5juFwnT4aL" alt="fisioterapia.png" />
        <p>FISIOTERAPIA</p>
        </a>
        <a id="coordBruno" class="courseIcon">
        <img id="1664" src="https://gruponobre.instructure.com/users/180/files/1664/preview?verifier=RZS0TjlVDD5ubILblqdlMcY2uNYMHtknGDnji7nM" alt="direito.png" />
        <p>DIREITO</p>
        </a>
        <hr id="divider">
    `
    document.getElementById('content-wrapper').appendChild(titleCoordPage)
    document.getElementById('content-wrapper').appendChild(coordPage)

    document.querySelector('#coordEmanuela').setAttribute('href','https://gruponobre.instructure.com/conversations?context_id=course_149&user_id=591&user_name=EMANUELA%20AVELAR%20SILVA%20DE%20SIQUEIRA#filter=type=inbox')
    document.querySelector('#coordFilipe').setAttribute('href','https://gruponobre.instructure.com/conversations?context_id=course_149&user_id=592&user_name=FILIPE%20GOMES%20DE%20ALBUQUERQUE#filter=type=inbox')
    document.querySelector('#coordEverlan').setAttribute('href','https://gruponobre.instructure.com/conversations?context_id=course_149&user_id=400&user_name=EVERLAN%20BRITO%20ARAUJO#filter=type=inbox')
    document.querySelector('#coordFernandaMansani').setAttribute('href','https://gruponobre.instructure.com/conversations?context_id=course_149&user_id=407&user_name=FERNANDA%20MANSANI%20SILVA%20GOMES#filter=type=inbox')
    document.querySelector('#coordEdgard').setAttribute('href','https://gruponobre.instructure.com/conversations?context_id=course_149&user_id=593&user_name=EDGARD%20FREITAS%20DE%20SIQUEIRA%20J%C3%9ANIOR#filter=type=inbox')
    document.querySelector('#coordFernandaPinheiro').setAttribute('href','https://gruponobre.instructure.com/conversations?context_id=course_149&user_id=594&user_name=FERNANDA%20PINHEIRO%20DE%20CARVALHO%20RIBEIRO#filter=type=inbox')
    document.querySelector('#coordSanmara').setAttribute('href','https://gruponobre.instructure.com/conversations?context_id=course_149&user_id=595&user_name=SANMARA%20SOUZA%20PEDREIRA%20LIMA#filter=type=inbox')
    document.querySelector('#coordJeidson').setAttribute('href','https://gruponobre.instructure.com/conversations?context_id=course_149&user_id=596&user_name=JEIDSON%20ANTONIO%20MORAES%20MARQUES#filter=type=inbox')
    document.querySelector('#coordCamilla').setAttribute('href','https://gruponobre.instructure.com/conversations?context_id=course_149&user_id=597&user_name=CAMILLA%20SANTOS%20PORTUGAL%20BRITTO#filter=type=inbox')
    document.querySelector('#coordBruno').setAttribute('href','https://gruponobre.instructure.com/conversations?context_id=course_149&user_id=598&user_name=BRUNO%20VARGENS%20NUNES#filter=type=inbox')
}


//Alterando o dizer no menu do topo em cada página
//Colocando o nome do aluno no topo da página principal
let centro = document.getElementById('centro')



if (document.URL.match(/calendar/)) {
    centro.innerText = 'CALENDÁRIO'
}
if (document.URL.match(/conversations/)) {
    centro.innerText = 'CAIXA DE ENTRADA'

    let mailMenu = document.querySelector('.panel')
    mailMenu.style.paddingBottom = '30px'
    mailMenu.style.paddingTop = '55px'

    document.querySelector('.messaging-wrapper').style.paddingTop = '25px'
}
if (document.URL.match(/navigation/)) {
    centro.innerText = 'STUDIO'
}
function toADM() {
    window.location.href = 'https://gruponobre.instructure.com/accounts/1'
}
if (document.URL.match(/profile/)) {
    centro.innerText = 'PERFIL'
    //Adicionando botão administrador
    async function painelAdministrador(){
        let response = await fetch(apiURL)
        let data = await response.json()
        let id = await data.id

        let painelADM = document.createElement('div')
        try {
            if(admGlobal.indexOf(id) != -1){
                painelADM.innerHTML = '<a href="https://gruponobre.instructure.com/accounts/1?"" style="font-size: 22px;">Painel administrativo</a>'
                document.querySelector("#edit_profile_form > div > div.profileContent__Block").append(painelADM)
            } else if(admUNEF.indexOf(id) != -1){
                painelADM.innerHTML = '<a href="https://gruponobre.instructure.com/accounts/111?"" style="font-size: 22px;">Painel administrativo</a>'
                document.querySelector("#edit_profile_form > div > div.profileContent__Block").append(painelADM)
            }
        } catch (error) {
            //pass
        }
    }
    painelAdministrador()
}
if (document.URL.match(/settings/)) {
    centro.innerText = 'CONFIGURAÇÕES'
    let settingsContent = document.getElementById('content')
    async function reitraExcesso(){
        const response = await fetch(apiURL)
        const data = await response.json()
    
        if (!data.login_id){
            for(i=6;i<settingsContent.children.length;i++){
                settingsContent.children[i].style.display = 'none'
            }
        }
    }
    reitraExcesso()

    try {
        document.querySelector(".edit_settings_link").innerHTML = '<i class="icon-edit" aria-hidden="true"></i>  Alterar Senha'
    } catch (error) {
        //pass
    }
}
// if(document.URL == 'https://gruponobre.instructure.com/' || document.URL.match(/success/)){
//     centro.innerText = 'Início'
// }

//Alterações nos cards
function cardsChanges() {
    if (document.URL == 'https://gruponobre.instructure.com/' || document.URL.match(/success/)) {
        //Retirando subtítulo dos cards que está vindo com código ID do SIS
        // let subtitleCards = document.getElementsByClassName('ic-DashboardCard__header-subtitle')
        // for (i = 0; i < subtitleCards.length; i++) {
        //     subtitleCards[i].style.display = 'none'
        // }

        //Afastando título dos cards dos ícones
        // let titleCards = document.getElementsByClassName('ic-DashboardCard__header_content')
        // for (i = 0; i < titleCards.length; i++) {
        //     titleCards[i].style.margin = '10px 0'
        //     titleCards[i].style.marginBottom = '20px'
        // }

        //Aumentando a letra do título
        // for (i = 0; i < titleCards.length; i++) {
        //     titleCards[i].children[0].style.fontSize = '16px'
        // }

        //Aumentando o padding da div que contém os cards
        // document.querySelector(".ic-DashboardCard__box__container").style.paddingTop = '40px'
        // document.querySelector(".ic-DashboardCard__box__container").style.paddingBottom = '40px'

        //Aumentando ícones dos cards
        // let cardsIcons = document.querySelectorAll(".ic-DashboardCard__action-layout")
        // for (i = 0; i < cardsIcons.length; i++) {
        //     cardsIcons[i].children[0].style.height = '25px'
        //     cardsIcons[i].children[0].style.width = '25px'
        // }

        //Deixando os cards centralizados
        // let cardsDiv = document.querySelector("#content-wrapper").style
        // cardsDiv.display = 'flex'
        // cardsDiv.justifyContent = 'center'
        // cardsDiv.alignItems = 'center'
        // let cards = document.querySelectorAll('.ic-DashboardCard')
        // for(i=0;i<cards.length;i++){
        //     cards[i].style.width = '22%'
        // }
    }
}

setTimeout(cardsChanges, 2000)

//Apagando o nome da disciplina ao lado do botão pois o nome aparece na página principal da disciplina
if (document.URL.match(/courses/)) {
    try {
        let courseName = document.querySelector('.ic-app-crumbs')
        courseName.style.display = 'none'
    } catch (error) {
        //pass
    }

    //Alterando os hrefs dos ícones da disciplina
    setTimeout(() => {
        try {
            document.getElementById('conteudoOnline').setAttribute('href', document.URL.substring(0, 46) + '/modules')
            // document.getElementById('exercicios').setAttribute('href', document.URL.substring(0,46) + '/assignments')
            // document.getElementById('atividadeIndividual').setAttribute('href', document.URL.substring(0,46) + '/assignments')
            // document.getElementById('teste').se3tAttribute('href', document.URL.substring(0,46) + '/assignments')
            document.getElementById('simulado').setAttribute('href', document.URL.substring(0, 46) + '/assignments')
            document.getElementById('forum').setAttribute('href', document.URL.substring(0, 46) + '/discussion_topics')
            document.getElementById('digitalRoom').setAttribute('href', document.URL.substring(0, 46) + '/external_tools/125')
            document.getElementById('tutoriaOnline').setAttribute('href', document.URL.substring(0, 46) + '/conferences')
            document.getElementById('teacher').setAttribute('href', 'https://gruponobre.instructure.com/conversations?context_id=course_149&user_id=406&user_name=MARILIA%20PONDE%20FERREIRA%20SUZARTE#filter=type=inbox')
        } catch (error) {
            //pass
        }
    }, 2000);

    //Retirando a barra lateral esquerda
    try {
        document.querySelector('body').classList.remove('course-menu-expanded')
    } catch (error) {
        //pass
    }

    let aside = document.getElementById('right-side')
    let eventsList = document.querySelector('.events_list')
    let createTest = document.createElement('button')
    createTest.textContent = 'Criar uma avaliação'
    createTest.setAttribute('id', 'createTest')
    createTest.setAttribute('onClick', `window.location.href = '${document.URL}' + "/quizzes"`)
    aside.insertBefore(createTest, eventsList)

    let createExercise = document.createElement('button')
    createExercise.textContent = 'Criar uma ativitdade individual'
    createExercise.setAttribute('id', 'createExercise')
    createExercise.setAttribute('onClick', `window.location.href = '${document.URL}' + "/assignments"`)
    aside.insertBefore(createExercise, eventsList)

}

//Retirando menu do topo do banco de perguntas e external tools
if (document.URL.match(/external_tools/) && document.URL.match(/accounts/)) {
    document.getElementById('newHeader').style.display = 'none'
}

try {
    document.querySelector("#content > div:nth-child(2) > span > a").textContent = 'Clique aqui para baixar o livro.'
} catch (error) {
    //pass
}


//Deixando a página da disciplina mais limpa
if (document.URL.match(/courses/) && document.URL.length == 46) {
    //Aumentando o padding do topo para não cortar as funcionalidades
    // try {
    //     // document.querySelector("#main").style.paddingTop = '20px'
    // } catch (error) {
    //     //pass
    // }
    async function userVerification() {
        const response = await fetch(apiURL)
        const data = await response.json()

        if (!data.login_id) {
            setTimeout(() => {
                try {
                    //Retirando menu lateral direito
                    document.getElementById('right-side-wrapper').style.display = 'none'
                    //Retirando o menu lateral esquerdo
                    document.getElementById('sticky-container').style.display = 'none'
                    // Retirando a div superior que contém o botão sanduíche
                    document.querySelector('.ic-app-nav-toggle-and-crumbs').style.display = 'none'
                    // let sideButtons = document.querySelectorAll('.button-sidebar-wide')
                    // for(i=0;i<sideButtons.length;i++){
                    //     sideButtons[i].style.display = 'none'
                    // }
                    //Aumentando margin-top to título da disciplina que estava cortando
                    document.querySelector('.page-toolbar-start').style.marginTop = '20px'
                } catch (error) {
                    console.log(error)
                }
            }, 2000)
        } else {
            document.querySelector('body').classList.add('course-menu-expanded')
        }

        // setTimeout(() => {
        //     try {
        //         document.querySelector('.page-toolbar-start').style.justifyContent = 'center'
        //     } catch (error) {
        //         //pass
        //     }
        // }, 2000);
    }
    userVerification()

    //Atribuindo background à página do conteúdo da disciplina
    // if(!document.URL.match('login') || !document.URL.match('logout')){
    setTimeout(() => {
        document.querySelector('.header-bar').setAttribute('style', 'background: url("https://gruponobre.instructure.com/users/180/files/1314/preview?verifier=bHe9FOzKxCifF3ip1UsH3cXuyT2JD2bGbBgdm1Yi")')
    }, 2000);
    document.getElementById('application').setAttribute('style', 'background: url("https://gruponobre.instructure.com/users/180/files/1314/preview?verifier=bHe9FOzKxCifF3ip1UsH3cXuyT2JD2bGbBgdm1Yi")')
    // }
}


//Deixando as páginas de conteúdo online mais limpas
if (document.URL.match(/pages/)) {
    window.addEventListener('load', attPage)
    function attPage() {
        try {
            document.querySelector('body').classList.remove('course-menu-expanded')
            document.querySelector('.ic-app-nav-toggle-and-crumbs').style.display = 'none'
            document.querySelector('.header-bar-outer-container').style.display = 'none'
            document.querySelector('.page-title').style.display = 'none'
        } catch (error) {
            //pass
        }
    }
}

//Botão de voltar ao conteúdo online da disciplina
if ((document.URL.match(/courses/) && document.URL.length !== 46)) {
    if (document.URL.match(/module/) && document.URL.match(/item/)) {
        document.getElementById('centro').innerHTML = '<div id="backButton"><button id="headerButton" onClick="window.location.href = window.location.href.substring(0,46) + `/modules`"><img id="1445" src="https://gruponobre.instructure.com/users/180/files/1445/preview?verifier=YCruhc0XbyuYMYXZaeKRqjLJgFB8XqbqbnB4sDn4" alt="back.png" width="35"/> Voltar à página anteriror </button></div>'
        document.querySelector('#content h2').style.display = 'none'
    } else {
        try {
            document.getElementById('centro').innerHTML = '<button id="headerButton" onClick="window.location.href = window.location.href.substring(0,46)"><img id="1445" src="https://gruponobre.instructure.com/users/180/files/1445/preview?verifier=YCruhc0XbyuYMYXZaeKRqjLJgFB8XqbqbnB4sDn4" alt="back.png" width="35"/> Voltar à página anteriror</button>'
        } catch (error) {
            //pass
        }
    }
}


//Retirando o banco de perguntas antigo do painel administrativo (Existem 2 - Um antigo e um novo)
if (document.URL.match(/accounts/)) {
    try {
        let sectionsAdm = document.getElementsByClassName('section')
        for (i = 0; i < sectionsAdm.length; i++) {
            if (sectionsAdm[i].children[0].textContent == 'Bancos de perguntas') {
                sectionsAdm[i].style.display = 'none'
                break
            }
        }
    } catch (error) {
        //pass
    }
}

//Retirando o menu do topo das páginas de criação de avaliações
if (document.URL.match(/display/)) {
    window.addEventListener('load', toTop)
    try {
        document.getElementsByTagName('body')[0].classList.remove('course-menu-expanded')
    } catch (error) {
        //pass
    }
    function toTop() {
        setTimeout(() => {
            window.scrollTo(0, 0)
        }, 2000)
    }
}

// Chat técnico
// if (document.URL.match(/profile/)){
//     var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
//     (function(){
//     var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
//     s1.async=true;
//     s1.src='https://embed.tawk.to/632c7e6137898912e96ab958/1gdisrbrg';
//     s1.charset='UTF-8';
//     s1.setAttribute('crossorigin','*');
//     s0.parentNode.insertBefore(s1,s0);
//     })();
// }

//Aumentando o paddingtop de todas as páginas que possuem menu do topo
if (document.URL !== 'https://gruponobre.instructure.com/' && !document.URL.match(/success/)) {
    try {
        document.querySelector("#main").style.paddingTop = '30px'
    } catch (error) {
        //pass
    }
}

//Normalizando página de edição de tarefas
if (document.URL.match(/assignments/) && document.URL.length > 60) {
    try {
        setTimeout(() => {
            if (document.URL.match(/quiz/)) {
                document.getElementById('centro').innerHTML = '<button id="headerButton" onClick="window.location.href = window.location.href.substring(0,46) + `/quizzes`"><img id="1445" src="https://gruponobre.instructure.com/users/180/files/1445/preview?verifier=YCruhc0XbyuYMYXZaeKRqjLJgFB8XqbqbnB4sDn4" alt="back.png" width="35"/> Voltar à página anteriror</button>'
            } else {
                document.getElementById('centro').innerHTML = '<button id="headerButton" onClick="window.location.href = window.location.href.substring(0,46)"> <img id="1445" src="https://gruponobre.instructure.com/users/180/files/1445/preview?verifier=YCruhc0XbyuYMYXZaeKRqjLJgFB8XqbqbnB4sDn4" alt="back.png" width="35"/>Voltar à página anteriror</button>'
            }
            //Botão de voltar em avaliações
            document.querySelector(".edit-assignment-header-cr").style.width = '100%'
            document.querySelector('.header-bar').style.display = 'block'
        }, 2000)
    } catch (error) {
        //pass
    }
}


//Alterando a página de conteúdo online
if (document.URL.match(/modules/)) {
    //Adicionando background image na div do botão
    document.querySelector('.header-bar').setAttribute('style', 'background: url("https://gruponobre.instructure.com/users/180/files/1314/preview?verifier=bHe9FOzKxCifF3ip1UsH3cXuyT2JD2bGbBgdm1Yi")')
    //Trazendo o botão de recolher para a esquerda
    document.querySelector('.header-bar').style.display = 'flex' //Justify-content já aplicado
    //Adicionando background image na div do conteúdo
    document.querySelector('.item-group-container').setAttribute('style', 'background: url("https://gruponobre.instructure.com/users/180/files/1314/preview?verifier=bHe9FOzKxCifF3ip1UsH3cXuyT2JD2bGbBgdm1Yi")')
    try {
        //Removendo marem top em excesso
        document.querySelector("#content").style.marginTop = '-50px'
        //Trazendo botão de recolher para a esquerda
        document.querySelector('.header-bar').style.justifyContent = 'start'
    } catch (error) {
        console.log(error)
    }

    //Trocando ícones
    let modulesIcons = document.querySelectorAll('.type_icon')
    for(i=0;i<modulesIcons.length;i++){
        if(modulesIcons[i].attributes['title'].value == 'Page'){
            modulesIcons[i].children[1].innerHTML = '<img id="1822" src="https://gruponobre.instructure.com/users/180/files/1822/preview?verifier=EWRx3DMP8DpHQdpgyj8RL0B9zlY45qlX51URopoP" alt="webpage2" />'
        }else if(modulesIcons[i].attributes['title'].value == 'External Url'){
            modulesIcons[i].children[1].innerHTML = '<img id="1820" src="https://gruponobre.instructure.com/users/180/files/1820/preview?verifier=2GRrzXm0TqHJa9Ls9rvWc4ExXU7s7s9oj7S4WwvQ" alt="videoaula" />'
        }else if(modulesIcons[i].attributes['title'].value == 'Attachment'){
            modulesIcons[i].children[1].innerHTML = '<img id="1815" src="https://gruponobre.instructure.com/users/180/files/1815/preview?verifier=uApuKm7HHx0XHt8qFaBfLYJpzcSpuRrb3A3XDqQA" alt="book" />'
        }else if(modulesIcons[i].attributes['title'].value == 'Context Module Sub Header'){
            modulesIcons[i].children[1].innerHTML = '<img id="1823" src="https://gruponobre.instructure.com/users/180/files/1823/preview?verifier=0eeMJIZ2L0E7c5KsxjrqXceSBdGa4Fe0f4bkPf9r" alt="playlist" />'
            document.querySelectorAll('.ig-type-icon')[i].style.display = 'block'
            document.querySelectorAll('.item_name')[i].style.marginLeft = '2.3%'
        }
    }

}


if (document.URL.match(/assignments/) && document.URL.length < 59) {
     //Trocando os ícones
     window.addEventListener('load', ()=>{
         let iconsAssignments = document.querySelectorAll('.ig-type-icon')
         for(i=0;i<iconsAssignments.length;i++){
             if(iconsAssignments[i].children[0].classList.contains('icon-quiz')){
                iconsAssignments[i].innerHTML = '<img id="1827" src="https://gruponobre.instructure.com/users/180/files/1827/preview?verifier=gXDesXsGxEI7k2RzT6WlkQR3Npy2C1ZYlB8wfFjD" alt="quiz" />'
             }else if(iconsAssignments[i].children[0].classList.contains('icon-discussion')){
                iconsAssignments[i].innerHTML = '<img id="1826" src="https://gruponobre.instructure.com/users/180/files/1826/preview?verifier=vNo4XzIa8rbmffQb0aWpMXEdeorhIYGhk09ONLuO" alt="forum2" />'
             }else if(iconsAssignments[i].children[0].classList.contains('icon-assignment')){
                iconsAssignments[i].innerHTML = '<img id="1828" src="https://gruponobre.instructure.com/users/180/files/1828/preview?verifier=kQOZagiyFqzJgnPAeho9nRP6LIvRBlElnFNn8pVz" alt="atividade individual2" />'
             }
         }

         //Adicionando backgroud às partes que carregam depois
         document.querySelector('.header-bar').setAttribute('style', 'background: url("https://gruponobre.instructure.com/users/180/files/1314/preview?verifier=bHe9FOzKxCifF3ip1UsH3cXuyT2JD2bGbBgdm1Yi")')
         document.querySelector('.item-group-container').setAttribute('style', 'background: url("https://gruponobre.instructure.com/users/180/files/1314/preview?verifier=bHe9FOzKxCifF3ip1UsH3cXuyT2JD2bGbBgdm1Yi")')
     })

     //Bloco de instruções
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
        <P CLASS="instruction"><img id="1827" src="https://gruponobre.instructure.com/users/180/files/1827/preview?verifier=gXDesXsGxEI7k2RzT6WlkQR3Npy2C1ZYlB8wfFjD" alt="quiz" width="25px"/> <B>TESTE:</B> <BR>&emsp;&emsp;&emsp;•DATA: DE 05/12(00:00) ATÉ 08/12(23:59)<BR>&emsp;&emsp;&emsp;•PONTUAÇÃO: ATÉ 6 (SEIS) PONTOS.</P>
        <P CLASS="instruction"><img id="1827" src="https://gruponobre.instructure.com/users/180/files/1827/preview?verifier=gXDesXsGxEI7k2RzT6WlkQR3Npy2C1ZYlB8wfFjD" alt="quiz" width="25px"/> <B>TESTE FINAL:</B> <BR>&emsp;&emsp;&emsp;•REQUISITOS: O SOMATÓRIO DAS DEMAIS AVALIAÇÕES DEVE RESULTAR EM UM VALOR ENTRE 5(CINCO) E 7(SETE) PONTOS.<BR>&emsp;&emsp;&emsp;•DATA: DE 19/12(00:00) ATÉ 21/12(23:59)<BR>&emsp;&emsp;&emsp;•PONTUAÇÃO: ATÉ 6 (SEIS) PONTOS.</P>
    </div>`

    newParent.insertBefore(instructionBox, newChildren)

}

if (document.URL.match(/external/) && document.URL.match('125')) {
    //Adicionando margem à esquerda para o título do chat
    document.querySelector('.header h1').style.marginLeft = '20px'
}

// try {
//     document.getElementById('breadcrumbs').setAttribute('style','background: url("https://gruponobre.instructure.com/users/180/files/1314/preview?verifier=bHe9FOzKxCifF3ip1UsH3cXuyT2JD2bGbBgdm1Yi")')
// } catch (error) {
//     //pass
// }

//Retirando o menu do topo no speed grader
if(document.URL.match('speed')){
    document.querySelector("#newHeader").style.display = 'none'

    let backToDiscipline = document.createElement('button')
    backToDiscipline.setAttribute('id','homeButton')
    backToDiscipline.setAttribute('onClick',`window.location.href = '${window.location.href.substring(0,46)}/assignments'`)
    backToDiscipline.innerText = 'Voltar aos exercícios e avaliações'
    try {
        let contentBox = document.querySelectorAll('.content_box')
        contentBox[contentBox.length - 1].append(backToDiscipline)
    } catch (error) {
        //pass
    }
}

async function minhaBiblioteca(){
    let botaoBiblioteca = document.getElementById('biblioteca')
    botaoBiblioteca.textContent = 'Aguarde...'
    let getUser = await fetch('https://gruponobre.instructure.com/api/v1/users/self/enrollments')
    let userToJson = await getUser.json()
    let userCanvas = await userToJson[0].user
    
    let length = userCanvas.name.split(' ').length
    let firstName = userCanvas.name.split(' ')[0]
    let lastName = userCanvas.name.split(' ')[length -1]
    let ra = userCanvas.login_id

    let response = await fetch(`https://gruponobreapi.netlify.app/.netlify/functions/api`, {
        method: 'post',
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            ra: ra
        })
    })
    let data = await response.json()
    
    if(response.status == 200){
        botaoBiblioteca.textContent = 'Acessar'
        window.open(`${data.resposta}`)
        return
    }else{
        botaoBiblioteca.textContent = 'Acessar'
        window.alert('Erro ao entrar na biblioteca online. Por gentileza entre em contato com a instituição!')
    }
}