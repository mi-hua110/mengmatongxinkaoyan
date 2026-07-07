// 重点勾画数据 + 专业课代码
const HIGHLIGHT_DATA = {
  "linkMap": {
    "上海交通大学": null,
    "华中科技大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486119&idx=1&sn=ba848ea3e1c50e88ae455f0567499c36&chksm=c2f3c0dbf58449cd29aefd916366310f2f7cd289ea6a4e6bd57ce828d2f9add519a17dc90b23#rd",
    "四川大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487075&idx=1&sn=e96582909e0a57992c2d24c1af066ca8&chksm=c2f3c41ff5844d09060943a75c736db11ab5eafe7aefa0d747fac8a1a3b6aceae9c4b7a4ee80#rd",
    "清华大学": null,
    "东北大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486401&idx=1&sn=b5fbb15cafe34cb3984ffaff47aef99a&chksm=c2f3c1bdf58448ab743ecad9b33b10f900456a8257738032d6fb2ba84081c94d95b7ab74f9bc#rd",
    "东南大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486775&idx=1&sn=56bec9dbcd746a99eb450b79503300c7&chksm=c2f3c74bf5844e5d1ec87b58fec35ef87b97ea82bcc8ead44b0ce8d362cfbccd338de7040d08#rd",
    "中南大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247498655&idx=3&sn=5f1a9ac5159305a7b1c911d41b03bd05&chksm=c2f031e3f587b8f52634f2c48bfa2b8f516b2e0aa10de70ba0f9ee22fe08ebbc4ac321d2e1f2#rd",
    "北京理工大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487415&idx=1&sn=8c467783e68ea3c73fd60b551c94e912&chksm=c2f3c5cbf5844cddc96238a2684d9575fe82c2ea3348d3bf0c0153acc4380263d439b87db559#rd",
    "北京航空航天大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487078&idx=1&sn=d08abf327db7c2138193e839631eee24&chksm=c2f3c41af5844d0cc141ab5973655f390f6ae6888393669ffdbc11d9669d43312848572da64d#rd",
    "北京邮电大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487060&idx=1&sn=13de7a52a9d6968ece9936892a3e5d55&chksm=c2f3c428f5844d3e70d34d3f60863979a346db0684b32561133843b640fa0a1b10a571038398#rd",
    "南京大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247485847&idx=1&sn=03600a2f55ef79d7e9808bc5af13da47&chksm=c2f3c3ebf5844afd487d49bd75dadeda716beafca22212fc41f72182cc16fdd78e962862c1e3#rd",
    "南开大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487223&idx=1&sn=6ad7da6e219a09ef0f16c0f749ddec7a&chksm=c2f3c48bf5844d9d19c3828f7215edb4ea60616fe370a4fccab29befe2178a94e75ef7f3c3cc#rd",
    "厦门大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487231&idx=1&sn=d57f519e7dc6af8135ded287a44ddb69&chksm=c2f3c483f5844d95481a2ce2d33ca21188e861a0502d8d6e48db8e8fb6952219e8175d75cb65#rd",
    "同济大学": null,
    "哈尔滨工业大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486135&idx=1&sn=b01e44bfcc22c423f4bfd2e9a721be3e&chksm=c2f3c0cbf58449dde1b46c004ebc67f9206d1c6ca7b772f42df5fc15c98abd2b16ac35f6e6ee#rd",
    "国防科技大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247498919&idx=3&sn=1ddab3cf04908c7c80b6ea4191338352&chksm=c2f036dbf587bfcd6743e78b3e5e538ebc46934788f3f211e5ba8d4231497205a2f4cc8c0e59#rd",
    "复旦大学": null,
    "大连海事大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247485865&idx=1&sn=b5beefde6d019ea8daa5f361ee161c7e&chksm=c2f3c3d5f5844ac368775a538b7c522d388e558cbcf9568805770ac06c5e078d92cefbb996cb#rd",
    "大连理工大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487008&idx=1&sn=a44eb9da58bcc865daa2ab13c2e97427&chksm=c2f3c45cf5844d4a071280013d04b7cd9e300ed4c5397e15e96061af938e0533ae1876547932#rd",
    "天津大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486593&idx=1&sn=57c40b048d20f34dd3e3efd42d8fb408&chksm=c2f3c6fdf5844feb3970d0fb43090513383462e0835b4c32de25e31bb1ca478db1448526bc48#rd",
    "山东大学": null,
    "武汉大学": null,
    "浙江大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487026&idx=1&sn=2c049d48a22615eb248e66a40b5b3020&chksm=c2f3c44ef5844d58ac43267a67975cb68d1cbc4902b06da521a7c4ed429bbd4d8c9c310baca3#rd",
    "电子科技大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247485740&idx=1&sn=443456b109315a78aa90dfde21bbfe29&chksm=c2f3c350f5844a46369d86edacd8d5ea33c7bd005d2381cde516e81a335cf993992d913c65b3#rd",
    "西北工业大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247485827&idx=1&sn=7244b04bf69dd9592d7d03d6d239d8ef&chksm=c2f3c3fff5844ae9acb8ab303b080ec3146b4c910ea75a9bae72fe49cb8b6bc6ab008dc62e2c#rd",
    "西安交通大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486110&idx=1&sn=41f9f3fda3a5d4c9cc044bc2d7ecc73b&chksm=c2f3c0e2f58449f4321ebed6dfa0d19856e405a01167765d5538392b7b8ec94331c394221799#rd",
    "西安电子科技大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247485651&idx=1&sn=6dd44ebe64e804c0ca547e87d335beb6&chksm=c2f3c2aff5844bb9327bbb9478999e98d49e77287a001b5e8aebf0d0854126ac900da5731ad9#rd",
    "重庆大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487160&idx=1&sn=1436e7a4d2e0c8d47f9b450ae1fc1803&chksm=c2f3c4c4f5844dd2c4524b0945b2f70044c0a532bb444621e53a89aeba227eeedfe87308ee1e#rd",
    "中国科学技术大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487052&idx=1&sn=f9b46659a7363600609c5f27431fdbf0&chksm=c2f3c430f5844d26e5eb5a6260eea258f3f59b226d6282dc0a19450d1d3e2e16866b05735396#rd",
    "中央民族大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487142&idx=1&sn=0f2a30afd256bce7c52bd8a973a2dc6b&chksm=c2f3c4daf5844dcc5a174255d7631e6c8d41cdb18477eaf8d1ab78a66ce18d4f8aad30aa0fad#rd",
    "北京大学": null,
    "华东师范大学": null,
    "华南理工大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486879&idx=1&sn=377e82612633cda32e06715d9132631c&chksm=c2f3c7e3f5844ef593d151a0d1ed7df7e1868b86c30046551370371a5e374950b1bcdca5edfb#rd",
    "上海大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487087&idx=1&sn=edb19bc24152b4e7b7282cf4f0ed48b6&chksm=c2f3c413f5844d052d417713bc01906d2f87a8c983be82e7718937625030f0921dc234042093#rd",
    "中国传媒大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487480&idx=1&sn=df005da95f12735d52fe83fdcf4dbc17&chksm=c2f3c584f5844c9248b4ccce0e47de126b1c532096a02820cbe0c9aac204421e4a4b8b006e47#rd",
    "中国海洋大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487034&idx=1&sn=d9c9b0ce03b9aa1e96a19f4b0171659b&chksm=c2f3c446f5844d506c56d756bc372cfa85d1c0c729429898572165cc42bcdb4c2f9396a5d939#rd",
    "中国科学院大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487063&idx=1&sn=af46318a9e40b1e1118480a267fa0cdf&chksm=c2f3c42bf5844d3d8fe54942079f8c2442a4b8ff015c9eba6c4c3183ac2416e4a1f449206f8a#rd",
    "华北电力大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487217&idx=1&sn=e9eb5e27cf443df16b77813eec08a95b&chksm=c2f3c48df5844d9b0dca137ee8d25935938c1e4e91831c3da8f42064e1ef0bdc5abffe8b10bf#rd",
    "南京理工大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487279&idx=1&sn=f8c7ecb0a67d40a97b20ee1759879a92&chksm=c2f3c553f5844c4550ad7fb0a148c3dcb3f91ba76e52c6840df3a1ccb5cdfcb5b4621d8178bb#rd",
    "南京航空航天大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487152&idx=1&sn=896e2de0827d1dda6145860aceb2e80f&chksm=c2f3c4ccf5844ddab95a6d614b703a85bc315c80a1e69800773445f5798ef4d2a0ce2a017598#rd",
    "南昌大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486127&idx=1&sn=9d59f1ea6f2e46c00da9c636761d8a09&chksm=c2f3c0d3f58449c51eb8517ead3cd3f5edc0df44cf9aa52fcfd8489ce52fc1f79a143df96778#rd",
    "合肥工业大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487092&idx=1&sn=9797e044da27213a2d7b9c0c0b0f8ef8&chksm=c2f3c408f5844d1e66002fc67403c66acfd004ad6f5a18f1e758ba8b717f50de8f504c661234#rd",
    "哈尔滨工程大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486648&idx=1&sn=de3b91dc6d5b050c38518da32b18066f&chksm=c2f3c6c4f5844fd2df36f4b4aab2425fb54e85962f85c19992af42eaf4b4ec7ea67fc87c7389#rd",
    "太原理工大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487020&idx=1&sn=bdcf910243c78e135ad1838d6f2ceff5&chksm=c2f3c450f5844d4674a45bcd29bd049e809cbaf85d9aab131de144fff06cd83f8a350cd61b4c#rd",
    "武汉理工大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487031&idx=1&sn=a906ca162077c6817cedb6c0a00b8a5a&chksm=c2f3c44bf5844d5d357a4dfb1a29b98751893f632d33f0ac56f2eb511ab6fc1cb849d283eea9#rd",
    "湖南大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247499074&idx=3&sn=4dd5ae3961482160b28781aef419e9cf&chksm=c2f0373ef587be289717864419f061f49f456d46cd6ec0729ff9e6941d53dd50d032ff4942dd#rd",
    "福州大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247485793&idx=1&sn=bcb0120a704b7d2e78cf451cd2b4bc87&chksm=c2f3c31df5844a0b81a5d4e347ed524c14d1017dfbd6d4b808a5e6ce7da2b4a564c518ad4c9f#rd",
    "西安邮电大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486102&idx=1&sn=ea430a10eaaf6c678b1ef821315fd6a7&chksm=c2f3c0eaf58449fcc87c8a0cd020259be202e7efdf8ed5567e93f9b0bd470ea9bf1172cce0e1#rd",
    "东北林业大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487443&idx=1&sn=b481ac132de86ee15564b4bd348f1ea3&chksm=c2f3c5aff5844cb960e9c81f4a4c334a5b079073c95eea48c6162eca9b13445ceecf07f605b1#rd",
    "中国地质大学(北京)": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247485895&idx=1&sn=6b49e8f926aec46c7008d85f6aa5e754&chksm=c2f3c3bbf5844aad5b27b9d011f30d66d0b838be0f6f19af302bd69ff9c60f0081aabf69cc67#rd",
    "中国地质大学(武汉)": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487023&idx=1&sn=35246ac2ae660025d7e344f48338a079&chksm=c2f3c453f5844d45ec4031087dc696916ee768561cc3e88af70c0ea80b8c1a42eefe80251acb#rd",
    "中国石油大学(北京)": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247498768&idx=3&sn=32ca34a90dea01cd1ef45acdfed20679&chksm=c2f0366cf587bf7a254162883b29a11805957b7229f7069b88ae8a6104830d139783ac73c8cf#rd",
    "中国石油大学(华东)": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247485864&idx=1&sn=69a14266e193eed96883e1767fbe656d&chksm=c2f3c3d4f5844ac2d4dc513b7a6ae4a0ba5c7540f62e4581c9c7073b0f50ee86f4ea1fa84631#rd",
    "北京化工大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247500961&idx=1&sn=7e2b397a1c06c99f3e5ab02a958d2b54&chksm=c2f00eddf58787cb1dac572c612bcca9a62df4d1514a89b6859de0e808ef19713f4ffbccf34a#rd",
    "北京工业大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487066&idx=1&sn=2f9a4960f4bf3974715bd9b1237dbce7&chksm=c2f3c426f5844d30dbeaeb97902b290ee9ec5dd8bdc433eb1b2c86cc77627ccc605421a57df2#rd",
    "华中农业大学": null,
    "华北电力大学(保定)": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487217&idx=1&sn=e9eb5e27cf443df16b77813eec08a95b&chksm=c2f3c48df5844d9b0dca137ee8d25935938c1e4e91831c3da8f42064e1ef0bdc5abffe8b10bf#rd",
    "华南师范大学": null,
    "安徽大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487288&idx=1&sn=3a0f44d6bccdc0b09b57594d29801849&chksm=c2f3c544f5844c5297f388be84db8455533cac85f25aa06ebe9db49a0bb5322612d7700c7d12#rd",
    "湖南师范大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247500556&idx=1&sn=b4b87abcf517644319676a0d6ba4b421&chksm=c2f00970f5878066363d34426f5624cb4db39cdf273441f262e4265997414db7d22c5dcec863#rd",
    "西北大学": null,
    "西南交通大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486329&idx=2&sn=8e2a3cde1ea2ded477a68768e6e2c72d&chksm=c2f3c105f5844813975786f64ee710507df798125a2287b24d8f109caeb2872ba7cfdf2fd43b#rd",
    "中国矿业大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487397&idx=1&sn=58abc430bc0e44b6d7c04980b79aa089&chksm=c2f3c5d9f5844ccf635b08c53848d35db95ff9aa161896a2a977aa0134ce8307a693731ad287#rd",
    "内蒙古大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487380&idx=1&sn=0af56037d0fab82b0226d97ed61e1ead&chksm=c2f3c5e8f5844cfe7f174af4d1fa9964b8a7da1973b1949c4643335fa17dddcae9657c2317a2#rd",
    "北方工业大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487068&idx=1&sn=10f858b0f503a9884e6763ab0204908c&chksm=c2f3c420f5844d36644baf310dc688cc27ab9ae76550f1e6d1fc694857f711b9fd2b4399514f#rd",
    "华东理工大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247497209&idx=3&sn=93a26701649ad6c82ed5ee135f01bf4e&chksm=c2f03f85f587b6937b606e21ac054b69967b7c9b62e83295c51b3c66c0c6ebbcaa3b961a604f#rd",
    "天津工业大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486089&idx=1&sn=2e6efced2e9fbb4217886e1d708c6c11&chksm=c2f3c0f5f58449e3f36fd76c8e35ab00a4fd91632193fc7f844837d0ec059e577d0aeb090468#rd",
    "宁夏大学": null,
    "宁波大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247485914&idx=1&sn=6d4bff2a32bd1f277920fe177ff85c08&chksm=c2f3c3a6f5844ab021fa40691fc25f5d98ee102a0a1fdd315ebfb4d4bda886b8d3016509f2c2#rd",
    "广东工业大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487298&idx=1&sn=ae1d5b0c322e57b9625dced2e3eb87e8&chksm=c2f3c53ef5844c28267f55441528fa68b3b80d462d6f450c5fc631fc510a0ae638a5c4c95859#rd",
    "新疆大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486351&idx=1&sn=888cd691527f475a34eff7a9fb15b799&chksm=c2f3c1f3f58448e5aa6bb92ef049f295ef0bb0a02c79da1f640528af4dd7cc9d09c20cff7b3a#rd",
    "杭州电子科技大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487255&idx=1&sn=a2a9a03081827f7733376826b140f574&chksm=c2f3c56bf5844c7d613166ac78a16f307fed2eb3301443680a56b58d31c48a92778761a3c919#rd",
    "桂林电子科技大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247485951&idx=1&sn=a7f36726669d8d103221270a7bb223e8&chksm=c2f3c383f5844a953e3841f59fc246382ff9e6079c35d74d5d6ed471fb5a396fa04518363d98#rd",
    "河海大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486420&idx=1&sn=d1c4d107f41ce9e69c4095f9c4272ba9&chksm=c2f3c1a8f58448be220d2b1171743f8cfc4ca82a25079cd874da265e20e8e8806c2e27959177#rd",
    "海南大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487071&idx=1&sn=0697e99a70af66c0307790661c03b8cd&chksm=c2f3c423f5844d35fe280ef9c61b77406083ac12d7dcc0dcffab491a55c86011372f4db993c2#rd",
    "深圳大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486023&idx=2&sn=d2d86f1c4110a887bb1c495b04452723&chksm=c2f3c03bf584492d512ed85f7cb722a24bec0a155aa79fc4a2b6e7193a348fc74ba60e47a820#rd",
    "苏州大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486633&idx=1&sn=88ebda23769461c5d176ea529d284640&chksm=c2f3c6d5f5844fc3ca4546d204c15e082f1489c2e4f09836a388fa658c000a664f9cfa4b7dea#rd",
    "西南大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487271&idx=1&sn=3c71f6ca8d6d40f2c55c83aec622a737&chksm=c2f3c55bf5844c4d6984ef96199105b59ed61b76bfe8f307d7a7c3fa504de0646e34d892d061#rd",
    "郑州大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487018&idx=1&sn=33cc06a9d6924736ae23c6b7ca98e756&chksm=c2f3c456f5844d40ea22ac13eddd5e6b28c7be2d049a49cba01511333160d29f8da60cb6f877#rd",
    "重庆邮电大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486050&idx=1&sn=bfe210d9b20f189fafc1dd76b481c98b&chksm=c2f3c01ef5844908f67600228e69fdca35db71e30dc35e1fbab5824bfdfac50ed93a712541d9#rd",
    "长安大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486514&idx=3&sn=c3ce30270480e0b275155a89d3d9974d&chksm=c2f3c64ef5844f58d8b72455fc501f91e75557e4a72c07d83efd9da7cf806dc80f9bfc476567#rd",
    "陕西师范大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486625&idx=2&sn=e0279137f4e4e7235e92e2233a55edd0&chksm=c2f3c6ddf5844fcb2e8a6975cbc28ff598ebc16ecb54e70f6853ad10f9a2a8e57be9d80c6f83#rd",
    "中国人民公安大学": null,
    "南京信息工程大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486064&idx=1&sn=fe9f3154d90ef5803f90d72f0136e957&chksm=c2f3c00cf584491a6a58a561486c979a9b81470885a31d5d3d77e6ca5bb605d13194883f7984#rd",
    "成都理工大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487478&idx=1&sn=f81efaf3977af1357b1a985fe7cbfce4&chksm=c2f3c58af5844c9c42eed590fbfda1a61a9faf93d8ac34ceb476f438bd65f5088b8599d50950#rd",
    "湘潭大学": null,
    "上海理工大学": null,
    "中北大学": null,
    "中原工学院": null,
    "中国计量大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487441&idx=1&sn=f2c840cc55686b5893f99b77a173c264&chksm=c2f3c5adf5844cbb04fa0900569cfde860f6d7c41f1dd75274057be7082c825030549a6c78b2#rd",
    "云南民族大学": null,
    "内蒙古师范大学": null,
    "内蒙古科技大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247497815&idx=3&sn=11aa9c7e9e7aac59db2d13483f7fb89e&chksm=c2f0322bf587bb3d9bbd277f89d85b9f77f8d4427085e57411aea3dfe8c9a72907c73ee91fc6#rd",
    "北京信息科技大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487084&idx=1&sn=107a4854098b85fb67618dd02ac52c52&chksm=c2f3c410f5844d066e73fc7d1179279e829a44c289782f2755cd8ed76f8d9160b94a17861837#rd",
    "北京电子科技学院": null,
    "华东交通大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247497310&idx=3&sn=9e545c51a19ad6afb0f53ddaf359df2f&chksm=c2f03c22f587b53487e537cfd5c6bf5b61c07e942ed3a6c6aad287dab37a83a34e98657e14af#rd",
    "华北理工大学": null,
    "南京工程学院": null,
    "吉林大学": null,
    "哈尔滨理工大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487044&idx=1&sn=f77283b2adc6668b9bff25544e8f335e&chksm=c2f3c438f5844d2e6635bbcba3a1cdbf02870b63b2191056eac58e45afee4c91a8e3276d169f#rd",
    "大连交通大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487146&idx=1&sn=0c44c1eebdfd8c0f9f27a1195fd87d67&chksm=c2f3c4d6f5844dc0c36ab9743e16d957d9fff71517dc76e483f0e73241bed20176a1df605c5c#rd",
    "天津师范大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487022&idx=1&sn=17fdae169b05fd57e00c0541900d4c4a&chksm=c2f3c452f5844d448ebe2e328e9b371bf30d9d48a9be8f3750a3f8c7c00d82a3232a0ce9f22e#rd",
    "太原科技大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247496976&idx=3&sn=975b628478cec0b1361243a7643175bd&chksm=c2f03f6cf587b67a785eea0c33033cca426529ab329b9019de9efe0f1bafb23dc69de71f5c8b#rd",
    "安徽农业大学": null,
    "安徽工程大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247496679&idx=1&sn=00b796e7d5838a26ff2284fdf19d7daf&chksm=c2f0399bf587b08de63d3829fb7041a8edcd3a72b6773318af650d67b9d534374e973c2cf275#rd",
    "山东农业大学": null,
    "山东师范大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247498767&idx=3&sn=b636195730e1753dbf58acf88f5154f3&chksm=c2f03673f587bf65e4a6f4ba4427fbe2563ff1441f08b5ccad78c1a97223b3d3352b9d719adf#rd",
    "广西师范大学": null,
    "广西科技大学": null,
    "扬州大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487473&idx=1&sn=20f1ccf681af0bcb94d5fc036c3096a0&chksm=c2f3c58df5844c9b3b43f1016302ec1ff8bb3cacb286375742f398a14ba009bd3eb4333ac884#rd",
    "杭州师范大学": null,
    "武汉工程大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247497440&idx=3&sn=9313b2d0bbaf378cd681f2e773585c79&chksm=c2f03c9cf587b58a8a2978cf8a448da31f7597c8ed3a6fe3b16dab3611280b3ea88da3f0f9db#rd",
    "武汉轻工大学": null,
    "江西师范大学": null,
    "沈阳工业大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487050&idx=1&sn=280a945b01073acf09a46813e4cc25d3&chksm=c2f3c436f5844d2015e70123cf785d04d242a9dd191f178abc7540c174ae6a3c9cfee4082f38#rd",
    "河北工程大学": null,
    "济南大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487041&idx=1&sn=525dc0993dc07ce0bb2cdeeb84eb4cff&chksm=c2f3c43df5844d2bc6ed0425f94ac7f799048c9ad9803a481d66f1bc77ab422f9802001acaf8#rd",
    "浙江工商大学": null,
    "海军工程大学": null,
    "湖北大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487362&idx=1&sn=db07c92ccd0f95ec4c3dcf52d5f789dc&chksm=c2f3c5fef5844ce824b68c4d7299f57673e097b6461211e92783b065a0d71045bae1ee8939b6#rd",
    "潍坊学院": null,
    "火箭军工程大学": null,
    "福建师范大学": null,
    "西北师范大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487306&idx=1&sn=a4fcb122e16068007b30b37c728a0376&chksm=c2f3c536f5844c206af93f286c9b5607fc51baab6637b99a0d78abdef98c1db369efc240579e#rd",
    "西南民族大学": null,
    "西安工业大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487476&idx=1&sn=72d5eb5bfffa092738aaeadc4760f7d2&chksm=c2f3c588f5844c9e385b0b75be15a01f538c24218de212428840c0c15ba031c3bb5ba05ee96e#rd",
    "西安工程大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487201&idx=1&sn=4c21562df1fa16fc1a7782c8a8e09386&chksm=c2f3c49df5844d8b42622af9eb5201eab0b5429a12ad55acea8fe1321bade0f7ffb900f00fbe#rd",
    "长春工业大学": null,
    "集美大学": null,
    "青岛理工大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247498401&idx=3&sn=ffb0b063cd3a93f724dabe423caa3e30&chksm=c2f030ddf587b9cbc188ee2bdc33ebf334d94c6b284443b36d82b940292e198ab263df107aaf#rd",
    "青岛科技大学": null,
    "鲁东大学": null,
    "黑龙江大学": null,
    "黑龙江科技大学": null,
    "三峡大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247498130&idx=3&sn=ebee22fd57420f008d9a94be3c3ef852&chksm=c2f033eef587baf86becd27d54f4ece1e4ac95e18b48dfb23fdeb6e08cbe065b56385b58cb78#rd",
    "上海师范大学": null,
    "上海海事大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487046&idx=1&sn=7ea468f552f1b75cb337cd1cb3705380&chksm=c2f3c43af5844d2c5a63ce8c11f6829c06e6815a9097deb79c28f9c73384bf7913060c0a3058#rd",
    "东北电力大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247497924&idx=3&sn=0db1ea1891cbba8e8473bda7aff1cc80&chksm=c2f032b8f587bbaefd82f64214ced391587a154d94811d6e6844dbbe9ca6011ad5c589d031aa#rd",
    "东北石油大学": null,
    "东华大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487243&idx=1&sn=f479a8d29665aae26ae25c85c374b69e&chksm=c2f3c577f5844c6102157a61658666d74391f5f36b29c4ca1d866a092aac26ffdfa89c8ad634#rd",
    "中国民航大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487490&idx=1&sn=b74b4c31d3529ef10e3c4ec49654198e&chksm=c2f3da7ef5845368f3fefb36aeb8897ef834fead40e71656777b8dc7d05785a4e009c5cf4725#rd",
    "云南大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486038&idx=2&sn=451444bd8632d9842aae8439e2e953fa&chksm=c2f3c02af584493c0ed23849aca6406de5b0bcf37373a8cbe5a828c288b8ca980a631beceaeb#rd",
    "华中师范大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487314&idx=1&sn=b40e7bc0d9c9cc8637f0106b4c4bc116&chksm=c2f3c52ef5844c3893d64205fc881e627545049e6ef3721c8b7d005dcc1ec0491bfecc91fba7#rd",
    "华侨大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487037&idx=1&sn=9f377a5b2530e1e90d8a32f281eff9e6&chksm=c2f3c441f5844d57bf661a3de26b8b7d67ae64363904c1e8df2454343d1e33d8ee0f5b1ef10f#rd",
    "南京工业大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247500394&idx=1&sn=20c0e152e3f9fc4ac791b48bcd9e6f4f&chksm=c2f00816f5878100482de4152c8c938b97ced17d71151f0558b1cd1a71f611dd646707814e0c#rd",
    "天津理工大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487016&idx=1&sn=aa5e91dc2c1c1e7212c4b03e2a98b3fa&chksm=c2f3c454f5844d422e47bfa415f47f2759c9cc54a222e0870ef8a0fab85cefdcdc3bd29d7272#rd",
    "天津科技大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487263&idx=1&sn=78d4f3b9226f29bfb1b6b953f12a13f1&chksm=c2f3c563f5844c75620877dddf32f0bc43d973797c302efebd9672b9e045f8a1973ad9ba1ac5#rd",
    "山东科技大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487089&idx=1&sn=1bdff93aa750f976975d46806dc6aa06&chksm=c2f3c40df5844d1bd7a10929dc4f8b87cfce6906e3c4bd1ebdeea296766057ca626ea084a6e1#rd",
    "山西大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487055&idx=1&sn=169060ce8d0a44388cdc697f2dc0e706&chksm=c2f3c433f5844d25da2ff5c135f60fd9050427c24193da66e049c36d7c348a126cc5adcc657f#rd",
    "广州大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247496781&idx=3&sn=860150d170f3eae75565ecbfb873991c&chksm=c2f03e31f587b72713088f77a4570b944b7bc69f378d3ba2acdc9863a69932255be6f0b6b165#rd",
    "广西大学": null,
    "成都信息工程大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487081&idx=1&sn=e568ffdc9201bd432fe1b45be3ec811e&chksm=c2f3c415f5844d03429a5a141cf268407151b4dafc1be56e626270b9c2805423ce7d117ec3df#rd",
    "昆明理工大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486358&idx=1&sn=b28b4b267362511011e9469788cc163f&chksm=c2f3c1eaf58448fc7cf38f02d46ab248ab34801aa327ce2ad8b21e95d5f4fdd331bb892aaf58#rd",
    "武汉科技大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487193&idx=1&sn=7fe57bc94729b4daa7717bf58af08437&chksm=c2f3c4a5f5844db3d334b4137662c178f82ef91c79363dd572756a9bc52058c10ed8e660bc96#rd",
    "江西理工大学": null,
    "沈阳理工大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247485810&idx=1&sn=bd53371e0383bbd6cd30cd71c48e8b09&chksm=c2f3c30ef5844a183a1f1ae926efbe78641bff1267af5c4b79b3418b2a8d5fd00ab7b4953d5e#rd",
    "沈阳航空航天大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487348&idx=1&sn=c7127eb53f9da157d069cf0acc4002d2&chksm=c2f3c508f5844c1e291d3a7afb38dd364cdcae0d81d0a19d7f057ab904d282afe24579373333#rd",
    "河北科技大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487374&idx=1&sn=5243f3da989ea0fc13841c38ea3fe9ea&chksm=c2f3c5f2f5844ce443a0952f9cef2a6367e64c457322292c8aa76a99689328007d3c00c7c944#rd",
    "河南工业大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487149&idx=1&sn=a0a88af671426d2fc4a97495e9b506c8&chksm=c2f3c4d1f5844dc77f55d0f76463fbd415d2631331517e34071343dd00123d7df2a7d09a3793#rd",
    "河南理工大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247497736&idx=3&sn=ec6d6c584c2ede40286e94cb7434b376&chksm=c2f03274f587bb62c15d37073abd2f01cbd6a052e7fb96715fcdce9aca3583d17758c8ba6709#rd",
    "浙江工业大学": null,
    "浙江理工大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487465&idx=1&sn=9d83f6a3e530ed38f5695124b2c64e96&chksm=c2f3c595f5844c832a1d3b1a567ca435e97e30d45976ed6531db8ed5fc658939e8997b589f7e#rd",
    "湖北工业大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247500638&idx=1&sn=a3bce297b1c9fd7ff759b9aa767b76c2&chksm=c2f00922f5878034c2a94f64f6f0ec917eb03327a5007410e250fa0f790100629de25789089c#rd",
    "燕山大学": null,
    "石家庄铁道大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486698&idx=1&sn=c500d5ab72777fea849e8ca1cc6304a2&chksm=c2f3c696f5844f8061f500e8b70bf5ea21e1ca1a13217cb35f83c0919e7d600f75fe4597cc73#rd",
    "西安理工大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487342&idx=1&sn=4c2e21dea9eb70079fdef0f0854656f8&chksm=c2f3c512f5844c040b3f1e867e7507bd5037e213c3b6fd5a702cb70f3d4557a8a3433ec1bf93#rd",
    "西安石油大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247496738&idx=3&sn=9cda6cf19a8ac5ae2d25a2779365f5cb&chksm=c2f03e5ef587b7486914be7387f116f3d02210b4b42b9009e701cf4911c46bad79dc455cf0c6#rd",
    "贵州大学": null,
    "长春理工大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247485834&idx=1&sn=2438ed9ad0a2ce3bce57867817bd233c&chksm=c2f3c3f6f5844ae044f6d22bb7eb5f0d44a6e69e1d4608a68fdbae7775e3c053067f743ad8be#rd",
    "长沙理工大学": null,
    "中南民族大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487166&idx=1&sn=a72c0621b1bd45379b609cd7fb4aa7af&chksm=c2f3c4c2f5844dd42dbaa1b16f79eebc1168ee85883d0127bc06a1767632a00beba219ebcc65#rd",
    "内蒙古工业大学": null,
    "吉首大学": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247498559&idx=3&sn=48ba893080d80340515a9a304041d3d4&chksm=c2f03143f587b85576556b7c36750cb4c52c07544feed20d4530502cfcc05761193f616bfc85#rd"
  },
  "codeMap": {
    "上海交通大学": [
      "819",
      "874"
    ],
    "华中科技大学": [
      "824"
    ],
    "四川大学": [
      "854"
    ],
    "清华大学": [
      "801",
      "830",
      "832"
    ],
    "东北大学": [
      "841"
    ],
    "东南大学": [
      "820"
    ],
    "中南大学": [
      "853"
    ],
    "北京理工大学": [
      "802",
      "816",
      "826",
      "882",
      "887"
    ],
    "北京航空航天大学": [
      "802",
      "811",
      "873"
    ],
    "北京邮电大学": [
      "804"
    ],
    "南京大学": [
      "851"
    ],
    "南开大学": [
      "807"
    ],
    "厦门大学": [
      "847"
    ],
    "同济大学": [
      "823"
    ],
    "哈尔滨工业大学": [
      "803"
    ],
    "国防科技大学": [
      "831"
    ],
    "复旦大学": [
      "875"
    ],
    "大连海事大学": [
      "807"
    ],
    "大连理工大学": [
      "852"
    ],
    "天津大学": [
      "813",
      "815"
    ],
    "山东大学": [
      "833"
    ],
    "武汉大学": [
      "807"
    ],
    "浙江大学": [
      "842",
      "844",
      "873"
    ],
    "电子科技大学": [
      "858",
      "865"
    ],
    "西北工业大学": [
      "827"
    ],
    "西安交通大学": [
      "815",
      "869"
    ],
    "西安电子科技大学": [
      "811",
      "821",
      "844",
      "892"
    ],
    "重庆大学": [
      "841"
    ],
    "中国科学技术大学": [
      "808",
      "843"
    ],
    "中央民族大学": [
      "852"
    ],
    "北京大学": [
      "810",
      "813"
    ],
    "华东师范大学": [
      "843"
    ],
    "华南理工大学": [
      "811"
    ],
    "上海大学": [
      "829",
      "831"
    ],
    "中国传媒大学": [
      "823"
    ],
    "中国海洋大学": [
      "819",
      "863"
    ],
    "中国科学院大学": [
      "859",
      "892"
    ],
    "华北电力大学": [
      "813"
    ],
    "南京理工大学": [
      "818",
      "891"
    ],
    "南京航空航天大学": [
      "821",
      "823",
      "878"
    ],
    "南昌大学": [
      "811"
    ],
    "合肥工业大学": [
      "833",
      "856",
      "865"
    ],
    "哈尔滨工程大学": [
      "815",
      "810"
    ],
    "太原理工大学": [
      "801"
    ],
    "武汉理工大学": [
      "855"
    ],
    "湖南大学": [
      "828"
    ],
    "福州大学": [
      "866"
    ],
    "西安邮电大学": [
      "824"
    ],
    "东北林业大学": [
      "829"
    ],
    "中国地质大学(北京)": [
      "845"
    ],
    "中国地质大学(武汉)": [
      "894"
    ],
    "中国石油大学(北京)": [
      "853"
    ],
    "中国石油大学(华东)": [
      "830"
    ],
    "北京化工大学": [
      "843"
    ],
    "北京工业大学": [
      "822"
    ],
    "华中农业大学": [
      "876"
    ],
    "华北电力大学(保定)": [
      "832"
    ],
    "华南师范大学": [
      "837"
    ],
    "安徽大学": [
      "827",
      "842",
      "830",
      "841"
    ],
    "湖南师范大学": [
      "898"
    ],
    "西北大学": [
      "843"
    ],
    "西南交通大学": [
      "824"
    ],
    "中国矿业大学": [
      "811",
      "824"
    ],
    "内蒙古大学": [
      "869"
    ],
    "北方工业大学": [
      "871"
    ],
    "华东理工大学": [
      "814"
    ],
    "天津工业大学": [
      "812"
    ],
    "宁夏大学": [
      "820"
    ],
    "宁波大学": [
      "829"
    ],
    "广东工业大学": [
      "809"
    ],
    "新疆大学": [
      "827"
    ],
    "杭州电子科技大学": [
      "843",
      "845"
    ],
    "桂林电子科技大学": [
      "806"
    ],
    "河海大学": [
      "863"
    ],
    "海南大学": [
      "838",
      "888"
    ],
    "深圳大学": [
      "802"
    ],
    "苏州大学": [
      "837",
      "839",
      "863"
    ],
    "西南大学": [
      "844"
    ],
    "郑州大学": [
      "829"
    ],
    "重庆邮电大学": [
      "801"
    ],
    "长安大学": [
      "814"
    ],
    "陕西师范大学": [
      "831"
    ],
    "中国人民公安大学": [
      "824"
    ],
    "南京信息工程大学": [
      "811"
    ],
    "成都理工大学": [
      "826"
    ],
    "湘潭大学": [
      "835"
    ],
    "上海理工大学": [
      "871"
    ],
    "中北大学": [
      "808"
    ],
    "中原工学院": [
      "819"
    ],
    "中国计量大学": [
      "805"
    ],
    "云南民族大学": [
      "818"
    ],
    "内蒙古师范大学": [
      "830"
    ],
    "内蒙古科技大学": [
      "808"
    ],
    "北京信息科技大学": [
      "802"
    ],
    "北京电子科技学院": [
      "831"
    ],
    "华东交通大学": [
      "816"
    ],
    "华北理工大学": [
      "816"
    ],
    "南京工程学院": [
      "817"
    ],
    "吉林大学": [
      "806"
    ],
    "哈尔滨理工大学": [
      "813"
    ],
    "大连交通大学": [
      "806"
    ],
    "天津师范大学": [
      "804"
    ],
    "太原科技大学": [
      "826"
    ],
    "安徽农业大学": [
      "859"
    ],
    "安徽工程大学": [
      "813"
    ],
    "山东农业大学": [
      "809"
    ],
    "山东师范大学": [
      "850"
    ],
    "广西师范大学": [
      "846"
    ],
    "广西科技大学": [
      "809"
    ],
    "扬州大学": [
      "875"
    ],
    "杭州师范大学": [
      "839"
    ],
    "武汉工程大学": [
      "834"
    ],
    "武汉轻工大学": [
      "808"
    ],
    "江西师范大学": [
      "887"
    ],
    "沈阳工业大学": [
      "807"
    ],
    "河北工程大学": [
      "807"
    ],
    "济南大学": [
      "844"
    ],
    "浙江工商大学": [
      "822"
    ],
    "海军工程大学": [
      "818"
    ],
    "湖北大学": [
      "813"
    ],
    "潍坊学院": [
      "801"
    ],
    "火箭军工程大学": [
      "843"
    ],
    "福建师范大学": [
      "834",
      "835"
    ],
    "西北师范大学": [
      "844"
    ],
    "西南民族大学": [
      "824"
    ],
    "西安工业大学": [
      "811"
    ],
    "西安工程大学": [
      "812"
    ],
    "长春工业大学": [
      "807"
    ],
    "集美大学": [
      "823"
    ],
    "青岛理工大学": [
      "812"
    ],
    "青岛科技大学": [
      "852"
    ],
    "鲁东大学": [
      "855"
    ],
    "黑龙江大学": [
      "888"
    ],
    "黑龙江科技大学": [
      "816"
    ],
    "三峡大学": [
      "837"
    ],
    "上海师范大学": [
      "874"
    ],
    "上海海事大学": [
      "806"
    ],
    "东北电力大学": [
      "832"
    ],
    "东北石油大学": [
      "818",
      "823"
    ],
    "东华大学": [
      "836"
    ],
    "中国民航大学": [
      "806"
    ],
    "云南大学": [
      "847"
    ],
    "华中师范大学": [
      "838"
    ],
    "华侨大学": [
      "823"
    ],
    "南京工业大学": [
      "817"
    ],
    "天津理工大学": [
      "822"
    ],
    "天津科技大学": [
      "822"
    ],
    "山东科技大学": [
      "822"
    ],
    "山西大学": [
      "841"
    ],
    "广州大学": [
      "823"
    ],
    "广西大学": [
      "816"
    ],
    "成都信息工程大学": [
      "803"
    ],
    "昆明理工大学": [
      "817"
    ],
    "武汉科技大学": [
      "813"
    ],
    "江西理工大学": [
      "812"
    ],
    "沈阳理工大学": [
      "810"
    ],
    "沈阳航空航天大学": [
      "808"
    ],
    "河北科技大学": [
      "822"
    ],
    "河南工业大学": [
      "827"
    ],
    "河南理工大学": [
      "865"
    ],
    "浙江工业大学": [
      "830"
    ],
    "浙江理工大学": [
      "847"
    ],
    "湖北工业大学": [
      "823"
    ],
    "燕山大学": [
      "807",
      "808"
    ],
    "石家庄铁道大学": [
      "894"
    ],
    "西安理工大学": [
      "810",
      "845"
    ],
    "西安石油大学": [
      "810"
    ],
    "贵州大学": [
      "832"
    ],
    "长春理工大学": [
      "808"
    ],
    "长沙理工大学": [
      "822",
      "832"
    ],
    "中南民族大学": [
      "833",
      "856"
    ],
    "内蒙古工业大学": [
      "809"
    ],
    "吉首大学": [
      "826"
    ]
  },
  "allRows": [
    {
      "序号": "1",
      "学校": "上海交通大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "819",
      "考试科目": "信号与系统 + 数字信号处理",
      "难度梯度": "难度较高",
      "重点勾画链接": null
    },
    {
      "序号": "2",
      "学校": "上海交通大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "874",
      "考试科目": "信号与系统 + 通信原理",
      "难度梯度": "难度较高",
      "重点勾画链接": null
    },
    {
      "序号": "4",
      "学校": "华中科技大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "824",
      "考试科目": "信号与系统",
      "难度梯度": "难度较高",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486119&idx=1&sn=ba848ea3e1c50e88ae455f0567499c36&chksm=c2f3c0dbf58449cd29aefd916366310f2f7cd289ea6a4e6bd57ce828d2f9add519a17dc90b23#rd"
    },
    {
      "序号": "5",
      "学校": "四川大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "854",
      "考试科目": "信号与系统",
      "难度梯度": "难度较高",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487075&idx=1&sn=e96582909e0a57992c2d24c1af066ca8&chksm=c2f3c41ff5844d09060943a75c736db11ab5eafe7aefa0d747fac8a1a3b6aceae9c4b7a4ee80#rd"
    },
    {
      "序号": "6",
      "学校": "清华大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "801",
      "考试科目": "信号与系统 + 数字信号处理",
      "难度梯度": "难度较高",
      "重点勾画链接": null
    },
    {
      "序号": "7",
      "学校": "清华大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "830",
      "考试科目": "信号与系统 + 通信原理",
      "难度梯度": "难度较高",
      "重点勾画链接": null
    },
    {
      "序号": "8",
      "学校": "清华大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "832",
      "考试科目": "信号与系统 + 通信原理",
      "难度梯度": "难度较高",
      "重点勾画链接": null
    },
    {
      "序号": "9",
      "学校": "东北大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "841",
      "考试科目": "信号与系统 + 通信原理",
      "难度梯度": "中等偏难",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486401&idx=1&sn=b5fbb15cafe34cb3984ffaff47aef99a&chksm=c2f3c1bdf58448ab743ecad9b33b10f900456a8257738032d6fb2ba84081c94d95b7ab74f9bc#rd"
    },
    {
      "序号": "10",
      "学校": "东南大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "820",
      "考试科目": "信号与系统 + 数字电路",
      "难度梯度": "中等偏难",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486775&idx=1&sn=56bec9dbcd746a99eb450b79503300c7&chksm=c2f3c74bf5844e5d1ec87b58fec35ef87b97ea82bcc8ead44b0ce8d362cfbccd338de7040d08#rd"
    },
    {
      "序号": "11",
      "学校": "中南大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "853",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏难",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247498655&idx=3&sn=5f1a9ac5159305a7b1c911d41b03bd05&chksm=c2f031e3f587b8f52634f2c48bfa2b8f516b2e0aa10de70ba0f9ee22fe08ebbc4ac321d2e1f2#rd"
    },
    {
      "序号": "12",
      "学校": "北京理工大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "802",
      "考试科目": "信号与系统 + 数字信号处理",
      "难度梯度": "中等偏难",
      "重点勾画链接": null
    },
    {
      "序号": "13",
      "学校": "北京理工大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "816",
      "考试科目": "信号与系统 + 数字信号处理",
      "难度梯度": "中等偏难",
      "重点勾画链接": null
    },
    {
      "序号": "14",
      "学校": "北京理工大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "826",
      "考试科目": "信号与系统 + 数字信号处理",
      "难度梯度": "中等偏难",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487415&idx=1&sn=8c467783e68ea3c73fd60b551c94e912&chksm=c2f3c5cbf5844cddc96238a2684d9575fe82c2ea3348d3bf0c0153acc4380263d439b87db559#rd"
    },
    {
      "序号": "15",
      "学校": "北京理工大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "882",
      "考试科目": "信号与系统 + 通信原理",
      "难度梯度": "中等偏难",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486345&idx=1&sn=2f27091c6b65f64cef4b2b9721e1b6ec&chksm=c2f3c1f5f58448e31a5eca7e13145fa07c0b4641bebe1fdfcb59cbb75110614e48eafb19c541#rd"
    },
    {
      "序号": "16",
      "学校": "北京理工大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "887",
      "考试科目": "信号与系统 + 通信原理",
      "难度梯度": "中等偏难",
      "重点勾画链接": null
    },
    {
      "序号": "17",
      "学校": "北京航空航天大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "802",
      "考试科目": "信号与系统 + 通信原理",
      "难度梯度": "中等偏难",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487078&idx=1&sn=d08abf327db7c2138193e839631eee24&chksm=c2f3c41af5844d0cc141ab5973655f390f6ae6888393669ffdbc11d9669d43312848572da64d#rd"
    },
    {
      "序号": "18",
      "学校": "北京航空航天大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "811",
      "考试科目": "信号与系统 + 通信原理",
      "难度梯度": "中等偏难",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487078&idx=1&sn=d08abf327db7c2138193e839631eee24&chksm=c2f3c41af5844d0cc141ab5973655f390f6ae6888393669ffdbc11d9669d43312848572da64d#rd"
    },
    {
      "序号": "19",
      "学校": "北京航空航天大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "873",
      "考试科目": "信号与系统 + 通信原理",
      "难度梯度": "中等偏难",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487078&idx=1&sn=d08abf327db7c2138193e839631eee24&chksm=c2f3c41af5844d0cc141ab5973655f390f6ae6888393669ffdbc11d9669d43312848572da64d#rd"
    },
    {
      "序号": "20",
      "学校": "北京邮电大学",
      "学校层次": "四邮四电",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "804",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏难",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487060&idx=1&sn=13de7a52a9d6968ece9936892a3e5d55&chksm=c2f3c428f5844d3e70d34d3f60863979a346db0684b32561133843b640fa0a1b10a571038398#rd"
    },
    {
      "序号": "21",
      "学校": "南京大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "851",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏难",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247485847&idx=1&sn=03600a2f55ef79d7e9808bc5af13da47&chksm=c2f3c3ebf5844afd487d49bd75dadeda716beafca22212fc41f72182cc16fdd78e962862c1e3#rd"
    },
    {
      "序号": "22",
      "学校": "南开大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "807",
      "考试科目": "信号与系统 + 通信原理",
      "难度梯度": "中等偏难",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487223&idx=1&sn=6ad7da6e219a09ef0f16c0f749ddec7a&chksm=c2f3c48bf5844d9d19c3828f7215edb4ea60616fe370a4fccab29befe2178a94e75ef7f3c3cc#rd"
    },
    {
      "序号": "23",
      "学校": "厦门大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "847",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏难",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487231&idx=1&sn=d57f519e7dc6af8135ded287a44ddb69&chksm=c2f3c483f5844d95481a2ce2d33ca21188e861a0502d8d6e48db8e8fb6952219e8175d75cb65#rd"
    },
    {
      "序号": "24",
      "学校": "同济大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "823",
      "考试科目": "信号与系统 + 通信原理",
      "难度梯度": "中等偏难",
      "重点勾画链接": null
    },
    {
      "序号": "25",
      "学校": "哈尔滨工业大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "803",
      "考试科目": "信号与系统 + 数字电路",
      "难度梯度": "中等偏难",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486135&idx=1&sn=b01e44bfcc22c423f4bfd2e9a721be3e&chksm=c2f3c0cbf58449dde1b46c004ebc67f9206d1c6ca7b772f42df5fc15c98abd2b16ac35f6e6ee#rd"
    },
    {
      "序号": "26",
      "学校": "国防科技大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "831",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏难",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247498919&idx=3&sn=1ddab3cf04908c7c80b6ea4191338352&chksm=c2f036dbf587bfcd6743e78b3e5e538ebc46934788f3f211e5ba8d4231497205a2f4cc8c0e59#rd"
    },
    {
      "序号": "27",
      "学校": "复旦大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "875",
      "考试科目": "信号与系统 + 通信原理",
      "难度梯度": "中等偏难",
      "重点勾画链接": null
    },
    {
      "序号": "28",
      "学校": "大连海事大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "807",
      "考试科目": "信号与系统 + 电路",
      "难度梯度": "中等偏难",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247485865&idx=1&sn=b5beefde6d019ea8daa5f361ee161c7e&chksm=c2f3c3d5f5844ac368775a538b7c522d388e558cbcf9568805770ac06c5e078d92cefbb996cb#rd"
    },
    {
      "序号": "29",
      "学校": "大连理工大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "852",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏难",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487008&idx=1&sn=a44eb9da58bcc865daa2ab13c2e97427&chksm=c2f3c45cf5844d4a071280013d04b7cd9e300ed4c5397e15e96061af938e0533ae1876547932#rd"
    },
    {
      "序号": "30",
      "学校": "天津大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "813",
      "考试科目": "信号与系统 + 通信原理",
      "难度梯度": "中等偏难",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486593&idx=1&sn=57c40b048d20f34dd3e3efd42d8fb408&chksm=c2f3c6fdf5844feb3970d0fb43090513383462e0835b4c32de25e31bb1ca478db1448526bc48#rd"
    },
    {
      "序号": "31",
      "学校": "天津大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "815",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏难",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486593&idx=1&sn=57c40b048d20f34dd3e3efd42d8fb408&chksm=c2f3c6fdf5844feb3970d0fb43090513383462e0835b4c32de25e31bb1ca478db1448526bc48#rd"
    },
    {
      "序号": "32",
      "学校": "山东大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "833",
      "考试科目": "信号与系统 + 数字信号处理",
      "难度梯度": "中等偏难",
      "重点勾画链接": null
    },
    {
      "序号": "33",
      "学校": "武汉大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "807",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏难",
      "重点勾画链接": null
    },
    {
      "序号": "34",
      "学校": "浙江大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "842",
      "考试科目": "信号与系统 + 数字电路",
      "难度梯度": "中等偏难",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487026&idx=1&sn=2c049d48a22615eb248e66a40b5b3020&chksm=c2f3c44ef5844d58ac43267a67975cb68d1cbc4902b06da521a7c4ed429bbd4d8c9c310baca3#rd"
    },
    {
      "序号": "35",
      "学校": "浙江大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "844",
      "考试科目": "信号与系统 + 数字电路",
      "难度梯度": "中等偏难",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247498819&idx=3&sn=80216211bde2ce189ba75567223c9696&chksm=c2f0363ff587bf295910b22aab347bed0197d389d39ff1895e34ec2c3b49092fb2bdd155afd4#rd"
    },
    {
      "序号": "36",
      "学校": "浙江大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "873",
      "考试科目": "信号与系统 + 数字电路",
      "难度梯度": "中等偏难",
      "重点勾画链接": null
    },
    {
      "序号": "37",
      "学校": "电子科技大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "858",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏难",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247485740&idx=1&sn=443456b109315a78aa90dfde21bbfe29&chksm=c2f3c350f5844a46369d86edacd8d5ea33c7bd005d2381cde516e81a335cf993992d913c65b3#rd"
    },
    {
      "序号": "38",
      "学校": "电子科技大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "865",
      "考试科目": "信号与系统 + 通信原理",
      "难度梯度": "中等偏难",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247485740&idx=1&sn=443456b109315a78aa90dfde21bbfe29&chksm=c2f3c350f5844a46369d86edacd8d5ea33c7bd005d2381cde516e81a335cf993992d913c65b3#rd"
    },
    {
      "序号": "39",
      "学校": "西北工业大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "827",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏难",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247485827&idx=1&sn=7244b04bf69dd9592d7d03d6d239d8ef&chksm=c2f3c3fff5844ae9acb8ab303b080ec3146b4c910ea75a9bae72fe49cb8b6bc6ab008dc62e2c#rd"
    },
    {
      "序号": "40",
      "学校": "西安交通大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "815",
      "考试科目": "信号与系统 + 数字信号处理",
      "难度梯度": "中等偏难",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486110&idx=1&sn=41f9f3fda3a5d4c9cc044bc2d7ecc73b&chksm=c2f3c0e2f58449f4321ebed6dfa0d19856e405a01167765d5538392b7b8ec94331c394221799#rd"
    },
    {
      "序号": "42",
      "学校": "西安交通大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "869",
      "考试科目": "信号与系统 + 数字信号处理",
      "难度梯度": "中等偏难",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486110&idx=1&sn=41f9f3fda3a5d4c9cc044bc2d7ecc73b&chksm=c2f3c0e2f58449f4321ebed6dfa0d19856e405a01167765d5538392b7b8ec94331c394221799#rd"
    },
    {
      "序号": "44",
      "学校": "西安电子科技大学",
      "学校层次": "四邮四电",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "811",
      "考试科目": "信号与系统 + 电路",
      "难度梯度": "中等偏难",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247485651&idx=1&sn=6dd44ebe64e804c0ca547e87d335beb6&chksm=c2f3c2aff5844bb9327bbb9478999e98d49e77287a001b5e8aebf0d0854126ac900da5731ad9#rd"
    },
    {
      "序号": "45",
      "学校": "西安电子科技大学",
      "学校层次": "四邮四电",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "821",
      "考试科目": "信号与系统 + 电路",
      "难度梯度": "中等偏难",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247485651&idx=1&sn=6dd44ebe64e804c0ca547e87d335beb6&chksm=c2f3c2aff5844bb9327bbb9478999e98d49e77287a001b5e8aebf0d0854126ac900da5731ad9#rd"
    },
    {
      "序号": "46",
      "学校": "重庆大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "841",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏难",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487160&idx=1&sn=1436e7a4d2e0c8d47f9b450ae1fc1803&chksm=c2f3c4c4f5844dd2c4524b0945b2f70044c0a532bb444621e53a89aeba227eeedfe87308ee1e#rd"
    },
    {
      "序号": "47",
      "学校": "中国科学技术大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "808",
      "考试科目": "信号与系统 + 通信原理",
      "难度梯度": "中等偏难",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487052&idx=1&sn=f9b46659a7363600609c5f27431fdbf0&chksm=c2f3c430f5844d26e5eb5a6260eea258f3f59b226d6282dc0a19450d1d3e2e16866b05735396#rd"
    },
    {
      "序号": "48",
      "学校": "中国科学技术大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "843",
      "考试科目": "信号与系统 + 数字信号处理",
      "难度梯度": "中等偏难",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487052&idx=1&sn=f9b46659a7363600609c5f27431fdbf0&chksm=c2f3c430f5844d26e5eb5a6260eea258f3f59b226d6282dc0a19450d1d3e2e16866b05735396#rd"
    },
    {
      "序号": "49",
      "学校": "中央民族大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "852",
      "考试科目": "信号与系统 + 通信原理",
      "难度梯度": "中等偏难",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487142&idx=1&sn=0f2a30afd256bce7c52bd8a973a2dc6b&chksm=c2f3c4daf5844dcc5a174255d7631e6c8d41cdb18477eaf8d1ab78a66ce18d4f8aad30aa0fad#rd"
    },
    {
      "序号": "50",
      "学校": "北京大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "810",
      "考试科目": "信号与系统 + 通信原理",
      "难度梯度": "中等偏难",
      "重点勾画链接": null
    },
    {
      "序号": "51",
      "学校": "华东师范大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "843",
      "考试科目": "信号与系统 + 通信原理",
      "难度梯度": "中等偏难",
      "重点勾画链接": null
    },
    {
      "序号": "52",
      "学校": "华南理工大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "811",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏难",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486879&idx=1&sn=377e82612633cda32e06715d9132631c&chksm=c2f3c7e3f5844ef593d151a0d1ed7df7e1868b86c30046551370371a5e374950b1bcdca5edfb#rd"
    },
    {
      "序号": "53",
      "学校": "上海大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "829",
      "考试科目": "信号与系统 + 电路",
      "难度梯度": "中等难度",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487087&idx=1&sn=edb19bc24152b4e7b7282cf4f0ed48b6&chksm=c2f3c413f5844d052d417713bc01906d2f87a8c983be82e7718937625030f0921dc234042093#rd"
    },
    {
      "序号": "54",
      "学校": "上海大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "831",
      "考试科目": "信号与系统",
      "难度梯度": "中等难度",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487087&idx=1&sn=edb19bc24152b4e7b7282cf4f0ed48b6&chksm=c2f3c413f5844d052d417713bc01906d2f87a8c983be82e7718937625030f0921dc234042093#rd"
    },
    {
      "序号": "55",
      "学校": "中国传媒大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "823",
      "考试科目": "信号与系统",
      "难度梯度": "中等难度",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487480&idx=1&sn=df005da95f12735d52fe83fdcf4dbc17&chksm=c2f3c584f5844c9248b4ccce0e47de126b1c532096a02820cbe0c9aac204421e4a4b8b006e47#rd"
    },
    {
      "序号": "56",
      "学校": "中国海洋大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "819",
      "考试科目": "信号与系统 + 数字信号处理",
      "难度梯度": "中等难度",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487034&idx=1&sn=d9c9b0ce03b9aa1e96a19f4b0171659b&chksm=c2f3c446f5844d506c56d756bc372cfa85d1c0c729429898572165cc42bcdb4c2f9396a5d939#rd"
    },
    {
      "序号": "57",
      "学校": "中国海洋大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "863",
      "考试科目": "信号与系统 + 通信原理",
      "难度梯度": "中等难度",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487034&idx=1&sn=d9c9b0ce03b9aa1e96a19f4b0171659b&chksm=c2f3c446f5844d506c56d756bc372cfa85d1c0c729429898572165cc42bcdb4c2f9396a5d939#rd"
    },
    {
      "序号": "58",
      "学校": "中国科学院大学",
      "学校层次": "双一流高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "859",
      "考试科目": "信号与系统",
      "难度梯度": "中等难度",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487063&idx=1&sn=af46318a9e40b1e1118480a267fa0cdf&chksm=c2f3c42bf5844d3d8fe54942079f8c2442a4b8ff015c9eba6c4c3183ac2416e4a1f449206f8a#rd"
    },
    {
      "序号": "59",
      "学校": "中国科学院大学",
      "学校层次": "双一流高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "892",
      "考试科目": "信号与系统 + 通信原理",
      "难度梯度": "中等难度",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487063&idx=1&sn=af46318a9e40b1e1118480a267fa0cdf&chksm=c2f3c42bf5844d3d8fe54942079f8c2442a4b8ff015c9eba6c4c3183ac2416e4a1f449206f8a#rd"
    },
    {
      "序号": "60",
      "学校": "华北电力大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "813",
      "考试科目": "信号与系统",
      "难度梯度": "中等难度",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487217&idx=1&sn=e9eb5e27cf443df16b77813eec08a95b&chksm=c2f3c48df5844d9b0dca137ee8d25935938c1e4e91831c3da8f42064e1ef0bdc5abffe8b10bf#rd"
    },
    {
      "序号": "61",
      "学校": "南京理工大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "818",
      "考试科目": "信号与系统 + 数字电路",
      "难度梯度": "中等难度",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487279&idx=1&sn=f8c7ecb0a67d40a97b20ee1759879a92&chksm=c2f3c553f5844c4550ad7fb0a148c3dcb3f91ba76e52c6840df3a1ccb5cdfcb5b4621d8178bb#rd"
    },
    {
      "序号": "62",
      "学校": "南京理工大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "891",
      "考试科目": "信号与系统 + 通信原理",
      "难度梯度": "中等难度",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487279&idx=1&sn=f8c7ecb0a67d40a97b20ee1759879a92&chksm=c2f3c553f5844c4550ad7fb0a148c3dcb3f91ba76e52c6840df3a1ccb5cdfcb5b4621d8178bb#rd"
    },
    {
      "序号": "63",
      "学校": "南京航空航天大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "821",
      "考试科目": "信号与系统 + 数字信号处理",
      "难度梯度": "中等难度",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487152&idx=1&sn=896e2de0827d1dda6145860aceb2e80f&chksm=c2f3c4ccf5844ddab95a6d614b703a85bc315c80a1e69800773445f5798ef4d2a0ce2a017598#rd"
    },
    {
      "序号": "64",
      "学校": "南京航空航天大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "823",
      "考试科目": "信号与系统 + 通信原理",
      "难度梯度": "中等难度",
      "重点勾画链接": null
    },
    {
      "序号": "65",
      "学校": "南京航空航天大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "878",
      "考试科目": "信号与系统 + 数字电路",
      "难度梯度": "中等难度",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487333&idx=1&sn=096dc887002524aa6d67796cb5e9bce7&chksm=c2f3c519f5844c0f3b7bbb42e2c5f1c73618e43b392a6bb0ab25cdb4c41cd4b9f021f66deaa5#rd"
    },
    {
      "序号": "66",
      "学校": "南昌大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "811",
      "考试科目": "信号与系统",
      "难度梯度": "中等难度",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486127&idx=1&sn=9d59f1ea6f2e46c00da9c636761d8a09&chksm=c2f3c0d3f58449c51eb8517ead3cd3f5edc0df44cf9aa52fcfd8489ce52fc1f79a143df96778#rd"
    },
    {
      "序号": "67",
      "学校": "合肥工业大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "833",
      "考试科目": "信号与系统 + 数字信号处理",
      "难度梯度": "中等难度",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487092&idx=1&sn=9797e044da27213a2d7b9c0c0b0f8ef8&chksm=c2f3c408f5844d1e66002fc67403c66acfd004ad6f5a18f1e758ba8b717f50de8f504c661234#rd"
    },
    {
      "序号": "68",
      "学校": "合肥工业大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "856",
      "考试科目": "信号与系统 + 数字信号处理",
      "难度梯度": "中等难度",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487356&idx=1&sn=bbc131bf60c5790efa69c67fa8828f1a&chksm=c2f3c500f5844c1632b60b0baf381e3baaaa6bdbb8eabcd3fdacc1a4351d2bd3f23ad7b9075f#rd"
    },
    {
      "序号": "69",
      "学校": "合肥工业大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "865",
      "考试科目": "信号与系统 + 通信原理",
      "难度梯度": "中等难度",
      "重点勾画链接": null
    },
    {
      "序号": "70",
      "学校": "哈尔滨工程大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "815",
      "考试科目": "信号与系统 + 电路",
      "难度梯度": "中等难度",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486648&idx=1&sn=de3b91dc6d5b050c38518da32b18066f&chksm=c2f3c6c4f5844fd2df36f4b4aab2425fb54e85962f85c19992af42eaf4b4ec7ea67fc87c7389#rd"
    },
    {
      "序号": "71",
      "学校": "太原理工大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "801",
      "考试科目": "信号与系统 + 数字电路",
      "难度梯度": "中等难度",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487020&idx=1&sn=bdcf910243c78e135ad1838d6f2ceff5&chksm=c2f3c450f5844d4674a45bcd29bd049e809cbaf85d9aab131de144fff06cd83f8a350cd61b4c#rd"
    },
    {
      "序号": "72",
      "学校": "武汉理工大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "855",
      "考试科目": "信号与系统",
      "难度梯度": "中等难度",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487031&idx=1&sn=a906ca162077c6817cedb6c0a00b8a5a&chksm=c2f3c44bf5844d5d357a4dfb1a29b98751893f632d33f0ac56f2eb511ab6fc1cb849d283eea9#rd"
    },
    {
      "序号": "73",
      "学校": "湖南大学",
      "学校层次": "985高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "828",
      "考试科目": "信号与系统",
      "难度梯度": "中等难度",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247499074&idx=3&sn=4dd5ae3961482160b28781aef419e9cf&chksm=c2f0373ef587be289717864419f061f49f456d46cd6ec0729ff9e6941d53dd50d032ff4942dd#rd"
    },
    {
      "序号": "74",
      "学校": "福州大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "866",
      "考试科目": "信号与系统",
      "难度梯度": "中等难度",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247485793&idx=1&sn=bcb0120a704b7d2e78cf451cd2b4bc87&chksm=c2f3c31df5844a0b81a5d4e347ed524c14d1017dfbd6d4b808a5e6ce7da2b4a564c518ad4c9f#rd"
    },
    {
      "序号": "75",
      "学校": "西安电子科技大学",
      "学校层次": "四邮四电",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "844",
      "考试科目": "信号与系统",
      "难度梯度": "中等难度",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247499005&idx=3&sn=73008a7383c2f03081bb9b042220d2d8&chksm=c2f03681f587bf979e264ea1a80ce6d7e7d05b8593c8839867ffc2e838155f47e111bb98ce90#rd"
    },
    {
      "序号": "76",
      "学校": "西安电子科技大学",
      "学校层次": "四邮四电",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "892",
      "考试科目": "信号与系统",
      "难度梯度": "中等难度",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486143&idx=1&sn=6278732aeaeb0e0c7bdb090c85eb02ad&chksm=c2f3c0c3f58449d508f33d23b16f819f22ae8db62f9b5f4b4e1278dda797975f7a82988cfb2c#rd"
    },
    {
      "序号": "77",
      "学校": "西安邮电大学",
      "学校层次": "四邮四电",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "824",
      "考试科目": "信号与系统",
      "难度梯度": "中等难度",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486102&idx=1&sn=ea430a10eaaf6c678b1ef821315fd6a7&chksm=c2f3c0eaf58449fcc87c8a0cd020259be202e7efdf8ed5567e93f9b0bd470ea9bf1172cce0e1#rd"
    },
    {
      "序号": "78",
      "学校": "东北林业大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "829",
      "考试科目": "信号与系统 + 数字电路",
      "难度梯度": "中等难度",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487443&idx=1&sn=b481ac132de86ee15564b4bd348f1ea3&chksm=c2f3c5aff5844cb960e9c81f4a4c334a5b079073c95eea48c6162eca9b13445ceecf07f605b1#rd"
    },
    {
      "序号": "79",
      "学校": "中国地质大学(北京)",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "845",
      "考试科目": "信号与系统 + 数字信号处理",
      "难度梯度": "中等难度",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247485895&idx=1&sn=6b49e8f926aec46c7008d85f6aa5e754&chksm=c2f3c3bbf5844aad5b27b9d011f30d66d0b838be0f6f19af302bd69ff9c60f0081aabf69cc67#rd"
    },
    {
      "序号": "80",
      "学校": "中国地质大学(武汉)",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "894",
      "考试科目": "信号与系统 + 电路",
      "难度梯度": "中等难度",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487023&idx=1&sn=35246ac2ae660025d7e344f48338a079&chksm=c2f3c453f5844d45ec4031087dc696916ee768561cc3e88af70c0ea80b8c1a42eefe80251acb#rd"
    },
    {
      "序号": "81",
      "学校": "中国石油大学(北京)",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "853",
      "考试科目": "信号与系统 + 数字信号处理",
      "难度梯度": "中等难度",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247498768&idx=3&sn=32ca34a90dea01cd1ef45acdfed20679&chksm=c2f0366cf587bf7a254162883b29a11805957b7229f7069b88ae8a6104830d139783ac73c8cf#rd"
    },
    {
      "序号": "82",
      "学校": "中国石油大学(华东)",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "830",
      "考试科目": "信号与系统",
      "难度梯度": "中等难度",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247485864&idx=1&sn=69a14266e193eed96883e1767fbe656d&chksm=c2f3c3d4f5844ac2d4dc513b7a6ae4a0ba5c7540f62e4581c9c7073b0f50ee86f4ea1fa84631#rd"
    },
    {
      "序号": "83",
      "学校": "北京化工大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "843",
      "考试科目": "信号与系统",
      "难度梯度": "中等难度",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247500961&idx=1&sn=7e2b397a1c06c99f3e5ab02a958d2b54&chksm=c2f00eddf58787cb1dac572c612bcca9a62df4d1514a89b6859de0e808ef19713f4ffbccf34a#rd"
    },
    {
      "序号": "84",
      "学校": "北京大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "813",
      "考试科目": "信号与系统 + 通信原理",
      "难度梯度": "中等难度",
      "重点勾画链接": null
    },
    {
      "序号": "85",
      "学校": "北京工业大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "822",
      "考试科目": "信号与系统",
      "难度梯度": "中等难度",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487066&idx=1&sn=2f9a4960f4bf3974715bd9b1237dbce7&chksm=c2f3c426f5844d30dbeaeb97902b290ee9ec5dd8bdc433eb1b2c86cc77627ccc605421a57df2#rd"
    },
    {
      "序号": "86",
      "学校": "华中农业大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "876",
      "考试科目": "信号与系统",
      "难度梯度": "中等难度",
      "重点勾画链接": null
    },
    {
      "序号": "87",
      "学校": "华北电力大学(保定)",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "832",
      "考试科目": "信号与系统",
      "难度梯度": "中等难度",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487217&idx=1&sn=e9eb5e27cf443df16b77813eec08a95b&chksm=c2f3c48df5844d9b0dca137ee8d25935938c1e4e91831c3da8f42064e1ef0bdc5abffe8b10bf#rd"
    },
    {
      "序号": "88",
      "学校": "华南师范大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "837",
      "考试科目": "信号与系统",
      "难度梯度": "中等难度",
      "重点勾画链接": null
    },
    {
      "序号": "89",
      "学校": "安徽大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "827",
      "考试科目": "信号与系统 + 数字信号处理",
      "难度梯度": "中等难度",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487288&idx=1&sn=3a0f44d6bccdc0b09b57594d29801849&chksm=c2f3c544f5844c5297f388be84db8455533cac85f25aa06ebe9db49a0bb5322612d7700c7d12#rd"
    },
    {
      "序号": "90",
      "学校": "安徽大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "842",
      "考试科目": "信号与系统 + 通信原理",
      "难度梯度": "中等难度",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487288&idx=1&sn=3a0f44d6bccdc0b09b57594d29801849&chksm=c2f3c544f5844c5297f388be84db8455533cac85f25aa06ebe9db49a0bb5322612d7700c7d12#rd"
    },
    {
      "序号": "91",
      "学校": "湖南师范大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "898",
      "考试科目": "信号与系统",
      "难度梯度": "中等难度",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247500556&idx=1&sn=b4b87abcf517644319676a0d6ba4b421&chksm=c2f00970f5878066363d34426f5624cb4db39cdf273441f262e4265997414db7d22c5dcec863#rd"
    },
    {
      "序号": "92",
      "学校": "西北大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "843",
      "考试科目": "信号与系统 + 通信原理",
      "难度梯度": "中等难度",
      "重点勾画链接": null
    },
    {
      "序号": "93",
      "学校": "西南交通大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "824",
      "考试科目": "信号与系统",
      "难度梯度": "中等难度",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486329&idx=2&sn=8e2a3cde1ea2ded477a68768e6e2c72d&chksm=c2f3c105f5844813975786f64ee710507df798125a2287b24d8f109caeb2872ba7cfdf2fd43b#rd"
    },
    {
      "序号": "94",
      "学校": "中国矿业大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "811",
      "考试科目": "信号与系统 + 通信原理",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487397&idx=1&sn=58abc430bc0e44b6d7c04980b79aa089&chksm=c2f3c5d9f5844ccf635b08c53848d35db95ff9aa161896a2a977aa0134ce8307a693731ad287#rd"
    },
    {
      "序号": "95",
      "学校": "中国矿业大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "824",
      "考试科目": "信号与系统 + 通信原理",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487397&idx=1&sn=58abc430bc0e44b6d7c04980b79aa089&chksm=c2f3c5d9f5844ccf635b08c53848d35db95ff9aa161896a2a977aa0134ce8307a693731ad287#rd"
    },
    {
      "序号": "96",
      "学校": "内蒙古大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "869",
      "考试科目": "信号与系统 + 通信原理",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487380&idx=1&sn=0af56037d0fab82b0226d97ed61e1ead&chksm=c2f3c5e8f5844cfe7f174af4d1fa9964b8a7da1973b1949c4643335fa17dddcae9657c2317a2#rd"
    },
    {
      "序号": "97",
      "学校": "北方工业大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "871",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487068&idx=1&sn=10f858b0f503a9884e6763ab0204908c&chksm=c2f3c420f5844d36644baf310dc688cc27ab9ae76550f1e6d1fc694857f711b9fd2b4399514f#rd"
    },
    {
      "序号": "98",
      "学校": "华东理工大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "814",
      "考试科目": "信号与系统 + 数字信号处理",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247497209&idx=3&sn=93a26701649ad6c82ed5ee135f01bf4e&chksm=c2f03f85f587b6937b606e21ac054b69967b7c9b62e83295c51b3c66c0c6ebbcaa3b961a604f#rd"
    },
    {
      "序号": "99",
      "学校": "哈尔滨工程大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "810",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247498261&idx=3&sn=fc69d6c1d2515b340e750659db184368&chksm=c2f03069f587b97faa3d95ca576b967155ca2fe624383d3cc218ffc1f76474f663dab4eaf206#rd"
    },
    {
      "序号": "100",
      "学校": "天津工业大学",
      "学校层次": "双一流高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "812",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486089&idx=1&sn=2e6efced2e9fbb4217886e1d708c6c11&chksm=c2f3c0f5f58449e3f36fd76c8e35ab00a4fd91632193fc7f844837d0ec059e577d0aeb090468#rd"
    },
    {
      "序号": "101",
      "学校": "宁夏大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "820",
      "考试科目": "信号与系统 + 电路",
      "难度梯度": "中等偏易",
      "重点勾画链接": null
    },
    {
      "序号": "102",
      "学校": "宁波大学",
      "学校层次": "双一流高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "829",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247485914&idx=1&sn=6d4bff2a32bd1f277920fe177ff85c08&chksm=c2f3c3a6f5844ab021fa40691fc25f5d98ee102a0a1fdd315ebfb4d4bda886b8d3016509f2c2#rd"
    },
    {
      "序号": "103",
      "学校": "安徽大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "830",
      "考试科目": "信号与系统 + 数字电路",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487288&idx=1&sn=3a0f44d6bccdc0b09b57594d29801849&chksm=c2f3c544f5844c5297f388be84db8455533cac85f25aa06ebe9db49a0bb5322612d7700c7d12#rd"
    },
    {
      "序号": "104",
      "学校": "安徽大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "841",
      "考试科目": "信号与系统 + 数字电路",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487288&idx=1&sn=3a0f44d6bccdc0b09b57594d29801849&chksm=c2f3c544f5844c5297f388be84db8455533cac85f25aa06ebe9db49a0bb5322612d7700c7d12#rd"
    },
    {
      "序号": "105",
      "学校": "广东工业大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "809",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487298&idx=1&sn=ae1d5b0c322e57b9625dced2e3eb87e8&chksm=c2f3c53ef5844c28267f55441528fa68b3b80d462d6f450c5fc631fc510a0ae638a5c4c95859#rd"
    },
    {
      "序号": "106",
      "学校": "新疆大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "827",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486351&idx=1&sn=888cd691527f475a34eff7a9fb15b799&chksm=c2f3c1f3f58448e5aa6bb92ef049f295ef0bb0a02c79da1f640528af4dd7cc9d09c20cff7b3a#rd"
    },
    {
      "序号": "107",
      "学校": "杭州电子科技大学",
      "学校层次": "四邮四电",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "843",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487255&idx=1&sn=a2a9a03081827f7733376826b140f574&chksm=c2f3c56bf5844c7d613166ac78a16f307fed2eb3301443680a56b58d31c48a92778761a3c919#rd"
    },
    {
      "序号": "108",
      "学校": "杭州电子科技大学",
      "学校层次": "四邮四电",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "845",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487255&idx=1&sn=a2a9a03081827f7733376826b140f574&chksm=c2f3c56bf5844c7d613166ac78a16f307fed2eb3301443680a56b58d31c48a92778761a3c919#rd"
    },
    {
      "序号": "109",
      "学校": "桂林电子科技大学",
      "学校层次": "四邮四电",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "806",
      "考试科目": "信号与系统 + 电路",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247485951&idx=1&sn=a7f36726669d8d103221270a7bb223e8&chksm=c2f3c383f5844a953e3841f59fc246382ff9e6079c35d74d5d6ed471fb5a396fa04518363d98#rd"
    },
    {
      "序号": "110",
      "学校": "河海大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "863",
      "考试科目": "信号与系统 + 数字信号处理",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486420&idx=1&sn=d1c4d107f41ce9e69c4095f9c4272ba9&chksm=c2f3c1a8f58448be220d2b1171743f8cfc4ca82a25079cd874da265e20e8e8806c2e27959177#rd"
    },
    {
      "序号": "111",
      "学校": "海南大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "838",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487071&idx=1&sn=0697e99a70af66c0307790661c03b8cd&chksm=c2f3c423f5844d35fe280ef9c61b77406083ac12d7dcc0dcffab491a55c86011372f4db993c2#rd"
    },
    {
      "序号": "112",
      "学校": "海南大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "888",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487071&idx=1&sn=0697e99a70af66c0307790661c03b8cd&chksm=c2f3c423f5844d35fe280ef9c61b77406083ac12d7dcc0dcffab491a55c86011372f4db993c2#rd"
    },
    {
      "序号": "113",
      "学校": "深圳大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "802",
      "考试科目": "信号与系统 + 通信原理",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486023&idx=2&sn=d2d86f1c4110a887bb1c495b04452723&chksm=c2f3c03bf584492d512ed85f7cb722a24bec0a155aa79fc4a2b6e7193a348fc74ba60e47a820#rd"
    },
    {
      "序号": "114",
      "学校": "苏州大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "837",
      "考试科目": "信号与系统 + 数字电路",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486633&idx=1&sn=88ebda23769461c5d176ea529d284640&chksm=c2f3c6d5f5844fc3ca4546d204c15e082f1489c2e4f09836a388fa658c000a664f9cfa4b7dea#rd"
    },
    {
      "序号": "115",
      "学校": "苏州大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "839",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486633&idx=1&sn=88ebda23769461c5d176ea529d284640&chksm=c2f3c6d5f5844fc3ca4546d204c15e082f1489c2e4f09836a388fa658c000a664f9cfa4b7dea#rd"
    },
    {
      "序号": "116",
      "学校": "苏州大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "863",
      "考试科目": "信号与系统 + 通信原理",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486633&idx=1&sn=88ebda23769461c5d176ea529d284640&chksm=c2f3c6d5f5844fc3ca4546d204c15e082f1489c2e4f09836a388fa658c000a664f9cfa4b7dea#rd"
    },
    {
      "序号": "117",
      "学校": "西南大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "844",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487271&idx=1&sn=3c71f6ca8d6d40f2c55c83aec622a737&chksm=c2f3c55bf5844c4d6984ef96199105b59ed61b76bfe8f307d7a7c3fa504de0646e34d892d061#rd"
    },
    {
      "序号": "118",
      "学校": "郑州大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "829",
      "考试科目": "信号与系统 + 通信原理",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487018&idx=1&sn=33cc06a9d6924736ae23c6b7ca98e756&chksm=c2f3c456f5844d40ea22ac13eddd5e6b28c7be2d049a49cba01511333160d29f8da60cb6f877#rd"
    },
    {
      "序号": "119",
      "学校": "重庆邮电大学",
      "学校层次": "四邮四电",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "801",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486050&idx=1&sn=bfe210d9b20f189fafc1dd76b481c98b&chksm=c2f3c01ef5844908f67600228e69fdca35db71e30dc35e1fbab5824bfdfac50ed93a712541d9#rd"
    },
    {
      "序号": "120",
      "学校": "长安大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "814",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486514&idx=3&sn=c3ce30270480e0b275155a89d3d9974d&chksm=c2f3c64ef5844f58d8b72455fc501f91e75557e4a72c07d83efd9da7cf806dc80f9bfc476567#rd"
    },
    {
      "序号": "121",
      "学校": "陕西师范大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "831",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486625&idx=2&sn=e0279137f4e4e7235e92e2233a55edd0&chksm=c2f3c6ddf5844fcb2e8a6975cbc28ff598ebc16ecb54e70f6853ad10f9a2a8e57be9d80c6f83#rd"
    },
    {
      "序号": "122",
      "学校": "中国人民公安大学",
      "学校层次": "双一流高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "824",
      "考试科目": "信号与系统 + 通信原理",
      "难度梯度": "中等偏易",
      "重点勾画链接": null
    },
    {
      "序号": "123",
      "学校": "南京信息工程大学",
      "学校层次": "双一流高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "811",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486064&idx=1&sn=fe9f3154d90ef5803f90d72f0136e957&chksm=c2f3c00cf584491a6a58a561486c979a9b81470885a31d5d3d77e6ca5bb605d13194883f7984#rd"
    },
    {
      "序号": "124",
      "学校": "成都理工大学",
      "学校层次": "双一流高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "826",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487478&idx=1&sn=f81efaf3977af1357b1a985fe7cbfce4&chksm=c2f3c58af5844c9c42eed590fbfda1a61a9faf93d8ac34ceb476f438bd65f5088b8599d50950#rd"
    },
    {
      "序号": "125",
      "学校": "湘潭大学",
      "学校层次": "双一流高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "835",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": null
    },
    {
      "序号": "126",
      "学校": "上海理工大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "871",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": null
    },
    {
      "序号": "127",
      "学校": "中北大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "808",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": null
    },
    {
      "序号": "128",
      "学校": "中原工学院",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "819",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": null
    },
    {
      "序号": "129",
      "学校": "中国计量大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "805",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487441&idx=1&sn=f2c840cc55686b5893f99b77a173c264&chksm=c2f3c5adf5844cbb04fa0900569cfde860f6d7c41f1dd75274057be7082c825030549a6c78b2#rd"
    },
    {
      "序号": "130",
      "学校": "云南民族大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "818",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": null
    },
    {
      "序号": "131",
      "学校": "内蒙古师范大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "830",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": null
    },
    {
      "序号": "132",
      "学校": "内蒙古科技大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "808",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247497815&idx=3&sn=11aa9c7e9e7aac59db2d13483f7fb89e&chksm=c2f0322bf587bb3d9bbd277f89d85b9f77f8d4427085e57411aea3dfe8c9a72907c73ee91fc6#rd"
    },
    {
      "序号": "133",
      "学校": "北京信息科技大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "802",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487084&idx=1&sn=107a4854098b85fb67618dd02ac52c52&chksm=c2f3c410f5844d066e73fc7d1179279e829a44c289782f2755cd8ed76f8d9160b94a17861837#rd"
    },
    {
      "序号": "134",
      "学校": "北京信息科技大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "802",
      "考试科目": "信号与系统 + 数字信号处理",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487084&idx=1&sn=107a4854098b85fb67618dd02ac52c52&chksm=c2f3c410f5844d066e73fc7d1179279e829a44c289782f2755cd8ed76f8d9160b94a17861837#rd"
    },
    {
      "序号": "135",
      "学校": "北京电子科技学院",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "831",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": null
    },
    {
      "序号": "136",
      "学校": "华东交通大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "816",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247497310&idx=3&sn=9e545c51a19ad6afb0f53ddaf359df2f&chksm=c2f03c22f587b53487e537cfd5c6bf5b61c07e942ed3a6c6aad287dab37a83a34e98657e14af#rd"
    },
    {
      "序号": "137",
      "学校": "华北理工大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "816",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": null
    },
    {
      "序号": "138",
      "学校": "南京工程学院",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "817",
      "考试科目": "信号与系统 + 通信原理",
      "难度梯度": "中等偏易",
      "重点勾画链接": null
    },
    {
      "序号": "139",
      "学校": "吉林大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "806",
      "考试科目": "信号与系统 + 通信原理",
      "难度梯度": "中等偏易",
      "重点勾画链接": null
    },
    {
      "序号": "140",
      "学校": "哈尔滨理工大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "813",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487044&idx=1&sn=f77283b2adc6668b9bff25544e8f335e&chksm=c2f3c438f5844d2e6635bbcba3a1cdbf02870b63b2191056eac58e45afee4c91a8e3276d169f#rd"
    },
    {
      "序号": "141",
      "学校": "大连交通大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "806",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487146&idx=1&sn=0c44c1eebdfd8c0f9f27a1195fd87d67&chksm=c2f3c4d6f5844dc0c36ab9743e16d957d9fff71517dc76e483f0e73241bed20176a1df605c5c#rd"
    },
    {
      "序号": "142",
      "学校": "天津师范大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "804",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487022&idx=1&sn=17fdae169b05fd57e00c0541900d4c4a&chksm=c2f3c452f5844d448ebe2e328e9b371bf30d9d48a9be8f3750a3f8c7c00d82a3232a0ce9f22e#rd"
    },
    {
      "序号": "143",
      "学校": "太原科技大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "826",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247496976&idx=3&sn=975b628478cec0b1361243a7643175bd&chksm=c2f03f6cf587b67a785eea0c33033cca426529ab329b9019de9efe0f1bafb23dc69de71f5c8b#rd"
    },
    {
      "序号": "144",
      "学校": "安徽农业大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "859",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": null
    },
    {
      "序号": "145",
      "学校": "安徽工程大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "813",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247496679&idx=1&sn=00b796e7d5838a26ff2284fdf19d7daf&chksm=c2f0399bf587b08de63d3829fb7041a8edcd3a72b6773318af650d67b9d534374e973c2cf275#rd"
    },
    {
      "序号": "146",
      "学校": "山东农业大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "809",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": null
    },
    {
      "序号": "147",
      "学校": "山东师范大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "850",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247498767&idx=3&sn=b636195730e1753dbf58acf88f5154f3&chksm=c2f03673f587bf65e4a6f4ba4427fbe2563ff1441f08b5ccad78c1a97223b3d3352b9d719adf#rd"
    },
    {
      "序号": "148",
      "学校": "广西师范大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "846",
      "考试科目": "信号与系统 + 通信原理",
      "难度梯度": "中等偏易",
      "重点勾画链接": null
    },
    {
      "序号": "149",
      "学校": "广西科技大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "809",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": null
    },
    {
      "序号": "150",
      "学校": "扬州大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "875",
      "考试科目": "信号与系统 + 数字电路",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487473&idx=1&sn=20f1ccf681af0bcb94d5fc036c3096a0&chksm=c2f3c58df5844c9b3b43f1016302ec1ff8bb3cacb286375742f398a14ba009bd3eb4333ac884#rd"
    },
    {
      "序号": "151",
      "学校": "杭州师范大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "839",
      "考试科目": "信号与系统 + 数字电路",
      "难度梯度": "中等偏易",
      "重点勾画链接": null
    },
    {
      "序号": "152",
      "学校": "武汉工程大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "834",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247497440&idx=3&sn=9313b2d0bbaf378cd681f2e773585c79&chksm=c2f03c9cf587b58a8a2978cf8a448da31f7597c8ed3a6fe3b16dab3611280b3ea88da3f0f9db#rd"
    },
    {
      "序号": "153",
      "学校": "武汉轻工大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "808",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": null
    },
    {
      "序号": "154",
      "学校": "江西师范大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "887",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": null
    },
    {
      "序号": "155",
      "学校": "沈阳工业大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "807",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487050&idx=1&sn=280a945b01073acf09a46813e4cc25d3&chksm=c2f3c436f5844d2015e70123cf785d04d242a9dd191f178abc7540c174ae6a3c9cfee4082f38#rd"
    },
    {
      "序号": "156",
      "学校": "河北工程大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "807",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": null
    },
    {
      "序号": "157",
      "学校": "济南大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "844",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487041&idx=1&sn=525dc0993dc07ce0bb2cdeeb84eb4cff&chksm=c2f3c43df5844d2bc6ed0425f94ac7f799048c9ad9803a481d66f1bc77ab422f9802001acaf8#rd"
    },
    {
      "序号": "158",
      "学校": "浙江工商大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "822",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": null
    },
    {
      "序号": "159",
      "学校": "海军工程大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "818",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": null
    },
    {
      "序号": "160",
      "学校": "湖北大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "813",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487362&idx=1&sn=db07c92ccd0f95ec4c3dcf52d5f789dc&chksm=c2f3c5fef5844ce824b68c4d7299f57673e097b6461211e92783b065a0d71045bae1ee8939b6#rd"
    },
    {
      "序号": "161",
      "学校": "潍坊学院",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "801",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": null
    },
    {
      "序号": "162",
      "学校": "火箭军工程大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "843",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": null
    },
    {
      "序号": "163",
      "学校": "福建师范大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "834",
      "考试科目": "信号与系统 + 数字电路",
      "难度梯度": "中等偏易",
      "重点勾画链接": null
    },
    {
      "序号": "164",
      "学校": "福建师范大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "835",
      "考试科目": "信号与系统 + 通信原理",
      "难度梯度": "中等偏易",
      "重点勾画链接": null
    },
    {
      "序号": "165",
      "学校": "西北师范大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "844",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487306&idx=1&sn=a4fcb122e16068007b30b37c728a0376&chksm=c2f3c536f5844c206af93f286c9b5607fc51baab6637b99a0d78abdef98c1db369efc240579e#rd"
    },
    {
      "序号": "166",
      "学校": "西南民族大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "824",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": null
    },
    {
      "序号": "167",
      "学校": "西安工业大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "811",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487476&idx=1&sn=72d5eb5bfffa092738aaeadc4760f7d2&chksm=c2f3c588f5844c9e385b0b75be15a01f538c24218de212428840c0c15ba031c3bb5ba05ee96e#rd"
    },
    {
      "序号": "168",
      "学校": "西安工程大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "812",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487201&idx=1&sn=4c21562df1fa16fc1a7782c8a8e09386&chksm=c2f3c49df5844d8b42622af9eb5201eab0b5429a12ad55acea8fe1321bade0f7ffb900f00fbe#rd"
    },
    {
      "序号": "169",
      "学校": "长春工业大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "807",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": null
    },
    {
      "序号": "170",
      "学校": "集美大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "823",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": null
    },
    {
      "序号": "171",
      "学校": "青岛理工大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "812",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247498401&idx=3&sn=ffb0b063cd3a93f724dabe423caa3e30&chksm=c2f030ddf587b9cbc188ee2bdc33ebf334d94c6b284443b36d82b940292e198ab263df107aaf#rd"
    },
    {
      "序号": "172",
      "学校": "青岛科技大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "852",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": null
    },
    {
      "序号": "173",
      "学校": "鲁东大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "855",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": null
    },
    {
      "序号": "174",
      "学校": "黑龙江大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "888",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": null
    },
    {
      "序号": "175",
      "学校": "黑龙江科技大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "816",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": null
    },
    {
      "序号": "176",
      "学校": "三峡大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "837",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247498130&idx=3&sn=ebee22fd57420f008d9a94be3c3ef852&chksm=c2f033eef587baf86becd27d54f4ece1e4ac95e18b48dfb23fdeb6e08cbe065b56385b58cb78#rd"
    },
    {
      "序号": "177",
      "学校": "上海师范大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "874",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": null
    },
    {
      "序号": "178",
      "学校": "上海海事大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "806",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487046&idx=1&sn=7ea468f552f1b75cb337cd1cb3705380&chksm=c2f3c43af5844d2c5a63ce8c11f6829c06e6815a9097deb79c28f9c73384bf7913060c0a3058#rd"
    },
    {
      "序号": "179",
      "学校": "东北电力大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "832",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247497924&idx=3&sn=0db1ea1891cbba8e8473bda7aff1cc80&chksm=c2f032b8f587bbaefd82f64214ced391587a154d94811d6e6844dbbe9ca6011ad5c589d031aa#rd"
    },
    {
      "序号": "180",
      "学校": "东北石油大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "818",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": null
    },
    {
      "序号": "181",
      "学校": "东北石油大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "823",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": null
    },
    {
      "序号": "182",
      "学校": "东华大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "836",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487243&idx=1&sn=f479a8d29665aae26ae25c85c374b69e&chksm=c2f3c577f5844c6102157a61658666d74391f5f36b29c4ca1d866a092aac26ffdfa89c8ad634#rd"
    },
    {
      "序号": "183",
      "学校": "中国民航大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "806",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487490&idx=1&sn=b74b4c31d3529ef10e3c4ec49654198e&chksm=c2f3da7ef5845368f3fefb36aeb8897ef834fead40e71656777b8dc7d05785a4e009c5cf4725#rd"
    },
    {
      "序号": "184",
      "学校": "云南大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "847",
      "考试科目": "信号与系统 + 通信原理",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486038&idx=2&sn=451444bd8632d9842aae8439e2e953fa&chksm=c2f3c02af584493c0ed23849aca6406de5b0bcf37373a8cbe5a828c288b8ca980a631beceaeb#rd"
    },
    {
      "序号": "185",
      "学校": "华中师范大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "838",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487314&idx=1&sn=b40e7bc0d9c9cc8637f0106b4c4bc116&chksm=c2f3c52ef5844c3893d64205fc881e627545049e6ef3721c8b7d005dcc1ec0491bfecc91fba7#rd"
    },
    {
      "序号": "186",
      "学校": "华侨大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "823",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487037&idx=1&sn=9f377a5b2530e1e90d8a32f281eff9e6&chksm=c2f3c441f5844d57bf661a3de26b8b7d67ae64363904c1e8df2454343d1e33d8ee0f5b1ef10f#rd"
    },
    {
      "序号": "187",
      "学校": "南京工业大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "817",
      "考试科目": "信号与系统 + 数字电路",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247500394&idx=1&sn=20c0e152e3f9fc4ac791b48bcd9e6f4f&chksm=c2f00816f5878100482de4152c8c938b97ced17d71151f0558b1cd1a71f611dd646707814e0c#rd"
    },
    {
      "序号": "188",
      "学校": "天津理工大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "822",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487016&idx=1&sn=aa5e91dc2c1c1e7212c4b03e2a98b3fa&chksm=c2f3c454f5844d422e47bfa415f47f2759c9cc54a222e0870ef8a0fab85cefdcdc3bd29d7272#rd"
    },
    {
      "序号": "189",
      "学校": "天津科技大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "822",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487263&idx=1&sn=78d4f3b9226f29bfb1b6b953f12a13f1&chksm=c2f3c563f5844c75620877dddf32f0bc43d973797c302efebd9672b9e045f8a1973ad9ba1ac5#rd"
    },
    {
      "序号": "190",
      "学校": "山东科技大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "822",
      "考试科目": "信号与系统 + 电路",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487089&idx=1&sn=1bdff93aa750f976975d46806dc6aa06&chksm=c2f3c40df5844d1bd7a10929dc4f8b87cfce6906e3c4bd1ebdeea296766057ca626ea084a6e1#rd"
    },
    {
      "序号": "191",
      "学校": "山西大学",
      "学校层次": "双一流高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "841",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487055&idx=1&sn=169060ce8d0a44388cdc697f2dc0e706&chksm=c2f3c433f5844d25da2ff5c135f60fd9050427c24193da66e049c36d7c348a126cc5adcc657f#rd"
    },
    {
      "序号": "192",
      "学校": "广州大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "823",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247496781&idx=3&sn=860150d170f3eae75565ecbfb873991c&chksm=c2f03e31f587b72713088f77a4570b944b7bc69f378d3ba2acdc9863a69932255be6f0b6b165#rd"
    },
    {
      "序号": "193",
      "学校": "广西大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "816",
      "考试科目": "信号与系统 + 数字电路",
      "难度梯度": "中等偏易",
      "重点勾画链接": null
    },
    {
      "序号": "194",
      "学校": "成都信息工程大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "803",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487081&idx=1&sn=e568ffdc9201bd432fe1b45be3ec811e&chksm=c2f3c415f5844d03429a5a141cf268407151b4dafc1be56e626270b9c2805423ce7d117ec3df#rd"
    },
    {
      "序号": "195",
      "学校": "昆明理工大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "817",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486358&idx=1&sn=b28b4b267362511011e9469788cc163f&chksm=c2f3c1eaf58448fc7cf38f02d46ab248ab34801aa327ce2ad8b21e95d5f4fdd331bb892aaf58#rd"
    },
    {
      "序号": "196",
      "学校": "武汉科技大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "813",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487193&idx=1&sn=7fe57bc94729b4daa7717bf58af08437&chksm=c2f3c4a5f5844db3d334b4137662c178f82ef91c79363dd572756a9bc52058c10ed8e660bc96#rd"
    },
    {
      "序号": "197",
      "学校": "江西理工大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "812",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": null
    },
    {
      "序号": "198",
      "学校": "沈阳理工大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "810",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247485810&idx=1&sn=bd53371e0383bbd6cd30cd71c48e8b09&chksm=c2f3c30ef5844a183a1f1ae926efbe78641bff1267af5c4b79b3418b2a8d5fd00ab7b4953d5e#rd"
    },
    {
      "序号": "199",
      "学校": "沈阳航空航天大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "808",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487348&idx=1&sn=c7127eb53f9da157d069cf0acc4002d2&chksm=c2f3c508f5844c1e291d3a7afb38dd364cdcae0d81d0a19d7f057ab904d282afe24579373333#rd"
    },
    {
      "序号": "200",
      "学校": "河北科技大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "822",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487374&idx=1&sn=5243f3da989ea0fc13841c38ea3fe9ea&chksm=c2f3c5f2f5844ce443a0952f9cef2a6367e64c457322292c8aa76a99689328007d3c00c7c944#rd"
    },
    {
      "序号": "201",
      "学校": "河南工业大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "827",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487149&idx=1&sn=a0a88af671426d2fc4a97495e9b506c8&chksm=c2f3c4d1f5844dc77f55d0f76463fbd415d2631331517e34071343dd00123d7df2a7d09a3793#rd"
    },
    {
      "序号": "202",
      "学校": "河南理工大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "865",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247497736&idx=3&sn=ec6d6c584c2ede40286e94cb7434b376&chksm=c2f03274f587bb62c15d37073abd2f01cbd6a052e7fb96715fcdce9aca3583d17758c8ba6709#rd"
    },
    {
      "序号": "203",
      "学校": "浙江工业大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "830",
      "考试科目": "信号与系统 + 通信原理",
      "难度梯度": "中等偏易",
      "重点勾画链接": null
    },
    {
      "序号": "204",
      "学校": "浙江理工大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "847",
      "考试科目": "信号与系统 + 数字电路",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487465&idx=1&sn=9d83f6a3e530ed38f5695124b2c64e96&chksm=c2f3c595f5844c832a1d3b1a567ca435e97e30d45976ed6531db8ed5fc658939e8997b589f7e#rd"
    },
    {
      "序号": "205",
      "学校": "湖北工业大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "823",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247500638&idx=1&sn=a3bce297b1c9fd7ff759b9aa767b76c2&chksm=c2f00922f5878034c2a94f64f6f0ec917eb03327a5007410e250fa0f790100629de25789089c#rd"
    },
    {
      "序号": "206",
      "学校": "燕山大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "22信号",
      "专业课代码": "807",
      "考试科目": "信号与系统 + 通信原理",
      "难度梯度": "中等偏易",
      "重点勾画链接": null
    },
    {
      "序号": "207",
      "学校": "燕山大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "808",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": null
    },
    {
      "序号": "208",
      "学校": "石家庄铁道大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "894",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247486698&idx=1&sn=c500d5ab72777fea849e8ca1cc6304a2&chksm=c2f3c696f5844f8061f500e8b70bf5ea21e1ca1a13217cb35f83c0919e7d600f75fe4597cc73#rd"
    },
    {
      "序号": "209",
      "学校": "西安理工大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "810",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487342&idx=1&sn=4c2e21dea9eb70079fdef0f0854656f8&chksm=c2f3c512f5844c040b3f1e867e7507bd5037e213c3b6fd5a702cb70f3d4557a8a3433ec1bf93#rd"
    },
    {
      "序号": "210",
      "学校": "西安理工大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "845",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487342&idx=1&sn=4c2e21dea9eb70079fdef0f0854656f8&chksm=c2f3c512f5844c040b3f1e867e7507bd5037e213c3b6fd5a702cb70f3d4557a8a3433ec1bf93#rd"
    },
    {
      "序号": "211",
      "学校": "西安石油大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "810",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247496738&idx=3&sn=9cda6cf19a8ac5ae2d25a2779365f5cb&chksm=c2f03e5ef587b7486914be7387f116f3d02210b4b42b9009e701cf4911c46bad79dc455cf0c6#rd"
    },
    {
      "序号": "212",
      "学校": "贵州大学",
      "学校层次": "211高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "832",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": null
    },
    {
      "序号": "213",
      "学校": "长春理工大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "808",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247485834&idx=1&sn=2438ed9ad0a2ce3bce57867817bd233c&chksm=c2f3c3f6f5844ae044f6d22bb7eb5f0d44a6e69e1d4608a68fdbae7775e3c053067f743ad8be#rd"
    },
    {
      "序号": "214",
      "学校": "长沙理工大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "822",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": null
    },
    {
      "序号": "215",
      "学校": "长沙理工大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "832",
      "考试科目": "信号与系统",
      "难度梯度": "中等偏易",
      "重点勾画链接": null
    },
    {
      "序号": "216",
      "学校": "中南民族大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "833",
      "考试科目": "信号与系统",
      "难度梯度": "高分友好",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487166&idx=1&sn=a72c0621b1bd45379b609cd7fb4aa7af&chksm=c2f3c4c2f5844dd42dbaa1b16f79eebc1168ee85883d0127bc06a1767632a00beba219ebcc65#rd"
    },
    {
      "序号": "217",
      "学校": "中南民族大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "856",
      "考试科目": "信号与系统",
      "难度梯度": "高分友好",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247487166&idx=1&sn=a72c0621b1bd45379b609cd7fb4aa7af&chksm=c2f3c4c2f5844dd42dbaa1b16f79eebc1168ee85883d0127bc06a1767632a00beba219ebcc65#rd"
    },
    {
      "序号": "218",
      "学校": "内蒙古工业大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "809",
      "考试科目": "信号与系统",
      "难度梯度": "高分友好",
      "重点勾画链接": null
    },
    {
      "序号": "219",
      "学校": "吉首大学",
      "学校层次": "普通高校",
      "专业课类别": "信号",
      "细分类别": "11信号",
      "专业课代码": "826",
      "考试科目": "信号与系统",
      "难度梯度": "高分友好",
      "重点勾画链接": "http://mp.weixin.qq.com/s?__biz=MzkzOTMzNTQ0Mw==&mid=2247498559&idx=3&sn=48ba893080d80340515a9a304041d3d4&chksm=c2f03143f587b85576556b7c36750cb4c52c07544feed20d4530502cfcc05761193f616bfc85#rd"
    }
  ]
};
