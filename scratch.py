import time


def first():
    time.sleep(2)
    print('First')
    time.sleep(2)


def second():
    print("Second")


# first()
# second()



# Real Life Example

# You have a function that will take in a song name, download the song, and then play the downloaded song

def download_song(song_name):
    print(f"Downloading {song_name}...")
    time.sleep(3)
    print("Finish Downloading")
    return {'title': song_name, 'artist': 'Pitbull'}


def play_song(song_name):
    song = download_song(song_name)
    print(f"{song['title']} by {song['artist']} is playing")


play_song('Let It Be')
