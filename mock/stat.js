const Mock = require('mockjs')
const getStatList = require('./data/getStatList')

const Random = Mock.Random

module.exports = [
    // answer list
    {
        url: '/api/stat/:questionId',
        method: 'get',
        response() {
            return {
                errno: 0,
                data: {
                    total: 100, // pagination
                    list: getStatList()
                }
            }
        }
    },
    // Get a summary of statistics for a single component
    {
        url: '/api/stat/:questionId/:componentId',
        method: 'get',
        response() {
            return {
                errno: 0,
                data: {
                    stat: [
                        { name: 'Opt 1', count: 20 },
                        { name: 'Opt 2', count: 10 },
                        { name: 'Opt 3', count: 25 },
                    ]
                }
            }
        }
    }
]