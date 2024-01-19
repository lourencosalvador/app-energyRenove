const keySseionStorage = "ConteudoCard";






function atributeEndBody (){
   let getDadosSession = JSON.parse(sessionStorage.getItem(keySseionStorage))
 

   const title = document.getElementById("title");
   const descripition = document.getElementById("containerDescri")
   
   for(let i = 0; i < getDadosSession.length; i++){
      
      title.innerHTML = getDadosSession[i]['title']
      descripition.innerHTML = `<p>${getDadosSession[i]['descri']}</p>`
   }
}

atributeEndBody()