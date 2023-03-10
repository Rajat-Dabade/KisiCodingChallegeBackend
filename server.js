const WebSocket = require('ws')
const reverseGeocode = require('country-reverse-geocoding').country_reverse_geocoding()
const wss = new WebSocket.Server({ port: 8080 })

wss.on('connection', function connection(ws) {

  setInterval(() => {

    console.log("Data sending pr second")
    for (let i = 0 ; i < 5; i++) {
      let lat = (Math.random() * 180) - 90
      let lng = (Math.random() * 360) - 18
      const data = JSON.stringify({
        "id": 10,
        "actor_type": "User",
        "actor_id": 11,
        "actor_name": "John Doe",
        "action": "unlock",
        "object_type": "Lock",
        "object_id": 12,
        "object_name": "Main Entrance",
        "success": true,
        "error_code": null,
        "error_message": null,
        "created_at": new Date().toISOString(),
        "longitude": lng,
        "latitude": lat,
        "country": reverseGeocode.get_country(lat, lng)?.name,
        "references": [
          {
            "id": 13,
            "type": "Lock"
          },
          {
            "id": 14,
            "type": "ORG INC"
          },
          {
            "id": 15,
            "type": reverseGeocode.get_country(lat, lng)?.name
          },
          {
            "id": 16,
            "type": "Admin"
          }
        ]
      })

      ws.send(data)
    }
  }, 1000)
})
