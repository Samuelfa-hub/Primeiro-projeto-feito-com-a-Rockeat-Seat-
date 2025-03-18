function togglemode( ){ 

    const html = document.documentElement
//troca do Light/dark
    if (html.classList.contains('Light'))
    {
        html.classList.remove("Light")
    }
    else {
        html.classList.add("Light")
    } 
//troca imagemd e perfil 
    const img = document.querySelector("#profile img")

    if (html.classList.contains('Light'))
    {
        img.setAttribute("src", "./assets/avatar-light.png")

    }
    else
    { 
        img.setAttribute("src", "./assets/avatar.png")
    }
//troca da descrição da imagem 

    const alt = document.documentElement
    
    if (html.classList.contains (Light))
    {
        alt = "Light profile picture"
    }
    else
    {
        alt = "Dark profile picture"
    }







}