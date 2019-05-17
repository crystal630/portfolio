import React from 'react';

import './App.css';
import me from './me.jpeg'
import kkk from './kkk.jpg'
import { Component } from 'react';
import { Layout, } from 'antd';
import { Row, Col } from 'antd';
import { Card,  } from 'antd';



 
const tabList = [
  {
    key: 'tab1',
    tab: 'Group discussion',
  },
  {
    key: 'tab2',
    tab: 'Search online',
  },
  {
    key: 'tab3',
    tab: 'Technical assistance',
  },
];

const contentList = {
  tab1: <p>Brainstorm--get an idea on the improvement of the platform which provides labor service
    <br />Share our information with each other and put forward with new suggestions on further improvement of our application
  </p>,
  tab2: <p>{'The model of time and track: DiDi & Eleme'}
    <br />
    {'Mobile payment: WeChat payment & Alipay'}
    <br/>
    {'Store data: Tencent Cloud'}</p>,
    
  tab3: <p>I and Thea are in charge of coding our web application. For the coding part I and my partner Thea asked professors and learning assistants for help and got a really useful tool called "Ant design". It not only improved the appearance of our application but also added some essential functions and components like maps and calender.</p>


};

const tabListNoTitle = [
  {
    key: 'article',
    tab: 'paper prototype',
  },
  {
    key: 'app',
    tab: 'digital prototype',
  },
  {
    key: 'project',
    tab: 'web application',
  },
];

const contentListNoTitle = {
  article: <p>https://applab-20.slack.com/archives/CGZKYRS3B/p1555843510021900</p>,
  app: <p>https://applab-20.slack.com/messages/CGZKYRS3B/details/</p>,
  project: <p>https://vast-beach-81174.herokuapp.com/</p>,
};
const { Header, Content, Footer, } = Layout;








class App extends Component {

  state = {
    key: 'tab1',
    noTitleKey: 'app',
    size: 'large',
    
  };

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };

  constructor(props) {
    super(props);

    this.state = {
     
    }

  }





  render() {
    return (
      <div className="App">

        <Layout>
          <Header style={{ background: '	#a17373', padding: 15, fontSize: "30px", textAlign: 'center', fontFamily: 'Trebuchet MS' }}>Crystal's Portfolio</Header>
          <Layout>
            <h1 style={{ background: '	#fff0da', padding: 10, margin: 0, textAlign: "center", fontSize: "20px", fontFamily: 'Trebuchet MS' }}>ABOUT ME!</h1>
            <Content>
              <Row>

                <Col span={12} className="me">
                  <img src={me} alt="me" width="300" className="img"></img>
                </Col>
                <Col span={12} className="text">
                  <p> Hello my name is Crystal and I’m a freshman in NYU Shanghai whose major is Interactive Media Art. I’m interested in how to apply what I have learned about coding and designing to the development of commerce. At this stage I have some basic knowledge about designing or making a website page and also building a website application by React and Javascript. These skills that I  learned on the class let it possible to make my business model or prototype into reality.
                </p>
                </Col>
              </Row>
              
<Row>
                  <Col span={12} className="pro">
                    <Header style={{ background: '#eeb9a2', padding: 5, fontSize: "28px", textAlign: 'center', }}>Our Group Project</Header>
                    <p>Our project is a website application called Fixer. The main idea is to build better connection between workers and users. We design 2 separate ports for user and workers. Workers can find more opportunities to do maintenance and then earn more money. Users can have more convenient maintainance service and they can know the exact cost before they receive the service. This application guarantees the transparency of worker's credibility and the price. </p>
                    <img src={kkk} alt="kkk" ></img>
                  </Col>
                
                <Col span={12} className='pro2'>
                  <Header style={{ background: '		#e18a7a', padding: 5, fontSize: "28px", textAlign: 'center', }}>Future work</Header>
                  <p>Now our project is still a website application that is not widely used by most people today. Thus one of the future work is to transform it into mobile application or even mini programme on WeChat.
                    <br />Also, it is important to show our unique characteristics to win the competition with other similar applications such as "Wanneng Xiaoge". <br />To achieve this goal, we still need to do more research on those applications to find the point where we can improve and learn from. And we will also collect the information of market and users to get inspiration. </p>
                </Col>
                </Row>
              <div>
                
                  <Header style={{ background: '#e18a7a', padding: 5, fontSize: "28px", textAlign: 'center', }}>Research</Header>
                  <div>
                    <Card
                      style={{ width: '100%' }}
                      title="Our methods of research"
                      extra={<a href="#fff">More</a>}
                      tabList={tabList}
                      activeTabKey={this.state.key}
                      onTabChange={key => {
                        this.onTabChange(key, 'key');
                      }}
                    >
                      {contentList[this.state.key]}
                    </Card>
                    <Header style={{ background: '#eeb9a2', padding: 5, fontSize: "28px", textAlign: 'center', }}>Prototype</Header>
                    <Card
                      style={{ width: '100%' }}
                      tabList={tabListNoTitle}
                      activeTabKey={this.state.noTitleKey}
                      onTabChange={key => {
                        this.onTabChange(key, 'noTitleKey');
                      }}
                    >
                      {contentListNoTitle[this.state.noTitleKey]}
                    </Card>
                  </div>



              </div>,
            </Content>
          </Layout>
          <Footer style={{ textAlign: 'center', background: '#fff4d2', fontSize:20 }}>Email me: yl5804@nyu.edu</Footer>
        </Layout>



      </div>




    );
  }
}

export default App;



