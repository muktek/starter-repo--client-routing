
const renderHomeView = function(){
  return `
    <div class="page page--home">
      <div class="page__inner-container">
        <h1>
          Home Page
        </h1>
        <h3>
          Try these routes!
        </h3>
        <ul>
          <li><a href="#/cv">/cv</a></li>
          <li><a href="#/friends">/friends</a></li>
          <li><a href="#/friends/GB">/friends/:nat</a> (example /friends/GB)</li>
        </ul>
      </div>
    </div>

  `
}


export default renderHomeView
