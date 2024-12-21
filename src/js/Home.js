import profile from '../images/me.jpg';

function Home() {
  return (
    <>
      <div className="content">
        <div className="flexbox-column">
          <div
            className="section"
            style={{ boxShadow: '0px 0px 15px 0px', marginTop: '50px' }}
          >
            <img alt="me" src={profile} width="250" height="333.33"></img>
          </div>
          <div className="section-50">
            <h1>Introduction</h1>
            <h3>
              My name is Andrea and I am from Parma, Italy. I created this
              website to introduce what are my main hobbies and passions.
              <br />
              <br />
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
