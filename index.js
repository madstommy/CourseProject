const search_bar = document.getElementById('search_bar');
const google_box = document.getElementById('google_box');
const bing_box = document.getElementById('bing_box');
const yahoo_box = document.getElementById('excite_box');
const lycos_box = document.getElementById('lycos_box');
const iframe_grid = document.getElementById('iframe_grid');

function searchFunc(){
    const search_text = search_bar.value;
    if(google_box.checked){
        const search_query = search_text.replace(' ', '+');
        if(document.getElementById('google_iframe') == null){
            const new_iframe = document.createElement('iframe');
            new_iframe.id = 'google_iframe';
            new_iframe.title = 'google';
            new_iframe.classList.add('iframe_container')
            new_iframe.src = 'https://www.google.com/search?q='+search_query+'&igu=1';
            iframe_grid.append(new_iframe);
        }
        else{
            old_iframe = document.getElementById('google_iframe');
            old_iframe.src = 'https://www.google.com/search?q='+search_query+'&igu=1';
        }
    }
    else if(document.getElementById('google_iframe') != null){
        document.getElementById('google_iframe').remove()
    }

    if(bing_box.checked){
        const search_query = search_text.replace(' ', '+');
        if(document.getElementById('bing_iframe') == null){
            const new_iframe = document.createElement('iframe');
            new_iframe.id = 'bing_iframe';
            new_iframe.title = 'bing';
            new_iframe.classList.add('iframe_container')
            new_iframe.src = 'https://www.bing.com/search?q='+search_query;
            iframe_grid.append(new_iframe);
        }
        else{
            old_iframe = document.getElementById('bing_iframe');
            old_iframe.src = 'https://www.bing.com/search?q='+search_query;
        }
    }
    else if(document.getElementById('bing_iframe') != null){
        document.getElementById('bing_iframe').remove()
    }

    if(excite_box.checked){
        const search_query = search_text.replace(' ', '+');
        if(document.getElementById('excite_iframe') == null){
            const new_iframe = document.createElement('iframe');
            new_iframe.id = 'excite_iframe';
            new_iframe.title = 'excite';
            new_iframe.classList.add('iframe_container')
            new_iframe.src = 'https://results.excite.com/serp?q='+search_query;
            iframe_grid.append(new_iframe);
        }
        else{
            old_iframe = document.getElementById('excite_iframe');
            old_iframe.src = 'https://results.excite.com/serp?q='+search_query;
        }
    }
    else if(document.getElementById('excite_iframe') != null){
        document.getElementById('excite_iframe').remove()
    }

    if(lycos_box.checked){
        const search_query = search_text.replace(' ', '+');
        if(document.getElementById('lycos_iframe') == null){
            const new_iframe = document.createElement('iframe');
            new_iframe.id = 'lycos_iframe';
            new_iframe.title = 'lycos';
            new_iframe.classList.add('iframe_container')
            new_iframe.src = 'https://search.lycos.com/web/?q='+search_query;
            iframe_grid.append(new_iframe);
        }
        else{
            old_iframe = document.getElementById('lycos_iframe');
            old_iframe.src = 'https://search.lycos.com/web/?q='+search_query;
        }
    }
    else if(document.getElementById('lycos_iframe') != null){
        document.getElementById('lycos_iframe').remove()
    }

}