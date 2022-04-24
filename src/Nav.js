
function Nav() {
    function goToCvPage() {
        window.history.pushState('Curriculum Vitae', 'Title', '/cv');
        window.location.reload();
    }
    function goToHomePage() {
        window.history.pushState('Home', 'Title', '/');
        window.location.reload();
    }
    return (
        <nav>
            <ul class="nav">
                <li><a onClick={()=>goToHomePage()}><h1>Home</h1></a></li>
                <li><a onClick={()=>goToCvPage()}><h1>Curriculum Vitae</h1></a></li>
                <li><a><h1>Contacts</h1></a></li>
            </ul>
        </nav>
    );
  }
  
  export default Nav;
  
