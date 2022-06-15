// Callback Hell Problem is solved with Promises!


/*
    In JavaScript, a promise is an object that returns a value which you hope to receive in the future, but not now.
    Has three states:
    1. Pending: initial state, neither fulfilled nor rejected
    2. Fulfilled: meaning that the operation was completed successfully
    3. Rejected: meaning that the operation failed
*/

function downloadSong(songName){
    console.log(`Searching for ${songName} in our database...`)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (songName.length > 4){
                resolve(`${songName}.mp4`)
            } else {
                reject(`${songName} is not valid`)
            }
        }, 3000)
    })
}


downloadSong('Yesterday').then(s => console.log(`We are now playing ${s}`))

downloadSong('ABC').then(s => console.log(`We are now playing ${s}`)).catch(e => console.warn(e))
