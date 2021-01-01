# Astro Light

## To Do:

- [ ] figure out why import modules aren't working in `.tsconfig`
- [ ] set up a nav
- [ ] choose a colour picker
- [ ] set up routines (morning, eve, etc)
- [ ] dark / light mode using `usecolorscheme` hook (maybe)

## API specs

curl -X "POST" "http://192.168.0.5/rest/api/v1/settings" \
     -H 'Content-Type: application/json; charset=utf-8' \
     -d $'{
  "effect": "noise",
  "colour": {
    "main": {
      "dyn": {
        "r": true,
        "b": true,
        "g": false,
        "w": true
      },
      "stat": {
        "r": 0,
        "b": 0,
        "g": 0,
        "w": 0
      }
    }
  },
  "split_horns": false,
  "brightness": 60 // max 50
}'

