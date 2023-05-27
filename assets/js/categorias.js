function filtrar(x) {
    //Lista de categorias
    const lista = ['productos','vehiculos','inmuebles','servicios'];
    const i_max = lista.length;

    var div_x = document.getElementsByClassName(x) //Pido que div_x guarde el objeto de clase 'x', siendo x la categoria

    //Previo a ocultar las categorias distintas a 'x', verifico que el item de clase 'x' no esté oculto.
    //Por ejemplo, puede ser que al hacer clic en Productos anteriormente haya filtrado Vehiculos.
    //Por lo tanto, lo tengo que volver a mostrar si ahora entro en la categoría 'x'
    if(div_x[0].style.display === "none"){ //Compruebo si el 1° obj de clase x fue oculto. si lo fué => muestro todos los obj de la misma clase
        let k = 0;
        while(div_x[k] !== undefined){ //me permite mostrar todos los obj, es independiente de la cantidad :D
            div_x[k].style.display = "block";
            k++;
        }
        //Luego reutilizo esta estructura de forma parecida pero aunque repita codigo es mejor dejarla aca ya que no quiero que este dentro del for.
        //solo comprueba una vez.
    }
   
    //Con el bucle for logro que recorra todas categorias y luego oculto las que sean diferentes a 'x'
    for(let i = 0 ; i < i_max; i++){
        if (lista[i]  != x){
            div_x = document.getElementsByClassName(lista[i]);  
            let k = 0; 
            while(div_x[k] !== undefined){
                div_x[k].style.display = "none";
                k++;
            }
        }
    }

}
function adjustContentHeight() {
    var mainCont = document.getElementById('main-cont');
    var footer = document.getElementById('footer');
    var footerHeight = footer.offsetHeight;
    var windowHeight = window.innerHeight;
    
    mainCont.style.minHeight = windowHeight - footerHeight + 'px';
  }
  
  // Llama a la función cuando la página se cargue y se redimensione
  window.addEventListener('load', adjustContentHeight);
  window.addEventListener('resize', adjustContentHeight);