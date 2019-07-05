import {getDateStr} from '/modules/date.es6';
import {getTextStr} from '/modules/text.es6';
import {getDataSync, getDataAsync} from '/modules/data.es6';

$(document).ready(function(){
    const setSpan = (str, text) => {
        $('#span-a-date').text(str)
        $('#span-a-text').text(text)
    }
    const bindClick = ()=>{
        $('#changeTextSync').click(()=>{
            var text = getDataSync();
            $('#span-d-text').text(text);
        });

        $('#changeTextAsync').click(()=>{
            getDataAsync().then(fullfilled=>{
                $('#span-d-text').text(fullfilled);
            }, rejected=>{
                $('#span-d-text').text('failed.');
            });
        });
    }
    
    setSpan(getDateStr(), getTextStr());
    bindClick();
})