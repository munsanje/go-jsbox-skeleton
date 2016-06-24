var _ = require('lodash');
var vumigo = require('vumigo_v02');
var JsonApi = vumigo.http.api.JsonApi;

// TODO need to generated session_id whenever new user logs on
go.utils = {
  //  return {action: 'action', wit_msg: 'wit_msg'}
    converse: function(im, token, content) {
        var http = new JsonApi(im, {
            headers: {
                'Authorization': ['Bearer ' + token],
                'Content-Type': ['application/json'],
                'Accept': ['application/json']
            }
        });
        return http.get('https://api.wit.ai/converse?', {
            params: {
                v: '20160624' // write method that extracts version
                q: content
            }
        });
    }
}
