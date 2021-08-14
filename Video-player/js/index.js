const $video = document.querySelector("#video")
        const $play = document.querySelector("#play")
        const $pause = document.querySelector("#pause")
        const $backward = document.querySelector("#backward")
        const $forward = document.querySelector("#forward")

        $play.addEventListener("click", handlePlay)
        $pause.addEventListener("click", handlePause)
        
        function handlePlay(){
            $video.play()
            $play.hidden = true
            $pause.hidden = false
            console.log("le diste click al boton play")
        }

        function handlePause(){
            $video.pause()
            $play.hidden = false
            $pause.hidden = true
            console.log("apretaste pause")
        }
    $backward.addEventListener("click", handleBackward)

        function handleBackward() {
            $video.currentTime = $video.currentTime - 10
            console.log("Le diste al boton retroceder 10 segundos", $video.currentTime)
        }

        $forward.addEventListener("click", handleForward)

        function handleForward() {
            $video.currentTime = $video.currentTime + 10
            console.log("Le diste al boton adelantar 10 segundos" , $video.currentTime)
            
        }

        
        const $progress = document.querySelector("#progress")
        $video.addEventListener("loadedmetadata" , handleloaded)

        function handleloaded() {
            $progress.max = $video.duration
            console.log("Ha cargado mi video", $video.duration)
        }
        $video.addEventListener("timeupdate" , handletimeupdate)

        function handletimeupdate(){
            $progress.value= $video.currentTime
            /*console.log("tiempo actual" , $video.currentTime)*/
        }
        $progress.addEventListener("input" , handleinput)

        function handleinput (){
            $video.currentTime = $progress.value
            console.log($progress.value)
        }
        
