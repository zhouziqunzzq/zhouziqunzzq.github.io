import "../../node_modules/font-awesome/scss/font-awesome.scss";
import "../../node_modules/unsemantic/assets/sass/unsemantic-grid-responsive.scss";

import "../scss/header.scss";
import "../scss/identities.scss";

import "../scss/chem-elements.scss";
import "../scss/index.scss"

import React from 'react';
import ReactDOM from 'react-dom';

import {FormattedMessage, IntlProvider, addLocaleData} from 'react-intl';
import zh from 'react-intl/locale-data/zh'
import en from 'react-intl/locale-data/en'
import ja from 'react-intl/locale-data/ja'

addLocaleData([...zh, ...en, ...ja]);
import zh_Hans from '../locale/zh-Hans.yaml'
import zh_Hant from '../locale/zh-Hant.yaml'
import en_ from '../locale/en.yaml'
import ja_ from '../locale/ja.yaml'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleLocaleChange = this.handleLocaleChange.bind(this);
        this.state = {
            chTypes: ["简体中文", "繁體中文"],
            curChType: 0,
        };
    }
    handleLocaleChange(l, e) {
        if (l === "zh") {
            let nowChType = (this.state.curChType + 1) % 2;
            this.setState({curChType: nowChType});
        }
        this.props.onLocaleChange(l)
    }
    render() {
        return (
            <div className="main-container">
                <div className="section header grid-container">
                    <div className="picture-container grid-30">
                        <img className="picture"
                             src="https://secure.gravatar.com/avatar/9f6bc88b62a0055492fd5ae916678aa5?r=g&s=256"/>
                    </div>
                    <div className="grid-70">
                        <h1 className="greeting en">
                            Sail to the future,  <span className="no-wrap"><a className="chem-element"
                                                                   href="https://en.wikipedia.org/wiki/Radionuclide"
                                                                              target="_blank">Yo</a>soro——!</span>
                        </h1>
                        <h1 className="greeting cn">
                            <small className="prefix">
                                <FormattedMessage
                                    id='hello'
                                />
                            </small>
                            <span className="name no-wrap">
                                <FormattedMessage
                                    id='is'
                                />
                            </span>
                        </h1>
                        <div className="labels">
                            <a alt="home" className="label" href="https://blog.cool2645.com/Bittersweet/">
                                <i aria-hidden="true" className="fa fa-map-marker"></i>
                                <span className="title">
                                    曜の船
                                </span>
                                <span className="link">
                                    <FormattedMessage
                                        id='blogLink'
                                    />
                                </span>
                            </a>
                            <div alt="languages" className="label">
                                <i aria-hidden="true" className="fa fa-language"></i>
                                <span className="title">
                                    <FormattedMessage
                                        id='lang'
                                    />
                                </span>
                                <span className="content">
                                    <a href="javascript:;" className="link" onClick={(e) => this.handleLocaleChange("zh",e)}>{this.state.chTypes[this.state.curChType]}</a> / {" "}
                                    <a href="javascript:;" className="link" onClick={(e) => this.handleLocaleChange("en",e)}>English</a> / {" "}
                                    <a href="javascript:;" className="link" onClick={(e) => this.handleLocaleChange("ja",e)}>日本語</a></span>
                            </div>
                            <a alt="education" className="label" href="https://www.usc.edu/">
                                <i aria-hidden="true" className="fa fa-university"></i>
                                <span className="title">
                                    <FormattedMessage
                                        id='currentEdu'
                                    />
                                </span>
                                <span className="content">University of Southern California</span>
                            </a>
                        </div>
                        <div className="labels">
                            <div alt="browser" className="label">
                                <i aria-hidden="true" className="fa fa-chrome"></i>
                                <span className="content">Chrome</span>
                            </div>
                            <div alt="editor or ide" className="label">
                                <i aria-hidden="true" className="fa fa-keyboard-o"></i>
                                <span className="content">Jetbrains | Vim | Visual Studio | Codeblocks</span>
                            </div>
                            <div alt="spaces or tabs" className="label">
                                <i aria-hidden="true" className="fa fa-i-cursor"></i>
                                <span className="content">tabs</span>
                            </div>
                            <div alt="platforms" className="label">
                                <i aria-hidden="true" className="fa fa-windows"></i>
                                <span className="content">10</span>
                                <i aria-hidden="true" className="fa fa-linux"></i>
                                <span className="content">CentOS</span>
                                <span className="content">Debian</span>
                                <span className="content">Arch</span>
                                <i aria-hidden="true" className="fa fa-android"></i>
                                <span className="content">MIUI</span>
                                <span className="content">LineageOS</span>
                                <i aria-hidden="true" className="fa fa-apple"></i>
                                <span className="content">iPadOS</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section identity-category grid-container">
                    <h2 className="title">
                        <i aria-hidden="true" className="fa fa-chevron-right"></i>
                        <ruby>
                            渡
                            <rt>ワタ</rt>
                            辺
                            <rt>ナベ</rt>
                        </ruby>
                        &nbsp;
                        <ruby>
                            曜
                            <rt>ヨウ</rt>
                        </ruby>
                        <span className="no-wrap">
                        <small className="tag no-wrap">
                            <i aria-hidden="true" className="fa fa-tag"></i>
                            <FormattedMessage
                                id='skills'
                            />
                        </small>
                    </span>
                    </h2>
                    <ul className="identities grid-50">
                        <li className="identity">
                            <a href="#!">
                                <i aria-hidden="true" className="fa fa-keyboard-o"></i>
                                <span className="where">C | C++ | C# | Python | Java | Golang | 8086 assembly</span>
                            </a>
                        </li>
                        <li className="identity">
                            <a href="#!">
                                <i aria-hidden="true" className="fa fa-html5"></i>
                                <span className="where">HTML | CSS | JavaScript | Vue.js</span>
                            </a>
                        </li>
                        <li className="identity">
                            <a href="#!">
                                <i aria-hidden="true" className="fa fa-cubes"></i>
                                <span className="where">PHP | MySQL | Laravel</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="identities grid-50">
                        <li className="identity">
                            <a href="#!">
                                <i aria-hidden="true" className="fa fa-terminal"></i>
                                <span className="where">
                                    <FormattedMessage
                                        id='operation'
                                    />
                                </span>
                            </a>
                        </li>
                        <li className="identity">
                            <a href="#!">
                                <i aria-hidden="true" className="fa fa-circle-o"></i>
                                <span className="where">
                                    <FormattedMessage
                                        id='machineLearning'
                                    />
                                </span>
                            </a>
                        </li>
                        <li className="identity">
                            <a href="#!">
                                <i aria-hidden="true" className="fa fa-gears"></i>
                                <span className="where">
                                    <FormattedMessage
                                        id='deepLearning'
                                    />
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="section identity-category grid-container">
                    <h2 className="title">
                        <i aria-hidden="true" className="fa fa-chevron-right"></i>
                        <ruby>
                            渡
                            <rt>dù</rt>
                            辺
                            <rt>bīan</rt>
                        </ruby>
                        &nbsp;
                        <ruby>
                            曜
                            <rt>yào</rt>
                        </ruby>
                        <span className="no-wrap">
                        <small className="tag">
                            <i aria-hidden="true" className="fa fa-tag"></i>
                            <FormattedMessage
                                id='contacts'
                            />
                        </small>
                    </span>
                    </h2>
                    <ul className="identities grid-50">
                        <li className="identity">
                            <a href="https://github.com/zhouziqunzzq" target="_blank">
                                <i aria-hidden="true" className="fa fa-github"></i>
                                <span className="where">GitHub</span>
                                <span className="link">@zhouziqunzzq</span>
                            </a>
                        </li>
                        <li className="identity">
                            <a href="https://gitlab.com/zhouziqunzzq" target="_blank">
                                <i aria-hidden="true" className="fa fa-gitlab"></i>
                                <span className="where">GitLab</span>
                                <span className="link">@zhouziqunzzq</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="identities grid-50">
                        <li className="identity">
                            <a href="https://twitter.com/Bittersweet1314" target="_blank">
                                <i aria-hidden="true" className="fa fa-twitter"></i>
                                <span className="where">
                                    <FormattedMessage
                                        id='twitter'
                                    />
                                </span>
                                <span className="link">@Bittersweet1314</span>
                            </a>
                        </li>
                        <li className="identity">
                            <a href="https://weibo.com/u/1699433900" target="_blank">
                                <i aria-hidden="true" className="fa fa-weibo"></i>
                                <span className="where">
                                    <FormattedMessage
                                        id='weibo'
                                    />
                                </span>
                                <span className="link">Bittersweeeet</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="section">
                    <div className="host">
                        <a className="hosting" href="//github.io/"><i aria-hidden="true" className="fa fa-heart-o"></i>
                            <FormattedMessage
                                id='hostBy'
                                values={{
                                    host: 'GitHub.io',
                                }}
                            />
                        </a>
                        <span className="theme">
                            <FormattedMessage
                                id='themeBy'
                                values={{
                                    author1: <a className="link" href="https://github.com/rikakomoe/rikakomoe.github.io" target="_blank">rikakomoe</a>,
                                    author2: <a className="link" href="https://github.com/zhouziqunzzq/zhouziqunzzq.github.io" target="_blank">zhouziqunzzq</a>,
                                }}
                            />
                        </span>
                    </div>
                    <div className="copyright">
                        <div>
                            <FormattedMessage
                                id='cpright'
                            />{" "}
                            © 2020&nbsp;
                            <a className="link"
                               href="https://github.com/zhouziqunzzq/zhouziqunzzq.github.io"
                               target="_blank">zhouziqunzzq
                            </a>
                        </div>
                        <span className="theme">
                            <FormattedMessage
                                id='thanksTo'
                                values={{
                                    author: <a className="link" href="https://github.com/amphineko/amphineko" target="_blank">amphineko</a>,
                                }}
                            />
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

class Root extends React.Component {
    constructor() {
        super();
        this.handleLocaleChange = this.handleLocaleChange.bind(this);
        this.chooseLocale = this.chooseLocale.bind(this);
        this.state = {
            locale: navigator.language.split('-')[0],
            zhState: "zh-Hans",
            messages: this.chooseLocale(navigator.language.split('-'))
        };
    }
    chooseLocale(nl){
        switch(nl[0]){
            case 'en':
                return en_;
                break;
            case 'zh':
                if(nl.length > 1 && nl[1] !== "CN" && nl[1] !== "Hans" && nl[1] !== "cmn" && nl[1] !== "SG")
                    return zh_Hant;
                else
                    return zh_Hans;
                break;
            case 'ja':
                return ja_;
                break;
            default:
                return zh_Hans;
                break;
        }
    }
    handleLocaleChange(l) {
        switch (l) {
            case "zh":
                if (this.state.zhState === "zh-Hans")
                    this.setState({locale: 'zh', messages: zh_Hant, zhState: 'zh-Hant'});
                else
                    this.setState({locale: 'zh', messages: zh_Hans, zhState: 'zh-Hans'});
                break;
            case "en":
                this.setState({locale: 'en', messages: en_});
                break;
            case "ja":
                this.setState({locale: 'ja', messages: ja_});
                break;
        }
    }
    render() {
        return (
            <IntlProvider
                locale={this.state.locale}
                messages={this.state.messages}
            >
                <App
                    onLocaleChange={this.handleLocaleChange}
                />
            </IntlProvider>
        );
    }
}

ReactDOM.render(
    <Root />,
    document.getElementById('root')
);
