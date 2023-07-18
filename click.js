AFRAME.registerComponent('choose1', {
    schema: {
        color: { default: 'red' }
    },
    init: function () {
        var data = this.data;
        var el = this.el;  // <a-box>
        var defaultColor = el.getAttribute('material').color;
        el.addEventListener('click', function () {
            console.log(el.id)
            el.setAttribute('color', data.color);
            document.getElementById('arscene1').style.display = 'none';
            document.getElementById('arscene2').style.display = "flex";
            document.getElementById('result01').innerHTML=el.id;
            
        });
        el.addEventListener('mouseenter', function () {

            el.setAttribute('color', data.color);
        });
        el.addEventListener('mouseleave', function () {
            el.setAttribute('color', defaultColor);
        });
    }
});



AFRAME.registerComponent('clickhandler', {
    schema: {
      txt: {default:'default'},
    },        
    init: function () {
      var data = this.data;
      var el = this.el;      
      var defaultColor = el.getAttribute('material').color;
  
      el.addEventListener('click', function () {            
       console.log(data.txt);
      });        
      el.addEventListener('mouseenter', function () {
        console.log('mousein')
    });
    }
  });




AFRAME.registerComponent('choose2', {
    schema: {
        color: { default: 'blue' }
    },
    init: function () {
        var data = this.data;
        var el = this.el;  // <a-box>
        var defaultColor = el.getAttribute('material').color;

        el.addEventListener('click', function () {
            el.setAttribute('color', data.color);
            document.getElementById('arscene2').style.display = 'none';
            document.getElementById('scene04').style.display = "flex";
            document.getElementById('arbutton').style.display = "flex";
        });
        el.addEventListener('mouseenter', function () {
            el.setAttribute('color', data.color);
        });
        el.addEventListener('mouseleave', function () {
            el.setAttribute('color', defaultColor);
        });
    }
});


//click function

AFRAME.registerComponent('color-toggle',{
    init: function(){
        let el=this.el;
        this.toggleColor=function(){
            // el.setAttribute('color','blue');
            alert('clicked');
            
        }
        this.el.addEventListener('click',this.toggleColor);
        console.log('you can use your mouse to click')
    },
    remove: function(){
        this.el.removeEventListener('click',this.toggleColor);
    }
})



// arscene 
function ClickNext0() {
    var numberfill = document.getElementById('number')
    if (numberfill.value != '') {

        document.getElementById('scene0').style.display = 'none';
        document.getElementById('scene01').style.display='flex';
        console.log('ok to go')
    }
    else { 
        
        console.log('fill me in') 
    document.getElementById("alarm").innerHTML='you can find the number on the wrist'
}
}


function ClickNext1() {
    document.getElementById('scene02').style.display = "flex";
    document.getElementById('scene01').style.display = 'none';
    document.getElementById('arscene').style.display = 'none';

}

function ClickNext2() {
    document.getElementById('scene03').style.display = "flex";
    document.getElementById('scene02').style.display = 'none';

}


function ClickNext3() {
    document.getElementById('scene04').style.display = "flex";
    document.getElementById('scene03').style.display = 'none';
    document.getElementById('arbutton').style.display = 'flex'
}
