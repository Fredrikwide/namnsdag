

FORM.addEventListener('submit', function(e){
    e.preventDefault();
    getDate().then( info => {
        info.forEach(response.name, function(){
            console.log('this is my name ');
        });
    });
});