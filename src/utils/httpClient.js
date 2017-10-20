//http://visionmedia.github.io/superagent/
import request from 'superagent'
import router from 'router/index'
import { Loading } from 'element-ui';
// import jsonp from 'superagent-jsonp';

const BASE_URl = process.env.BASE_URL;
var loading;

function getUrl(path) {
    if (path.startsWith('http')) {
        return path;
    }
    return `${BASE_URl}${path}`;
}

const errorHandler = (err) => {
    if (err.response && err.response.status == 401) {
        router.push({ name: 'login' })
        return false;
    }
    var str = err.response.status
    str += ' - '
    str += err.response.statusText
    str += '<br/>请求路径：<br/>'
    str += err.response.error.url
    $.alert(str, '请求错误');
}

const HttpClient = {
    get: (path, query) => new Promise((resolve, reject) => {
        if (!window.localStorage.getItem('access_token') && JSON.parse(err.response.text).msg == 'unauthorized') {
            router.push({ name: 'login' });
            return false;
        }
        loading = Loading.service({ fullscreen: true });
        var req = request
            .get(getUrl(path))
            .query(query)
            .set('Authorization', window.localStorage.getItem('access_token'))
            .end((err, res) => {
                loading.close();
                if (err) {
                    errorHandler(err)
                    reject(err);
                } else {
                    resolve(res.body);
                }
            });
    }),

    post: (path, formdata, query) => new Promise((resolve, reject) => {
        if (path.indexOf('login/index') < 0 && !window.localStorage.getItem('access_token')) {
            router.push({ name: 'login' });
            return false;
        }
        loading = Loading.service({ fullscreen: true });
        request
            .post(getUrl(path))
            .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
            .set('Authorization', window.localStorage.getItem('access_token'))
            .query(query)
            .send(formdata)
            .end((err, res) => {
                loading.close();
                if (err) {
                    errorHandler(err)
                    reject(err);
                } else {
                    if (path.indexOf('login/index') > -1) {
                        window.localStorage.setItem('access_token', res.body.token_type + ' ' + res.body.access_token)
                    }
                    resolve(res.body);
                }
            });
    }),

    put: (path, query, payload) => new Promise((resolve, reject) => {
        request
            .put(getUrl(path))
            .query(query)
            .send(payload)
            .end((err, res) => {
                if (err) {
                    errorHandler(err)
                    reject(err);
                } else {
                    resolve(res.body);
                }
            });
    }),

    delete: (path, query) => new Promise((resolve, reject) => {
        request
            .del(getUrl(path))
            .query(query)
            .end((err, res) => {
                if (err) {
                    errorHandler(err)
                    reject(err);
                } else {
                    resolve(res);
                }
            });
    })
};

export default httpClient;