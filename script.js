
    var lane;
    var estilo;
    var farm;
    var visao;
    var Passo = 1;
    var Perguntas = document.getElementById("Pergunta");
    var Campos    = document.getElementById("Campo");
    var img = document.createElement('img');
    img.setAttribute('id','foto');
    var resultado = document.getElementById("res");
    var Personagem;
    var resultados = document.getElementById("texto");




function Proximo(){
    
    if(Passo == 5)
    {
        if(document.getElementsByName("radLane")[0].checked)
        {
            visao = "boa visao" ;     
        } 
        if(document.getElementsByName("radLane")[1].checked)
        {
            visao = "ma visao" ;    
        }
        Passo = 6;
        Resultado();
    }
    if(Passo == 4)
    {
        if(document.getElementsByName("radLane")[0].checked)
        {
            farm = "farma bem" ;     
        } 
        if(document.getElementsByName("radLane")[1].checked)
        {
            farm = "farma mau" ;    
        }
        if(document.getElementsByName("radLane")[2].checked)
        {
            farm = "farma rabadon" ;    
        }
        Passo = 5;
        TopPergunta3();
    }
    if(Passo == 3)
    {
        if(document.getElementsByName("radLane")[0].checked)
        {
            estilo = "Agressivo" ;     
        } 
        if(document.getElementsByName("radLane")[1].checked)
        {
            estilo = "Safe" ;    
        }
        Passo = 4;
        TopPergunta2();
    }
    if(Passo == 1)
    { 
        if(document.getElementsByName("radLane")[0].checked)
        {
            lane = "Top" ; 
            Passo = 2;
            Top();
        } 
        if(document.getElementsByName("radLane")[1].checked)
        {
            lane = "Mid" ; 
            Passo = 2;
            Mid();
        }
        if(document.getElementsByName("radLane")[2].checked)
        {
            lane = "Adc" ; 
            Passo = 2;
            Adc();
        }
        if(document.getElementsByName("radLane")[3].checked)
        {
            lane = "Suporte" ; 
            Passo = 2;
            Suporte();
        }
        if(document.getElementsByName("radLane")[4].checked)
        {
            lane = "Jungle" ; 
            Passo = 2;
            Jungle();
        } 
        
    }   
    
    document.getElementById("radTop").checked = true; 
}
function Resultado () 
{
    if(lane == "Top")
    {
        if(estilo == "Agressivo")
        {
            if(visao == "boa visao")
            {
                if(farm == "farma bem")
                {
                    Personagem = "Quinn"
                }else
                {
                    Personagem = "Kled";
                }
               
            }
            else
            {
                if(farm == "farma bem")
                {
                    Personagem = "Darius"
                }
                else
                {
                    Personagem = "Fiora"
                }
                
            }
        }else
        {
            if(farm == "farma bem")
            {
                if(visao == "boa visao")
                {
                    Personagem = "GangPlank"
                }
                else
                {
                    Personagem = "Nasus"
                }
                
            }else
            {
                if(visao == "boa visao")
                {
                    Personagem = "Shen"
                }else
                {
                    Personagem = "Garen"
                }
                
            }
        }
    }

    if(lane == "Mid")
    {
        if(estilo == "Agressivo")
        {
            if(visao == "boa visao")
            {
                if(farm == "farma bem")
                {
                    Personagem = "Katarina"
                }else
                {
                    Personagem = "Talon";
                }
               
            }
            else
            {
                if(farm == "farma bem")
                {
                    Personagem = "LeBlanc"
                }
                else
                {
                    Personagem = "Yasuo"
                }
                
            }
        }else
        {
            if(farm == "farma bem")
            {
                if(visao == "boa visao")
                {
                    Personagem = "Victor"
                }
                else
                {
                    Personagem = "Veigar"
                }
                
            }else
            {
                if(visao == "boa visao")
                {
                    Personagem = "Heimer"
                }else
                {
                    Personagem = "Mordekaiser"
                }
                
            }
        }
    }

    if(lane == "Adc")
    {
        if(estilo == "Agressivo")
        {
            if(visao == "boa visao")
            {
                if(farm == "farma bem")
                {
                    Personagem = "Draven"
                }else
                {
                    Personagem = "MissFortune";
                }
               
            }
            else
            {
                if(farm == "farma bem")
                {
                    Personagem = "Twitch"
                }
                else
                {
                    Personagem = "Varus"
                }
                
            }
        }else
        {
            if(farm == "farma bem")
            {
                if(visao == "boa visao")
                {
                    Personagem = "Vayne"
                }
                else
                {
                    Personagem = "Ezreal"
                }
                
            }else
            {
                if(visao == "boa visao")
                {
                    Personagem = "Xayah"
                }else
                {
                    Personagem = "Ashe"
                }
                
            }
        }
    }

    if(lane == "Suporte")
    {
        if(estilo == "Agressivo")
        {
            if(visao == "boa visao")
            {
                if(farm == "farma bem")
                {
                    Personagem = "Nautilus"
                }
                if(farm == "farma mau")
                {
                    Personagem = "Bardo";
                }
                if(farm == "farma rabadon")
               {
                    Personagem = "Lux";
               }
               
            }
            else
            {
                if(farm == "farma bem")
                {
                    Personagem = "Blitz"
                }
                if(farm == "farma mau")
                {
                    Personagem = "Janna";
                }
                if(farm == "farma rabadon")
               {
                    Personagem = "Brand";
               }
                
            }
        }else
        {
            if(visao == "boa visao")
            {
                if(farm == "farma bem")
                {
                    Personagem = "Rakan"
                }
                if(farm == "farma mau")
                {
                    Personagem = "Soraka";
                }
                if(farm == "farma rabadon")
               {
                    Personagem = "Zyra";
               }
               
            }
            else
            {
                if(farm == "farma bem")
                {
                    Personagem = "Braum"
                }
                if(farm == "farma mau")
                {
                    Personagem = "Lulu";
                }
                if(farm == "farma rabadon")
               {
                    Personagem = "Morgana";
               }
                
            }
        }
    }


    if(lane == "Jungle")
    {
        if(estilo == "Agressivo")
        {
            if(visao == "boa visao")
            {
                if(farm == "farma bem")
                {
                    Personagem = "Zac"
                }
                if(farm == "farma mau")
                {
                    Personagem = "Vi";
                }
               
               
            }
            else
            {
                if(farm == "farma bem")
                {
                    Personagem = "LeeSin"
                }
                if(farm == "farma mau")
                {
                    Personagem = "Evelyn";
                }

                
            }
        }else
        {
            if(visao == "boa visao")
            {
                if(farm == "farma bem")
                {
                    Personagem = "Gnar"
                }
                if(farm == "farma mau")
                {
                    Personagem = "Amumu";
                }
 
               
            }
            else
            {
                if(farm == "farma bem")
                {
                    Personagem = "Kindred"
                }
                if(farm == "farma mau")
                {
                    Personagem = "MasterYi";
                }

                
            }
        }
    }
    resultado.style.textAlign = "center";
    Perguntas.innerHTML = ""
    Campos.innerHTML = ""
    document.getElementById("Botao").innerHTML = ""
    switch(Personagem)
    {
        

        case "Quinn" :
            
            img.setAttribute('src','Quinn.png');
            resultado.appendChild(img);
            resultado.innerHTML +="<p></p>"
            resultados.innerHTML += "Agressivo, boa visão e sempre pronto para dar um roaming. Seu personagem é a Quinn !"
        break;
        case "Kled" :
            img.setAttribute('src','Kled.png');
            resultado.appendChild(img);
            resultado.innerHTML +="<p></p>"
            resultados.innerHTML += "Agressivo de olho no mapa mas não farma tão bem, pegue seu Kled e seja feliz!"
        break;
        case "Darius" :
            img.setAttribute('src','Darius.png');
            resultado.appendChild(img);
            resultado.innerHTML +="<p></p>"
            resultados.innerHTML += "Vai pra cima farma os minions e o inimigo junto, seu personagem é o Darius !";
        break;
        case "Fiora" :
            img.setAttribute('src','Fiora.png');
            resultado.appendChild(img);
            resultado.innerHTML +="<p></p>"
            resultados.innerHTML += "Alguém fácil pra farmar dar dano e derrubar torres? Seu personagem é a Fiora !";
        break;
        case "GangPlank" :
            img.setAttribute('src','GangPlank.png');
            resultado.appendChild(img);
            resultado.innerHTML +="<p></p>"
            resultados.innerHTML += "Safe, farma bem e sempre de olho no mapa. Seu personagem é o Gang Plank !";
        break;
        case "Nasus" :
            img.setAttribute('src','Nasus.png');
            resultado.appendChild(img);
            resultado.innerHTML +="<p></p>"
            resultados.innerHTML += "Farmando safe com o mapa desligado. Seu personagem é o Nasus !";
        break;
        case "Shen" :
            img.setAttribute('src','Shen.png');
            resultado.appendChild(img);
            resultado.innerHTML +="<p></p>"
            resultados.innerHTML += "Não sabe farmar e é recuado mas esta sempre atento para ajudar aliados. Seu personagem é o Shen!";
        break;
        case "Garen" :
            img.setAttribute('src','Garen.png');
            resultado.appendChild(img);
            resultado.innerHTML +="<p></p>"
            resultados.innerHTML += "Não sabe fazer nada, mas vai existir para girar e tankar a tudo e a todos. Seu personagem é o Garen!";
        break;
        case "Katarina" :
            img.setAttribute('src','Katarina.png');
            resultado.appendChild(img);
            resultado.innerHTML +="<p></p>"
            resultados.innerHTML += "Farma bem, mata o inimigo e de quebra da um roaming. Seu personagem é a Katarina!";
        break;
        case "Talon" :
            img.setAttribute('src','Talon.png');
            resultado.appendChild(img);
            resultado.innerHTML +="<p></p>"
            resultados.innerHTML += "Não farma minions na lane, mas farma inimigos fora dela. Seu personagem é o Talon!";
        break;
        case "LeBlanc" :
            img.setAttribute('src','LeBlanc.png');
            resultado.appendChild(img);
            resultado.innerHTML +="<p></p>"
            resultados.innerHTML += "Farma bem até com personagem difícil de farmar, tem muito dano e garante a lane. Seu personagem é a LeBlanc!";
        break;
        case "Yasuo" :
            img.setAttribute('src','Yasuo.png');
            resultado.appendChild(img);
            resultado.innerHTML +="<p></p>"
            resultados.innerHTML += "Não sabe de muita coisa, mas se o jogo corre o PentaKill vem. Seu personagem é o Yasuo Open!";
        break;
        case "Victor" :
            img.setAttribute('src','Victor.png');
            resultado.appendChild(img);
            resultado.innerHTML +="<p></p>"
            resultados.innerHTML += "Confia no late game farmando tudo que pode. Seu personagem é o Victor!";
        break;
        case "Veigar" :
            img.setAttribute('src','Veigar.png');
            resultado.appendChild(img);
            resultado.innerHTML +="<p></p>"
            resultados.innerHTML += "Sem Limites! A paciencia leva a explosão do ADC. Seu personagem é o Veigar!";
        break;
        case "Heimer" :
            img.setAttribute('src','Heimer.png');
            resultado.appendChild(img);
            resultado.innerHTML +="<p></p>"
            resultados.innerHTML += "Não sabe farmar, mas você nem precisa. Seu personagem é o Heimer!";
        break;
        case "Mordekaiser" :
            img.setAttribute('src','Mordekaiser.png');
            resultado.appendChild(img);
            resultado.innerHTML +="<p></p>"
            resultados.innerHTML += "Muita pressão com pouco esforço. Seu personagem é o Mordekaiser!";
        break;

        case "Draven" :
            img.setAttribute('src','Draven.png');
            resultado.appendChild(img);
            resultado.innerHTML +="<p></p>"
            resultados.innerHTML += "Nível 3 já ta fedado. Seu personagem é o Draven!";
        break;
        case "MissFortune" :
            img.setAttribute('src','MissFortune.png');
            resultado.appendChild(img);
            resultado.innerHTML +="<p></p>"
            resultados.innerHTML += "Não farma nada, mas o R bem posicionado sempre esta garantido. Seu personagem é a Miss Fortune!";
        break;
        case "Twitch" :
            img.setAttribute('src','Twitch.png');
            resultado.appendChild(img);
            resultado.innerHTML +="<p></p>"
            resultados.innerHTML += "Não sabe se pocionar mas farma bem, sua especialidade é aparecer dando PentaKill. Seu personagem é o Twitch!";
        break;
        case "Varus" :
            img.setAttribute('src','Varus.png');
            resultado.appendChild(img);
            resultado.innerHTML +="<p></p>"
            resultados.innerHTML += "Sabe que se posiciona mau, mas tem sempre uma ult para se salvar. Seu personagem é o Varus!";
        break;
        case "Vayne" :
            img.setAttribute('src','Vayne.png');
            resultado.appendChild(img);
            resultado.innerHTML +="<p></p>"
            resultados.innerHTML += "Confia no Late Game! Seu personagem é a Vayne!";
        break;
        case "Ezreal" :
            img.setAttribute('src','Ezreal.png');
            resultado.appendChild(img);
            resultado.innerHTML +="<p></p>"
            resultados.innerHTML += "Fechou a gota é GG. Seu personagem é o Ezreal!";
        break;
        case "Xayah" :
            img.setAttribute('src','Xayah.png');
            resultado.appendChild(img);
            resultado.innerHTML +="<p></p>"
            resultados.innerHTML += "Farmei mau mas ultei em geral. Seu personagem é a Xayah!";
        break;
        case "Ashe" :
            img.setAttribute('src','Ashe.png');
            resultado.appendChild(img);
            resultado.innerHTML +="<p></p>"
            resultados.innerHTML += "Não faço nada, mas eles também não. Seu personagem é a Ashe!";
            
        break;

        case "Nautilus" :
            img.setAttribute('src','Nautilus.png');
            resultado.appendChild(img);
            resultado.innerHTML +="<p></p>"
            resultados.innerHTML += "Sempre passeando, e quando quer matar alguém, vai e mata mesmo. Seu personagem é o Nautilus!";
        break;
        case "Bardo" :
            img.setAttribute('src','Bardo.png');
            resultado.appendChild(img);
            resultado.innerHTML +="<p></p>"
            resultados.innerHTML += "Curandeiro ambulante. Seu personagem é o Bardo!";
        break;
        case "Lux" :
            img.setAttribute('src','Lux.png');
            resultado.appendChild(img);
            resultado.innerHTML +="<p></p>"
            resultados.innerHTML += "Boa visão para roubar a catapa enquanto polkeia. Seu personagem é a Lux!";
        break;
        case "Blitz" :
            img.setAttribute('src','Blitz.png');
            resultado.appendChild(img);
            resultado.innerHTML +="<p></p>"
            resultados.innerHTML += "Você não vai até ninguém, eles é que vão até você. Seu personagem é o Blitz!";
        break;
        case "Janna" :
            img.setAttribute('src','Janna.png');
            resultado.appendChild(img);
            resultado.innerHTML +="<p></p>"
            resultados.innerHTML += "Eu posso encostar em você mas você não pode encostar em mim. Seu personagem é a Janna!";
        break;
        case "Brand" :
            img.setAttribute('src','Brand.png');
            resultado.appendChild(img);
            resultado.innerHTML +="<p></p>"
            resultados.innerHTML += "Vamos para cima queimar todo mundo ! Seu personagem é o Brand!";
        break;
        case "Rakan" :
            img.setAttribute('src','Rakan.png');
            resultado.appendChild(img);
            resultado.innerHTML +="<p></p>"
            resultados.innerHTML += "Se algo der errado, pode sempre voltar pra casa. Seu personagem é o Rakan!";
        break;
        case "Soraka" :
            img.setAttribute('src','Soraka.png');
            resultado.appendChild(img);
            resultado.innerHTML +="<p></p>"
            resultados.innerHTML += "A Ambulância em pessoa, na lane ou fora dela. Seu personagem é a Soraka!";
        break;
        case "Zyra" :
            img.setAttribute('src','Zyra.png');
            resultado.appendChild(img);
            resultado.innerHTML +="<p></p>"
            resultados.innerHTML += "Recuada, mas sempre pronta para levantar geral! Seu personagem é a Zyra!";
        break;
        case "Braum" :
            img.setAttribute('src','Braum.png');
            resultado.appendChild(img);
            resultado.innerHTML +="<p></p>"
            resultados.innerHTML += "Você e seu adc. Juntos até o fim! Seu personagem é o Braum!";
        break;
        case "Lulu" :
            img.setAttribute('src','Lulu.png');
            resultado.appendChild(img);
            resultado.innerHTML +="<p></p>"
            resultados.innerHTML += "Criadora de monstros. Seu personagem é a Lulu!";
        break;
        case "Morgana" :
            img.setAttribute('src','Morgana.png');
            resultado.appendChild(img);
            resultado.innerHTML +="<p></p>"
            resultados.innerHTML += "Se algo der errado, podemos sempre desconectar alguém! Seu personagem é a Morgana!";
        break;
        case "Zac" :
            img.setAttribute('src','Zac.png');
            resultado.appendChild(img);
            resultado.innerHTML +="<p></p>"
            resultados.innerHTML += "Sempre acertando pulos e stuns. Seu personagem é o  Zac!";
        break;
        case "Vi" :
            img.setAttribute('src','Vi.png');
            resultado.appendChild(img);
            resultado.innerHTML +="<p></p>"
            resultados.innerHTML += "Pouco esforço, muita eficiência. Seu personagem é a Vi";
        break;
        case "LeeSin" :
            img.setAttribute('src','LeeSin.png');
            resultado.appendChild(img);
            resultado.innerHTML +="<p></p>"
            resultados.innerHTML += "Mecanudo da Korea. Seu personagem é o Lee Sin!";
        break;
        case "Evelyn" :
            img.setAttribute('src','Evelyn.png');
            resultado.appendChild(img);
            resultado.innerHTML +="<p></p>"
            resultados.innerHTML += "Quem não te viu, não verá mais. Seu personagem é a Evelyn!";
        break;
        case "Gnar" :
            img.setAttribute('src','Gnar.png');
            resultado.appendChild(img);
            resultado.innerHTML +="<p></p>"
            resultados.innerHTML += "Sempre pronto para voltar do farm jogando todos na parede. Seu personagem é o Gnar!";
        break;
        case "Amumu" :
            img.setAttribute('src','Amumu.png');
            resultado.appendChild(img);
            resultado.innerHTML +="<p></p>"
            resultados.innerHTML += "Seguro e prestativo. Seu personagem é o Amumu!";
        break;
        case "Kindred" :
            img.setAttribute('src','Kindred.png');
            resultado.appendChild(img);
            resultado.innerHTML +="<p></p>"
            resultados.innerHTML += "Safe para crescer. Seu personagem é a Kindred!";
        break;
        case "MasterYi" :
            img.setAttribute('src','MasterYi.png');
            resultado.appendChild(img);
            resultado.innerHTML +="<p></p>"
            resultados.innerHTML += "Q. Seu personagem é o Master Yi!";
        break;

    }
 
    document.getElementById("Reiniciar").style.visibility = "visible";
    
    
    

}
function TopPergunta3 (){
    document.getElementById("radAdc").style.visibility = "hidden";
        document.getElementById("lbAdc").style.visibility = "hidden";
    if(lane == "Adc")
    {
        Perguntas.innerHTML = "Se pocisiona bem ?"
        document.getElementById("lbTop").innerHTML= "Sim"
        document.getElementById("lbMid").innerHTML= "Não"
    }
    else
    {
        if(lane == "Jungle")
        {
            Perguntas.innerHTML = "O que gosta mais ?"
            document.getElementById("lbTop").innerHTML= "Tankar"
            document.getElementById("lbMid").innerHTML= "Dar Dano"
        }
        else
        {
            Perguntas.innerHTML = "Olha bastante o mapa ?"
            document.getElementById("lbTop").innerHTML= "Tenho boa visão"
            document.getElementById("lbMid").innerHTML= "Não"
        }

    }
   

    
}
function TopPergunta2 (){
    if(lane == "Suporte")
    {
        document.getElementById("radAdc").style.visibility = "visible";
        document.getElementById("lbAdc").style.visibility = "visible";
        Perguntas.innerHTML = "O que vai querer ser?"
        document.getElementById("lbTop").innerHTML= "Tankudo"
        document.getElementById("lbMid").innerHTML= "Ambulância"
        document.getElementById("lbAdc").innerHTML= "Suporte de Rabadon"
    }
    else
    {
        if(lane == "Jungle")
        {
            Perguntas.innerHTML = "E a dificuldade do personagem ?"
            document.getElementById("lbTop").innerHTML= "Difícil"
            document.getElementById("lbMid").innerHTML= "Fácil"  
        }else
        {
            Perguntas.innerHTML = "Sabe farmar ?"
        document.getElementById("lbTop").innerHTML= "Sim"
        document.getElementById("lbMid").innerHTML= "Não"  
        }
        
    }


    
}
function Top(){
    if(Passo == 2)
    {
    Perguntas.innerHTML = "Qual o teu estilo?"
    document.getElementById("radSuporte").style.visibility = "hidden";
    document.getElementById("radAdc").style.visibility = "hidden";
    document.getElementById("radJungle").style.visibility = "hidden";

    document.getElementById("lbSuporte").style.visibility = "hidden";
    document.getElementById("lbAdc").style.visibility = "hidden";
    document.getElementById("lbJungle").style.visibility = "hidden";

    document.getElementById("lbTop").innerHTML= "Agressivo"
    document.getElementById("lbMid").innerHTML= "Safe"
    Passo = 3;
    document.getElementById("radTop").checked = true;
    }
   

}

