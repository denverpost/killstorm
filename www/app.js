var storm = {
    init: function ()
    {
        // Config handling. External config objects must be named storm_config
        if ( typeof window.storm_config !== 'undefined' )
        {
            this.update_config(storm_config);
        }
    },
    parent: this,
    in_dev: 0,
    config: 
    { 
        snark: 1
    },
    update_config: function (config) {
        // Take an external config object and update this config object.
        for ( var key in config )
        {
            if ( config.hasOwnProperty(key) )
            {
                this.config[key] = config[key];
            }
        }
    },
    slugify: function(str)
    {
        // Cribbed from https://github.com/andrefarzat/slugify/blob/master/slugify.js
        var from = 'àáäãâèéëêìíïîòóöôõùúüûñç·/_,:;',
        to = 'aaaaaeeeeiiiiooooouuuunc------';

        var i = 0,
            len = from.length;
        
        str = str.toLowerCase();

        for ( ; i < len; i++ )
        {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }

        return str.replace(/^\s+|\s+$/g, '') //trim
            .replace(/[^-a-zA-Z0-9\s]+/ig, '')
            .replace(/\s/gi, "-");
    },
    init: function() {},
    slug: ''
};

$(document).ready( function () { storm.init(); });

var to_ordinal = function(n)
{
    // From https://gist.github.com/jlbruno/1535691
   var s=["th","st","nd","rd"],
       v=n%100;
   return n+(s[(v-20)%10]||s[v]||s[0]);
};
