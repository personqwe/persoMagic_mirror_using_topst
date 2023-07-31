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
	electronOptions: {
		args: ["--disable-gpu"],
		// 기타 Electron 옵션들을 추가할 수 있습니다.
	  },

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
			position: "top_left"
		},
		{
			module: "weather",
			position: "top_left",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "Daegu",
				locationID: "1835329", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "########################"
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
				token: "#################################",
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
				password: '###################',
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
			module: "calendar",
			header: "KR Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar",
						url: "###############################################"
					}
				]
			}
		},
		{
			module: "MMM-CalendarExt3",
			position: "bottom_bar",
			title: "달력",
			config: {
			  mode: "month",
			  instanceId: "basicCalendar",
			  locale: 'ko-KR',
			  maxEventLines: 5,
			  firstDayOfWeek: 1,
			  calendars: [
				{
				  url: "#######################################################",
				  name: "us_holiday", // <= RECOMMENDED to assign name
				  color: "red", // <= RECOMMENDED to assign color
				},
			],
			}
		  },
	]
};
/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
