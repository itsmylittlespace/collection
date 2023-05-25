(function() { 
    $(document).ready(function() {
        loadHeader(); 
        loadFooter(); 
    }); 

    function loadHeader() { 
        var headerHtml = `
            <a href="../home"><h1>My Space</h1></a>
            <nav>

                <a href="../zippo"> 
                    <span class="nav-icon">&#9981;</span>
                    Zippo
                </a> 
                
                <span class="navSectionHeader-desktop">COMPLETED</span>
                <span class="navSectionHeader-mobile">|</span>

                <a href="../explodingkittens"  >
                    <span class="nav-icon">&#128049;</span> 
                    Exploding Kittens
                </a>
    
                <span class="navSectionHeader-desktop">ARCHIVED</span>
                <span class="navSectionHeader-mobile">|</span>
                
                <a href="../keyboards" >
                    <span class="nav-icon">&#128187;</span> 
                    Keyboards
                </a>

                <span class="navSectionHeader-desktop">YOUTUBE</span>
                <span class="navSectionHeader-mobile">|</span>
                <a href="../youtube" class="last">
                    <span class="nav-icon">&#128249;</span> 
                    GO
                </a>
               
            </nav>
        `;
        $('header').append(headerHtml); 
        

    
        // read url and highlight tab 
        var pages = [
            'home',
            'zippo',
            'keyboards', 
            'explodingkittens', 
            'youtube'
        ]; 
    
        let index = window.location.href.indexOf('collection/') + 'collection/'.length; 
        let currentPageStr = window.location.href.substring(index); 
    
        let currentPage = pages.find(x => currentPageStr.includes(x.toLowerCase()));
        if (currentPage) { 
            $(`a[href*="./${currentPage}"]`).addClass('current-tab');
        } else { 
            // redirect to home page
            window.location.href = window.location.origin + '/collection/html/home'; 
        }
    
    }
    
    
    function loadFooter() {
        $('footer').append('Copyrighted &copy; 2018-2023');
    }
    
    $.urlParam = function (name) {
        var results = new RegExp('[\?&]' + name + '=([^&#]*)')
                          .exec(window.location.search);
    
        return (results !== null) ? results[1] || 0 : false;
    }



})(); 

function getAmazonLink(title, link, showHover) { 
    return `
        <a target="_blank" class="amazon  ${(showHover===false) ? '' : 'triggerHover'}" href="${link}" >
            ${title}
            <img class="icon" src="../../data/link/amazon.png" /> 
            <img class="icon" src="../../data/link/canada.png" /> 
            <span class="showOnHover">
                Shop on Amazon.ca
            </span>
        </a>
    `;
}