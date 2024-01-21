const cover = document.getElementById('Album'),
    title = document.getElementById('SongName'),
    artist = document.getElementById('SongArtist'),
    banner =  document.getElementById(`Music`),
    presname = document.getElementById('PresName'),
    presavatar = document.getElementById('PresAvatar');

const music = new Audio();

const songs = [
    {
        path: '/radio/assets/3.mp3',
        cover: '/EarthRadiov2/assets/1.jpg',
        name: 'Intellect',
        artist: 'Yung Logos',
    },
    {
        path: '/EarthRadiov2/assets/2.mp3',
        cover: '/EarthRadiov2/assets/2.jpg',
        name: 'You Will Never See Me',
        artist: 'NEFFEX',
    },
    {
        path: '/radio/assets/3.mp3',
        cover: '/EarthRadiov2/assets/3.jpg',
        name: 'The Charmers Call',
        artist: 'Hanu Dixit',
    },
]
const presenters = [
    {
        name: 'Oscy',
        username: '0scy.',
        avatar: '/EarthRadiov2/assets/1.jpg',
        role: 'Admin',
    },
]

function loadMusic(songs){
    music.src = songs[2].path;
    title.textContent = songs[2].name;
    artist.textContent = songs[2].artist;
    let img = songs[2].cover;
    cover.src = img;
    banner.style.backgroundImage = `url(${img})`;
}
function loadPresenter(presenters){
    presname.textContent = presenters.name;
    presavatar.textContent = presenters.avatar;
}

loadMusic(songs);
loadPresenter(presenters);
