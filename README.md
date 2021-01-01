# Astro Light

## Start up:
- Do all the 🧙‍♂️ things to set up xcode and android studio to work with react native
- `yarn restart`
- `yarn ios` or `yarn android`

## To Do:

- [ ] figure out why import modules aren't working in `.tsconfig`
- [ ] set up a nav
- [ ] choose a colour picker
- [ ] set up profiles (morning, eve, etc)
- [ ] error handling with toaster
- [ ] async storage
- [ ] dark / light mode using `usecolorscheme` hook (maybe)

## API docs

- can send each of these sections separately unless noted, no need to send entire body
- note the different spelling of `colour` 🙄
- only takes integers for number values
- everything below is the default


``` json
curl -X "POST" "http://192.168.1.138/rest/api/v1/settings" \
     -H 'Content-Type: application/json; charset=utf-8' \
     -d $'{
  "colour": {
    "horns": { // must send this with split_horns
      "dyn": {
       "r": true,
        "b": false,
        "g": true,
        "w": true
      },
      "stat": {
        "r": 0, // max 255
        "b": 0,
        "g": 0,
        "w": 0
      }
    },
    "main": {
      "dyn": {
        "r": true,
        "b": false,
        "g": true,
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
  "split_horns": false, // requires a color spec
  "delay_time": 0, // delay between each change, max 100ms
  "brightness": 50, // max 50
  "effect": "off", 
    // options for effect:
        // pulse: pulses "dyn" colours from brightness b_pulse_l to b_pulse_u
        // noise: random morphing of "dyn" colours
        // wipe: progressively colours the circle then each of the horns with the stat colors
        // off: turns lights off
  "b_pulse_u": 255, // = brightness, highest value = 255, lowest value = 20, 
  "b_pulse_l": 20 // = brightness, highest value = 255, lowest value = 20, 
}'
```