function gramophone(name, album, song){
    let duration = Number((album.length * name.length) * song.length / 2);
    let rotations = Math.ceil(duration / 2.5);
    console.log(`The plate was rotated ${rotations} times.`);
    
}

gramophone('Rammstein', 'Sehnsucht',

'Engel');