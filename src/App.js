import React from "react";
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import Home from "./Components/Pages/Home";
import OurTeam from "./Components/Pages/EventList";
import EventGrid from "./Components/Pages/EventGrid";
import EventDetail from "./Components/Pages/EventDetail";
import CausesList from "./Components/Pages/CausesList";
import CausesGrid from "./Components/Pages/CausesGrid";
import CausesDetail from "./Components/Pages/CausesDetail";
import BlogLarge from "./Components/Pages/BlogLarge";
import BlogMedium from "./Components/Pages/BlogMedium";
import BlogDetail from "./Components/Pages/BlogDetail";
import TeamGrid from "./Components/Pages/TeamGrid";
import TeamDetail from "./Components/Pages/TeamDetail";
import TeamClassic from "./Components/Pages/TeamClassic";
import About from "./Components/Pages/About";
import PrayerList from "./Components/Pages/PrayerList";
import PrayerGrid from "./Components/Pages/PrayerGrid";
import PrayerDetail from "./Components/Pages/PrayerDetail";
import notfoundPgae from "./Components/Pages/404page";
import SearchResult from "./Components/Pages/SearchResult";
import Contact from "./Components/Pages/Contact";
import Ourgallery from "./Components/Pages/Ourgallery";
import RationDistribution from "./Components/Pages/RationDistribution";
import WidoPension from "./Components/Pages/WidoPension";
import OurPartners from "./Components/Pages/OurParters";
function App() {
  return (
    <>
      <Router>

        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/our-team" component={OurTeam} />
          <Route exact path="/founders" component={EventGrid} />
          <Route exact path="/EventDetail" component={EventDetail} />
          <Route exact path="/coaching" component={CausesList} />
          <Route exact path="/counselling" component={CausesGrid} />
          <Route exact path="/scholarship" component={CausesDetail} />
          <Route exact path="/BlogLarge" component={BlogLarge} />
          <Route exact path="/Blog_medium" component={BlogMedium} />
          <Route exact path="/Blog_detail" component={BlogDetail} />
          <Route exact path="/funder" component={TeamGrid} />
          <Route exact path="/partner" component={OurPartners} />
          <Route exact path="/well-wisher" component={TeamClassic} />
          <Route exact path="/about" component={About} />
          <Route exact path="/prayer_list" component={PrayerList} />
          <Route exact path="/prayer_grid" component={PrayerGrid} />
          <Route exact path="/Prayer_detail" component={PrayerDetail} />
          <Route exact path="/notfoundPgae" component={notfoundPgae} />
          <Route exact path="/SearchResult" component={SearchResult} />          
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/gallery" component={Ourgallery} />
          <Route exact path="/ration_distribution" component={RationDistribution} />
          <Route exact path="/widow_pension" component={WidoPension} />
        </Switch>

        <Footer />
      </Router>
    </>

  );
}

export default App;
