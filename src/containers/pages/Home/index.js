import React, { Component } from "react";
import { Header, Main } from "components/atoms";
import {
  Navbar,
  SectionHeader,
  SectionYamaLab,
  SectionCraiglist,
  SectionNido,
  SectionQoros,
  Footer,
} from "components/molecules";

class index extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scroll(0, 0);
    document.title = "Design Inspiration | YAMA";
  }

  render() {
    return (
      <>
        <Header>
          <Navbar />
          <SectionHeader />
        </Header>
        <Main>
          <SectionYamaLab />
          <SectionCraiglist />
          <SectionNido />
          <SectionQoros />
        </Main>
        <Footer />
      </>
    );
  }
}

export default index;
