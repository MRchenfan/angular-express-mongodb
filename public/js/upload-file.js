$(function() {

	var startBtn = 'change-avatar-btn';
	var container = $('.avatar-set')[0];
	var maxFileSize = '1gb';
	var url = 'http://oss.aliyuncs.com';
	var ossParams = null;
	var serverUrl = 'http://112.74.51.76:8888/video/prepare?callbackUrl=http://112.74.51.76:8888/video/callback';


	var uploader = new plupload.Uploader({

		runtimes: 'html5,flash,silverlight,html4',
		browse_button: startBtn, // you can pass in id...
		container: container, // ... or DOM Element itself
		max_file_size: maxFileSize,

		// Fake server response here 
		// url : '../upload.php',
		url: url,

		flash_swf_url: 'lib/plupload-2.1.2/js/Moxie.swf',
		silverlight_xap_url: 'lib/plupload-2.1.2/js/Moxie.xap',
		filters: [{
			title: "Image files",
			extensions: "jpg,gif,png"
		}, {
			title: "Zip files",
			extensions: "zip"
		}, {
			title: 'Video files',
			extensions: 'mp4,avi'
		}],

		init: {
			PostInit: function() {
				document.getElementById('ossfile').innerHTML = '';
				$('#start-upload-btn').addClass('disabled');
			},

			// 当获取到了oss参数，那么按钮激活，然后才会添加文件
			FilesAdded: function(up, files) {
				$('.upload-modal').modal('show');

				plupload.each(files, function(file) {
					document.getElementById('ossfile').innerHTML += '<div id="' + file.id + '">' + file.name + ' (' + plupload.formatSize(file.size) + ')<b></b>' + '<div class="progress"><div class="progress-bar" style="width: 0%"></div></div>' + '</div>';
				});

				_getOssParams();
			},

			BeforeUpload: function(up, file) {

				_setUploadParams(up, file.name);
			},

			UploadProgress: function(up, file) {

				var d = document.getElementById(file.id);
				d.getElementsByTagName('b')[0].innerHTML = '<span>' + file.percent + "%</span>";
				var prog = d.getElementsByTagName('div')[0];
				var progBar = prog.getElementsByTagName('div')[0]
				progBar.style.width = file.percent + '%';
				progBar.setAttribute('aria-valuenow', file.percent);
			},

			FileUploaded: function(up, file, info) {
				if (info.status == 200) {

					document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = 'upload to oss success, object name:' + ossParams.dir + file.name + ' 回调服务器返回的内容是:' + info.response;
				} else if (info.status == 203) {

					document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = '上传到OSS成功，但是oss访问用户设置的上传回调服务器失败，失败原因是:' + info.response;
				} else {

					document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = info.response;
				}
			},

			Error: function(up, err) {
				if (err.code == -600) {

					console.log("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小");
				} else if (err.code == -601) {

					console.log("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型");
				} else if (err.code == -602) {

					console.log("\n这个文件已经上传过一遍了");
				} else {

					console.log("\nError xml:" + err.response);
				}
			}
		}
	});

	document.getElementById('start-upload-btn').onclick = function() {

		uploader.start();
	};

	function _getOssParams() {

		$.get(serverUrl, function(res) {

			if (!res) return false;
			ossParams = res;
			// enable the btn
			$('#start-upload-btn').removeClass('disabled');
		});
	}

	function _setUploadParams(uploader, filename) {

		var params = {
			'key': ossParams.dir + filename,
			'policy': ossParams.policy,
			'OSSAccessKeyId': ossParams.id,
			'success_action_status': '200', //让服务端返回200,不然，默认会返回204
			'callback': ossParams.callback,
			'signature': ossParams.signature
		};

		uploader.setOption({
			'url': ossParams.host,
			'multipart_params': params
		});
	}

	uploader.init();
});