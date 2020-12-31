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
  "brightness": 60
}'