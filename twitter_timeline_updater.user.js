// ==UserScript==
// @name           Twitter timeline updater
// @namespace      http://phpz.org/
// @description    Manual/auto update twitter timeline.
// @version        1.3.7
// @include        http://twitter.com/home
// @include        https://twitter.com/home
// ==/UserScript==

// define css
GM_addStyle(<><![CDATA[
.unread {
    background-color: #FEFBDF;
}
.auto_update {
    margin: 0;
    padding: 0;
    position: relative;
    top: 5px;
    z-index: 1;
}
.auto_update a {
    margin: 0;
    text-decoration: none;
    padding: 3px 5px;
}
.tl_refresh {
    background-image: url("data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%10%00%00%00%10%08%06%00%00%00%1F%F3%FFa%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C9e%3C%00%00%02%E6IDATx%DA%A4SIOSQ%14%3E%F7%0D%1D%A0%94ZZl%11%11%A8%A0%88q%C1%03%C5H%D5%20*%91%18M%14%17%86%98%B8%E2%0F%B8%F1o%18%17.%DC%98%E8%02%E2%14c%0CA%A3%A2%C1%10%A5%04Q)%04(%16h%19J%A1%A5tz%C3%BD%9E%D7%A2%12V%26%BE%E4%CB%1D%DE%FD%BE%7B%BEs%CE%25%8C1%F8%9FO8zg%26%3F%11E%10%04%018%9E%B7%11B%BC%B8u%0A%D1%84(DL!%06%F1%B2%A7%94%D20%CF%F3%5D%B8%F6%BE%BBY%DA-%EC%10%AC%168v%AD%AA%CC%7C%A4%BC%D4%5Cg-%14%AAq%CF%9AH%AAu%0B%AB%99%96%99%F9%E4%15%CA%D8%A0%A6%AA%ED%BF%09%DC%1F*cn%83%C0%BC%1D%C7%9D%AE%CAR%B3%D5%40%88Q%91)%E8%10%09)%D8%E70%95%9For%9CV%91%DCy%C6-%E1%98%8F%9Cj%1A%60%C8%06%02Z%DD%B9F%97u%3D%9A%01%8D%03%3A%11%8C%87%E6%96R%11%DDB%85%AB%D0%D6P%BB%CB%13_W%E0%B2%D7%25m%C4%B3(%2C%E7%054E%D1%C7%92J%97%D5%12%5DI%02%E5%09y%F39%3C%8E%A2%1F8Ax%A5%E2%C1%400%7B7%10%5Ck%BE%DAV)-%2F%C4%C1b5%82%9A%CD%E6%05%E4%FC%C4b%2F%10%0CrV%A1%DF%E7c%8B%A8%DEO%08%8C%A8%A9%94%1E%5D%17%A2%F9zG%AD%94%88e%404%E8%AE%19%C8%BF%05%F4%1B%D0%BFb6%F2%11U%D5V%83s%D1%84F%B5%91%BC5%0EDQ%F4%EA%A5~%F0d%CC%B7%3D%DB(%9A%5B%0B%E9dR_%DC~%FE%FA%87%B4%B3%C6%94%A9%3E%24wc%D9%20w%11!R%AB%F7%40%91%88%A5%EA%7B%3B%1E%FC%1B%01%80%D4~%B1IJe%F2%99-)6%C2%B3%C7C%3E%14%FE%88u%CF%91E%83%A1aw%99%FDl4C%13TN%2F%2B%D9l8'%A0lyY%CC%00%AC%26%18T8L%D0%FBh%40%0Fo%08%C9%0F5%B4%82%0Dv%01%F3r%D2%E1%D9k%8E%82%90L%85%17e%E4mnO%22%C4y%03%D8%9C%26%18%8B)Ps%A9UZ%F92f%8B%CC%86%86%F1W%B2x%8FCv%D6%D7%A4%C3%9C)%E0.%12%C0%3F5%BF%A9)jt%BB%050ZL%F0%E9%5E%8F%AF%F2F%A74%2F3%E0%A5F%8F%FB%98%DE%C9%B0%91QY(DY%C0U%C8%81%AF%E7%E5%86%92L%FB%B1%E5sD%C29%0F%02%DFrkx%2Bo%7D%C4h%3C%E18%5C%BB_%F4T%D9%89%DD%5E%A0%0B%B0%E8Z%40%9E%9E%F1%C7%FC%D3c%CA%C2%B7%5E%3A%F9%22%40W%26%40%AF%8E%40%23%13%E5%B0%EC%1F%87l%7C%94%FA%EE%0Fp%A5%87%DE%2F%FDlk%81%92%9Az%E0D%FD-l%82%9A%F9%0A%AB%FEQ6%DD%3F%C9%D6gM%B8%E7D%AC!4%A2%3F%16%84%A8%DBA%F0%FF%F0%82%F5%D6M!%D2%18%01%FD%25%C0%002%B4l%A7%01%CA%5C%D4%00%00%00%00IEND%AEB%60%82");
	background-repeat: no-repeat;

}
.tl_read_all {
    background-image: url("data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%10%00%00%00%10%08%06%00%00%00%1F%F3%FFa%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C9e%3C%00%00%02%B0IDATx%DA%A4%93_H%D3Q%14%C7%BFw%CE%3Fm%3A%B76%9C%AE%E9%5C%F3O%E6p%D3%E5D%C5%CAY4%5DRD!D%F4PB%3E%D4C%F4%10%88T%84%0F%BD%14%08%25%15%D5CA%05%9A%11m%A8%19hQ%1A%E9d%11%3A*MV%A6%88.%A7.%DD%FF%DB%FD%E5%7C%0A)%F0%07%1F%CE%E1%FC%BB%E7w%EE%B9%84R%8A%8D%7C%FC%D6z%1E%B8%12%5C%1D%0EBV%1D%9C%3C%7D%97b%BF%81%C0R%B4%EA%8B0%7CN%8A8%3E%CC%E1%08%9A%03A4%F1%FE%E3%90R%96w%87%83%E9%3BY!%F3%B2%0F%CDe%D5%87%0C%BFV%D0%CC%FFGr%96%D5N%0BZn%5D9%C9%B5%60%BD%D1(eI%E9F%D3.C%DB%FD%0E%7B(%BC~%07b%16%7F%86%C9%BDcc%E37%3B%DF%25%C2%3F3%83%9A%FA%8B%07%93%B4d%EA%C9%E3W%F6%C9Y4E%22%E8%E2%3A%88e%243d%8C4%96X%9C%20%14%17g%EA%CA%F4%23u%05j%9B%CD%8A%AA*3%3A%BB%FD%A8T%7D%C1%BEc%E7j%03%A1%AB6%96%EC%E3%E6%C2g%83%B9%90%20%94%14%C7%0BE%02A%92T%24K%CF%96K%E4JYp)%C0_%9At%A3%DA(%40%87%F5)L%26%0Bl%DD%CB%A8R%8F%C3t%E0%84%A5%BB%FD%DE%02%2B%D0%C7c%95z%BC%0B%F3%FE%5CcME%9A%C6%A0%F3yh%EA%C4%80%93%EF%9D%9D%87%40)%C1%CF%D1%EF%A8-Z%84%D5%DA%86%8A%0A%0B%9E%8F%A4a%D1%B5%88P%08%3C%06b%CC%3A%E2%EA%B7SO%7F%EF%60%5E%22%85B%98%2CDJ%B6%121q%B1%98v%7C%85D%93%8A%90%D7%8F%3C%F12%1E%BEt%20'%A7%04ug%2F%3F*%D7%B0%9B%A1%98X%BB%85%AEB-Y%99s%0F%9F%CF-%D5V%8F%0D%3B%C1%A7%3Cd%14d%C1%3B%E7%01%F5%85!V%C9q%3C%DF%03cC%5D%3B%8Boe%BF%FF%86%5B%99%18%C26f%C1%0Bh%14%C4%E5%18%A5%EE%C1%B7%1F%F2J%CAu%8A-%DB31%E5t!%E4%0FB%A4%94a%FE%D3%14%DA%9E%3DxmH%C7%B5%A1o%A4%2Fc3%F0%F1%07%5B%B8%B5%7BS%A7%10%A8%84%14%E5ZR%C9%E6%D2%98%9DS%BA'%C2%14%8D%3E%17s%2C%B9%AB%B7g%80m%DF%25%F7%0A%5EXG%08%D6%7D%02*)%C1n5%CCG%F21%D4y%FD0%BD%7Dj%07%3D%AA%C7%7B%D3V%98%E5I%7F%C7s%1Dp%CB%24d%88%18%5C%C8%26%CE%A6W%A0p%9B%14%0D%DC%FE%7Fv%A3%C51%8D%5Ef%0F0%FC%8C%60T%0F%93h%918F%7C%14~%D4%C6%F5%18%89%12f%84%A2r%8D%3F%3E%B2%D1%E7%FC%5B%80%01%00%9A%7F%1A%1D%97%5E0%8E%00%00%00%00IEND%AEB%60%82");
	background-repeat: no-repeat;
}
#update-submit {
    position: relative;
    z-index: 2;
}
]]></>);

