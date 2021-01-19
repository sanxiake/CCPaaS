        var calltimer;
        var statusListener = {
            login: function () {
                $('.soft-function,.status').removeClass("disabled");
                $('#softphone-answer').addClass("disabled");
                $('#softphone-hungup').addClass("disabled");

                $('#softphone-status .hold').addClass("disabled").show();
                $('#softphone-status .unhold').addClass("disabled").hide();

                $('#softphone-trans').addClass("disabled");
                $('#softphone-ivr').addClass("disabled");
                $('#softphone-conference').addClass("disabled");

                $('#softphone-makecall').removeClass("disabled");
                $('#manage').removeClass("disabled");


                $('#usails_account .login').hide();
                $('#usails_account .logout').show();

                $('#softphone-status .notready').removeClass("disabled").show();
                $('#softphone-status .ready').addClass("disabled").hide();
                $('#softphone-callout .waitting').removeClass("disabled").hide();

                $('#usails_hangup').hide();
                $('#usails_agent_status_offline').hide();
                $('#usails_agent_timer_call').hide();
                statusListener.canceltimer();
                $('#usails_agent_status_no').hide();
                $('#usails_agent_status_call').hide();
                $('#usails_agent_status_ok').show();
                $('#usails_agent_docallout').hide();


                statusListener.ext("login");
            },
            ready: function (calls) {
                $('.soft-function,.status').removeClass("disabled");
                $('#softphone-answer').addClass("disabled");
                $('#softphone-hungup').addClass("disabled");

                $('#softphone-status .hold').addClass("disabled").show();
                $('#softphone-status .unhold').addClass("disabled").hide();
                $('#manage').removeClass("disabled");

                $('#softphone-trans').addClass("disabled");
                $('#softphone-ivr').addClass("disabled");
                if (calls > 1) {
                    $('#softphone-conference').removeClass("disabled");
                } else {
                    $('#softphone-conference').addClass("disabled");
                }

                $('#softphone-makecall').removeClass("disabled");

                $('#usails_hangup').hide();
                $('#usails_agent_status_ok').show();
                $('#usails_agent_status_offline').hide();
                $('#usails_account .login').hide();
                $('#usails_account .logout').show();
                $('#softphone-status .notready').addClass("disabled").hide();
                $('#softphone-status .ready').removeClass("disabled").show();
                $('#usails_agent_docallout').hide();

                statusListener.ext("ready");
            },
            notready: function (calls) {
                $('.soft-function,.status').removeClass("disabled");
                $('#softphone-answer').addClass("disabled");
                $('#softphone-hungup').addClass("disabled");

                $('#softphone-status .hold').addClass("disabled").show();
                $('#softphone-status .unhold').addClass("disabled").hide();

                $('#softphone-trans').addClass("disabled");
                $('#softphone-ivr').addClass("disabled");
                if (calls > 1) {
                    $('#softphone-conference').removeClass("disabled");
                } else {
                    $('#softphone-conference').addClass("disabled");
                }
                $('#manage').removeClass("disabled");

                $('#softphone-makecall').removeClass("disabled");

                $('#usails_hangup').hide();
                $('#usails_agent_status_ok').show();
                $('#usails_agent_status_offline').hide();
                $('#usails_account .login').hide();
                $('#usails_account .logout').show();

                $('#softphone-status .notready').removeClass("disabled").show();
                $('#softphone-status .ready').addClass("disabled").hide();
                $('#usails_agent_docallout').hide();

                statusListener.ext("notready");
            },
            docallout: function () {
                $('#usails_agent_status_ok').hide();
                $('#usails_agent_docallout').show();

                $('#usails_hangup').hide();

                $('#softphone-callout .docallout').addClass("disabled").hide();
                $('#softphone-callout .waitting').removeClass("disabled").show();
                $('#softphone-callout .preview').addClass("disabled").hide();

                $('#softphone-callout .outboundcall').addClass("disabled").hide();
            },
            cancledocallout: function () {
                $('#usails_agent_status_ok').show();
                $('#usails_agent_docallout').hide();

                $('#usails_hangup').hide();

                $('#softphone-callout .waitting').addClass("disabled").hide();
                $('#softphone-callout .docallout').removeClass("disabled").show();
                $('#softphone-callout .preview').addClass("disabled").hide();

                $('#softphone-callout .outboundcall').addClass("disabled").hide();
            },
            outboundcall: function () {
                $('#usails_agent_status_ok').hide();
                $('#usails_agent_docallout').show();
                $('#waittingmsg').html("拨打名单");

                $('#usails_hangup').hide();

                $('#softphone-callout .docallout').addClass("disabled").hide();
                $('#softphone-callout .waitting').addClass("disabled").hide();
                $('#softphone-callout .preview').addClass("disabled").hide();

                $('#softphone-callout .outboundcall').removeClass("disabled").show();
            },
            callIn: function (calls) {
                $('.soft-function,.status').removeClass("disabled");
                $('#softphone-answer').removeClass("disabled");
                $('#softphone-hungup').removeClass("disabled");

                $('#softphone-status .hold').addClass("disabled").show();;
                $('#softphone-status .unhold').addClass("disabled").hide();

                $('#softphone-callout .docallout').addClass("disabled");
                $('#softphone-callout .waitting').addClass("disabled");
                $('#softphone-callout .preview').addClass("disabled");

                $('#softphone-callout .outboundcall').addClass("disabled");

                $('#softphone-trans').removeClass("disabled");
                $('#softphone-ivr').addClass("disabled");
                $('#manage').removeClass("disabled");

                $('#softphone-makecall').addClass("disabled");

                $('#usails_account .login').hide();
                $('#usails_account .logout').show();

                $('#softphone-status .notready').addClass("disabled");
                $('#softphone-status .ready').addClass("disabled");

                $('#usails_hangup').hide();
                $('#usails_agent_status_offline').hide();
                $('#usails_agent_status_no').hide();
                $('#usails_agent_status_call').show();
                $('#usails_agent_status_ok').hide();
                $('#usails_agent_timer_call').hide();
                statusListener.canceltimer();
                $('#usails_agent_docallout').hide();

                statusListener.ext("callin");
            },
            callOut: function (calls) {
                $('.soft-function,.status').removeClass("disabled");
                $('#softphone-answer').addClass("disabled");
                $('#softphone-hungup').removeClass("disabled");

                $('#softphone-status .hold').addClass("disabled").show();;
                $('#softphone-status .unhold').addClass("disabled").hide();

                $('#softphone-trans').addClass("disabled");
                $('#softphone-ivr').addClass("disabled");
                $('#manage').removeClass("disabled");


                $('#softphone-callout .docallout').addClass("disabled");
                $('#softphone-callout .waitting').addClass("disabled");
                $('#softphone-callout .preview').addClass("disabled");

                $('#softphone-callout .outboundcall').addClass("disabled");

                $('#softphone-makecall').addClass("disabled");

                $('#usails_account .login').hide();
                $('#usails_account .logout').show();

                $('#softphone-status .notready').addClass("disabled").show();
                $('#softphone-status .ready').addClass("disabled").hide();

                $('#usails_hangup').hide();
                $('#usails_agent_status_offline').hide();
                $('#usails_agent_status_no').hide();
                $('#usails_agent_status_call').show();
                $('#usails_agent_status_ok').hide();
                $('#usails_agent_timer_call').hide();
                statusListener.canceltimer();
                $('#usails_agent_docallout').hide();
                statusListener.ext("callout");
            },
            hungup: function (calls) {
                $('.soft-function,.status').removeClass("disabled");
                $('#softphone-answer').addClass("disabled");
                $('#softphone-hungup').addClass("disabled");

                $('#softphone-status .hold').addClass("disabled").show();;
                $('#softphone-status .unhold').addClass("disabled").hide();

                $('#softphone-trans').addClass("disabled");
                $('#softphone-ivr').addClass("disabled");
                $('#manage').removeClass("disabled");

                $('#softphone-makecall').removeClass("disabled");

                $('#usails_account .login').hide();
                $('#usails_account .logout').show();

                $('#softphone-status .notready').removeClass("disabled");
                $('#softphone-status .ready').removeClass("disabled");

                $('#usails_hangup').hide();
                $('#usails_agent_status_offline').hide();
                $('#usails_agent_status_no').hide();
                $('#usails_agent_status_call').hide();
                $('#usails_agent_status_ok').show();
                $('#usails_agent_docallout').hide();
                $('#usails_agent_timer_call').hide();
                statusListener.canceltimer();

                statusListener.ext("hungup");

                statusListener.conference("end");
            },
            accepted: function (calls) {
                $('.soft-function,.status').removeClass("disabled");
                $('#softphone-answer').addClass("disabled");
                $('#softphone-hungup').removeClass("disabled");

                $('#softphone-status .hold').removeClass("disabled").show();
                $('#softphone-status .unhold').addClass("disabled").hide();

                $('#softphone-trans').removeClass("disabled");
                $('#softphone-ivr').removeClass("disabled");
                $('#manage').removeClass("disabled");

                $('#softphone-callout .docallout').addClass("disabled");
                $('#softphone-callout .waitting').addClass("disabled");
                $('#softphone-callout .preview').addClass("disabled");

                $('#softphone-callout .outboundcall').addClass("disabled");

                if (calls > 1) {
                    $('#softphone-conference').removeClass("disabled");
                } else {
                    $('#softphone-conference').addClass("disabled");
                }

                $('#usails_account .login').hide();
                $('#usails_account .logout').show();

                $('#softphone-status .notready').addClass("disabled");
                $('#softphone-status .ready').addClass("disabled");

                $('#usails_hangup').hide();
                $('#usails_agent_status_offline').hide();
                $('#usails_agent_status_no').hide();
                $('#usails_agent_status_call').show();
                $('#usails_agent_status_ok').hide();
                $('#usails_agent_docallout').hide();
                $('#usails_agent_timer_call').hide();
                statusListener.canceltimer();

                statusListener.ext("accept");
            },
            hold: function (calls) {
                $('.soft-function,.status').removeClass("disabled");
                $('#softphone-answer').addClass("disabled");
                $('#softphone-hungup').addClass("disabled");

                $('#softphone-status .hold').addClass("disabled").hide();
                $('#softphone-status .unhold').removeClass("disabled").show();

                $('#softphone-trans').removeClass("disabled");
                $('#softphone-ivr').addClass("disabled");
                $('#manage').removeClass("disabled");

                $('#softphone-callout .docallout').addClass("disabled");
                $('#softphone-callout .waitting').addClass("disabled");
                $('#softphone-callout .preview').addClass("disabled");

                $('#softphone-callout .outboundcall').addClass("disabled");

                if (calls > 1) {
                    $('#softphone-conference').removeClass("disabled");
                } else {
                    $('#softphone-conference').addClass("disabled");
                }

                $('#softphone-makecall').removeClass("disabled");

                $('#usails_account .login').hide();
                $('#usails_account .logout').show();

                $('#softphone-status .notready').addClass("disabled").hide();
                $('#softphone-status .ready').addClass("disabled").show();

                $('#usails_hangup').hide();
                $('#usails_agent_status_offline').hide();
                $('#usails_agent_status_no').hide();
                $('#usails_agent_status_call').show();
                $('#usails_agent_status_ok').hide();
                $('#usails_agent_docallout').hide();
                $('#usails_agent_timer_call').hide();
                statusListener.canceltimer();

                statusListener.ext("hold");

                statusListener.conference("end");
            },
            unhold: function (calls) {
                $('.soft-function,.status').removeClass("disabled");
                $('#softphone-answer').addClass("disabled");
                $('#softphone-hungup').removeClass("disabled");

                $('#softphone-status .unhold').addClass("disabled").hide();
                $('#softphone-status .hold').removeClass("disabled").show();

                $('#softphone-trans').removeClass("disabled");
                $('#softphone-ivr').removeClass("disabled");
                $('#manage').removeClass("disabled");

                $('#softphone-callout .docallout').addClass("disabled");
                $('#softphone-callout .waitting').addClass("disabled");
                $('#softphone-callout .preview').addClass("disabled");

                $('#softphone-callout .outboundcall').addClass("disabled");

                if (calls > 1) {
                    $('#softphone-conference').removeClass("disabled");
                } else {
                    $('#softphone-conference').addClass("disabled");
                }

                $('#softphone-makecall').addClass("disabled");

                $('#usails_account .login').hide();
                $('#usails_account .logout').show();

                $('#softphone-status .notready').addClass("disabled").hide();
                $('#softphone-status .ready').addClass("disabled").show();

                $('#usails_hangup').hide();
                $('#usails_agent_status_offline').hide();
                $('#usails_agent_status_no').hide();
                $('#usails_agent_status_call').show();
                $('#usails_agent_status_ok').hide();
                $('#usails_agent_docallout').hide();
                $('#usails_agent_timer_call').hide();
                statusListener.canceltimer();

                statusListener.ext("unhold");
            },
            logout: function () {
                $('.status').addClass("disabled");
                $('#softphone-answer').addClass("disabled");
                $('#softphone-hungup').addClass("disabled");

                $('#softphone-status .hold').addClass("disabled").show();
                $('#softphone-status .unhold').addClass("disabled").hide();

                $('#softphone-trans').addClass("disabled");
                $('#softphone-ivr').addClass("disabled");
                $('#manage').addClass("disabled");

                $('#softphone-conference').addClass("disabled");

                $('#softphone-makecall').addClass("disabled");

                $('#softphone-status .notready').addClass("disabled").show();
                $('#softphone-status .ready').addClass("disabled").hide();

                $('#usails_account .login').removeClass("disabled").show();
                $('#usails_account .logout').addClass("disabled").hide();

                $('#usails_hangup').hide();
                $('#usails_agent_status_offline').hide();
                $('#usails_agent_status_no').show();
                $('#usails_agent_status_call').hide();
                $('#usails_agent_status_ok').hide();
                $('#usails_agent_docallout').hide();
                $('#usails_agent_timer_call').hide();
                statusListener.canceltimer();
                $('#softphone-contacts').addClass("disabled");

                $('#softphone-callout .docallout').addClass("disabled").show();
                $('#softphone-callout .waitting').addClass("disabled").hide();
                $('#softphone-callout .preview').addClass("disabled").hide();

                $('#softphone-callout .outboundcall').addClass("disabled").hide();

                statusListener.ext("logout");
            },
            autologinfaild: function () {
                $('.soft-function,.status').addClass("disabled");
                $('#softphone-hungup').removeClass("disabled");

                $('#usails_account').removeClass("disabled");
                $('#usails_account .login').removeClass("disabled").hide();
                $('#usails_account .logout').removeClass("disabled").show();
            },
            conference: function (command) {
                if (command == "start") {
                    $('#softphone-conference').removeClass("disabled");
                } else {
                    $('#softphone-conference').addClass("disabled");
                }
            },
            initCallStatus: function (caller, called) {
                $('#caller .number').text(caller);
                if (called) {
                    $('#called .number').text(called);
                }
            },
            afterprocess: function (data) {
                if (data.state == true) {
                    $('#softphone-afterprocess').show().removeClass("disabled");
                    $('#softphone-free').hide().addClass("disabled");
                    $('#softphone-rest').hide().addClass("disabled");
                } else {
                    $('#softphone-afterprocess').hide();
                    $('#softphone-free').hide().addClass("disabled");
                    if (data == true) {
                        $('#softphone-rest').show().removeClass("disabled");
                    } else {
                        $('#softphone-rest').show().addClass("disabled");
                    }
                }
            },
            rest: function (data) {
                //示忙状态
                console.log("rest !!!!!")
                if (data == true) {
                    $('#softphone-afterprocess').hide();
                    $('#softphone-rest').hide().addClass("disabled");
                    $('#softphone-free').show().removeClass("disabled");
                }

            },
            ext: function () {
                $('#softphone-afterprocess').addClass("disabled");
                $('#softphone-conference').addClass("disabled");
                $('#softphone-rest').addClass("disabled");
            },
            timer: function () {
                $('#usails_hangup').hide();
                $('#usails_agent_status_offline').hide();
                $('#usails_agent_status_no').hide();
                $('#usails_agent_status_call').hide();
                $('#usails_agent_status_ok').hide();
                $('#usails_agent_timer_call').show();

                $('#usails_agent_timer_call .timer').html("00:00:00");
                /**
                 *
                 */
                statusListener.canceltimer();
                durtime = 0;

                $('#usails_agent_timer_call .timer').html("00:00:00");
                /**
                 * 计时
                 */
                calltimer = setInterval(function () {
                    durtime = durtime + 1;
                    var sec = durtime % 60;
                    if (sec < 10) {
                        sec = "0" + sec;
                    }
                    var min = Math.floor((durtime % (60 * 60)) / 60);
                    if (min < 10) {
                        min = "0" + min;
                    }
                    var hour = Math.floor(durtime / (60 * 60));
                    if (hour < 10) {
                        hour = "0" + hour;
                    }

                    $('#usails_agent_timer_call .timer').html(hour + ":" + min + ":" + sec);
                }, 1000);
            },
            canceltimer: function () {
                if (calltimer != null) {
                    clearInterval(calltimer);
                }
                $('#usails_agent_timer_call .timer').html("00:00:00");
            }
        }
        var stateEventListener = {
            handle: (event, data) => {
              console.log("event: " + event + "\n" + "data: " + data);
                if (event === 'LOGIN') {
                    statusListener.login();
                    console.log('extno is :' + data.extno)
                } if (event === 'LOGOUT') {
                    statusListener.logout();
                    console.log('extno is :' + data.extno)
                }else if (event === 'READY') {
                    statusListener.ready();
                }else if (event === 'NOTREADY') {
                    statusListener.notready();
                } else if (event === 'AFTERPROCESS') {
                    statusListener.afterprocess(data);
                } else if (event === 'REST') {
                    statusListener.rest();
                } else if (event === 'RING') {
                    console.log('ring dir ' + data.direction)
                    if (data.direction === 'out') {
                        console.log("all out state!!!!!!!")
                        statusListener.callOut();
                    } else {
                        console.log("call in state!!!!!!")
                        statusListener.callIn();
                    }
                } else if (event === 'ANSWER') {
                    statusListener.accepted();
                } else if (event === 'HANGUP') {
                    statusListener.hungup();
                } else if (event === 'HOLD') {
                    statusListener.hold();
                } else if (event === 'UNHOLD') {
                    statusListener.ready();
                } else if (event === 'MUTE') {
                    //FIXME:
                } else if (event === 'UNMUTE') {
                    //FIXME:
                } else if (event === 'ERROR') {

                }
            }
        };