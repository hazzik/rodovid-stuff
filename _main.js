    //<source lang="javascript">
    
    /*
     * Пользовательский JS-скрипт importUserScript для rodovid.org.
     * Позволяет подключать к интерфейсу произвольные JS-скрипты
     * (как из пространства имён участника, так и внешние URL).
     * Основано на коде из Википедии (https://gist.github.com/rc5hack/4737523)
     * и оригинальном коде пользователя http://ru.rodovid.org/wk/User:Hazzik.
     * 
     * Изменения и дополнения внесены пользователем http://ru.rodovid.org/wk/User:AntonioK
     *
     * Пользуйтесь и улучшайте!
     */
    
    (function (window) {
        window.loadedUserScripts={};
    
        window.importUserScriptURI=function(url){
            if(loadedUserScripts[url]){return null;}
            loadedUserScripts[url]=true;
            var s=document.createElement('script');
            s.setAttribute('src',url);
            s.setAttribute('type','text/javascript');
            document.getElementsByTagName('head')[0].appendChild(s);
            return s;
        };
    
        window.importUserScript=function(src){
            return importUserScriptURI('/wk?title=' + src + '&action=raw&ctype=text/javascript');
        };
    })(window);
    
    /*
     * Подключаем местные пользовательские скрипты:
     */
    
    //importUserScript('User:AntonioK/sandbox.js');
    
    /*
     * Подключаем скрипты со внешних URL:
     */
    
    //importUserScriptURI('https://gist.github.com/rc5hack/4737624/raw/c4a8d7eccaf47405c145997a73589221c05a8298/sandbox.js');
    
    /*
     * Либо можно вынесте подключение всех скриптов (как местных,
     * так и внешних) в отдельный файл, чтобы не мусорить тут:
     */
    
    //importUserScript('User:AntonioK/scripts.js');
    //</source>
