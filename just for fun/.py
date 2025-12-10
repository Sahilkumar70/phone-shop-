import time
def type_lyric(line, char_delay=0.065):
    for char in line:
        print(char, end='', flush=True)
        time.sleep(char_delay)
    print()

def print_lyrics():
    lyrics = [ 
        "Jaane naa tu ",
        "Ke tera kitna khhyal me karun",
        "Ishq me hoon toh phir ",
        "Itne sawaal kyu karun",
        "Chedkhaaniyaan ",
        "Haan haan ",
        "Nazre teri karti yahaan ",
        "Ittar saa tu ",
        "Haan haan ",
        "Mujhme hi fir ghul sa gyaa",
        "Aaja maahi ",
        "Aaja mahi ",
        "Aaja maahi ",
        "Aaja mahi ",
        "Haan aafreen lagne lge jab dekhe tu is tarhaa ",
        "Fir laazmi hona hi tha , ye dil tera jo huaa ",
        "Shak hi nahi isme koi tujhsaa haseen hogaa hi naa ",
        "Takkti rahi nazrein meri wah kamaal kya kia ",

        "Kya me kaarun ",
        "Bass itna btaa de zraa ",
        "Waazib nahi ",
        "Gar tu jo mujhe naa milaa",

        "Chedkhaaniyaan ",
        "Haan haan ",
        "Nazre teri karti yahaan ",
        "Ittar saa tu ",
        "Haan haan ",
        "Mujhme hi phir ghul sa gaya "
    ]
    delays = [ 1.5, 1.5, 1.5, 1.5, 1.0, 1.0, 1.5, 1.0, 1.0, 1.5, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0 ]
    print("\n🎵 Now Playing - Jaane na tu\n")
    time.sleep(1.5)
    for i, line in enumerate(lyrics):
        type_lyric(line)
        time.sleep(delays[i])

if __name__ == "__main__":
    print_lyrics()
    time.sleep(0.03)
