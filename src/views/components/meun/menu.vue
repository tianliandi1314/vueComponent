<template>
    <div class="menu">
        <div class="example">ssssss</div>

        <div class="jg">------------</div>
        <div class="example2">ssssss</div>
        <div class="jg">------------</div>
        <div class="test2">ssssss</div>
        <div class="jg">------------</div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <rect rx="50" ry="50" width="100%" height="100%" stroke-width="1" stroke-linecap="round" stroke="red" fill="#ddd"/>
        </svg>
    </div >
</template>

<script>
    export default {
        props: {
        },
    };
</script>
<style lang="postcss">
    svg{
        width: 100px;
        height: 100px;
        box-sizing: border-box;
    }
    .jg{
        margin: 10px auto;
    }
    @svg 1px-border {
        outline: none;
        overflow: visible;
        width:100%;
        height:100%;
        @rect {
            fill: transparent;
            width: 100%;
            height: 100%;
            stroke-width: 1;
            rx:5;
            ry:5;
            stroke: var(--color, black);
        }
    }
    .example {
        outline: none;
        box-sizing: content-box;
        margin: auto;
        width: 100px;
        height: 100px;
        background: svg(1px-border param(--color red)) no-repeat ;
        border-radius: 5px;
        border: 1px solid #ddd;
    }
    .example2{
        margin: auto;
        width: 200px;
        height: 100px;
        border-radius: 10px;
        border:1px solid #ddd;
        box-sizing: border-box;
    }
</style>
