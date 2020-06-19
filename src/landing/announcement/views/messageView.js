var Marionette = require('backbone.marionette')

module.exports = Marionette.View.extend({
    tagname: 'div',
    attributes: function(){
        return {
            class: 'announcementUnit',
            id: 'announcementUnit_' + this.model.get('id') 
        }
    },
    template: require('../template/content.pug'),
    templateContext: function(){
        return {
            heading: this.model.get('title'),
            description: this.model.get('description'),
            imageSrc: this.model.get('icon')
        }
    },
    initialize: function(){
        this.render();
    }
})