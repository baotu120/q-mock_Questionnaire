const Mock = require('mockjs')
const Random = Mock.Random
const getQuestionList = require('./data/getQuestionList')
const getComponentList = require('./data/getComponentList')

module.exports = [
    {
        url: '/api/question/:id',
        method: 'get',
        response() {
            return {
                errno: 0,
                data: {
                    id: Random.id(),
                    title: Random.title(),
                    desc: 'description',
                    js: '',
                    css: '',
                    isDeleted: false,
                    isPublished: true,
                    componentList: getComponentList()
                }
            }
        }
    },
    {
        url: '/api/question',
        method: 'post',
        response() {
            return {
                errno: 0,
                data: {
                    id: Random.id(),
                }
            }
        }
    },
    {
        // get list
        url: '/api/question',
        method: 'get',
        response(ctx) {
            const { url = '', query = {} } = ctx
            const isDeleted = url.indexOf('isDeleted=true') >= 0
            const isStar = url.indexOf('isStar=true') >= 0
            const pageSize = parseInt(query.pageSize) || 10

            return {
                errno: 0,
                data: {
                    list: getQuestionList({ len: pageSize, isDeleted, isStar }), // current page
                    total: 100 //total
                }
            }
        }
    },
    {
        // update
        url: '/api/question/:id',
        method: 'patch',
        response() {
            return {
                errno: 0
            }
        }
    },
    {
        // duplicate
        url: '/api/question/duplicate/:id',
        method: 'post',
        response() {
            return {
                errno: 0,
                data: {
                    id: Random.id()
                }
            }
        }
    },
    {
        // truly delete
        url: '/api/question',
        method: 'delete',
        response() {
            return {
                errno: 0
            }
        }
    }

]