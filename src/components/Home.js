import React from "react";

function Home(){


    return (
        <>
            <div
              className="home-img"
              style={{backgroundImage: `url('https://images.unsplash.com/photo-1478744919174-118dbd24973e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1771&q=80')`
              ,height: "400px"}}
            >
        <div className="mask">
          <div className="home-flex1">
            <div className="text-mid">
              <h1 className="title-1">HOMEMADE POTIONS</h1>
              <h4 className="title-2">made fresh daily</h4>
              <a className="button" href="/potions" role="button"
              >See what's in stock</a
              >
            </div>
          </div>
        </div>
      </div>
        </>
    )
};


export default Home;