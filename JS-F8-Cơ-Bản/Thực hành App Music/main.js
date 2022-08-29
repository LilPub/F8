const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PLAYER_STORAGE_KEY = 'User'

const cd = $('.cd');
const heading = $('header h2');
const cdThumb = $('.cd-thumb');
const audio = $('#audio');
const playBtn = $('.btn-toggle-play')
const player = $('.player');
const progress = $('#progress');
const nextBtn = $('.btn-next');
const prevBtn = $('.btn-prev');
const randomBtn = $('.btn-random');
const repeatBtn = $('.btn-repeat');
const playLists = $('.playlist');

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
    songs: [
        {
            name: 'CHO MÌNH EM',
            singer: 'BINZ x ĐEN (Studio Session)',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUHipodnchxnSIjhwhGR2jUbJfpf0svEzD8A&usqp=CAU',
            path: './music/chominhem.mp4'
        },
        {
            name: 'BƯỚC QUA MÙA CÔ ĐƠN',
            singer: 'Vũ. (Official MV)',
            image: 'https://avatar-ex-swe.nixcdn.com/song/2020/12/11/4/0/f/e/1607643612541_640.jpg',
            path: './music/buocquamuacodon.mp4'
        },
        {
            name: 'BƯỚC QUA NHAU',
            singer: 'Vũ. (Official MV)',
            image: 'https://i.ytimg.com/vi/n6Pnzi6r9NU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBxxWAyx2sEHO8C4PBmemnmzG27rw',
            path: './music/buocquanhau.mp4'
        },
        {
            name: 'bao tiền một mớ bình yên?',
            singer: '14 Casper & Bon (Official)',
            image: 'https://i.ytimg.com/vi/vVhKA9Av6vA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBfDOlRxu35H0DTMGOiNRf7kuMUsg',
            path: './music/baotienmotmobinhyen.mp4'
        },
        {
            name: 'có ai ở đây không?',
            singer: '14 Casper x Bon (Official)',
            image: 'https://i.ytimg.com/vi/GrdgyD4wFGU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIApFauaaXibqPuWejwQGahIhsHw',
            path: './music/coaiodaykhong.mp4'
        },
        {
            name: 'Mãi Mãi Không Phải Anh',
            singer: 'Thanh Bình | Official Audio',
            image: 'https://i.ytimg.com/vi/xD8Xchuxq8g/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAN4lRd7H0Xf1URZo0xY_ysbLL57A',
            path: './music/maimaikhongphaianh.mp4'
        }
    ],
    setConfig: function(key, value){
        this.config[key] = value;
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
    },
    render: function(){
        var htmls = this.songs.map(function(song, index){
            return `
            <div class="song ${index === app.currentIndex ? 'active' : ''}" data-index="${index}">
                <div class="thumb" style="background-image: url('${song.image}')">
                </div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
            `
        })
        
        playLists.innerHTML = htmls.join('');
    },
    defineProperties: function(){
        Object.defineProperty(this,'currentSong',{
            get: function(){
                return this.songs[this.currentIndex];
            }
        })
    },
    handleEvents: function(){
        const cdWidth = cd.offsetWidth;
        const _this = this;

        // xử lý CD quay / dừng
        const cdThumbAnimate = cdThumb.animate(
            [{transform:'rotate(360deg)'}],
            {
                duration: 20000,//20s
                iterrations: Infinity
            })

            cdThumbAnimate.pause();

        //xử lý phóng to thu nhỏ
        document.onscroll = function(){
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const newCdWidth = cdWidth - scrollTop;
            
            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0;
            cd.style.opacity = newCdWidth/cdWidth;
        }

        //xử lý khi click play
        playBtn.onclick = function() {
            if(_this.isPlaying){
                audio.pause();           
            }else{
                audio.play();
            }
        }

        //khi song được play
        audio.onplay = function() {
            _this.isPlaying = true;
            player.classList.add('playing');
            cdThumbAnimate.play();
        }

        //khi song bị pause
        audio.onpause = function() {
            _this.isPlaying = false;
            player.classList.remove('playing');
            cdThumbAnimate.pause();
        }

        //khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function() {
            if(audio.duration){
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100);
                progress.value = progressPercent;
            }
        }

        //xử lý khi tua
        progress.onchange = function(e) {
            const seekTime = (audio.duration * e.target.value /100);
            audio.currentTime = seekTime;
        }

        //khi next bài hát
        nextBtn.onclick = function(e) {
            if(_this.isRandom){
                _this.playRandomSong();
            }else{
                _this.nextSong();
            }
            audio.play();
            _this.render();
            _this.scollToActiveSong();
        }
        
        //khi prev bài hát
        prevBtn.onclick = function(e) {
            if(_this.isRandom){
                _this.playRandomSong();
            }else{
                _this.prevSong();
            }
            audio.play();
            _this.render();
            _this.scollToActiveSong();
        }

        //khi random bài hát
        randomBtn.onclick = function(e) {
            _this.isRandom = !_this.isRandom;
            _this.setConfig('isRandom',_this.isRandom);
            this.classList.toggle('active',_this.isRandom);
            // if(_this.isRandom){
            //     _this.isRandom = false;
            //     this.classList.remove('active');
            // }else{
            //     _this.isRandom = true;
            //     this.classList.add('active');
            // }
        }

        //khi repeat bài hát
        repeatBtn.onclick = function(){
            _this.isRepeat = !_this.isRepeat;
            _this.setConfig('isRepeat',_this.isRepeat);
            this.classList.toggle('active',_this.isRepeat);
        }

        //xử khí next song khi audio kết thúc
        audio.onended = function() {
            if(_this.isRepeat){
                audio.play();
            }else{
                nextBtn.click();
            }
        }

        //lắng nghe hành vi click vào playlists
        playLists.onclick = function(e) {
            const songNode = e.target.closest('.song:not(.active)');
            if(songNode || e.target.closest('.option')){
                //xử lý khi click vào song
                if(songNode){
                    _this.currentIndex = Number(songNode.dataset.index);
                    _this.loadCurrentSong();
                    _this.render();
                    audio.play();
                    
                }
                //xử lý khi click vào song option
                if(e.target.closest('.option')){

                }
            }
        }

    },
    loadCurrentSong: function(){
        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path;
    },
    loadConfig: function(){
        this.isRandom = this.config.isRandom;
        this.isRepeat = this.config.isRepeat;
    },
    nextSong: function(){
        this.currentIndex++;
        if(this.currentIndex >= this.songs.length){
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
    },
    prevSong: function(){
        this.currentIndex--;
        if(this.currentIndex < 0){
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
    },
    playRandomSong: function(){
        let newIndex;
        do{
            newIndex = Math.floor(Math.random() * this.songs.length);
        }while(newIndex === this.currentIndex)

        this.currentIndex = newIndex;
        this.loadCurrentSong();
    },
    scollToActiveSong: function(){
        setTimeout(function(){
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
            });
        },200)
    },
    start: function(){
        //gán cấu hình từ config vào ứng dụng
        this.loadConfig();

        //định nghĩa các thuộc tính cho object
        this.defineProperties();

        //lắng nghe / xử lý các sự kiện (DOM events)
        this.handleEvents();

        //tải thông tin bài hát đầu tiên vào UI khi tải ứng dụng
        this.loadCurrentSong();

        //render playlists
        this.render();

        //hiển thị lại trạng thái ban đầu của button random và repeat
        randomBtn.classList.toggle('active',this.isRandom);
        repeatBtn.classList.toggle('active',this.isRepeat);
    }
}

app.start();
