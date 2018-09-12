var $ = require('jquery');
var ljs = require('list.js');

var cssSelectors = require('./css-selectors.json');
var cssSelectorDump = cssSelectors['simpleSelectors']['classes'];

var togglerClassArr = [];

function trimClassName(str) {
    return str.replace(/^(\.)/, "");
}

module.exports = {
    init: function(target = '.cssToggler', controls = '.cssTogglerFilterControl') {
        
        var myModule = this;
        $(target).each(function(key, value) {
            
            var guid = $(this).attr('data-css-toggle-target');
            
            if (guid){
                
                togglerClassArr[guid] = []; //init class array
                
                myModule.initSingle(guid);
                
                $(`input:checkbox[data-guid=${guid}]`).change(function() {
                    
                    if ($(this).is(':checked')){
                        togglerClassArr[guid][$(this).val()] = $(this).val();
                        myModule.updateCSSClasses(togglerClassArr, guid);
                        
                    } else {
                        delete togglerClassArr[guid][$(this).val()];
                        myModule.removeCSSClasses($(this).val(), guid);
                        
                    }
                });
            } else {
                console.log("ERROR GUID NOT FOUND" + $(this).html());
            }
        });
    },
    removeCSSClasses: function(className, guid, controls = '.cssTogglerFilterControl') {
        $myItem = $(`#${guid}`);
        
        if (!className){
            console.log("removing all");
            for (var prop in togglerClassArr[guid]) {
                
                $myItem.removeClass(prop);
                // $(`input:checkbox[data-guid=${guid}][value=${prop}]`).prop('checked', false);
            }
            
        } else {
            $myItem.removeClass(className);
            
        }
    },
    updateCSSClasses: function(classArr, guid, controls = '.cssTogglerFilterControl') {
        
        for (var prop in classArr[guid]) {
            $myItem = $(`#${guid}`);
            if (!$myItem.hasClass(prop)){
                $myItem.addClass(prop);
            }
        }
        
        for (i = 0; i < classArr.length; i++) {
            //   console.log( classArr[i]);
        }
        /* $(target).each(function(key, value) {
     
         }*/
        /* var myModule = this;
         console.log('Checked');
     
         if($(this).is(':checked')){
         }*/
    },
    initSingle: function(guid, target='.cssToggler', controls = '.cssTogglerFilterControl') {
        target = $(`${target}[data-css-toggle-target=${guid}]`);
        
        var output = "";
        
        for (i = 0; i < cssSelectorDump.length; i++) {
            var classTrimmed = trimClassName(cssSelectorDump[i]);
            console.log(classTrimmed);
            // output+= `<li><h3 class="name">${cssSelectorDump[i]}</h3><p class="born">1986${i}</p></li>`
            output += `<li><input type="checkbox" id="cssToggler__checkbox-${guid}-${i}"  data-guid="${guid}" value="${classTrimmed}"/> <label name="name" class="name" for="cssToggler__checkbox-${guid}-${i}">${classTrimmed}</label></li>`;
        }
        
        $(target).find('.cssToggler__list').append(output);
        
        var options = {
            valueNames: ['name']
        };
        
        var userList = new List(`cssToggler--${guid}`, options);
        $(target).css("border", "1px solid red");
    }
};