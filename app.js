document.addEventListener('DOMContentLoaded' , () => {
    const bird = document.querySelector('.bird')
    const gameDisplay = document.querySelector('.game-container')
    const ground = document.querySelector('ground')

    let birdLeft = 220
    let birdBottom = 100
    let gravity = 2
    let isGameOver = false
    let birdTop = 145
    let score = 0

    function startGame() {
        birdBottom -= gravity
        birdTop -= gravity
        bird.style.bottom = birdBottom + 'px'
        bird.style.left = birdLeft + 'px'
    }
    let gameTimerID = setInterval(startGame, 20)

    function control(e) {
        if (e.keyCode === 32) {
            jump()
        }
    }


    function jump() {
        if (birdBottom < 500) { birdBottom += 50 
        birdTop += 50}
        bird.style.bottom = birdBottom + 'px'
    }
    document.addEventListener('keyup', control)

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min
    }


    function generateObstacle() {
        let obstacleLeft = 500
        let randomHeight = getRandomArbitrary(0, 500)
        let obstacleBottom = randomHeight + 150
        let obstacleTop = 80 + obstacleBottom
        const obstacle = document.createElement('div')
        if (!isGameOver) obstacle.classList.add('obstacle')
        gameDisplay.appendChild(obstacle)
        obstacle.style.left = obstacleLeft + 'px'
        obstacle.style.bottom = obstacleBottom + 'px'
        console.log('bottom ' + obstacleBottom)
        console.log('top' + obstacleTop)
        console.log(birdTop)

        function moveObstacle() {
            obstacleLeft -= 2
            obstacle.style.left = obstacleLeft + 'px'
            if (obstacleLeft === -80) {
                clearInterval(timerID)
                gameDisplay.removeChild(obstacle)
                score += 1
            }

            if (birdBottom === 0) {
                gameOver()
                clearInterval(timerID)
            }

            if (
                obstacleLeft > 160 && obstacleLeft < 280 &&
                birdBottom > obstacleBottom - 150 && birdBottom < obstacleTop - 150
                ) {
                gameOver()
                clearInterval(timerID)
            }
            if (
                obstacleLeft > 160 && obstacleLeft < 280 &&
                birdBottom === obstacleBottom - 150 && birdBottom === obstacleTop - 150
                ) {
                gameOver()
                clearInterval(timerID)
            }
            if (
                obstacleLeft > 160 && obstacleLeft < 280 &&
                birdTop > obstacleBottom - 150 && birdTop < obstacleTop - 150
                ) {
                gameOver()
                clearInterval(timerID)
            }
            if (
                obstacleLeft > 160 && obstacleLeft < 280 &&
                birdTop === obstacleBottom - 150 && birdTop === obstacleTop - 150
                ) {
                gameOver()
                clearInterval(timerID)
            }
        }
        let timerID = setInterval(moveObstacle, 20)
        if (!isGameOver) setTimeout(generateObstacle, 1500)

    }
    generateObstacle()
    console.log(birdBottom)


    function gameOver() {
        clearInterval(gameTimerID)
        console.log('game over')
        isGameOver = true
        document.removeEventListener('keyup', control)
        if (confirm("Score: " + score + "\nGame Over! Restart?")) {
            location=location}
            else {
                close()
        }
    }
})