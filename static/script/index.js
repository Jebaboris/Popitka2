let btns = document.querySelectorAll('.BTNS')
btns.forEach((b)=>{
    b.addEventListener('click', function(e){
        render(e.target.id);
    });
});
function render(name){
    name=name + '.html';
    $(function(){
        $("#load").load(name); 
        });    
}
