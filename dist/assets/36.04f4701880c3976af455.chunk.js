webpackJsonp([36],{2747:function(e,t,a){"use strict";(function(e){function s(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":l(t))&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":l(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},o=function(){function e(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,a,s){return a&&e(t.prototype,a),s&&e(t,s),t}}(),_=a(0),d=s(_),u=a(29),m=s(u),E=a(247),f=s(E),h=a(83),R=a(750),p=s(R),C=a(246),v=s(C),O=a(374),T=s(O),b=a(245);a(741);var A=a(53),g=s(A),x=a(55),L=s(x),D=a(7),P=s(D),j=a(3249),H=s(j),N=a(796),q=s(N),J=a(3251),y=s(J),U=a(795),S=s(U),w=a(3254),M=s(w),k=a(742),I=s(k),z=a(103),K=s(z),V=function(t){function a(){n(this,a);var e=r(this,(a.__proto__||Object.getPrototypeOf(a)).call(this));return e.filterContact=function(e){return""===e?S.default.filter(function(e){return!e.recent}):S.default.filter(function(t){return!t.recent&&t.name.toLowerCase().indexOf(e.toLowerCase())>-1})},e.filterUsers=function(e){return""===e?S.default.filter(function(e){return e.recent}):S.default.filter(function(t){return t.recent&&t.name.toLowerCase().indexOf(e.toLowerCase())>-1})},e.Communication=function(){var t=(e.props,e.state),a=t.message,s=t.selectedUser,n=t.conversation,r=n.conversationData;return d.default.createElement("div",{className:"chat-main"},d.default.createElement("div",{className:"chat-main-header"},d.default.createElement(g.default,{className:"d-block d-xl-none chat-btn","aria-label":"Menu",onClick:e.onToggleDrawer.bind(e)},d.default.createElement("i",{className:"zmdi zmdi-comment-text"})),d.default.createElement("div",{className:"chat-main-header-info"},d.default.createElement("div",{className:"chat-avatar mr-2"},d.default.createElement("div",{className:"chat-avatar-mode"},d.default.createElement("img",{src:s.thumb,className:"rounded-circle size-60",alt:""}),d.default.createElement("span",{className:"chat-mode "+s.status}))),d.default.createElement("div",{className:"chat-contact-name"},s.name))),d.default.createElement("div",{className:"chat-list-scroll"},d.default.createElement(y.default,{conversationData:r,selectedUser:s})),d.default.createElement("div",{className:"chat-main-footer"},d.default.createElement("div",{className:"d-flex flex-row align-items-center",style:{maxHeight:51}},d.default.createElement("div",{className:"col"},d.default.createElement("div",{className:"form-group"},d.default.createElement("textarea",{id:"required",className:"border-0 form-control chat-textarea",onKeyUp:e._handleKeyPress.bind(e),onChange:e.updateMessageValue.bind(e),value:a,placeholder:"Type and hit enter to send message"}))),d.default.createElement("div",{className:"chat-sent"},d.default.createElement(g.default,{onClick:e.submitComment.bind(e),"aria-label":"Send message"},d.default.createElement("i",{className:"zmdi  zmdi-mail-send"}))))))},e.AppUsersInfo=function(){return d.default.createElement("div",{className:"chat-sidenav-main"},d.default.createElement("div",{className:"bg-grey lighten-5 chat-sidenav-header"},d.default.createElement("div",{className:"chat-user-hd mb-0"},d.default.createElement(g.default,{className:"back-to-chats-button size-30","aria-label":"back button",onClick:function(){e.setState({userState:1})}},d.default.createElement("i",{className:"zmdi zmdi-arrow-back"}))),d.default.createElement("div",{className:"chat-user chat-user-center"},d.default.createElement("div",{className:"chat-avatar mx-auto"},d.default.createElement("img",{src:"http://via.placeholder.com/150x150",className:"avatar avatar-shadow rounded-circle size-60 huge",alt:"John Doe"})),d.default.createElement("div",{className:"user-name h4 my-2"},"Robert Johnson"))),d.default.createElement("div",{className:"chat-sidenav-content"},d.default.createElement("div",{className:"chat-sidenav-scroll card p-4"},d.default.createElement("form",null,d.default.createElement("div",{className:"form-group mt-4"},d.default.createElement("label",null,"Mood"),d.default.createElement(L.default,{fullWidth:!0,id:"exampleTextarea",multiline:!0,rows:3,onKeyUp:e._handleKeyPress.bind(e),onChange:e.updateMessageValue.bind(e),defaultValue:"it's a status....not your diary...",placeholder:"Status",margin:"none"}))))))},e.ChatUsers=function(){return d.default.createElement("div",{className:"chat-sidenav-main"},d.default.createElement("div",{className:"chat-sidenav-header"},d.default.createElement("div",{className:"chat-user-hd"},d.default.createElement("div",{className:"chat-avatar mr-3",onClick:function(){e.setState({userState:2})}},d.default.createElement("div",{className:"chat-avatar-mode"},d.default.createElement("img",{id:"user-avatar-button",src:"http://via.placeholder.com/150x150",className:"rounded-circle size-50",alt:""}),d.default.createElement("span",{className:"chat-mode online"}))),d.default.createElement("div",{className:"module-user-info d-flex flex-column justify-content-center"},d.default.createElement("div",{className:"module-title"},d.default.createElement("h5",{className:"mb-0"},"Robert Johnson")),d.default.createElement("div",{className:"module-user-detail"},d.default.createElement("a",{href:"javascript:void(0)",className:"text-grey"},"robert@example.com")))),d.default.createElement("div",{className:"search-wrapper"},d.default.createElement(I.default,{placeholder:"Search or start new chat",onChange:e.updateSearchChatUser.bind(e),value:e.state.searchChatUser}))),d.default.createElement("div",{className:"chat-sidenav-content"},d.default.createElement(v.default,{position:"static",className:"no-shadow chat-tabs-header"},d.default.createElement(T.default,{className:"chat-tabs",value:e.state.selectedTabIndex,onChange:e.handleChange,indicatorColor:"primary",textColor:"primary",fullWidth:!0},d.default.createElement(O.Tab,{label:d.default.createElement(K.default,{id:"chat.chatUser"})}),d.default.createElement(O.Tab,{label:d.default.createElement(K.default,{id:"chat.contacts"})}))),d.default.createElement(p.default,{index:e.state.selectedTabIndex,onChangeIndex:e.handleChangeIndex},d.default.createElement("div",{className:"chat-sidenav-scroll"},0===e.state.chatUsers.length?d.default.createElement("div",{className:"p-5"},e.state.userNotFound):d.default.createElement(H.default,{chatUsers:e.state.chatUsers,selectedSectionId:e.state.selectedSectionId,onSelectUser:e.onSelectUser.bind(e)})),d.default.createElement("div",{className:"chat-sidenav-scroll"},0===e.state.contactList.length?d.default.createElement("div",{className:"p-5"},e.state.userNotFound):d.default.createElement(M.default,{contactList:e.state.contactList,selectedSectionId:e.state.selectedSectionId,onSelectUser:e.onSelectUser.bind(e)})))))},e._handleKeyPress=function(t){"Enter"===t.key&&e.submitComment()},e.handleChange=function(t,a){e.setState({selectedTabIndex:a})},e.handleChangeIndex=function(t){e.setState({selectedTabIndex:t})},e.onSelectUser=function(t){e.setState({loader:!0,selectedSectionId:t.id,drawerState:e.props.drawerState,selectedUser:t,conversation:e.state.conversationList.find(function(e){return e.id===t.id})}),setTimeout(function(){e.setState({loader:!1})},1500)},e.showCommunication=function(){return d.default.createElement("div",{className:"chat-box"},d.default.createElement("div",{className:"chat-box-main"},null===e.state.selectedUser?d.default.createElement("div",{className:"loader-view"},d.default.createElement("i",{className:"zmdi zmdi-comment s-128 text-muted"}),d.default.createElement("h1",{className:"text-muted"},d.default.createElement(K.default,{id:"chat.selectUserChat"})),d.default.createElement(m.default,{className:"d-block d-xl-none",color:"primary",onClick:e.onToggleDrawer.bind(e)},d.default.createElement(K.default,{id:"chat.selectContactChat"}))):e.Communication()))},e.state={loader:!1,userNotFound:"No user found",drawerState:!1,selectedSectionId:"",selectedTabIndex:0,userState:1,searchChatUser:"",contactList:S.default.filter(function(e){return!e.recent}),selectedUser:null,message:"",chatUsers:S.default.filter(function(e){return e.recent}),conversationList:q.default,conversation:null},e}return c(a,t),o(a,[{key:"componentDidUpdate",value:function(){this.manageHeight()}},{key:"componentDidMount",value:function(){this.manageHeight()}},{key:"manageHeight",value:function(){this.props.width>=1200?(e(".loader-view").slimscroll({height:"calc(100vh - 290px)"}),e(".chat-list-scroll").slimscroll({height:"calc(100vh - 300px)"}),1===this.state.userState?e(".chat-sidenav-scroll").slimscroll({height:"calc(100vh - 328px)"}):e(".chat-sidenav-scroll").slimscroll({height:"calc(100vh - 322px)"})):(e(".loader-view").slimscroll({height:"calc(100vh - 122px)"}),e(".chat-list-scroll").slimscroll({height:"calc(100vh - 255px)"}),1===this.state.userState?e(".chat-sidenav-scroll").slimscroll({height:"calc(100vh - 1px)"}):e(".chat-sidenav-scroll").slimscroll({height:"calc(100vh - 115px)"}))}},{key:"submitComment",value:function(){var e=this;if(""!==this.state.message){var t=this.state.conversation.conversationData.concat({type:"sent",message:this.state.message,sentAt:(0,P.default)(new Date).format("hh:mm:ss A")});this.setState({conversation:i({},this.state.conversation,{conversationData:t}),message:"",conversationList:this.state.conversationList.map(function(a){return a.id===e.state.conversation.id?i({},e.state.conversation,{conversationData:t}):a})})}}},{key:"updateMessageValue",value:function(e){this.setState({message:e.target.value})}},{key:"updateSearchChatUser",value:function(e){this.setState({searchChatUser:e.target.value,contactList:this.filterContact(e.target.value),chatUsers:this.filterUsers(e.target.value)})}},{key:"onToggleDrawer",value:function(){this.setState({drawerState:!this.state.drawerState})}},{key:"render",value:function(){var e=this.state,t=e.loader,a=e.userState,s=e.drawerState;e.selectedUser;return console.log("userState: ",a),d.default.createElement("div",{className:"app-wrapper app-wrapper-module"},d.default.createElement("div",{className:"app-module chat-module animated slideInUpTiny animation-duration-3"},d.default.createElement("div",{className:"chat-module-box"},d.default.createElement("div",{className:"d-block d-xl-none"},d.default.createElement(f.default,{className:"app-module-sidenav",open:s,onClose:this.onToggleDrawer.bind(this)},this.ChatUsers()," ")),d.default.createElement("div",{className:"chat-sidenav d-none d-xl-flex"},this.ChatUsers()," "),t?d.default.createElement("div",{className:"w-100 d-flex justify-content-center align-items-center chat-loader-view"},d.default.createElement(b.CircularProgress,null)):this.showCommunication())))}}]),a}(_.Component),B=function(e){return{width:e.settings.width}},F=(0,h.connect)(B)(V);t.default=F;var W=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(V,"ChatPanel","E:/Raqami/Jumbo/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(B,"mapStateToProps","E:/Raqami/Jumbo/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(F,"default","E:/Raqami/Jumbo/src/app/routes/chatPanel/basic/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"_extends","E:/Raqami/Jumbo/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(o,"_createClass","E:/Raqami/Jumbo/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(d,"_react2","E:/Raqami/Jumbo/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(m,"_Button2","E:/Raqami/Jumbo/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(f,"_Drawer2","E:/Raqami/Jumbo/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(p,"_reactSwipeableViews2","E:/Raqami/Jumbo/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(v,"_AppBar2","E:/Raqami/Jumbo/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(T,"_Tabs2","E:/Raqami/Jumbo/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(g,"_IconButton2","E:/Raqami/Jumbo/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(L,"_Input2","E:/Raqami/Jumbo/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(P,"_moment2","E:/Raqami/Jumbo/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(H,"_ChatUserList2","E:/Raqami/Jumbo/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(q,"_conversationList2","E:/Raqami/Jumbo/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(y,"_index2","E:/Raqami/Jumbo/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(S,"_chatUsers2","E:/Raqami/Jumbo/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(M,"_index4","E:/Raqami/Jumbo/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(I,"_index6","E:/Raqami/Jumbo/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(K,"_IntlMessages2","E:/Raqami/Jumbo/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(s,"_interopRequireDefault","E:/Raqami/Jumbo/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(n,"_classCallCheck","E:/Raqami/Jumbo/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(r,"_possibleConstructorReturn","E:/Raqami/Jumbo/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(c,"_inherits","E:/Raqami/Jumbo/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(V,"ChatPanel","E:/Raqami/Jumbo/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(B,"mapStateToProps","E:/Raqami/Jumbo/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(F,"_default","E:/Raqami/Jumbo/src/app/routes/chatPanel/basic/index.js"),__REACT_HOT_LOADER__.register(W,"_temp","E:/Raqami/Jumbo/src/app/routes/chatPanel/basic/index.js"))}()}).call(t,a(95))},3249:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=s(n),c=a(3250),l=s(c),i=function(e){var t=e.chatUsers,a=e.selectedSectionId,s=e.onSelectUser;return r.default.createElement("div",{className:"chat-user"},t.map(function(e,t){return r.default.createElement(l.default,{key:t,chat:e,selectedSectionId:a,onSelectUser:s})}))},o=i;t.default=o;var _=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"ChatUserList","E:/Raqami/Jumbo/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(o,"default","E:/Raqami/Jumbo/src/components/chatPanel/ChatUserList/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","E:/Raqami/Jumbo/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(l,"_index2","E:/Raqami/Jumbo/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(s,"_interopRequireDefault","E:/Raqami/Jumbo/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(i,"ChatUserList","E:/Raqami/Jumbo/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(o,"_default","E:/Raqami/Jumbo/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(_,"_temp","E:/Raqami/Jumbo/src/components/chatPanel/ChatUserList/index.js"))}()},3250:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=s(n),c=function(e){var t=e.chat,a=e.selectedSectionId,s=e.onSelectUser;return r.default.createElement("div",{className:"chat-user-item "+(a===t.id?"active":""),onClick:function(){s(t)}},r.default.createElement("div",{className:"chat-user-row row"},r.default.createElement("div",{className:"chat-avatar col-xl-2 col-3"},r.default.createElement("div",{className:"chat-avatar-mode"},r.default.createElement("img",{src:t.thumb,className:"rounded-circle size-40",alt:t.name}),r.default.createElement("span",{className:"chat-mode small "+t.status}))),r.default.createElement("div",{className:"chat-info col-xl-8 col-6"},r.default.createElement("span",{className:"name h4"},t.name),r.default.createElement("div",{className:"chat-info-des"},t.lastMessage.substring(0,25)+"..."),r.default.createElement("div",{className:"last-message-time"},t.lastMessageTime)),r.default.createElement("div",{className:"chat-date col-xl-2 col-3"},r.default.createElement("div",{className:"bg-primary rounded-circle badge text-white"},t.unreadMessage))))},l=c;t.default=l;var i=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"UserCell","E:/Raqami/Jumbo/src/components/chatPanel/ChatUserList/UserCell/index.js"),__REACT_HOT_LOADER__.register(l,"default","E:/Raqami/Jumbo/src/components/chatPanel/ChatUserList/UserCell/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","E:/Raqami/Jumbo/src/components/chatPanel/ChatUserList/UserCell/index.js"),__REACT_HOT_LOADER__.register(s,"_interopRequireDefault","E:/Raqami/Jumbo/src/components/chatPanel/ChatUserList/UserCell/index.js"),__REACT_HOT_LOADER__.register(c,"UserCell","E:/Raqami/Jumbo/src/components/chatPanel/ChatUserList/UserCell/index.js"),__REACT_HOT_LOADER__.register(l,"_default","E:/Raqami/Jumbo/src/components/chatPanel/ChatUserList/UserCell/index.js"),__REACT_HOT_LOADER__.register(i,"_temp","E:/Raqami/Jumbo/src/components/chatPanel/ChatUserList/UserCell/index.js"))}()},3251:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=s(n),c=a(3252),l=s(c),i=a(3253),o=s(i),_=function(e){var t=e.conversationData,a=e.selectedUser;return r.default.createElement("div",{className:"chat-main-content"},t.map(function(e,t){return"sent"===e.type?r.default.createElement(o.default,{key:t,conversation:e}):r.default.createElement(l.default,{key:t,conversation:e,user:a})}))},d=_;t.default=d;var u=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(_,"Conversation","E:/Raqami/Jumbo/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(d,"default","E:/Raqami/Jumbo/src/components/chatPanel/Conversation/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","E:/Raqami/Jumbo/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(l,"_index2","E:/Raqami/Jumbo/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(o,"_index4","E:/Raqami/Jumbo/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(s,"_interopRequireDefault","E:/Raqami/Jumbo/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(_,"Conversation","E:/Raqami/Jumbo/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(d,"_default","E:/Raqami/Jumbo/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(u,"_temp","E:/Raqami/Jumbo/src/components/chatPanel/Conversation/index.js"))}()},3252:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=s(n),c=function(e){var t=e.conversation,a=e.user;return r.default.createElement("div",{className:"d-flex flex-nowrap chat-item"},r.default.createElement("img",{className:"rounded-circle avatar size-40 align-self-end",src:a.thumb,alt:""}),r.default.createElement("div",{className:"bubble"},r.default.createElement("div",{className:"message"},t.message),r.default.createElement("div",{className:"time text-muted text-right mt-2"},t.sentAt)))},l=c;t.default=l;var i=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"ReceivedMessageCell","E:/Raqami/Jumbo/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"),__REACT_HOT_LOADER__.register(l,"default","E:/Raqami/Jumbo/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","E:/Raqami/Jumbo/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"),__REACT_HOT_LOADER__.register(s,"_interopRequireDefault","E:/Raqami/Jumbo/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"),__REACT_HOT_LOADER__.register(c,"ReceivedMessageCell","E:/Raqami/Jumbo/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"),__REACT_HOT_LOADER__.register(l,"_default","E:/Raqami/Jumbo/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"),__REACT_HOT_LOADER__.register(i,"_temp","E:/Raqami/Jumbo/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"))}()},3253:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=s(n),c=function(e){var t=e.conversation;return r.default.createElement("div",{className:"d-flex flex-nowrap chat-item flex-row-reverse"},r.default.createElement("img",{className:"rounded-circle avatar size-40 align-self-end",src:"http://via.placeholder.com/150x150",alt:t.name}),r.default.createElement("div",{className:"bubble jambo-card"},r.default.createElement("div",{className:"message"},t.message),r.default.createElement("div",{className:"time text-muted text-right mt-2"},t.sentAt)))},l=c;t.default=l;var i=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"SentMessageCell","E:/Raqami/Jumbo/src/components/chatPanel/Conversation/SentMessageCell/index.js"),__REACT_HOT_LOADER__.register(l,"default","E:/Raqami/Jumbo/src/components/chatPanel/Conversation/SentMessageCell/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","E:/Raqami/Jumbo/src/components/chatPanel/Conversation/SentMessageCell/index.js"),__REACT_HOT_LOADER__.register(s,"_interopRequireDefault","E:/Raqami/Jumbo/src/components/chatPanel/Conversation/SentMessageCell/index.js"),__REACT_HOT_LOADER__.register(c,"SentMessageCell","E:/Raqami/Jumbo/src/components/chatPanel/Conversation/SentMessageCell/index.js"),__REACT_HOT_LOADER__.register(l,"_default","E:/Raqami/Jumbo/src/components/chatPanel/Conversation/SentMessageCell/index.js"),__REACT_HOT_LOADER__.register(i,"_temp","E:/Raqami/Jumbo/src/components/chatPanel/Conversation/SentMessageCell/index.js"))}()},3254:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=s(n),c=a(3255),l=s(c),i=function(e){var t=e.onSelectUser,a=e.selectedSectionId,s=e.contactList;return r.default.createElement("div",{className:"chat-user"},s.map(function(e,s){return r.default.createElement(l.default,{key:s,user:e,selectedSectionId:a,onSelectUser:t})}))},o=i;t.default=o;var _=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"ContactList","E:/Raqami/Jumbo/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(o,"default","E:/Raqami/Jumbo/src/components/chatPanel/ContactList/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","E:/Raqami/Jumbo/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(l,"_index2","E:/Raqami/Jumbo/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(s,"_interopRequireDefault","E:/Raqami/Jumbo/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(i,"ContactList","E:/Raqami/Jumbo/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(o,"_default","E:/Raqami/Jumbo/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(_,"_temp","E:/Raqami/Jumbo/src/components/chatPanel/ContactList/index.js"))}()},3255:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=s(n),c=function(e){var t=e.onSelectUser,a=e.selectedSectionId,s=e.user;return r.default.createElement("div",{className:"chat-user-item "+(a===s.id?"active":""),onClick:function(){t(s)}},r.default.createElement("div",{className:"chat-user-row row"},r.default.createElement("div",{className:"chat-avatar col-xl-2 col-3"},r.default.createElement("div",{className:"chat-avatar-mode"},r.default.createElement("img",{src:s.thumb,className:"rounded-circle size-40",alt:"Abbott"}),r.default.createElement("span",{className:"chat-mode smallcal "+s.status}))),r.default.createElement("div",{className:"chat-contact-col col-xl-10 col-9"},r.default.createElement("div",{className:"h4 name"},s.name),r.default.createElement("div",{className:"chat-info-des"},s.mood.substring(0,30)+"..."))))},l=c;t.default=l;var i=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"UserCell","E:/Raqami/Jumbo/src/components/chatPanel/ContactList/UserCell/index.js"),__REACT_HOT_LOADER__.register(l,"default","E:/Raqami/Jumbo/src/components/chatPanel/ContactList/UserCell/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","E:/Raqami/Jumbo/src/components/chatPanel/ContactList/UserCell/index.js"),__REACT_HOT_LOADER__.register(s,"_interopRequireDefault","E:/Raqami/Jumbo/src/components/chatPanel/ContactList/UserCell/index.js"),__REACT_HOT_LOADER__.register(c,"UserCell","E:/Raqami/Jumbo/src/components/chatPanel/ContactList/UserCell/index.js"),__REACT_HOT_LOADER__.register(l,"_default","E:/Raqami/Jumbo/src/components/chatPanel/ContactList/UserCell/index.js"),__REACT_HOT_LOADER__.register(i,"_temp","E:/Raqami/Jumbo/src/components/chatPanel/ContactList/UserCell/index.js"))}()}});
//# sourceMappingURL=36.04f4701880c3976af455.chunk.js.map