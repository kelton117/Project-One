$(function(){

    
    const BASE_URL = 'https://www.omdbapi.com/';
    const API_KEY = '83848083';
    let movieData;
    
    
    const $title = $('#title'); 
    const $plot = $('#plot');
    const $year = $('#year');
    const $director = $('#director')
    const $genre = $('#genre')
    const $rated = $('#rated');
    const $form = $('form'); 
    const $input = $('input[type="text"]');
    const $img = $('img');

    
    $form.on('submit', handleGetData)
    
    
    
    
    function handleGetData(event) {
        
        event.preventDefault(); 
       
        const movieTitle = $input.val();
        $input.val("");
        
        $.ajax(`${BASE_URL}?apikey=${API_KEY}&t=${movieTitle}`).then(function (data) {
           
            movieData = data; 
            render();
          
            
        }, function (error) {
           
            // console.log(error);
        });

       

    }
    
    
    function render() {
        $title.text(movieData.Title);
        $plot.text(movieData.Plot);
        $year.text(movieData.Year);
        $rated.text(movieData.Rated);
        $director.text(movieData.Director);
        $genre.text(movieData.Genre);
        $('body').css("background-image", `url(${movieData.Poster})`);
    }
    
        
    });