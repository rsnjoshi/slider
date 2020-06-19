var Marionette = require('backbone.marionette')
var circleView = require('./views/circleView.js');
var messageView = require('./views/messageView.js');
var compositeView = require('./views/composite.js');
var message = require('./collection/message.js')
var $ = require('jquery')

var rootView = Marionette.View.extend({
    el: '#tree',

    template: require('./announcement.pug'),
    
    regions: {
        announcementMessage: '.announcementMessage',
        circleTab: '.circleTab'
    },

    ui: {
        leftArrow: "#leftArrow",
        rightArrow: "#rightArrow",
        circle: ".announcementCircle"
    },

    events: {
        "click @ui.circle": 'slider',
        "click @ui.leftArrow": 'slider',
        "click @ui.rightArrow": 'slider'
    },

    slider: function(event){
        let self = this;
        let slides = $(".announcementUnit")
        let tabs = $(".announcementCircle")
        let index = 0;
        if(!event){
            index = 0;
            self.currentSlide = 0;
        }else{
            if(event.target.id === "leftArrow"){
                index = (self.currentSlide -= 1);
            }else if(event.target.id === "rightArrow"){
                index = (self.currentSlide += 1);
            }else{
                $.each(tabs, function(element, value){
                    if(event.target.id === value.id){
                        index = element
                        self.currentSlide = element
                    }
                })
            }
        }
        if(index > (tabs.length-1)){
            self.currentSlide = 0;
            index = 0
        }
        if(index < 0){
            self.currentSlide = tabs.length - 1
            index = tabs.length - 1
        }
        $.each(slides, function(element, value){
            if(element === index){
                self.$("#" + value.id).css({"display":"block"});
            }else{
                self.$("#" + value.id).css({"display":"none"})
            }
        })
        $.each(tabs, function(element, value){
            if(element === index){
                self.$("#" + value.id).addClass("active");
            }else{
                self.$("#"+ value.id).removeClass("active");
            }
        })
    },

    onRender(){
        this.showChildView('circleTab', new compositeView({collection: message, childView: circleView, tagName: 'div', attributes: function(){return {class:'circleSet'}}}));
        this.showChildView('announcementMessage', new compositeView({collection: message, childView: messageView, tagName: 'div', attributes: function(){return {class:'announcementSet'}}}));
        this.slider(false);
    },

    initialize: function(){
        this.currentSlide = 0;
    }
})

module.exports = new rootView();