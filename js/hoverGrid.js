(function( $ ){
    $.fn.hoverGrid = function( options ) {  
    var settings = $.extend( {
        'itemClass' : '.item'
    }, options);

    return this.each(function() {       
        var hoverGrid = $(this);
        hoverGrid.addClass('hover-grid');
        hoverGrid.find(settings.itemClass).addClass('hover-grid-item');
        
        $(hoverGrid).find(settings.itemClass).hover(function () {
            $(this).find('div.caption').stop(false, true).fadeIn(200);
        },
        function () {
            $(this).find('div.caption').stop(false, true).fadeOut(200);
        });
    });
    };

    var jsonp = function(url)
    {
        var script = window.document.createElement('script');
        script.async = true;
        script.src = url;
        script.onerror = function()
        {
            alert('Can not access JSONP file.')
        };
        var done = false;
        script.onload = script.onreadystatechange = function()
        {
            if (!done && (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete'))
            {
                done = true;
                script.onload = script.onreadystatechange = null;
                if (script.parentNode)
                {
                    return script.parentNode.removeChild(script);
                }
            }
        };
        window.document.getElementsByTagName('head')[0].appendChild(script);
    };

    var parse = function(data)
    {
        var column_length = data.table.cols.length;
        if (!column_length || !data.table.rows.length)
        {
            return false;
        }
        var columns = [],
            result = [],
            row_length,
            value;
        for (var column_idx in data.table.cols)
        {
            columns.push(data.table.cols[column_idx].label);
        }
        for (var rows_idx in data.table.rows)
        {
            row_length = data.table.rows[rows_idx]['c'].length;
            if (column_length != row_length)
            {
                // Houston, we have a problem!
                return false;
            }
            for (var row_idx in data.table.rows[rows_idx]['c'])
            {
                if (!result[rows_idx])
                {
                    result[rows_idx] = {};
                }
                value = !!data.table.rows[rows_idx]['c'][row_idx].v ? data.table.rows[rows_idx]['c'][row_idx].v : null;
                result[rows_idx][columns[row_idx]] = value;
            }
        }
        return result;
    };

    var query = function(sql, callback)
    {
        var url = 'http://spreadsheets.google.com/a/google.com/tq?',
            params = {
                key: '1ByfbMat_iwRgkYvo9bX1CCpkUuko4czMOp3grN9y3eM',
                tq: encodeURIComponent(sql),
                tqx: 'responseHandler:' + callback
            },
            qs = [];
        for (var key in params)
        {
            qs.push(key + '=' + params[key]);
        }
        url += qs.join('&');
        return jsonp(url); // Call JSONP helper function
        
    }

    var my_callback_02 = function(data) {
        console.log("Query")
        data = parse(data); // Call data parser helper function
        console.log(data);
        console.log(data.length);
        console.log(Object.keys(data[0]));
        for (var index = 0; index < data.length; index++) {
            var element = data[index];
            
            var Timestamp = element["Timestamp"];
            var videoTitle = element["Video Title"];
            var videoSubtitle = element["Video Subtitle"];
            var projectDate = element["Project Date"];
            var client = element["Client"];
            var category = element["Category"];
            var videoThumbnail = element["Video Thumbnail"];
            var videoURL = element["Video URL"];
            var description = element["Description"];

            var divItem  = "                    <div class=\"col-md-4 col-sm-6 gallery-item\">";
                // divItem += "                        <a href=\"#vidModal{{ vidItem.video-id }}\" class=\"streaming-link\" data-toggle=\"modal\">";
                divItem += "                        <a href=\"" + videoURL + "\" class=\"gallery-link\" target=\"_blank\">";
                divItem += "                            <div class=\"gallery-hover\">";
                divItem += "                                <div class=\"gallery-hover-content\">";
                divItem += "                                    <i class=\"fa fa-plus fa-3x\"></i>";
                divItem += "                                </div>";
                divItem += "                            </div>";
                divItem += "                            <img src=\"" + videoThumbnail + "\" class=\"img-responsive img-centered\" width=\"400px\" height=\"289px\" alt=\"" + videoTitle + "\" title=\"" + videoTitle + "\">";
                divItem += "                        </a>";
                divItem += "                        <div class=\"gallery-caption\">";
                divItem += "                            <h4>" + videoTitle + "</h4>";
                divItem += "                            <p class=\"text-muted videos\">" + description + "</p>";
                divItem += "                        </div>";
                divItem += "                    </div>";

            // var divItem  = "				<div class=\"item\">";
            //     divItem += "					<img width=\"181\" height=\"181\" src=\"" + videoThumbnail + "\" alt=\"" + videoTitle + "\" title=\"" + videoTitle + "\" />";
            //     divItem += "					<a href=\"" + videoURL + "\" target=\"_blank\">";
            //     divItem += "					<div class=\"caption\" style=\"display: none;\">";
            //     divItem += "						<h2>" + videoTitle + "</h2>";
            //     // divItem += "						<h3>" + videoSubtitle + "</h3>";
            //     divItem += "						<p>" + description + "</p>";
            //     divItem += "					</div>";
            //     divItem += "					</a>";
            //     divItem += "				</div>";

            $("#whatever").append(divItem);

            // for(property in element) {
            //     console.log(property + " = " + element[property]);
            // }
            // for(property in data[index]) {
            //     console.log(property + " = " + data[index][property]);
            // }
        } // END for
        $('#whatever').hoverGrid();
    }

    $(document).ready(function(){
        // query('select * where a = "hello" and b = "world" limit 20', 'my_callback_02');
        // query('select * limit 20', 'my_callback_02');
        query('select *', 'my_callback_02');
    });

})( jQuery );