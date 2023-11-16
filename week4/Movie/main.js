    async function fetchData(){
    const response = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=e69c7e16');
    const datas = await response.json();
    console.log(datas)
    var titlevar = document.getElementById("Title")
    titlevar.textContent = datas.Title;

    var typevar = document.getElementById("Type")
    typevar.textContent = datas.Type;

    var yearvar = document.getElementById("Year")
    yearvar.textContent = datas.Year;

    var image = document.getElementById("Poster")
    image.src = datas.Poster;

    //
    var searchbtn= document.getElementById("search")
    searchbtn.addEventListener('click',async function(){
    var inputfield = document.getElementById("movie").value 
    console.log(inputfield)

    const response = await fetch(`http://www.omdbapi.com/?s=${inputfield}&apikey=e69c7e16`);
    const datas = await response.json();
    const container = document.getElementsByClassName("box")
    console.log(datas.Search)
    for(let i=0;i<datas.Search.length;i++){
        const h1element = document.createElement("h1");
        h1element.innerHTML = datas.Search[i].Title;
        container[0].appendChild(h1element)
    }
    var titlevar = document.getElementById("Title")
    titlevar.textContent = datas.Search[0].Title;

    var typevar = document.getElementById("Type")
    typevar.textContent = datas.Search[0].Type;

    var yearvar = document.getElementById("Year")
    yearvar.textContent = datas.Search[0].Year;

    var image = document.getElementById("Poster")
    image.src = datas.Search[0].Poster;

   })
}

fetchData();

