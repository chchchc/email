<template>
    <div style="width:400px;height:300px; ">
            <pdf ref="pdf" src="../../static/first.pdf"></pdf>
      </div>
    </template>
    <script>
    
    import pdf from 'vue-pdf'
    export default{
    components: {pdf},
}
    </script>
   
   