function Mid()
{
    if(Passo == 2)
    {
    Perguntas.innerHTML = "Qual o teu estilo?"
    document.getElementById("radSuporte").style.visibility = "hidden";
    document.getElementById("radAdc").style.visibility = "hidden";
    document.getElementById("radJungle").style.visibility = "hidden";

    document.getElementById("lbSuporte").style.visibility = "hidden";
    document.getElementById("lbAdc").style.visibility = "hidden";
    document.getElementById("lbJungle").style.visibility = "hidden";

    document.getElementById("lbTop").innerHTML= "Agressivo"
    document.getElementById("lbMid").innerHTML= "Safe"
    Passo = 3;
    
    }
}
function Adc()
{
    if(Passo == 2)
    {
        document.getElementById("radAdc").style.visibility = "hidden";
        document.getElementById("lbAdc").style.visibility = "hidden";

    Perguntas.innerHTML = "Qual o teu estilo?"
    document.getElementById("radSuporte").style.visibility = "hidden";
    document.getElementById("radJungle").style.visibility = "hidden";

    document.getElementById("lbSuporte").style.visibility = "hidden";
    document.getElementById("lbJungle").style.visibility = "hidden";

    document.getElementById("lbTop").innerHTML= "Agressivo"
    document.getElementById("lbMid").innerHTML= "Safe"
    Passo = 3;
    
    }
}

