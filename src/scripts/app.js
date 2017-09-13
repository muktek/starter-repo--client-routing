import request from 'superagent'
import { Router } from 'director/build/director';

import renderHomeView from './templateViews/homeView.js'
import renderCvView from './templateViews/cvView.js'
import renderFriendsView from './templateViews/friendsView.js'

const appContainer = document.querySelector('#app-container')

function homeRouteAction(){
  appContainer.innerHTML = renderHomeView()
}

function cvRouteAction(){
  appContainer.innerHTML = renderCvView()
}

function allFriendsAction(){

  request.get('https://randomuser.me/api/?results=12&inc=nat,email,phone')
    .then(function(serverRes){
      let apiFriendsLists = serverRes.body.results
      appContainer.innerHTML = renderFriendsView('All Friends', apiFriendsLists)
    })

}

function friendsByNatAction(routeVal){
  console.log(routeVal)
  request.get(`https://randomuser.me/api/?results=12&inc=nat,email,phone&nat=${routeVal}`)
    .then(function(serverRes){
      let apiFriendsLists = serverRes.body.results
      appContainer.innerHTML = renderFriendsView('Friends from - '+routeVal , apiFriendsLists)
    })

}





var routes = {
  '/' : homeRouteAction,
  '/cv' : cvRouteAction,
  '/friends' : allFriendsAction,
  '/friends/:nationality' : friendsByNatAction,

}

let router = Router(routes)

router.init('/')
