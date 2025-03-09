import json
import urllib.request

url = 'https://raw.githubusercontent.com/Meowcelinee/OOCQC/refs/heads/main/oocqc-pack/assets/minecraft/texts/splashes.txt'

splashes = []

with urllib.request.urlopen(url) as raw_txt:
    txt = raw_txt.read().decode('utf-8').split('\n')
    for splash in txt:
        split_quote = splash.split('\" -')
        quote = split_quote[0].replace('\"', '')
        attribute = split_quote[1].replace('\n', '') if len(split_quote) > 1 else 'Unknown'
        splashes.append({
            'quote': quote.replace('\"', ''),
            'attribute': attribute,
            'id': len(splashes) + 1
        })

with open('../../data/quotes/quotes.json', 'w') as quotes:
    new_json = json.dumps(splashes, indent=4)
    quotes.write(f'{new_json}')