function Suporte()
{
    if(Passo == 2)
    {
    Perguntas.innerHTML = "Qual o teu estilo?"
    document.getElementById("radSuporte").style.visibility = "hidden";
    document.getElementById("radAdc").style.visibility = "hidden";
    document.getElementById("radJungle").style.visibility = "hidden";

    document.getElementById("lbSuporte").style.visibility = "hidden";
    document.getElementById("lbAdc").style.visibility = "hidden";
    document.getElementById("lbJungle").style.visibility = "hidden";

    document.getElementById("lbTop").innerHTML= "Agressivo"
    document.getElementById("lbMid").innerHTML= "Safe"
    Passo = 3;
    
    }
}
function Jungle()
{
    if(Passo == 2)
    {
    Perguntas.innerHTML = "Qual o teu estilo?"
    document.getElementById("radSuporte").style.visibility = "hidden";
    document.getElementById("radAdc").style.visibility = "hidden";
    document.getElementById("radJungle").style.visibility = "hidden";

    document.getElementById("lbSuporte").style.visibility = "hidden";
    document.getElementById("lbAdc").style.visibility = "hidden";
    document.getElementById("lbJungle").style.visibility = "hidden";

    document.getElementById("lbTop").innerHTML= "Agressivo"
    document.getElementById("lbMid").innerHTML= "Safe"
    Passo = 3;
    
    }
}

function Reiniciar(){
    window.location.reload();
}