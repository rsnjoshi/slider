var Marionette = require('backbone.marionette')

module.exports = Marionette.View.extend({
    tagname: 'div',
    attributes: function(){
        return {
            class: 'circleUnit'
        }
    },
    template: require('../template/circle.pug'),
    templateContext: function(){
        return {
            idNumber: this.model.get('id')
        }
    },
    initialize: function(){
        this.render();
    }
})