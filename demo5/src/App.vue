<template>
    <div id="app">
        <div class="box" @click="tap">{{title}}</div>
    </div>
</template>
<script>
export default {
    name: 'app',
    data(){
        return {
            title: 'app实例'
        }
    },
    mounted(){
        console.log('mounted')
    },
    methods: {
        tap(){
            this.title = this.title.split('').reverse().join('')
        }
    }
}
</script>

<style>
#app{
    font-size: 16px;
    background: #ccc;
}
</style>
