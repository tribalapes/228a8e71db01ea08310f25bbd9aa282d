$.fn.hoverGrid=function(e){var t=$.extend({itemClass:".item"},e);return this.each(function(){var e=$(this);e.addClass("hover-grid"),e.find(t.itemClass).addClass("hover-grid-item"),$(e).find(t.itemClass).hover(function(){$(this).find("div.caption").stop(!1,!0).fadeIn(200)},function(){$(this).find("div.caption").stop(!1,!0).fadeOut(200)})})};var jsonp=function(e){var t=window.document.createElement("script");t.async=!0,t.src=e,t.onerror=function(){alert("Can not access JSONP file.")};var a=!1;t.onload=t.onreadystatechange=function(){return a||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(a=!0,t.onload=t.onreadystatechange=null,!t.parentNode)?void 0:t.parentNode.removeChild(t)},window.document.getElementsByTagName("head")[0].appendChild(t)},parse=function(e){var t=e.table.cols.length;if(!t||!e.table.rows.length)return!1;var a,o,n=[],r=[];for(var l in e.table.cols)n.push(e.table.cols[l].label);for(var i in e.table.rows){if(a=e.table.rows[i].c.length,t!=a)return!1;for(var s in e.table.rows[i].c)r[i]||(r[i]={}),o=e.table.rows[i].c[s].v?e.table.rows[i].c[s].v:null,r[i][n[s]]=o}return r},query=function(e,t){var a="http://spreadsheets.google.com/a/google.com/tq?",o={key:"1ByfbMat_iwRgkYvo9bX1CCpkUuko4czMOp3grN9y3eM",tq:encodeURIComponent(e),tqx:"responseHandler:"+t},n=[];for(var r in o)n.push(r+"="+o[r]);return a+=n.join("&"),jsonp(a)},my_callback_02=function(e){console.log("Query"),e=parse(e),console.log(e),console.log(e.length),console.log(Object.keys(e[0]));for(var t=0;t<e.length;t++){var a=e[t],o=(a.Timestamp,a["Video Title"]),n=(a["Video Subtitle"],a["Project Date"],a.Client,a.Category,a["Video Thumbnail"]),r=a["Video URL"],l=a.Description,i='                    <div class="col-md-4 col-sm-6 gallery-item">';i+='                        <a href="'+r+'" class="gallery-link" target="_blank">',i+='                            <div class="gallery-hover">',i+='                                <div class="gallery-hover-content">',i+='                                    <i class="fa fa-plus fa-3x"></i>',i+="                                </div>",i+="                            </div>",i+='                            <img src="'+n+'" class="img-responsive img-centered" width="400px" height="289px" alt="'+o+'" title="'+o+'">',i+="                        </a>",i+='                        <div class="gallery-caption">',i+="                            <h4>"+o+"</h4>",i+='                            <p class="text-muted videos">'+l+"</p>",i+="                        </div>",i+="                    </div>",$("#whatever").append(i)}$("#whatever").hoverGrid()};$(document).ready(function(){query("select *","my_callback_02")});