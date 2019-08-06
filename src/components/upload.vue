<template>
  <div class="imgUpload">
    <ul id="filelist"></ul>
    <br />

    <div id="container">
        <a id="browse" href="javascript:;">
          <el-button type="primary" icon="el-icon-search">选择模板</el-button>
           </a>
        <a id="start-upload" href="javascript:;">
          <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
          </a>
    </div>

    <br />
    <pre id="console"></pre>
  </div>
</template>

<script>
import plupload from "plupload";

export default {
  created() {},
  mounted() {
    this.initPlUploader();
  },
  methods: {
    /**
     * 初始化上传插件
     */
    initPlUploader() {
      var uploader = new plupload.Uploader({
        browse_button: 'browse', // this can be an id of a DOM element or the DOM element itself
        url: '/upload' //上传地址
    });

    uploader.init();

    uploader.bind('FilesAdded', function(up, files) {
        var html = '';
        plupload.each(files, function(file) {
            html += '<li id="' + file.id + '">' + file.name + ' (' + plupload.formatSize(file.size) + ') <b></b></li>';
        });
        document.getElementById('filelist').innerHTML += html;
    });

    uploader.bind('UploadProgress', function(up, file) {
        document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = '<span>' + file.percent + "%</span>";
    });

    uploader.bind('Error', function(up, err) {
        document.getElementById('console').innerHTML += "\nError #" + err.code + ": " + err.message;
    });

    document.getElementById('start-upload').onclick = function() {
        uploader.start();
    };
    }
  }
};
</script>
