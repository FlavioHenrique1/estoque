class Cxmsg{
    
    // static config={
    //     titulo:"",
    //     texto:"",
    //     cor:"",
    //     ok:null,
    //     sim:null,
    //     nao:null
    // }

    static config=null;
    static mostrar=(config)=>{
        this.config=config;
        const cxmsg_fundo=document.createElement("div");
        cxmsg_fundo.setAttribute("class","cxmsg_fundo");

        const cxmsg=document.createElement("div");
        cxmsg.setAttribute("class","cxmsg");
        cxmsg_fundo.appendChild(cxmsg);

        const titulo_cxmsg=document.createElement("div");
        titulo_cxmsg.setAttribute("class","titulo_cxmsg");
        titulo_cxmsg.setAttribute("style",`background-color:${config.cor} !important`);
        cxmsg.appendChild(titulo_cxmsg);

        const p_titulo=document.createElement("div");
        p_titulo.innerHTML=config.titulo;
        titulo_cxmsg.appendChild(p_titulo);

        const img_btn_fechar=document.createElement("p");
        img_btn_fechar.setAttribute("id","btn_fechar");
        img_btn_fechar.setAttribute("class","btn_fechar_cxmsg");
        // img_btn_fechar.setAttribute("src","../imgs/close.svg");
        img_btn_fechar.innerHTML="X";
        titulo_cxmsg.appendChild(img_btn_fechar);

        const corpo_cxmsg=document.createElement("div");
        corpo_cxmsg.setAttribute("class","corpo_cxmsg");
        cxmsg.appendChild(corpo_cxmsg);

        const p_mensagem=document.createElement("p");
        p_mensagem.innerHTML=config.texto;
        corpo_cxmsg.appendChild(p_mensagem);

        const rodape_cxmsg=document.createElement("div");
        rodape_cxmsg.setAttribute("class","rodape_cxmsg");
        rodape_cxmsg.setAttribute("id","rodape_cxmsg");
        cxmsg.appendChild(rodape_cxmsg);

        if(config.tipo =="ok"){
            const btn_ok_cxmsg=document.createElement("button");
            btn_ok_cxmsg.setAttribute("class","btn_cxmsg");
            btn_ok_cxmsg.setAttribute("id","btn_ok_cxmsg");
            btn_ok_cxmsg.innerHTML="ok";
            rodape_cxmsg.appendChild(btn_ok_cxmsg);
        }else if(config.tipo =="sn"){
            const btn_sim_cxmsg=document.createElement("button");
            btn_sim_cxmsg.setAttribute("class","btn_cxmsg");
            btn_sim_cxmsg.setAttribute("id","btn_sim_cxmsg");
            btn_sim_cxmsg.innerHTML="sim";
            rodape_cxmsg.appendChild(btn_sim_cxmsg);
    
            const btn_nao_cxmsg=document.createElement("button");
            btn_nao_cxmsg.setAttribute("class","btn_cxmsg");
            btn_nao_cxmsg.setAttribute("id","btn_nao_cxmsg");
            btn_nao_cxmsg.innerHTML="nao";
            rodape_cxmsg.appendChild(btn_nao_cxmsg);
        }

        document.body.appendChild(cxmsg_fundo);
        
        
    }
}

export {Cxmsg}

{/* <div id="cxmsg_fundo" class="cxmsg_fundo ocutarPopup">
<div id="cxmsg" class="cxmsg">
    <div id="titulo_cxmsg" class="titulo_cxmsg">
        <p>Título</p>
        <img src="../imgs/close.svg" alt="" id="btn_fechar" class="btn_fechar_cxmsg">
    </div>
    <div id="corpo_cxmsg" class="corpo_cxmsg">
        <p>Mensagem</p>
    </div>
    <div id="rodape_cxmsg" class="rodape_cxmsg">
        <button id="btn_ok_cxmsg" class="btn_cxmsg">ok</button>
        <button id="btn_sim_cxmsg" class="btn_cxmsg">sim</button>
        <button id="btn_nao_cxmsg" class="btn_cxmsg">não</button>
    </div>
</div>
</div> */}