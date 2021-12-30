function hasil(){
    var hewan = document.getElementById('hewan').value;

    var gambar = '';
    if(hewan == 'Kelinci'){
        alert('Ini gambar kelinci');
        var myImage = new Image(500, 300);
        myImage.src = 'img/kelinci.jpg';
        x = document.getElementById('gambar');
        x.appendChild(myImage);
    }
    else if(hewan == 'Beruang Kutub'){
        alert('Ini gambar beruang kutub');
        var myImage = new Image(500, 300);
        myImage.src = 'img/beruang kutub.jpg';
        x = document.getElementById('gambar');
        x.appendChild(myImage);
    }
    else if(hewan == 'Flamingo'){
        alert('Ini gambar flamingo');
        var myImage = new Image(500, 300);
        myImage.src = 'img/flamingo.jpg';
        x = document.getElementById('gambar');
        x.appendChild(myImage);
    }
    else if(hewan == 'Panda Merah'){
        alert('Ini gambar panda merah');
        var myImage = new Image(500, 300);
        myImage.src = 'img/panda merah.jpg';
        x = document.getElementById('gambar');
        x.appendChild(myImage);
    }
    else if(hewan == 'Kuda'){
        alert('Ini gambar kuda');
        var myImage = new Image(500, 300);
        myImage.src = 'img/kuda.jpg';
        x = document.getElementById('gambar');
        x.appendChild(myImage);
    }
    else if(hewan == 'Rusa'){
        alert('Ini gambar rusa');
        var myImage = new Image(500, 300);
        myImage.src = 'img/rusa.jpg';
        x = document.getElementById('gambar');
        x.appendChild(myImage);
    }
    else if(hewan == 'Harimau'){
        alert('Ini gambar harimau');
        var myImage = new Image(500, 300);
        myImage.src = 'img/harimau.jpg';
        x = document.getElementById('gambar');
        x.appendChild(myImage);
    }
    else if(hewan == 'Kura-Kura'){
        alert('Ini gambar kura-kura');
        var myImage = new Image(500, 300);
        myImage.src = 'img/kura-kura.jpg';
        x = document.getElementById('gambar');
        x.appendChild(myImage);
    }
    else{
        alert('Ini gambar merak');
        var myImage = new Image(500, 300);
        myImage.src = 'img/merak.jpg';
        x = document.getElementById('gambar');
        x.appendChild(myImage);
    }
}