(function(){
	var gm_script = function() {

        // run
        var interid;
        var lastid = 0;
        var unread = 0;
        var me_name = '';
        var is_updating = false;
        var title = 'Twitter';
        var url = '/statuses/friends_timeline.json';
        var loc = '<img title="{rname}’s updates are protected— please don’t share!" src="http://assets2.twitter.com/images/icon_lock.gif" class="lock" alt="Icon_lock"/>';
        var del = '<a title="delete this update" class="del">&nbsp;&nbsp;</a>';
        var rep = '<a title="reply to {screen_name}" href="/home?status=@{screen_name}%20&amp;in_reply_to_status_id={id}&amp;in_reply_to={screen_name}" class="reply">&nbsp;&nbsp;</a>';
        var tmp = '<li id="status_{id}" class="unread hentry status u-{screen_name}">' + 
                '<span class="thumb vcard author"><a class="url" href="/{screen_name}">' + 
                '<img width="48" height="48" src="{profile_image_url}" class="photo fn" alt="{screen_name}"/>' + 
                '</a></span><span class="status-body"><strong>' + 
                '<a title="{screen_name}" class="screen-name" href="/{screen_name}">' + 
                '{screen_name}</a></strong>{lock}<span class="entry-content">{text}</span>' + 
                '<span class="meta entry-meta"><a rel="bookmark" class="entry-date" href="/{screen_name}/status/{id}">' + 
                '<span class="published">{created_at}</span></a> <span>from {source}</span> </span></span>' + 
                '<span class="actions"><div>' + 
                '<a title="favorite this update" id="status_star_{id}" class="fav-action non-fav">&nbsp;&nbsp;</a>' + 
                '{action}</div></span></li>';

        function init()
        {
			$('#pagination') ? createUI() : setTimeout(init, 100);
        }

        function createUI()
        {
            title = document.title;
            me_name = $.trim($('#me_name').text());
            $('.unread').live('mouseover', function(){$(this).removeClass('unread');unread--;checkUnread();})
            $('<div class="auto_update" >' +
                '<input id="auto_update" type="checkbox"> <label for="auto_update">Auto</label> ' +
                '<a href="javascript:void 0;" class="tl_refresh" title="Refresh">&nbsp;&nbsp;</a> ' +
                '<a href="javascript:void 0;" class="tl_read_all" title="Make all read">&nbsp;&nbsp;</a>' +
                '</div>')
                .insertAfter('#update-submit')
                .find('a').click(function()
                {
                    if(this.className == 'tl_refresh')
                        update();
                    else
                    {
                        unread = 0;
                        $('.unread').removeClass('unread');
                        document.title = title;
                    }
                }).end()
                .find('input').click(function()
                {
                    if(this.checked)
                    {
                        loopUpdate();
                        update();
                    }
                    else
                    {
                        clearInterval(interid);
                        delCookie('auto_update');
                    }
                });
            if(getCookie('auto_update') == 'true')
            {
                $('#auto_update')[0].checked = true;
                loopUpdate();
            }
        }

        function loopUpdate()
        {
            interid = setInterval(update, 1000 * 60);
        }

        function update()
        {
            if(is_updating) return;
            is_updating = true;
            lastid = getLastId();
            setCookie('auto_update', $('#auto_update')[0].checked, 60 * 60 * 24 * 7);
            $.ajax(
            {
                'url' : url,
                'dataType': 'json',
                'error': function(){$('#loader').hide();is_updating = false;},
                'success': function(data)
                {
                    $('#loader').hide();
                    for(var i=0, l=data.length, item='', list=''; i<l; i++)
                    {
                        if(data[i].id > lastid)
                        {
                            unread++;
                            item = tmp;
                            item = item.replace(/\{text\}/g, textHandler(data[i].text));
                            item = item.replace(/\{profile_image_url\}/g, data[i].user.profile_image_url);
                            item = item.replace(/\{source\}/g, data[i].source);
                            item = item.replace(/\{created_at\}/g, getTime(data[i].created_at));
                            item = item.replace(/\{action\}/g, me_name == data[i].user.screen_name ? del : rep);
                            item = item.replace(/\{lock\}/g, data[i].user.protected ? loc.replace(/\{rname\}/g, data[i].user.name) : '');
                            item = item.replace(/\{id\}/g, data[i].id);
                            item = item.replace(/\{screen_name\}/g, data[i].user.screen_name);
                            list += item;
                        }
                        else
                        {
                            break;
                        }
                    }
                    $('#timeline').prepend(list);
                    checkUnread();
                    is_updating = false;
                },
            });
        }

        function getLastId()
        {
            return $('#timeline > li')[0].id.replace('status_', '');
        }

        function getTime(time)
        {
            var m = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            var d = new Date(time.replace('+', 'GMT+'));
            return d.getHours() + ':' + d.getMinutes() + ' ' + m[d.getMonth()] + ' ' + d.getDay() + ', ' + d.getFullYear();
        }

        function checkUnread()
        {
            document.title = (unread > 0 ? '(' + unread + ') ' : '') + title;
        }

        function textHandler(text)
        {
            var reg_url = /((?:http|https|ftp|telnet|file)\:\/\/[^\s]+)/ig;
            var reg_rpl = /@([a-z0-9_]+)/ig;
            text = text.replace(reg_url, '<a href="$1" target="_blank">$1</a>');
            text = text.replace(reg_rpl, '@<a href="/$1">$1</a>');
            return text;
        }

        init();

        // Cookie
        function setCookie(sName, sValue, iTime){
            var date = new Date();
            date.setTime(date.getTime()+iTime*1000);
            document.cookie = escape(sName) + "=" + escape(sValue) + "; expires=" + date.toGMTString();
        }

        function getCookie(sName){
            var aCookie = document.cookie.split("; ");
            for (var i=0; i <aCookie.length; i++){
                var aCrumb = aCookie[i].split("=");
                if (escape(sName) == aCrumb[0])
                    return unescape(aCrumb[1]);
            }
            return null;
        }

        function delCookie(sName){
            var date = new Date();
            document.cookie = sName + "= ; expires=" + date.toGMTString();
        }

	};
	
	// append gm_script as a script element.
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.innerHTML = gm_script.toSource() + '();';
	document.getElementsByTagName('head')[0].appendChild(script);
})();