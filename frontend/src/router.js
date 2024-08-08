
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);



import DriveFileManager from "./components/listers/DriveFileCards"
import DriveFileDetail from "./components/listers/DriveFileDetail"

import VideoProcessingVideoManager from "./components/listers/VideoProcessingVideoCards"
import VideoProcessingVideoDetail from "./components/listers/VideoProcessingVideoDetail"

import IndexerIndexManager from "./components/listers/IndexerIndexCards"
import IndexerIndexDetail from "./components/listers/IndexerIndexDetail"



export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [

            {
                path: '/drives/files',
                name: 'DriveFileManager',
                component: DriveFileManager
            },
            {
                path: '/drives/files/:id',
                name: 'DriveFileDetail',
                component: DriveFileDetail
            },

            {
                path: '/videoProcessings/videos',
                name: 'VideoProcessingVideoManager',
                component: VideoProcessingVideoManager
            },
            {
                path: '/videoProcessings/videos/:id',
                name: 'VideoProcessingVideoDetail',
                component: VideoProcessingVideoDetail
            },

            {
                path: '/indexers/indices',
                name: 'IndexerIndexManager',
                component: IndexerIndexManager
            },
            {
                path: '/indexers/indices/:id',
                name: 'IndexerIndexDetail',
                component: IndexerIndexDetail
            },




    ]
})
