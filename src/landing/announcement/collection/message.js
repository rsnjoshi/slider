var Backbone = require('backbone');
var Message = Backbone.Collection.extend({url:''})

module.exports = new Message([
    {
        "id": 4,
        "title": "Landing page has changed folks",
        "icon": "https://d2r6qndvt04kzn.cloudfront.net/media/announcement_icons/announcement/default.png",
        "description": "<p>A new homepage is being released <strong><em>soon</em></strong>.</p>",
        "order": 1,
        "visible": false,
        "created_at": "2020-06-10T10:45:37.328601Z",
        "modified_at": "2020-06-10T10:45:54.271459Z"
    },
    {
        "id": 3,
        "title": "Rowdmap Developer team has new members now",
        "icon": "https://d2r6qndvt04kzn.cloudfront.net/media/announcement_icons/announcement/default.png",
        "description": "<p><a href=\"http://www.dev.teamrowdmap.com\" rel=\"noopener noreferrer\" target=\"_blank\">Rowdmap-Nepal</a> has new members now.</p>",
        "order": 2,
        "visible": true,
        "created_at": "2020-06-10T10:44:38.558657Z",
        "modified_at": "2020-06-10T10:44:38.558718Z"
    },
    {
        "id": 2,
        "title": "Rowdmap rebranded to Network Intelligence!",
        "icon": "https://d2r6qndvt04kzn.cloudfront.net/media/announcement_icons/announcement/default.png",
        "description": "<p>Rowdmap Risk Readiness platform has been rebranded to Network Intelligence.</p>",
        "order": 3,
        "visible": true,
        "created_at": "2020-06-10T10:42:36.206706Z",
        "modified_at": "2020-06-10T10:45:54.555899Z"
    },
    {
        "id": 1,
        "title": "New to the Platform?",
        "icon": "https://d2r6qndvt04kzn.cloudfront.net/media/announcement_icons/announcement/default.png",
        "description": "<p>Mouse over the gray bar at the top of the screen and select a Playbook to see all of its Best Practices. Pick a Best Practice based on your use case to access the information, visuals, tactical tips, tricks and techniques you need to rock out.</p>",
        "order": 4,
        "visible": true,
        "created_at": "2020-06-10T10:42:36.206706Z",
        "modified_at": "2020-06-10T10:45:54.555899Z"
    }
]);