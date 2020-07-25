import React from "react";
import Card from "../Cards/Cards";
import "./Project.css";
import lyr from "../images/lyricistan.JPG";
import pok from "../images/pokemon.JPG";
import covid from "../images/covid.JPG";
import kbc from "../images/kbc.JPG";
import movie from "../images/movie.JPG";
import graph from "../images/graph.JPG";
const Project = () => {
  return (
    <>
      <div className="project_title">
        <span>Projects</span>
      </div>

      <div className="container">
        <div className="row">
          <Card
            name="Lyricistan"
            info1="Website That allow you view the songs lyrics, guitar chords, watch the videos and download the song"
            info2=" This is the website that comes into my mind while i was trying
                    to learn guitar so for every song i need to go to two diffent places to find the 
                    lyrics and then the guitar chords and also go to youtube to watch the movie.
                    So i decided to combine all the features into one website. And created this website using the knowledge
                    of PHP,HTML ,CSS and javasvript.This is just the demo webiste. "
            lang={["PHP", "HTML", "CSS", "BOOTSTRAP", "JAVASCRIPT", "JQUERY"]}
            website="https://lyricistan.000webhostapp.com/index.php"
            img={lyr}
          />
          <Card
            name="Covid Website"
            info1="The Website that give you information about the corona virus."
            info2=" Due to this pandemic everyone was locked in their house
                    So I thought of creating a website where you will get all 
                    information about the covid and also a real time data from the api 
                    and get the result according to the countries. Just go and search the name of your
                    country and you will get all data.  "
            lang={["Reactjs", "HTML", "CSS", "BOOTSTRAP"]}
            website="https://coronafight.netlify.app"
            img={covid}
          />
          <Card
            name="KBC replica game"
            info1="The replica of the gameshow KAUN BANEGA CROREPATI."
            info2="From childhood watching kaun banega crorepati and giving 
                    answer and feeling proud :-) That boom i know everything.
                    So in this pandemic decide to create the replica of this
                    awesome game show using my knowledge of Reactjs."
            lang={["Reactjs", "HTML", "CSS", "BOOTSTRAP"]}
            website="https://kbckhelo.netlify.app/"
            img={kbc}
          />
          <Card
            name="Pokemon Card Game"
            info1="The Pokemon Card Game consist of 800 new Pokemons with their abilities and Power."
            info2=" Remeber the good olden days, taking the 10rs from MAA 
                    and got to the market and Cards speciallly Pokemon cards.
                    And then play with our Brother,Sister or Friends.
                    Whenver their was a draw the person who says clash first 
                    wins the game. So remembring all this decided to create 
                    this pokemon card game at childhood we have 30 to 40
                    cards but know i have 800 cards try it. You could get 
                    Pikachu."
            lang={["Reactjs", "HTML", "CSS", "BOOTSTRAP"]}
            website="https://cardpokemon.netlify.app"
            img={pok}
          />
          <Card
            name="Movie Search Application"
            info1="Movie Search Application allow you to get the information of the movies."
            info2="In this pandemic you all once surely get confused
                    which movie i should watch so you will ask from your friend
                    He will tell you some awesome movies. But you watched that
                    already. So using this application just write the name
                    you will get overall data of that particular movie
                    as well as rating. And then decide whether you want 
                    to watch or not."
            lang={["Reactjs", "HTML", "CSS", "BOOTSTRAP"]}
            website="https://moviechuno.netlify.app"
            img={movie}
          />
          <Card
            name="Chart Making Application"
            info1="The Application that allow you to make different charts."
            info2="Since data is the new money and as increase in data it become quite difficult to make a difference between them. So keeping this in mind created a Simple web Application that allow you to insert the data and give you the graphs(Line Graph,Bar Chart,Dough Nut Chart) that you want and save that graph as an image to your machine."
            lang={["Reactjs", "HTML", "CSS", "BOOTSTRAP"]}
            website="https://chartbanao.netlify.app/"
            img={graph}
          />
        </div>
      </div>
    </>
  );
};

export default Project;
