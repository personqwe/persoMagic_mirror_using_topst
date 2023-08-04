/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",			// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
					  		// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "ko",
	locale: "ko-KR",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: "HH:mm:ss", // 한국 시간 형식 (24시간 표기)
	timezone: "Asia/Seoul", // 한국 시간대
	units: "metric",

    modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
        {
            module: "clock",
            position: "top_left",
            config: {
                timeFormat: "HH:mm:ss", // 한국 시간 형식 (24시간 표기)
                timezone: "Asia/Seoul" // 한국 시간대
            }
        },
        {
            module: "MMM-OpenmapWeather",
            position: "top_left",	// This can be any of the regions. Best results in left or right regions.
            header: "Current Weather", //Location is the default value if header is empty or not defined.
            config: {
                // See 'Configuration options' for more information.
                location: "Daegu",
                locationID: "1835327",
                appid: "58de508ffcc87abd7b783e10bdf8a73d",  //openweathermap.org API key
                      colorIcon: true
            }
        },
		{
			module: "newsfeed",
			position: "top_bar",
			config: {
				feeds: [
					{
						title: "연합 뉴스",
						url: "http://www.yonhapnewstv.co.kr/browse/feed/"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
			module: 'MMM-AQI',
			position: 'top_left',
			header: 'Air Quality Index (AQI)',
			config: {
				token: "e6c6484d8b3241aef4709fc637df908261c68ef4",
				city: "Daegu",
				iaqi: false,
				updateInterval: 30 * 60 * 1000, // Every half hour.
				initialLoadDelay: 0,
				animationSpeed: 1000,
				debug: false
			}
		},
           {
			module: 'MMM-GmailFeed',
			position: 'top_left',
			config: {
				username: 'dlrudfhr55@gmail.com',
				password: 'jxqaxonirqjcdpgb',
				updateInterval: 60000,
				maxEmails: 5,
				maxSubjectLength: 10,
				maxFromLength: 10,
				playSound: true,
				autoHide: true,
				displayMode: "table",
			}
		},
		{
            module: "MMM-CalendarWeek",
            position: "bottom_right", // 원하는 위치로 변경 가능합니다.
            config: {
                maximumEntries: 7, // 표시할 일정 항목 수, 한 주에 7개의 항목이 표시됩니다.
                displayLocation: false, // 위치 정보 표시 여부
                showEnd: true, // 일정의 종료 시간 표시 여부
                fade: true, // 일정이 표시될 때 페이드 효과 사용 여부
                colored: true, // 일정에 색상 적용 여부
                dateFormat: "YYYY-MM-DD", // 날짜 형식
				updateInterval: 10000, // 예: 10분마다 갱신
                filterDaysBefore: 0, // 현재 날짜 이전의 일정은 표시하지 않도록 설정합니다. 0으로 설정하면 오늘 이전의 일정은 표시하지 않습니다.
                calendars: [
                    {
                        url: "https://calendar.google.com/calendar/ical/dlrudfhr55%40gmail.com/private-a2878fc31b7956fd3d85535b43ece377/basic.ics", // 당신의 달력 URL 입력
                        color: "#FFFFFF" // 원하는 색상 설정
                    },
					{
                        url: "https://calendar.google.com/calendar/embed?src=addressbook%23contacts%40group.v.calendar.google.com&ctz=Asia%2FSeoul", // 당신의 달력 URL 입력
                        color: "#FFFFFF" // 원하는 색상 설정
                    },
					{
                        url: "https://calendar.google.com/calendar/ical/ko.south_korea%23holiday%40group.v.calendar.google.com/public/basic.ics", // 당신의 달력 URL 입력
                        color: "#FF0000" // 원하는 색상 설정
                    },
                ]
            }
        },
        {
            module: "MMM-GooglePhotos",
            position: "fullscreen_below",
            config: {
                  albums: ["image"], // Set your album name. like ["My wedding", "family share", "Travle to Paris"]
                  updateInterval: 1000 * 60 * 30, // minimum 30 seconds.
                  sort: "random", // "old", "random"
                  uploadAlbum: null, // Only album created by `create_uploadable_album.js`.
                  condition: {
                      fromDate: null, // Or "2018-03", RFC ... format available
                      toDate: null, // Or "2019-12-25",
                      minWidth: null, // Or 400
                      maxWidth: null, // Or 8000
                      minHeight: null, // Or 400
                      maxHeight: null, // Or 8000
                      minWHRatio: null,
                      maxWHRatio: null,
                      // WHRatio = Width/Height ratio ( ==1 : Squared Photo,   < 1 : Portraited Photo, > 1 : Landscaped Photo)
                  },
                  showWidth: 1080, // These values will be used for quality of downloaded photos to show. real size to show in your MagicMirror region is recommended.
                  showHeight: 2560,
                  timeFormat: "YYYY/MM/DD HH:mm", // Or `relative` can be used.
            }
          },
		  {
			module: "MMM-Modulebar",
			position: "top_right",
			config: {
				buttons: {
					// A number (unique for each button) lowest number will be displayed first...
					"1": {
					  // This button hides everything and uses two symbols.
					  module: "clock",
					  text: "Clock On",
					  text2: "Clock Off",
					  symbol: "toggle-on",
					  symbol2: "toggle-off",
					},
					"2": {
						// This button hides everything and uses two symbols.
						module: "MMM-OpenmapWeather",
						text: "Weather On",
						text2: "Weather Off",
						symbol: "toggle-on",
						symbol2: "toggle-off",
					  },
					  "3": {
						// This button hides everything and uses two symbols.
						module: "newsfeed",
						text: "Newsfeed On",
						text2: "Newsfeed Off",
						symbol: "toggle-on",
						symbol2: "toggle-off",
					  },
					  "4": {
						// This button hides everything and uses two symbols.
						module: "MMM-AQI",
						text: "AQI On",
						text2: "AQI Off",
						symbol: "toggle-on",
						symbol2: "toggle-off",
					  },
					  "5": {
						// This button hides everything and uses two symbols.
						module: "MMM-GmailFeed",
						text: "GmailFeed On",
						text2: "GmailFeed Off",
						symbol: "toggle-on",
						symbol2: "toggle-off",
					  },
					  "6": {
						// This button hides everything and uses two symbols.
						module: "MMM-CalendarWeek",
						text: "CalendarWeek On",
						text2: "CalendarWeek Off",
						symbol: "toggle-on",
						symbol2: "toggle-off",
					  },
					  "7": {
						module: "MMM-GooglePhotos",
						text: "GooglePhotos On",
						text2: "GooglePhotos Off",
						symbol: "toggle-on",
						symbol2: "toggle-off",
					  }
				  }
			},
		  },
		]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
