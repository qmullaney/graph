let data = [
    
    {
      name: 'Adam',
       age: 20,
       salary: 30100
     },
    {
    name: 'Bob',
       age: 60,
       salary: 102000
     },
       {
      name: 'Carla',
       age: 31,
       salary: 57000
     },
       
    {
      name: 'Dave',
       age: 42,
       salary: 22000
     },
     {
         name: 'Ethel',
        age: 80,
       salary: 91000
     },
     {
        name: 'Frank',
       age: 28,
       salary: 73000
     },
     {
         name: 'Gina',
       age: 21,
       salary: 16000
     
    } ]



$(document).ready(function() {
    $( ".root" ).css( "color", "green" );
    graph = $(".graph")
    // p = $("<p></p>")
    // graph.append(p.append("hello inside p"))
    data.forEach( (peep) => {
        d = $("<div class='row' ></div>").append(`${peep.name}`)
        graph.append()
    })
});